import { computed, ref, watch } from 'vue'
import { uiContract } from '../contracts/uiContract'
import { FieldComponent } from '../types/contract'
import type {
  ContractField,
  ContractScreen,
  GeneratedConfig,
  PrimitiveValue,
  VisibilityCondition,
} from '../types/contract'

type FormStateValue = PrimitiveValue | PrimitiveValue[]
type FormState = Record<string, FormStateValue>

const formState = ref<FormState>(createInitialState())
const currentScreenIndex = ref(0)
const isCopied = ref(false)

function collectFields(): ContractField[] {
  return uiContract.screens.flatMap((screen) => screen.fields ?? [])
}

function cloneDefaultValue(value: FormStateValue): FormStateValue {
  return Array.isArray(value) ? [...value] : value
}

function createInitialState(): FormState {
  return collectFields().reduce<FormState>((accumulator, field) => {
    if (field.component === FieldComponent.InfoBanner) return accumulator
    accumulator[field.id] = cloneDefaultValue(field.default as FormStateValue)
    return accumulator
  }, {})
}

function evaluateVisibility(condition: VisibilityCondition): boolean {
  if ('field' in condition) {
    const currentValue = formState.value[condition.field]

    return condition.operator === 'equals'
      ? currentValue === condition.value
      : currentValue !== condition.value
  }

  if ('all_of' in condition) {
    return condition.all_of.every(evaluateVisibility)
  }

  return condition.any_of.some(evaluateVisibility)
}

function getVisibleFields(screen: ContractScreen): ContractField[] {
  return (screen.fields ?? []).filter((field) =>
    field.visibility ? evaluateVisibility(field.visibility) : true,
  )
}

function isScreenVisible(screen: ContractScreen): boolean {
  if (screen.type !== 'form') {
    return true
  }

  return getVisibleFields(screen).length > 0
}

function setFieldValue(fieldId: string, value: FormStateValue): void {
  formState.value[fieldId] = Array.isArray(value) ? [...value] : value
}

function toggleCheckboxValue(
  fieldId: string,
  optionValue: PrimitiveValue,
): void {
  const currentValue = formState.value[fieldId]
  const nextValue = Array.isArray(currentValue) ? [...currentValue] : []
  const existingIndex = nextValue.findIndex((item) => item === optionValue)

  if (existingIndex >= 0) {
    nextValue.splice(existingIndex, 1)
  } else {
    nextValue.push(optionValue)
  }

  setFieldValue(fieldId, nextValue)
}

function nextScreen(): void {
  if (currentScreenIndex.value < visibleScreens.value.length - 1) {
    currentScreenIndex.value += 1
  }
}

function previousScreen(): void {
  if (currentScreenIndex.value > 0) {
    currentScreenIndex.value -= 1
  }
}

function goToScreen(index: number): void {
  if (index >= 0 && index < visibleScreens.value.length) {
    currentScreenIndex.value = index
  }
}

function restart(): void {
  formState.value = createInitialState()
  currentScreenIndex.value = 0
  isCopied.value = false
}

function toBoolean(value: FormStateValue, fallback = false): boolean {
  return typeof value === 'boolean' ? value : fallback
}

function toString(value: FormStateValue, fallback = ''): string {
  return typeof value === 'string' ? value : fallback
}

function toNumber(value: FormStateValue, fallback = 0): number {
  return typeof value === 'number' ? value : fallback
}

const generatedConfig = computed<GeneratedConfig>(() => {
  const pullRequestsEnabled = toBoolean(
    formState.value['pull_requests.enabled'],
    true,
  )
  const reviewRequired = pullRequestsEnabled
    ? toBoolean(formState.value['pull_requests.review.required'], true)
    : false
  const reviewers = reviewRequired
    ? toString(formState.value['pull_requests.review.reviewers'], 'human')
    : 'human'
  const reviewPolicyActive = pullRequestsEnabled && reviewRequired
  const aiReviewerActive =
    pullRequestsEnabled && (reviewers === 'ai' || reviewers === 'both')

  return {
    config_version: 1,
    architecture: {
      use_fsd: toBoolean(formState.value['architecture.use_fsd'], true),
    },
    language: {
      documentation: toString(formState.value['language.repository'], 'en'),
      issues: toString(formState.value['language.repository'], 'en'),
      pull_requests: toString(formState.value['language.workflow'], 'en'),
      comments: toString(formState.value['language.workflow'], 'en'),
      commits: toString(formState.value['language.workflow'], 'en'),
      labels: 'en',
      agent_instructions: 'en',
    },
    workflow: {
      execution_mode: toString(
        formState.value['workflow.execution_mode'],
        'autonomous',
      ),
      issue_tracking: 'github_issues',
      project_tracking: 'github_project',
    },
    pull_requests: {
      enabled: pullRequestsEnabled,
      creation_mode: toString(
        formState.value['pull_requests.creation_mode'],
        'for_significant_tasks',
      ),
      review: {
        required: reviewRequired,
        reviewers,
        agent_must_read_comments: reviewPolicyActive
          ? toBoolean(
              formState.value['pull_requests.review.agent_must_read_comments'],
              true,
            )
          : false,
        agent_must_reply_to_comments: reviewPolicyActive
          ? toBoolean(
              formState.value['pull_requests.review.agent_must_reply_to_comments'],
              true,
            )
          : false,
        agent_must_apply_accepted_feedback: reviewPolicyActive
          ? toBoolean(
              formState.value[
                'pull_requests.review.agent_must_apply_accepted_feedback'
              ],
              true,
            )
          : false,
      },
      merge: {
        squash_commits: pullRequestsEnabled
          ? toBoolean(
              formState.value['pull_requests.merge.squash_commits'],
              true,
            )
          : false,
        integration_method: pullRequestsEnabled
          ? toString(
              formState.value['pull_requests.merge.integration_method'],
              'merge',
            )
          : 'merge',
        min_approvals: reviewPolicyActive
          ? toNumber(formState.value['pull_requests.merge.min_approvals'], 1)
          : 0,
        require_green_checks: pullRequestsEnabled
          ? toBoolean(
              formState.value['pull_requests.merge.require_green_checks'],
              true,
            )
          : false,
        allow_agent_self_merge: aiReviewerActive
          ? toBoolean(
              formState.value['pull_requests.merge.allow_agent_self_merge'],
              false,
            )
          : false,
      },
    },
    project_map: {
      enabled: toBoolean(formState.value['project_map.enabled'], true),
    },
    github: {
      required_token_scopes: ['repo', 'project'],
      recommended_token_scopes: ['read:org', 'workflow'],
    },
  }
})

const visibleScreens = computed(() =>
  uiContract.screens.filter((screen) => isScreenVisible(screen)),
)
const currentScreen = computed(
  () => visibleScreens.value[currentScreenIndex.value],
)
const previewJson = computed(() =>
  JSON.stringify(generatedConfig.value, null, 2),
)
const totalScreens = computed(() => visibleScreens.value.length)
const isFirstScreen = computed(() => currentScreenIndex.value === 0)

async function copyJson(): Promise<void> {
  await navigator.clipboard.writeText(previewJson.value)
  isCopied.value = true
  window.setTimeout(() => {
    isCopied.value = false
  }, 1800)
}

function downloadJson(): void {
  const blob = new Blob([previewJson.value], {
    type: 'application/json;charset=utf-8',
  })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = uiContract.output.target_file_name
  anchor.click()
  URL.revokeObjectURL(url)
}

watch(currentScreenIndex, () => {
  isCopied.value = false
})

watch(visibleScreens, (screens) => {
  if (currentScreenIndex.value > screens.length - 1) {
    currentScreenIndex.value = Math.max(0, screens.length - 1)
  }
})

export function useConfigurator() {
  return {
    contract: uiContract,
    currentScreen,
    currentScreenIndex,
    formState,
    generatedConfig,
    getVisibleFields,
    goToScreen,
    isCopied,
    isFirstScreen,
    nextScreen,
    previousScreen,
    previewJson,
    restart,
    setFieldValue,
    toggleCheckboxValue,
    totalScreens,
    visibleScreens,
    copyJson,
    downloadJson,
  }
}
