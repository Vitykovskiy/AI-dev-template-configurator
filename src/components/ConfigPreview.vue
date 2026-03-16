<template>
  <v-card class="preview-panel" rounded="xl" variant="flat">
    <div class="preview-panel__header">
      <div>
        <p class="preview-panel__eyebrow">
          {{ title }}
        </p>
        <h3 v-if="fileName" class="preview-panel__filename">
          {{ fileName }}
        </h3>
        <p class="preview-panel__hint">
          {{ hint }}
        </p>
      </div>
      <div class="preview-panel__actions">
        <v-btn
          class="preview-panel__button"
          variant="outlined"
          @click="$emit('copy')"
        >
          {{ copied ? copiedLabel : copyLabel }}
        </v-btn>
        <v-btn
          class="preview-panel__button"
          color="primary"
          variant="flat"
          @click="$emit('download')"
        >
          {{ downloadLabel }}
        </v-btn>
      </div>
    </div>

    <pre class="preview-panel__code"><code>{{ previewJson }}</code></pre>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  previewJson: string
  copied: boolean
  title: string
  hint: string
  copyLabel: string
  copiedLabel: string
  downloadLabel: string
  fileName?: string
}>()

defineEmits<{
  copy: []
  download: []
}>()
</script>

<style scoped lang="scss">
.preview-panel {
  overflow: hidden;
  background: var(--surface) !important;
  border: 1px solid var(--border-soft);
  box-shadow: var(--shadow-sm);

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    padding: 20px 20px 0;
  }

  &__eyebrow {
    margin: 0;
    color: var(--text-muted);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  &__filename {
    margin: 2px 0 10px;
    font-size: 1rem;
    font-weight: 600;
  }

  &__hint {
    margin: 0;
    color: var(--text-muted);
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  &__button {
    font-weight: 600;
    text-transform: none;
  }

  &__code {
    overflow: auto;
    margin: 20px;
    padding: 20px;
    border-radius: 14px;
    background: #0f172a;
    color: #e2e8f0;
    font-family: 'JetBrains Mono', 'Consolas', 'Monaco', monospace;
    font-size: 0.8rem;
    line-height: 1.65;
  }
}

.dark .preview-panel__code {
  background: #0b1120;
}

@media (max-width: 720px) {
  .preview-panel {
    &__header {
      flex-direction: column;
      align-items: stretch;
    }

    &__actions {
      width: 100%;
    }

    &__button {
      width: 100%;
    }
  }
}
</style>
