<template>
  <ol class="step-progress" :aria-label="t('chrome.progressLabel')">
    <li
      v-for="(screen, index) in screens"
      :key="screen.id"
      class="step-progress__row"
    >
      <button
        class="step-progress__item"
        :class="{
          'step-progress__item--active': index === currentStep,
          'step-progress__item--complete': index < currentStep,
        }"
        type="button"
        @click="emit('select', index)"
      >
        <span class="step-progress__index">
          <template v-if="index < currentStep">
            <Check class="step-progress__check" aria-hidden="true" />
          </template>
          <template v-else>
            {{ String(index + 1) }}
          </template>
        </span>
        <span class="step-progress__label">{{ translateScreen(screen) }}</span>
      </button>
    </li>
  </ol>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import type { ContractScreen } from '../types/contract'

const { t } = useI18n()

defineProps<{
  currentStep: number
  screens: ContractScreen[]
  translateScreen: (screen: ContractScreen) => string
}>()

const emit = defineEmits<{
  select: [index: number]
}>()
</script>

<style scoped lang="scss">
.step-progress {
  display: grid;
  gap: 4px;
  margin: 0;
  padding: 0;
  list-style: none;

  &__row {
    min-width: 0;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 10px 12px;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    text-align: left;
    transition:
      background-color 160ms ease,
      color 160ms ease;

    &:hover {
      background: color-mix(in srgb, var(--surface-muted) 90%, transparent);
    }

    &--active {
      background: var(--surface-muted);
      color: var(--text);
      font-weight: 600;
    }

    &--complete {
      color: var(--text);
    }
  }

  &__index {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 999px;
    background: var(--surface-muted);
    color: var(--text-muted);
    font-size: 0.78rem;
    font-weight: 700;
  }

  &__item--active &__index {
    background: var(--primary);
    color: #fff;
  }

  &__item--complete &__index {
    background: var(--primary-soft);
    color: var(--primary);
  }

  &__check {
    width: 14px;
    height: 14px;
  }

  &__label {
    min-width: 0;
    font-size: 0.92rem;
    line-height: 1.3;
  }
}
</style>
