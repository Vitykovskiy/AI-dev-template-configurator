<template>
  <v-alert
    v-if="field.component === fieldComponent.InfoBanner"
    class="info-banner"
    type="warning"
    variant="tonal"
    rounded="xl"
  >
    <p class="info-banner__text">{{ translateFieldHelp(field) }}</p>
  </v-alert>

  <v-card v-else class="field-block" rounded="xl" variant="flat">
    <div class="field-block__header">
      <template
        v-if="
          field.component !== fieldComponent.Switch &&
          field.component !== fieldComponent.Checkbox
        "
      >
        <h3 class="field-block__label">
          {{ translateFieldLabel(field) }}
        </h3>
        <p v-if="translateFieldHelp(field)" class="field-block__help">
          {{ translateFieldHelp(field) }}
        </p>
      </template>
    </div>

    <v-btn-toggle
      v-if="field.component === fieldComponent.SegmentedControl"
      class="segmented"
      :model-value="modelValue"
      color="primary"
      density="comfortable"
      mandatory
      variant="outlined"
    >
      <v-btn
        v-for="option in field.options"
        :key="String(option.value)"
        class="segmented__button"
        :value="option.value"
        @click="emit('updateValue', option.value)"
      >
        {{ translateOptionLabel(field.id, option) }}
      </v-btn>
    </v-btn-toggle>

    <v-item-group
      v-else-if="field.component === fieldComponent.CardRadioGroup"
      class="card-grid"
      :model-value="modelValue"
      mandatory
    >
      <v-item
        v-for="option in field.options"
        :key="String(option.value)"
        v-slot="{ isSelected }"
        :value="option.value"
      >
        <v-card
          class="card-option"
          :class="{ 'card-option--active': isSelected }"
          rounded="lg"
          variant="outlined"
          @click="emit('updateValue', option.value)"
        >
          <strong>{{ translateOptionLabel(field.id, option) }}</strong>
          <span v-if="translateOptionDescription(field.id, option)">
            {{ translateOptionDescription(field.id, option) }}
          </span>
        </v-card>
      </v-item>
    </v-item-group>

    <div
      v-else-if="field.component === fieldComponent.CheckboxGroup"
      class="check-grid"
    >
      <v-checkbox
        v-for="option in field.options"
        :key="String(option.value)"
        class="check-option"
        :class="{ 'check-option--active': isChecked(option.value) }"
        :label="translateOptionLabel(field.id, option)"
        :model-value="isChecked(option.value)"
        color="primary"
        density="comfortable"
        hide-details
        @update:model-value="emit('toggleValue', option.value)"
      />
    </div>

    <div
      v-else-if="field.component === fieldComponent.Switch"
      class="switch-row"
    >
      <div>
        <span class="field-block__label">{{ translateFieldLabel(field) }}</span>
        <p v-if="translateFieldHelp(field)" class="field-block__help">
          {{ translateFieldHelp(field) }}
        </p>
      </div>
      <v-switch
        class="switch-row__toggle"
        :model-value="Boolean(modelValue)"
        color="primary"
        hide-details
        inset
        @update:model-value="emit('updateValue', Boolean($event))"
      />
    </div>

    <div
      v-else-if="field.component === fieldComponent.Checkbox"
      class="checkbox-row"
    >
      <v-checkbox
        class="checkbox-row__control"
        :label="translateFieldLabel(field)"
        :model-value="Boolean(modelValue)"
        color="primary"
        density="comfortable"
        hide-details
        @update:model-value="emit('updateValue', Boolean($event))"
      />
      <p v-if="translateFieldHelp(field)" class="field-block__help checkbox-row__help">
        {{ translateFieldHelp(field) }}
      </p>
    </div>

    <v-number-input
      v-else-if="field.component === fieldComponent.Stepper"
      class="number-input"
      control-variant="split"
      variant="outlined"
      density="comfortable"
      hide-details
      inset
      :max="field.max"
      :min="field.min ?? 0"
      :model-value="Number(modelValue)"
      :precision="0"
      :step="1"
      @update:model-value="emit('updateValue', Number($event))"
    />
  </v-card>
</template>


<script setup lang="ts">
import { computed } from 'vue'
import {
  FieldComponent,
  type ContractField,
  type ContractOption,
  type PrimitiveValue,
} from '../types/contract'

const fieldComponent = {
  SegmentedControl: FieldComponent.SegmentedControl,
  CardRadioGroup: FieldComponent.CardRadioGroup,
  CheckboxGroup: FieldComponent.CheckboxGroup,
  Checkbox: FieldComponent.Checkbox,
  Switch: FieldComponent.Switch,
  Stepper: FieldComponent.Stepper,
  InfoBanner: FieldComponent.InfoBanner,
} as const

const props = defineProps<{
  field: ContractField
  modelValue: PrimitiveValue | PrimitiveValue[]
  translateFieldLabel: (field: ContractField) => string
  translateFieldHelp: (field: ContractField) => string | undefined
  translateOptionLabel: (fieldId: string, option: ContractOption) => string
  translateOptionDescription: (
    fieldId: string,
    option: ContractOption,
  ) => string | undefined
}>()

const emit = defineEmits<{
  updateValue: [value: PrimitiveValue | PrimitiveValue[]]
  toggleValue: [value: PrimitiveValue]
}>()

const checkboxValue = computed(() =>
  Array.isArray(props.modelValue) ? props.modelValue : [],
)

function isChecked(optionValue: PrimitiveValue) {
  return checkboxValue.value.includes(optionValue)
}
</script>

<style scoped lang="scss">
.field-block {
  padding: 20px;
  background: var(--surface) !important;
  border: 1px solid var(--border-soft);
  box-shadow: var(--shadow-sm);

  &__header {
    margin-bottom: 16px;
  }

  &__label {
    margin: 0 0 10px;
    font-size: 1rem;
    font-weight: 600;
  }

  &__help {
    margin: 0;
    color: var(--text-muted);
  }
}

.segmented {
  width: 100%;

  &__button {
    flex: 1 1 0;
    text-transform: none;
  }
}

.card-grid,
.check-grid {
  display: grid;
  gap: 16px;
}

.card-grid {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.card-option,
.check-option {
  width: 100%;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface);
  text-align: left;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    transform 160ms ease;

  &:hover {
    transform: translateY(-1px);
  }

  &--active {
    background: rgba(37, 99, 235, 0.04);
    border-color: rgba(37, 99, 235, 0.35);
  }
}

.card-option {
  display: grid;
  gap: 8px;
  cursor: pointer;

  strong {
    font-size: 1rem;
    font-weight: 600;
  }

  span {
    margin: 0;
    color: var(--text-muted);
  }
}

.check-option {
  margin: 0 !important;
  border-radius: var(--radius-md);

  :deep(.v-selection-control) {
    align-items: flex-start;
  }

  :deep(.v-selection-control__wrapper) {
    margin-top: 2px;
  }

  :deep(.v-label) {
    color: var(--text-muted);
    opacity: 1;
  }
}

.switch-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  &__toggle {
    margin: 0 !important;
  }
}

.checkbox-row {
  display: grid;
  gap: 8px;

  &__control {
    margin: 0 !important;
    padding: 12px 16px;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: var(--surface);
  }

  &__help {
    padding-left: 4px;
  }
}

.number-input {
  max-width: 220px;
}

.info-banner {
  &__text {
    margin: 0;
    line-height: 1.5;
  }
}

@media (max-width: 720px) {
  .field-block {
    padding: 20px;
  }

  .switch-row {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
