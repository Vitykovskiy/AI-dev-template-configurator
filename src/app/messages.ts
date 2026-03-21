export const messages = {
  en: {
    common: {
      yes: 'Yes',
      no: 'No',
      enabled: 'Enabled',
      disabled: 'Disabled',
      none: 'None',
      allowed: 'Allowed',
      notAllowed: 'Not allowed',
    },
    chrome: {
      badge: 'Configuration Wizard',
      eyebrow: 'AI Dev Template',
      title: 'AI Dev Template',
      subtitle: 'Configuration Wizard',
      livePreview: 'Live config preview',
      progressLabel: 'Configuration progress',
      stepLabel: 'Step {current} of {total}',
      next: 'Continue',
      back: 'Back',
      generate: 'Generate config',
      restart: 'Start over',
      copy: 'Copy JSON',
      copied: 'Copied',
      download: 'Download',
      principles: 'Design principles',
      previewHint:
        'Review the generated JSON, then copy it or download it as a config file.',
      resultTitle: 'Configuration Generated',
      resultText:
        'Copy the JSON or download the generated file and add it to the template root.',
      productGoal:
        'Generate a valid `.ai-dev-template.config.json` for AI Dev Template repositories.',
      designPrinciples: [
        'Use a step-by-step wizard.',
        'Ask only questions that affect the generated config.',
        'Hide irrelevant questions when a parent feature is disabled.',
        'Prefer fixed answer options over free text wherever possible.',
        'Show a live config summary and a final JSON preview.',
      ],
      githubBlocks: {
        requiredScopes: 'Required scopes',
        recommendedScopes: 'Recommended scopes',
        notes: 'Notes',
        scopes: ['repo', 'project'],
        recommended: ['read:org', 'workflow'],
        notesList: [
          'Scopes do not guarantee repository-specific write access.',
          'Branch protection and project write permissions must still be checked separately.',
        ],
        branchProtectionAdminNote:
          'Agent will configure branch protection: the token user must have admin access to the repository (repo scope alone is not sufficient).',
      },
    },
    summary: {
      language: 'Language',
      execution: 'Execution mode',
      prFlow: 'Pull requests',
      review: 'Review and merge',
      artifacts: 'Artifact persistence',
      projectMap: 'Project map',
      fields: {
        documentation: 'Documentation',
        issues: 'Issues',
        pullRequests: 'Pull requests',
        comments: 'Comments',
        commits: 'Commits',
        mode: 'Mode',
        checkpoints: 'Human checkpoints',
        enabled: 'Enabled',
        creation: 'Creation mode',
        required: 'Review required',
        reviewers: 'Reviewers',
        approvals: 'Required approvals',
        readComments: 'Read PR comments',
        replyComments: 'Reply to PR comments',
        applyFeedback: 'Apply accepted feedback',
        squash: 'Squash commits',
        integration: 'Integration method',
        greenChecks: 'Green checks required',
        selfMerge: 'Agent self-merge',
        configureBranchProtection: 'Agent configures branch protection',
        temp: 'Temporary workfiles to repository',
        projectMapEnabled: 'Maintain project map',
      },
    },
    locale: {
      switcherLabel: 'Interface language',
      en: 'English',
      ru: 'Russian',
    },
    theme: {
      label: 'Theme',
      switcherLabel: 'Theme switcher',
      light: 'Light',
      dark: 'Dark',
      system: 'System',
    },
    contract: {
      screens: {
        welcome: {
          title: 'Configure Repository Workflow',
          description:
            'Set language, workflow mode, PR policy, and artifact persistence for a new AI Dev Template repository.',
          primary_action: 'Start configuration',
        },
        language: {
          title: 'Language',
          description:
            'Choose the language used by repository artifacts. GitHub labels remain in English.',
        },
        execution_mode: {
          title: 'Execution Mode',
          description: 'Choose how autonomous the agent should be.',
        },
        pull_requests: {
          title: 'Pull Requests',
          description:
            'Choose whether tasks in this repository use a pull-request workflow.',
        },
        review_merge: {
          title: 'Review And Merge',
          description:
            'Review policy is only needed when pull requests are enabled.',
        },
        artifacts: {
          title: 'Artifact Persistence',
          description:
            'Control whether temporary AI workfiles stay local or are committed to the repository.',
        },
        github_permissions: {
          title: 'GitHub Token Requirements',
          description:
            'Show which token scopes the repository expects. This is explanatory and not user-editable in the first version.',
        },
        review: {
          title: 'Review Configuration',
          description:
            'Show a human-readable summary before generating the final JSON.',
        },
        result: {
          title: 'Configuration Generated',
          description:
            'Display the final JSON and provide copy and download actions.',
        },
      },
      fields: {
        'language.repository': { label: 'Repository language', help_text: 'Used for docs, README, architecture decisions, and GitHub Issues.' },
        'language.workflow': { label: 'Workflow language', help_text: 'Used for PR titles and descriptions, review comments, and commit messages.' },
        'workflow.execution_mode': { label: 'Execution mode' },
        'pull_requests.enabled': { label: 'Use pull requests' },
        'pull_requests.creation_mode': { label: 'PR policy for tasks' },
        'pull_requests.review.required': { label: 'Require review' },
        'pull_requests.review.reviewers': { label: 'Reviewer type' },
        'pull_requests.review.agent_must_read_comments': {
          label: 'Agent must read PR comments',
        },
        'pull_requests.review.agent_must_reply_to_comments': {
          label: 'Agent must reply to PR comments',
        },
        'pull_requests.review.agent_must_apply_accepted_feedback': {
          label: 'Agent must apply accepted feedback',
        },
        'pull_requests.merge.squash_commits': {
          label: 'Squash commits before merge',
          help_text:
            'If enabled, multiple commits from the task branch are combined into one before merge.',
        },
        'pull_requests.merge.integration_method': {
          label: 'Branch integration method',
        },
        'pull_requests.merge.min_approvals': { label: 'Required approvals' },
        'pull_requests.merge.require_green_checks': {
          label: 'Require green checks before merge',
        },
        'pull_requests.merge.allow_agent_self_merge': {
          label: 'Allow agent self-merge',
        },
        'artifacts.persist_temporary_workfiles_to_repo': {
          label: 'Persist temporary AI workfiles to repository',
          help_text:
            'Scratch notes, drafts, logs, and temporary generation files usually should stay local.',
        },
        'project_map.enabled': {
          label: 'Maintain project map',
          help_text:
            'If enabled, the agent creates and updates docs/project-map.md — a file tree with descriptions of each folder and key file.',
        },
        branch_protection_note: {
          label: 'Branch protection required',
          help_text:
            'These review and merge rules are enforced by the agent only. Without GitHub branch protection, the agent can push directly to main or merge without approval. To technically enforce this policy, go to repository Settings → Branches → Add branch protection rule for main: enable "Require a pull request before merging", set the required number of approvals, and disable "Allow bypassing the above settings".',
        },
        'pull_requests.merge.agent_configure_branch_protection': {
          label: 'Let agent configure branch protection',
          help_text:
            'If enabled, the agent will apply branch protection rules to main automatically using the GitHub API. Requires the token user to have admin access to the repository.',
        },
      },
      options: {
        'language.repository': { en: 'English', ru: 'Russian' },
        'language.workflow': { en: 'English', ru: 'Russian' },
        'workflow.execution_mode': {
          autonomous: {
            label: 'Autonomous',
            description:
              'Agent moves through the workflow without pausing between stages.',
          },
          staged: {
            label: 'Staged',
            description:
              'Agent pauses between work stages and waits for explicit human confirmation before continuing.',
          },
        },
        'pull_requests.enabled': {
          true: {
            label: 'Yes',
            description: 'Use branch, PR, review, and merge workflow.',
          },
          false: {
            label: 'No',
            description:
              'Work is tracked through docs, issues, and commits without PR stages.',
          },
        },
        'pull_requests.creation_mode': {
          for_every_task: {
            label: 'Every task',
            description: 'Create a separate branch and PR for every task.',
          },
          for_significant_tasks: {
            label: 'Significant tasks only',
            description:
              'Use PRs only for tasks that change code or system behavior, or otherwise require review.',
          },
          manual_per_task: {
            label: 'Decide per task',
            description:
              'Use a PR for a task only after an explicit human decision.',
          },
        },
        'pull_requests.review.required': {
          true: {
            label: 'Yes',
            description:
              'A PR cannot be merged until review policy is satisfied.',
          },
          false: {
            label: 'No',
            description: 'PRs may exist, but formal review is optional.',
          },
        },
        'pull_requests.review.reviewers': {
          human: 'Human',
          ai: 'AI',
          both: 'Both',
        },
        'pull_requests.merge.integration_method': {
          merge: 'Merge commit',
          rebase: 'Rebase',
        },
      },
    },
  },
  ru: {
    common: {
      yes: 'Да',
      no: 'Нет',
      enabled: 'Включено',
      disabled: 'Выключено',
      none: 'Нет',
      allowed: 'Разрешено',
      notAllowed: 'Запрещено',
    },
    chrome: {
      badge: 'Мастер настройки',
      eyebrow: 'AI Dev Template',
      title: 'AI Dev Template',
      subtitle: 'Мастер настройки',
      livePreview: 'Предпросмотр конфига',
      progressLabel: 'Ход настройки',
      stepLabel: 'Шаг {current} из {total}',
      next: 'Продолжить',
      back: 'Назад',
      generate: 'Сгенерировать конфиг',
      restart: 'Начать заново',
      copy: 'Копировать JSON',
      copied: 'Скопировано',
      download: 'Скачать',
      principles: 'Принципы интерфейса',
      previewHint:
        'Проверьте JSON, затем скопируйте его или скачайте готовый файл.',
      resultTitle: 'Конфигурация готова',
      resultText:
        'Скопируйте JSON или скачайте готовый файл и добавьте его в корень шаблона.',
      productGoal:
        'Сгенерировать корректный `.ai-dev-template.config.json` для репозитория AI Dev Template.',
      designPrinciples: [
        'Пошаговая настройка.',
        'Только важные вопросы.',
        'Ничего лишнего, если функция отключена.',
        'Фиксированные варианты там, где это удобно.',
        'Сводка настроек и итоговый JSON всегда под рукой.',
      ],
      githubBlocks: {
        requiredScopes: 'Обязательные права доступа',
        recommendedScopes: 'Рекомендуемые права доступа',
        notes: 'Примечания',
        scopes: ['repo', 'project'],
        recommended: ['read:org', 'workflow'],
        notesList: [
          'Набора прав доступа недостаточно, чтобы гарантировать запись в конкретный репозиторий.',
          'Защиту веток и права записи в проект GitHub нужно проверять отдельно.',
        ],
        branchProtectionAdminNote:
          'Агент настроит защиту ветки: владелец токена должен иметь права администратора репозитория (одного скоупа repo недостаточно).',
      },
    },
    summary: {
      language: 'Язык',
      execution: 'Режим работы',
      prFlow: 'Пул-реквесты',
      review: 'Ревью и слияние',
      artifacts: 'Хранение артефактов',
      projectMap: 'Карта проекта',
      fields: {
        documentation: 'Документация',
        issues: 'Задачи',
        pullRequests: 'Пул-реквесты',
        comments: 'Комментарии',
        commits: 'Коммиты',
        mode: 'Режим',
        checkpoints: 'Контрольные точки',
        enabled: 'Используются',
        creation: 'Когда создавать',
        required: 'Ревью обязательно',
        reviewers: 'Кто проводит ревью',
        approvals: 'Требуемые подтверждения',
        readComments: 'Читать комментарии в PR',
        replyComments: 'Отвечать на комментарии в PR',
        applyFeedback: 'Вносить принятые замечания',
        squash: 'Схлопывать коммиты',
        integration: 'Способ встраивания',
        greenChecks: 'Только при успешных проверках',
        selfMerge: 'Самослияние агентом',
        configureBranchProtection: 'Агент настраивает защиту ветки',
        temp: 'Временные файлы в репозитории',
        projectMapEnabled: 'Поддерживать карту проекта',
      },
    },
    locale: {
      switcherLabel: 'Язык интерфейса',
      en: 'English',
      ru: 'Русский',
    },
    theme: {
      label: 'Тема',
      switcherLabel: 'Переключатель темы',
      light: 'Светлая',
      dark: 'Тёмная',
      system: 'Системная',
    },
    contract: {
      screens: {
        welcome: {
          title: 'Настройка работы с репозиторием',
          description:
            'Задайте язык, режим работы, правила для пул-реквестов и хранение артефактов.',
          primary_action: 'Начать настройку',
        },
        language: {
          title: 'Язык',
          description:
            'Выберите язык документации, задач, пул-реквестов и комментариев. Метки GitHub останутся на английском.',
        },
        execution_mode: {
          title: 'Режим работы',
          description:
            'Выберите, насколько самостоятельно может работать агент.',
        },
        pull_requests: {
          title: 'Пул-реквесты',
          description: 'Выберите, будет ли работа идти через пул-реквесты.',
        },
        review_merge: {
          title: 'Ревью и слияние',
          description:
            'Этот шаг нужен только если в репозитории используются пул-реквесты.',
        },
        artifacts: {
          title: 'Хранение артефактов',
          description:
            'Выберите, остаются ли временные файлы ИИ локально или коммитятся в репозиторий.',
        },
        project_map: {
          title: 'Карта проекта',
          description:
            'Агент может поддерживать актуальную карту файловой структуры проекта для удобной навигации между сессиями.',
        },
        github_permissions: {
          title: 'Права доступа GitHub',
          description:
            'Показаны права доступа, которые ожидаются от токена. В первой версии этот шаг только информационный.',
        },
        review: {
          title: 'Проверка конфигурации',
          description: 'Проверьте сводку перед генерацией итогового JSON.',
        },
        result: {
          title: 'Конфигурация готова',
          description:
            'Итоговый JSON можно скопировать или скачать готовый файл.',
        },
      },
      fields: {
        'language.repository': { label: 'Язык репозитория', help_text: 'Используется для документации, README, решений по архитектуре и задач GitHub.' },
        'language.workflow': { label: 'Язык workflow', help_text: 'Используется для текста PR, комментариев ревью и сообщений коммитов.' },
        'workflow.execution_mode': { label: 'Режим работы' },
        'pull_requests.enabled': { label: 'Использовать пул-реквесты' },
        'pull_requests.creation_mode': {
          label: 'Правило для пул-реквестов по задачам',
        },
        'pull_requests.review.required': { label: 'Требовать ревью' },
        'pull_requests.review.reviewers': { label: 'Кто проводит ревью' },
        'pull_requests.review.agent_must_read_comments': {
          label: 'Агент читает комментарии в пул-реквесте',
        },
        'pull_requests.review.agent_must_reply_to_comments': {
          label: 'Агент отвечает на комментарии в пул-реквесте',
        },
        'pull_requests.review.agent_must_apply_accepted_feedback': {
          label: 'Агент вносит принятые замечания',
        },
        'pull_requests.merge.squash_commits': {
          label: 'Схлопывать коммиты перед слиянием',
          help_text:
            'Если включено, несколько коммитов из ветки задачи будут объединены в один перед слиянием.',
        },
        'pull_requests.merge.integration_method': {
          label: 'Как встраивать ветку задачи',
        },
        'pull_requests.merge.min_approvals': {
          label: 'Сколько подтверждений нужно',
        },
        'pull_requests.merge.require_green_checks': {
          label: 'Обязательны успешные проверки перед слиянием',
        },
        'pull_requests.merge.allow_agent_self_merge': {
          label: 'Разрешить агенту сливать изменения самому',
        },
        'artifacts.persist_temporary_workfiles_to_repo': {
          label: 'Хранить временные файлы ИИ в репозитории',
          help_text:
            'Черновики, заметки, логи и временные файлы генерации обычно лучше оставлять локально.',
        },
        'project_map.enabled': {
          label: 'Поддерживать карту проекта',
          help_text:
            'Если включено, агент создаёт и обновляет docs/project-map.md — дерево файлов с описанием назначения каждой папки и ключевых файлов.',
        },
        branch_protection_note: {
          label: 'Требуется защита основной ветки',
          help_text:
            'Правила ревью и слияния из этого экрана выполняет только агент. Без защиты ветки в GitHub агент может запушить напрямую в main или слить изменения без ревью. Чтобы технически обеспечить соблюдение этих правил, откройте Settings → Branches → Add branch protection rule для ветки main: включите «Require a pull request before merging», укажите нужное количество подтверждений и отключите «Allow bypassing the above settings».',
        },
        'pull_requests.merge.agent_configure_branch_protection': {
          label: 'Агент настраивает защиту ветки',
          help_text:
            'Если включено, агент автоматически настроит правила защиты ветки main через GitHub API. Требуется, чтобы владелец токена имел права администратора репозитория.',
        },
      },
      options: {
        'language.repository': { en: 'Английский', ru: 'Русский' },
        'language.workflow': { en: 'Английский', ru: 'Русский' },
        'workflow.execution_mode': {
          autonomous: {
            label: 'Автономный',
            description: 'Агент работает без остановок между стадиями.',
          },
          staged: {
            label: 'Поэтапный',
            description:
              'Агент останавливается между стадиями работы и ждёт явного подтверждения перед продолжением.',
          },
        },
        'pull_requests.enabled': {
          true: {
            label: 'Да',
            description:
              'Использовать ветки, пул-реквесты, ревью и слияние изменений.',
          },
          false: {
            label: 'Нет',
            description:
              'Работа идет через документацию, задачи и коммиты без этапа пул-реквестов.',
          },
        },
        'pull_requests.creation_mode': {
          for_every_task: {
            label: 'Для каждой задачи',
            description:
              'Для каждой задачи создавать отдельную ветку и отдельный пул-реквест.',
          },
          for_significant_tasks: {
            label: 'Только для значимых задач',
            description:
              'Использовать пул-реквесты только для задач, которые меняют код или поведение системы, либо требуют ревью.',
          },
          manual_per_task: {
            label: 'Решать по каждой задаче',
            description:
              'Использовать PR для задачи только после явного решения человека.',
          },
        },
        'pull_requests.review.required': {
          true: {
            label: 'Да',
            description:
              'Пул-реквест нельзя слить, пока не выполнены правила ревью.',
          },
          false: {
            label: 'Нет',
            description:
              'Пул-реквесты можно использовать без обязательного формального ревью.',
          },
        },
        'pull_requests.review.reviewers': {
          human: 'Человек',
          ai: 'ИИ',
          both: 'Оба',
        },
        'pull_requests.merge.integration_method': {
          merge: 'Merge commit',
          rebase: 'Rebase',
        },
      },
    },
  },
} as const
