<template>
  <div class="theme-switcher">
    <p class="theme-switcher__label">
      {{ t('theme.label') }}
    </p>
    <v-btn-toggle
      class="theme-switcher__group"
      :model-value="theme"
      color="primary"
      density="comfortable"
      divided
      mandatory
      variant="outlined"
      :aria-label="t('theme.switcherLabel')"
    >
      <v-btn
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        class="theme-switcher__button"
        :aria-label="t(option.labelKey)"
        :title="t(option.labelKey)"
        @click="setTheme(option.value)"
      >
        <component :is="option.icon" :size="18" />
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script setup lang="ts">
import { Monitor, Moon, Sun } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useTheme } from '../composables/useTheme'
import { ThemeMode } from '../types/app'

const { t } = useI18n()
const { theme, setTheme } = useTheme()

const options = [
  { value: ThemeMode.Light, labelKey: 'theme.light', icon: Sun },
  { value: ThemeMode.Dark, labelKey: 'theme.dark', icon: Moon },
  { value: ThemeMode.System, labelKey: 'theme.system', icon: Monitor },
] as const
</script>

<style scoped lang="scss">
.theme-switcher {
  display: grid;
  gap: 8px;

  &__label {
    margin: 0;
    color: var(--text);
    font-size: 0.9rem;
    font-weight: 500;
  }

  &__group {
    width: 100%;
  }

  &__button {
    flex: 1 1 0;
    min-width: 44px;
    padding-inline: 0;
    text-transform: none;
  }
}
</style>
