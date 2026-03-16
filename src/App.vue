<template>
  <v-app class="app-root">
    <div class="app-shell">
      <aside class="sidebar">
        <div class="sidebar__brand">
          <div>
            <p class="sidebar__eyebrow">{{ t('chrome.eyebrow') }}</p>
            <p class="sidebar__product">{{ t('chrome.badge') }}</p>
          </div>
        </div>

        <StepProgress
          :current-step="currentScreenIndex"
          :screens="contract.screens"
          :translate-screen="(screen) => screenText(screen, 'title')"
          @select="goToScreen"
        />

        <div class="sidebar__footer">
          <ThemeSwitcher />
          <LocaleSwitcher />
        </div>
      </aside>

      <main class="workspace">
        <div
          class="screen-frame"
          :class="{
            'screen-frame--welcome': currentScreen.type === 'intro',
            'screen-frame--result': currentScreen.type === 'result',
          }"
        >
          <template v-if="currentScreen.type === 'intro'">
            <section class="welcome-card">
              <div class="welcome-card__icon" aria-hidden="true">
                <Settings />
              </div>
              <h2 class="screen-title">{{ screenText(currentScreen, 'title') }}</h2>
              <p class="screen-description">{{ screenText(currentScreen, 'description') }}</p>

              <v-btn class="button button--primary" color="primary" size="large" @click="primaryAction">
                {{ screenText(currentScreen, 'primary_action') }}
              </v-btn>
            </section>
          </template>

          <template v-else-if="currentScreen.type === 'result'">
            <section class="result-layout">
              <div class="result-hero">
                <div class="result-hero__icon" aria-hidden="true">
                  <CheckCircle2 />
                </div>
                <h2 class="screen-title">{{ t('chrome.resultTitle') }}</h2>
                <p class="screen-description">{{ t('chrome.resultText') }}</p>
              </div>

              <ConfigPreview
                :preview-json="previewJson"
                :copied="isCopied"
                :title="t('chrome.livePreview')"
                :hint="t('chrome.previewHint')"
                :copy-label="t('chrome.copy')"
                :copied-label="t('chrome.copied')"
                :download-label="t('chrome.download')"
                :file-name="contract.output.target_file_name"
                @copy="copyJson"
                @download="downloadJson"
              />

              <div class="result-actions">
                <v-btn class="button button--ghost" variant="outlined" @click="primaryAction">
                  {{ t('chrome.restart') }}
                </v-btn>
              </div>
            </section>
          </template>

          <template v-else>
            <section class="content-shell">
              <header class="screen-header">
                <p class="screen-step">
                  {{ t('chrome.stepLabel', { current: currentScreenIndex + 1, total: totalScreens }) }}
                </p>
                <h2 class="screen-title">{{ screenText(currentScreen, 'title') }}</h2>
                <p class="screen-description">{{ screenText(currentScreen, 'description') }}</p>
              </header>

              <section class="content-card">
                <div v-if="currentScreen.type === 'form'" class="field-stack">
                  <StepField
                    v-for="field in visibleFields"
                    :key="field.id"
                    :field="field"
                    :model-value="formState[field.id]"
                    :translate-field-label="fieldLabel"
                    :translate-field-help="fieldHelp"
                    :translate-option-label="optionLabel"
                    :translate-option-description="optionDescription"
                    @toggle-value="toggleCheckboxValue(field.id, $event)"
                    @update-value="setFieldValue(field.id, $event)"
                  />
                </div>

                <div v-else-if="currentScreen.type === 'summary'" class="info-grid">
                  <article
                    v-for="block in translatedGithubBlocks"
                    :key="block.title"
                    class="info-card"
                  >
                    <h3>{{ block.title }}</h3>
                    <ul>
                      <li v-for="item in block.items" :key="item">{{ item }}</li>
                    </ul>
                  </article>
                </div>

                <div v-else-if="currentScreen.type === 'review'" class="summary-grid">
                  <article v-for="card in summaryCards" :key="card.title" class="summary-card">
                    <h3>{{ card.title }}</h3>
                    <ul>
                      <li v-for="item in card.items" :key="item">{{ item }}</li>
                    </ul>
                  </article>
                </div>
              </section>

              <footer class="panel-actions">
                <v-btn
                  v-if="!isFirstScreen"
                  class="button button--ghost"
                  prepend-icon="$previous"
                  variant="outlined"
                  @click="previousScreen"
                >
                  {{ t('chrome.back') }}
                </v-btn>
                <div v-else class="panel-actions__spacer" />

                <v-btn class="button button--primary" color="primary" append-icon="$next" @click="primaryAction">
                  {{ currentScreen.type === 'review' ? t('chrome.generate') : t('chrome.next') }}
                </v-btn>
              </footer>
            </section>
          </template>
        </div>
      </main>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { CheckCircle2, Settings } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import ConfigPreview from './components/ConfigPreview.vue'
import LocaleSwitcher from './components/LocaleSwitcher.vue'
import StepField from './components/StepField.vue'
import StepProgress from './components/StepProgress.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import { useConfigurator } from './composables/useConfigurator'
import type { ContractField, ContractOption, ContractScreen, PrimitiveValue } from './types/contract'

const { t, te, tm } = useI18n()
const {
  contract,
  currentScreen,
  currentScreenIndex,
  formState,
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
} = useConfigurator()

function i18nKeySegment(key: string) {
  return /^[A-Za-z_]\w*$/.test(key) ? `.${key}` : `['${key}']`
}

function screenText(screen: ContractScreen, key: 'title' | 'description' | 'primary_action') {
  const translationKey = `contract.screens.${screen.id}.${key}`
  const fallback = screen[key] ?? ''
  return te(translationKey) ? t(translationKey) : fallback
}

function fieldLabel(field: ContractField) {
  const translationKey = `contract.fields${i18nKeySegment(field.id)}.label`
  return te(translationKey) ? t(translationKey) : field.label
}

function fieldHelp(field: ContractField) {
  const translationKey = `contract.fields${i18nKeySegment(field.id)}.help_text`
  return te(translationKey) ? t(translationKey) : field.help_text
}

function optionLabel(fieldId: string, option: ContractOption) {
  const fieldSegment = i18nKeySegment(fieldId)
  const valueSegment = i18nKeySegment(String(option.value))
  const translationKey = `contract.options${fieldSegment}${valueSegment}.label`
  const simpleTranslationKey = `contract.options${fieldSegment}${valueSegment}`

  if (te(translationKey)) {
    return t(translationKey)
  }

  if (te(simpleTranslationKey)) {
    return t(simpleTranslationKey)
  }

  return option.label
}

function optionDescription(fieldId: string, option: ContractOption) {
  const translationKey = `contract.options${i18nKeySegment(fieldId)}${i18nKeySegment(String(option.value))}.description`
  return te(translationKey) ? t(translationKey) : option.description
}

function formatBoolean(value: boolean) {
  return value ? t('common.yes') : t('common.no')
}

function formatOptionValue(fieldId: string, value: PrimitiveValue) {
  const field = contract.screens.flatMap((screen) => screen.fields ?? []).find((entry) => entry.id === fieldId)
  const option = field?.options?.find((entry) => entry.value === value)
  return option ? optionLabel(fieldId, option) : String(value)
}

function formatOptionList(fieldId: string, values: PrimitiveValue[]) {
  return values.length > 0
    ? values.map((value) => formatOptionValue(fieldId, value)).join(', ')
    : t('common.none')
}

const visibleFields = computed(() => getVisibleFields(currentScreen.value))
const translatedGithubBlocks = computed(() => [
  {
    title: t('chrome.githubBlocks.requiredScopes'),
    items: tm('chrome.githubBlocks.scopes') as string[],
  },
  {
    title: t('chrome.githubBlocks.recommendedScopes'),
    items: tm('chrome.githubBlocks.recommended') as string[],
  },
  {
    title: t('chrome.githubBlocks.notes'),
    items: tm('chrome.githubBlocks.notesList') as string[],
  },
])
const pullRequestsEnabled = computed(() => Boolean(formState.value['pull_requests.enabled']))
const reviewRequired = computed(() => Boolean(formState.value['pull_requests.review.required']))
const ragEnabled = computed(() => String(formState.value['rag.mode']) !== 'off')
const executionModeUsesCheckpoints = computed(() =>
  ['autonomous', 'hybrid'].includes(String(formState.value['workflow.execution_mode'])),
)

const summaryCards = computed(() => [
  {
    title: t('summary.language'),
    items: [
      `${t('summary.fields.documentation')}: ${formatOptionValue('language.documentation', String(formState.value['language.documentation']))}`,
      `${t('summary.fields.issues')}: ${formatOptionValue('language.issues', String(formState.value['language.issues']))}`,
      `${t('summary.fields.pullRequests')}: ${formatOptionValue('language.pull_requests', String(formState.value['language.pull_requests']))}`,
      `${t('summary.fields.comments')}: ${formatOptionValue('language.comments', String(formState.value['language.comments']))}`,
    ],
  },
  {
    title: t('summary.execution'),
    items: [
      `${t('summary.fields.mode')}: ${formatOptionValue('workflow.execution_mode', String(formState.value['workflow.execution_mode']))}`,
      ...(executionModeUsesCheckpoints.value
        ? [
            `${t('summary.fields.checkpoints')}: ${formatOptionList(
              'workflow.human_checkpoints',
              Array.isArray(formState.value['workflow.human_checkpoints'])
                ? formState.value['workflow.human_checkpoints']
                : [],
            )}`,
          ]
        : []),
    ],
  },
  {
    title: t('summary.prFlow'),
    items: [
      `${t('summary.fields.enabled')}: ${formatBoolean(Boolean(formState.value['pull_requests.enabled']))}`,
      ...(pullRequestsEnabled.value
        ? [
            `${t('summary.fields.creation')}: ${formatOptionValue('pull_requests.creation_mode', String(formState.value['pull_requests.creation_mode']))}`,
            `${t('summary.fields.draft')}: ${formatBoolean(Boolean(formState.value['pull_requests.draft_first']))}`,
          ]
        : []),
    ],
  },
  {
    title: t('summary.review'),
    items: [
      ...(pullRequestsEnabled.value
        ? [
            `${t('summary.fields.required')}: ${formatBoolean(Boolean(formState.value['pull_requests.review.required']))}`,
            ...(reviewRequired.value
              ? [
                  `${t('summary.fields.reviewers')}: ${formatOptionValue('pull_requests.review.reviewers', String(formState.value['pull_requests.review.reviewers']))}`,
                  `${t('summary.fields.approvals')}: ${String(formState.value['pull_requests.merge.min_approvals'])}`,
                ]
              : []),
          ]
        : [`${t('summary.fields.required')}: ${t('common.notAllowed')}`]),
    ],
  },
  {
    title: t('summary.artifacts'),
    items: [
      `${t('summary.fields.docs')}: ${formatBoolean(Boolean(formState.value['artifacts.persist_docs_to_repo']))}`,
      `${t('summary.fields.agent')}: ${formatBoolean(Boolean(formState.value['artifacts.persist_agent_contract_to_repo']))}`,
      `${t('summary.fields.temp')}: ${formatBoolean(Boolean(formState.value['artifacts.persist_temporary_workfiles_to_repo']))}`,
    ],
  },
  {
    title: t('summary.rag'),
    items: [
      `${t('summary.fields.mode')}: ${formatOptionValue('rag.mode', String(formState.value['rag.mode']))}`,
      ...(ragEnabled.value
        ? [`${t('summary.fields.vectorDb')}: ${formatBoolean(Boolean(formState.value['rag.allow_vector_db']))}`]
        : []),
    ],
  },
])

function primaryAction() {
  if (currentScreen.value.type === 'result') {
    restart()
    return
  }

  nextScreen()
}
</script>

<style scoped lang="scss">
.app-root,
:deep(.v-application),
:deep(.v-application__wrap) {
  height: 100vh;
}

.app-shell {
  height: 100vh;
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  overflow: hidden;
}

.sidebar {
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 28px 20px;
  background: var(--sidebar);
  border-right: 1px solid var(--border);

  &__brand {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 8px;
  }

  &__eyebrow {
    margin: 0;
    color: var(--text-muted);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  &__product {
    margin: 2px 0 0;
    font-size: 0.95rem;
    font-weight: 600;
  }

  &__footer {
    margin-top: auto;
    padding: 0 8px;
    display: grid;
    gap: 12px;
  }
}

.workspace {
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
  padding: 40px 32px;
}

.screen-frame {
  width: 100%;
  max-width: 880px;
  margin: 0 auto;

  &--welcome,
  &--result {
    max-width: 960px;
    min-height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.welcome-card,
.result-layout {
  width: 100%;
}

.welcome-card {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 999px;
    background: var(--primary-soft);
    color: var(--primary);
    font-weight: 800;
    letter-spacing: -0.04em;

    :deep(svg) {
      width: 28px;
      height: 28px;
    }
  }
}

.screen-title {
  margin: 0;
  font-size: clamp(2rem, 3.8vw, 2.8rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.screen-description {
  margin: 12px 0 0;
  color: var(--text-muted);
  font-size: 1rem;
}

.welcome-card .button--primary {
  margin-top: 28px;
}

.content-card,
.info-card,
.summary-card {
  background: var(--surface);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.content-shell {
  display: grid;
  gap: 24px;
}

.screen-header {
  display: grid;
  gap: 8px;
}

.screen-step {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.content-card {
  padding: 28px;
}

.field-stack,
.info-grid,
.summary-grid {
  display: grid;
  gap: 16px;
}

.info-grid,
.summary-grid {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.info-card,
.summary-card {
  padding: 20px;

  h3 {
    margin: 0 0 10px;
    font-size: 1rem;
    font-weight: 600;
  }

  ul {
    display: grid;
    gap: 10px;
    margin: 18px 0 0;
    padding-left: 18px;
    color: var(--text-muted);
  }
}

.button {
  min-height: 42px;
  border-radius: 10px;
  padding: 0 16px;
  font-weight: 600;
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    color 160ms ease,
    transform 160ms ease;

  &:hover {
    transform: translateY(-1px);
  }

  &--ghost {
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--text);
  }

  &--primary {
    border: 1px solid transparent;
    background: var(--primary);
    color: #fff;
  }
}

.panel-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  &__spacer {
    width: 1px;
    min-height: 1px;
  }
}

.result-layout {
  display: grid;
  gap: 24px;
}

.result-hero {
  text-align: center;

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    margin: 0 auto 18px;
    border-radius: 999px;
    background: var(--primary-soft);
    color: var(--primary);

    svg {
      width: 28px;
      height: 28px;
    }
  }
}

.result-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

@media (max-width: 1100px) {
  .app-shell {
    grid-template-columns: 1fr;
    height: auto;
    overflow: visible;
  }

  .sidebar {
    border-right: 0;
    border-bottom: 1px solid var(--border);
  }

  .workspace {
    overflow: visible;
    padding-top: 28px;
  }
}

@media (max-width: 720px) {
  .workspace,
  .sidebar {
    padding: 20px 16px;
  }

  .screen-frame {
    &--welcome,
    &--result {
      min-height: auto;
    }
  }

  .content-card {
    padding: 20px;
  }

  .panel-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .result-actions {
    width: 100%;
  }

  .button {
    width: 100%;
  }
}
</style>
