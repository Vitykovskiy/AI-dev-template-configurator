export type PrimitiveValue = string | number | boolean

export type VisibilityCondition =
  | {
      field: string
      operator: 'equals' | 'not_equals'
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
  component:
    | 'segmented_control'
    | 'card_radio_group'
    | 'checkbox_group'
    | 'switch'
    | 'stepper'
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
  type: 'intro' | 'form' | 'summary' | 'review' | 'result'
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
  language: {
    documentation: string
    issues: string
    pull_requests: string
    comments: string
    labels: string
  }
  workflow: {
    execution_mode: string
    human_checkpoints: string[]
    issue_tracking: string
    project_tracking: string
  }
  pull_requests: {
    enabled: boolean
    creation_mode: string
    draft_first: boolean
    review: {
      required: boolean
      reviewers: string
      agent_must_read_comments: boolean
      agent_must_reply_to_comments: boolean
      agent_must_apply_accepted_feedback: boolean
    }
    merge: {
      strategy: string
      min_approvals: number
      require_green_checks: boolean
      allow_agent_self_merge: boolean
    }
  }
  artifacts: {
    persist_docs_to_repo: boolean
    persist_agent_contract_to_repo: boolean
    persist_temporary_workfiles_to_repo: boolean
    local_artifact_paths: string[]
  }
  rag: {
    mode: string
    allow_vector_db: boolean
    activation_requires_user_approval: boolean
  }
  github: {
    required_token_scopes: string[]
    recommended_token_scopes: string[]
  }
}
