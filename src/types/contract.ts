export type PrimitiveValue = string | number | boolean

export const enum VisibilityOperator {
  Equals = 'equals',
  NotEquals = 'not_equals',
}

export const enum FieldComponent {
  SegmentedControl = 'segmented_control',
  CardRadioGroup = 'card_radio_group',
  CheckboxGroup = 'checkbox_group',
  Checkbox = 'checkbox',
  Switch = 'switch',
  Stepper = 'stepper',
  InfoBanner = 'info_banner',
}

export const enum ScreenType {
  Intro = 'intro',
  Form = 'form',
  Summary = 'summary',
  Review = 'review',
  Result = 'result',
}

export const enum ScreenTextKey {
  Title = 'title',
  Description = 'description',
  PrimaryAction = 'primary_action',
}

export type VisibilityCondition =
  | {
      field: string
      operator: VisibilityOperator
      value: PrimitiveValue
    }
  | {
      any_of: VisibilityCondition[]
    }
  | {
      all_of: VisibilityCondition[]
    }

export interface ContractOption {
  value: PrimitiveValue
  label: string
  description?: string
}

export interface ContractField {
  id: string
  component: FieldComponent
  label: string
  required: boolean
  default: PrimitiveValue | PrimitiveValue[]
  description?: string
  help_text?: string
  min?: number
  max?: number
  options?: ContractOption[]
  visibility?: VisibilityCondition
}

export interface ContractScreen {
  id: string
  type: ScreenType
  title: string
  description: string
  primary_action?: string
  actions?: string[]
  sections?: string[]
  display_blocks?: Array<{
    title: string
    items: string[]
  }>
  fields?: ContractField[]
}

export interface UiContract {
  contract_version: number
  product: {
    name: string
    goal: string
  }
  design_principles: string[]
  output: {
    format: string
    target_file_name: string
    schema_root: string
  }
  screens: ContractScreen[]
}

export interface GeneratedConfig {
  config_version: number
  architecture: {
    use_fsd: boolean
  }
  language: {
    documentation: string
    issues: string
    pull_requests: string
    comments: string
    commits: string
    labels: string
    agent_instructions: string
  }
  workflow: {
    execution_mode: string
    issue_tracking: string
    project_tracking: string
  }
  pull_requests: {
    enabled: boolean
    creation_mode: string
    review: {
      required: boolean
      agent_must_read_comments: boolean
      agent_must_reply_to_comments: boolean
      agent_must_apply_accepted_feedback: boolean
    }
    merge: {
      squash_commits: boolean
      integration_method: string
      min_approvals: number
      require_green_checks: boolean
    }
  }
  project_map: {
    enabled: boolean
  }
  github: {
    required_token_scopes: string[]
    recommended_token_scopes: string[]
  }
}
