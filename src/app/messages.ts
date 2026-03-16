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
      },
    },
    summary: {
      language: 'Language',
      execution: 'Execution mode',
      prFlow: 'Pull requests',
      review: 'Review and merge',
      artifacts: 'Artifact persistence',
      rag: 'RAG mode',
      fields: {
        documentation: 'Documentation',
        issues: 'Issues',
        pullRequests: 'Pull requests',
        comments: 'Comments',
        mode: 'Mode',
        checkpoints: 'Human checkpoints',
        enabled: 'Enabled',
        creation: 'Creation mode',
        draft: 'Draft first',
        required: 'Review required',
        reviewers: 'Reviewers',
        approvals: 'Required approvals',
        docs: 'Docs to repository',
        agent: 'AGENTS contract to repository',
        temp: 'Temporary workfiles to repository',
        vectorDb: 'Allow vector DB',
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
            'Set language, workflow mode, PR policy, artifact persistence, and RAG policy for a new AI Dev Template repository.',
          primary_action: 'Start configuration',
        },
        language: {
          title: 'Language',
          description:
            'Choose the language used by repository artifacts. Labels remain in English.',
        },
        execution_mode: {
          title: 'Execution Mode',
          description: 'Choose how autonomous the agent should be.',
        },
        pull_requests: {
          title: 'Pull Requests',
          description:
            'Choose whether the repository uses a PR-based delivery flow.',
        },
        review_merge: {
          title: 'Review And Merge',
          description:
            'Review policy is only needed when pull requests are enabled.',
        },
        artifacts: {
          title: 'Artifact Persistence',
          description:
            'Decide which AI-generated repository artifacts must stay in Git and which can remain local (added to .gitignore).',
        },
        rag: {
          title: 'RAG And Vector DB',
          description:
            'Choose how RAG is used in this repository’s development workflow.',
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
        'language.documentation': { label: 'Documentation language' },
        'language.issues': { label: 'Issue language' },
        'language.pull_requests': { label: 'Pull request language' },
        'language.comments': { label: 'Agent comment language' },
        'workflow.execution_mode': { label: 'Execution mode' },
        'workflow.human_checkpoints': {
          label: 'High-risk checkpoints',
          help_text:
            'These are the guardrails that still require human approval in autonomous or hybrid mode.',
        },
        'pull_requests.enabled': { label: 'Use pull requests' },
        'pull_requests.creation_mode': { label: 'When to create PRs' },
        'pull_requests.draft_first': { label: 'Open PRs as draft first' },
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
        'pull_requests.merge.strategy': { label: 'Merge strategy' },
        'pull_requests.merge.min_approvals': { label: 'Required approvals' },
        'pull_requests.merge.require_green_checks': {
          label: 'Require green checks before merge',
        },
        'pull_requests.merge.allow_agent_self_merge': {
          label: 'Allow agent self-merge',
        },
        'artifacts.persist_docs_to_repo': {
          label: 'Persist docs to repository',
          help_text:
            'Recommended. Docs are the long-lived source of truth for future sessions.',
        },
        'artifacts.persist_agent_contract_to_repo': {
          label: 'Persist AGENTS contract to repository',
          help_text:
            'Recommended. Without this, new agent sessions lose the operating contract.',
        },
        'artifacts.persist_temporary_workfiles_to_repo': {
          label: 'Persist temporary AI workfiles to repository',
          help_text:
            'Scratch notes, drafts, logs, and temporary generation files usually should stay local.',
        },
        'rag.mode': { label: 'RAG mode' },
        'rag.allow_vector_db': {
          label: 'Allow vector DB as an implementation option',
        },
        'rag.activation_requires_user_approval': {
          label: 'Require explicit user approval before activation',
        },
      },
      options: {
        'language.documentation': { en: 'English', ru: 'Russian' },
        'language.issues': { en: 'English', ru: 'Russian' },
        'language.pull_requests': { en: 'English', ru: 'Russian' },
        'language.comments': { en: 'English', ru: 'Russian' },
        'workflow.execution_mode': {
          autonomous: {
            label: 'Autonomous',
            description:
              'Agent moves through the workflow without stage-by-stage approval, except for configured guardrails.',
          },
          hybrid: {
            label: 'Hybrid',
            description:
              'Agent works autonomously for normal tasks and pauses only on configured high-risk checkpoints.',
          },
          staged: {
            label: 'Staged',
            description:
              'Agent pauses for explicit approval between major stages.',
          },
        },
        'workflow.human_checkpoints': {
          architecture_changes: 'Architecture changes',
          infra_changes: 'Infrastructure changes',
          schema_migrations: 'Schema migrations',
          external_integrations: 'External integrations',
          security_sensitive_changes: 'Security-sensitive changes',
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
          always: 'Always',
          for_major_changes: 'Major changes only',
          manual: 'Manual decision',
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
        'pull_requests.merge.strategy': {
          squash: 'Squash',
          merge: 'Merge commit',
          rebase: 'Rebase',
        },
        'rag.mode': {
          off: {
            label: 'Do not use',
            description: 'Work without RAG in this repository.',
          },
          on_demand: {
            label: 'Enable when needed',
            description:
              'Start without RAG and connect it later if the repository grows beyond direct context.',
          },
          from_start: {
            label: 'Use from start',
            description:
              'Prepare the development workflow to use RAG from the beginning.',
          },
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
      },
    },
    summary: {
      language: 'Язык',
      execution: 'Режим работы',
      prFlow: 'Пул-реквесты',
      review: 'Ревью и слияние',
      artifacts: 'Хранение артефактов',
      rag: 'Режим RAG',
      fields: {
        documentation: 'Документация',
        issues: 'Задачи',
        pullRequests: 'Пул-реквесты',
        comments: 'Комментарии',
        mode: 'Режим',
        checkpoints: 'Контрольные точки',
        enabled: 'Используются',
        creation: 'Когда создавать',
        draft: 'Сначала черновик',
        required: 'Ревью обязательно',
        reviewers: 'Кто проводит ревью',
        approvals: 'Требуемые подтверждения',
        docs: 'Документация в репозитории',
        agent: 'Контракт AGENTS в репозитории',
        temp: 'Временные файлы в репозитории',
        vectorDb: 'Разрешить векторную БД',
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
            'Задайте язык, режим работы, правила для пул-реквестов, хранение артефактов и политику RAG.',
          primary_action: 'Начать настройку',
        },
        language: {
          title: 'Язык',
          description:
            'Выберите язык документации, задач, пул-реквестов и комментариев. Метки останутся на английском.',
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
            'Решите, какие материалы, созданные ИИ, должны храниться в Git, а какие могут оставаться локально (добавлены в .gitignore).',
        },
        rag: {
          title: 'RAG и векторная БД',
          description:
            'Выберите, как RAG используется в процессе разработки этого репозитория.',
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
        'language.documentation': { label: 'Язык документации' },
        'language.issues': { label: 'Язык задач' },
        'language.pull_requests': { label: 'Язык пул-реквестов' },
        'language.comments': { label: 'Язык комментариев агента' },
        'workflow.execution_mode': { label: 'Режим работы' },
        'workflow.human_checkpoints': {
          label: 'Контрольные точки',
          help_text:
            'На этих изменениях агент должен остановиться и дождаться подтверждения человека.',
        },
        'pull_requests.enabled': { label: 'Использовать пул-реквесты' },
        'pull_requests.creation_mode': { label: 'Когда создавать пул-реквест' },
        'pull_requests.draft_first': {
          label: 'Сначала открывать как черновик',
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
        'pull_requests.merge.strategy': { label: 'Способ слияния' },
        'pull_requests.merge.min_approvals': {
          label: 'Сколько подтверждений нужно',
        },
        'pull_requests.merge.require_green_checks': {
          label: 'Обязательны успешные проверки перед слиянием',
        },
        'pull_requests.merge.allow_agent_self_merge': {
          label: 'Разрешить агенту сливать изменения самому',
        },
        'artifacts.persist_docs_to_repo': {
          label: 'Хранить документацию в репозитории',
          help_text:
            'Рекомендуется. Документация помогает новым сессиям быстро восстановить контекст.',
        },
        'artifacts.persist_agent_contract_to_repo': {
          label: 'Хранить контракт AGENTS в репозитории',
          help_text:
            'Рекомендуется. Без этого агент теряет правила работы с проектом.',
        },
        'artifacts.persist_temporary_workfiles_to_repo': {
          label: 'Хранить временные файлы ИИ в репозитории',
          help_text:
            'Черновики, заметки, логи и временные файлы генерации обычно лучше оставлять локально.',
        },
        'rag.mode': { label: 'Режим RAG' },
        'rag.allow_vector_db': {
          label: 'Разрешить векторную БД как вариант реализации',
        },
        'rag.activation_requires_user_approval': {
          label: 'Требовать явное согласие пользователя перед активацией',
        },
      },
      options: {
        'language.documentation': { en: 'Английский', ru: 'Русский' },
        'language.issues': { en: 'Английский', ru: 'Русский' },
        'language.pull_requests': { en: 'Английский', ru: 'Русский' },
        'language.comments': { en: 'Английский', ru: 'Русский' },
        'workflow.execution_mode': {
          autonomous: {
            label: 'Автономный',
            description:
              'Агент работает сам и не ждет подтверждения на каждом шаге.',
          },
          hybrid: {
            label: 'Гибридный',
            description:
              'В обычных задачах агент работает сам, а на рискованных изменениях останавливается.',
          },
          staged: {
            label: 'Поэтапный',
            description: 'Агент ждет подтверждения между крупными этапами.',
          },
        },
        'workflow.human_checkpoints': {
          architecture_changes: 'Изменения архитектуры',
          infra_changes: 'Изменения инфраструктуры',
          schema_migrations: 'Миграции схемы',
          external_integrations: 'Внешние интеграции',
          security_sensitive_changes: 'Изменения, связанные с безопасностью',
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
          always: 'Всегда',
          for_major_changes: 'Только для крупных изменений',
          manual: 'Решать вручную',
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
        'pull_requests.merge.strategy': {
          squash: 'Squash',
          merge: 'Merge commit',
          rebase: 'Rebase',
        },
        'rag.mode': {
          off: {
            label: 'Не использовать',
            description: 'Работать без RAG в этом репозитории.',
          },
          on_demand: {
            label: 'Подключать при необходимости',
            description:
              'По умолчанию работать без RAG и подключить его позже, если прямого контекста станет недостаточно.',
          },
          from_start: {
            label: 'Использовать сразу',
            description:
              'Сразу готовить процесс разработки с использованием RAG.',
          },
        },
      },
    },
  },
} as const
