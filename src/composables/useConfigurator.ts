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
  if (currentScreenIndex.value < uiContract.screens.length - 1) {
    currentScreenIndex.value += 1
  }
}

function previousScreen(): void {
  if (currentScreenIndex.value > 0) {
    currentScreenIndex.value -= 1
  }
}

function goToScreen(index: number): void {
  if (index >= 0 && index < uiContract.screens.length) {
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

const generatedConfig = computed<GeneratedConfig>(() => ({
  config_version: 1,
  language: {
    documentation: toString(formState.value['language.repository'], 'en'),
    issues: toString(formState.value['language.repository'], 'en'),
    pull_requests: toString(formState.value['language.workflow'], 'en'),
    comments: toString(formState.value['language.workflow'], 'en'),
    commits: toString(formState.value['language.workflow'], 'en'),
    labels: 'en',
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
    enabled: toBoolean(formState.value['pull_requests.enabled'], true),
    creation_mode: toString(
      formState.value['pull_requests.creation_mode'],
      'for_significant_tasks',
    ),
    review: {
      required: toBoolean(
        formState.value['pull_requests.review.required'],
        true,
      ),
      reviewers: toString(
        formState.value['pull_requests.review.reviewers'],
        'human',
      ),
    },
    merge: {
      squash_commits: toBoolean(
        formState.value['pull_requests.merge.squash_commits'],
        true,
      ),
      integration_method: toString(
        formState.value['pull_requests.merge.integration_method'],
        'merge',
      ),
      require_green_checks: toBoolean(
        formState.value['pull_requests.merge.require_green_checks'],
        true,
      ),
      allow_agent_self_merge: toBoolean(
        formState.value['pull_requests.merge.allow_agent_self_merge'],
        false,
      ),
      agent_configure_branch_protection: toBoolean(
        formState.value[
          'pull_requests.merge.agent_configure_branch_protection'
        ],
        false,
      ),
    },
  },
  project_map: {
    enabled: toBoolean(formState.value['project_map.enabled'], true),
  },
}))

const currentScreen = computed(
  () => uiContract.screens[currentScreenIndex.value],
)
const previewJson = computed(() =>
  JSON.stringify(generatedConfig.value, null, 2),
)
const totalScreens = computed(() => uiContract.screens.length)
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
    copyJson,
    downloadJson,
  }
}
