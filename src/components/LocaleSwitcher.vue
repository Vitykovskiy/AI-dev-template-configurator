<template>
  <v-btn-toggle
    class="locale-switcher"
    :model-value="locale"
    color="primary"
    density="comfortable"
    divided
    mandatory
    variant="outlined"
    :aria-label="t('locale.switcherLabel')"
  >
    <v-btn
      v-for="option in ['en', 'ru']"
      :key="option"
      :value="option"
      class="locale-switcher__button"
      @click="changeLocale(option as 'en' | 'ru')"
    >
      {{ t(`locale.${option}`) }}
    </v-btn>
  </v-btn-toggle>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

function changeLocale(nextLocale: 'en' | 'ru') {
  locale.value = nextLocale
  localStorage.setItem('ai-dev-template-configurator:locale', nextLocale)
}
</script>

<style scoped lang="scss">
.locale-switcher {
  width: 100%;

  &__button {
    flex: 1;
    text-transform: none;
  }
}
</style>
