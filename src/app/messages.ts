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
      architecture: 'Frontend architecture',
      execution: 'Execution mode',
      prFlow: 'Pull requests',
      review: 'Review and merge',
      projectMap: 'Project map',
      fields: {
        repositoryLanguage: 'Repository language',
        workflowLanguage: 'Workflow language',
        mode: 'Mode',
        checkpoints: 'Human checkpoints',
        useFsd: 'Use FSD',
        enabled: 'Enabled',
        creation: 'Creation mode',
        required: 'Review required',
        reviewers: 'Reviewers',
        readComments: 'Agent reads comments',
        replyComments: 'Agent replies to comments',
        applyFeedback: 'Agent applies accepted feedback',
        squash: 'Squash commits',
        integration: 'Integration method',
        minApprovals: 'Minimum approvals',
        greenChecks: 'Green checks required',
        selfMerge: 'Agent self-merge',
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
            'Set language, frontend architecture, workflow mode, PR policy, and project-map settings for a new AI Dev Template repository.',
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
        architecture: {
          title: 'Frontend Architecture',
          description:
            'Choose whether the template should treat Feature-Sliced Design as the default frontend architecture.',
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
        project_map: {
          title: 'Project Map',
          description:
            'The agent can maintain a structured map of the project file tree to simplify navigation across sessions.',
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
        'language.repository': {
          label: 'Repository language',
          help_text:
            'Used for docs, README, architecture decisions, and GitHub Issues.',
        },
        'language.workflow': {
          label: 'Workflow language',
          help_text:
            'Used for PR titles and descriptions, review comments, and commit messages.',
        },
        'workflow.execution_mode': { label: 'Execution mode' },
        'architecture.use_fsd': {
          label: 'Use Feature-Sliced Design (FSD)',
          help_text:
            'Controls whether generated guidance and project structure should explicitly target FSD layers and boundaries for frontend code.',
        },
        'pull_requests.enabled': { label: 'Use pull requests' },
        'pull_requests.creation_mode': { label: 'PR policy for tasks' },
        'pull_requests.review.required': { label: 'Require review' },
        'pull_requests.review.reviewers': { label: 'Reviewer type' },
        'pull_requests.review.agent_must_read_comments': {
          label: 'Agent must read review comments',
        },
        'pull_requests.review.agent_must_reply_to_comments': {
          label: 'Agent must reply to review comments',
        },
        'pull_requests.review.agent_must_apply_accepted_feedback': {
          label: 'Agent must apply accepted feedback',
        },
        ai_reviewer_note: {
          label: 'External AI reviewer required',
          help_text:
            'AI review requires the veni-vidi-review GitHub App to be installed and configured for this repository.',
        },
        'pull_requests.merge.squash_commits': {
          label: 'Squash commits before merge',
          help_text:
            'If enabled, multiple commits from the task branch are combined into one before merge.',
        },
        'pull_requests.merge.integration_method': {
          label: 'Branch integration method',
        },
        'pull_requests.merge.min_approvals': {
          label: 'Minimum approvals',
        },
        'pull_requests.merge.require_green_checks': {
          label: 'Require green checks before merge',
        },
        'pull_requests.merge.allow_agent_self_merge': {
          label: 'Allow agent self-merge',
        },
        branch_protection_note: {
          label: 'Branch protection required',
          help_text:
            'These review and merge rules are enforced by the agent only. GitHub branch protection is still required to enforce them technically.',
        },
        'project_map.enabled': {
          label: 'Maintain project map',
          help_text:
            'If enabled, the agent creates and updates docs/project-map.md with a file tree and short descriptions.',
        },
      },
      options: {
        'language.repository': { en: 'English', ru: 'Russian' },
        'language.workflow': { en: 'English', ru: 'Russian' },
        'workflow.execution_mode': {
          autonomous: {
            label: 'Autonomous',
            description:
              'Agent works iteratively through tasks without stopping between stages.',
          },
          manual: {
            label: 'Manual',
            description:
              'Agent may complete one bounded routing wave and then stop cleanly until the next explicit execution session.',
          },
        },
        'architecture.use_fsd': {
          true: {
            label: 'Enabled',
            description:
              'Frontend guidance assumes FSD and recommends keeping code in FSD layers with explicit boundaries.',
          },
          false: {
            label: 'Disabled',
            description:
              'The template does not impose FSD and allows the team to use another frontend structure.',
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
              'Use PRs only for significant tasks, unless branch protection forces a PR for every change.',
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
      notAllowed: 'Не разрешено',
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
        'Только вопросы, которые влияют на итоговый конфиг.',
        'Нерелевантные настройки скрываются.',
        'Где возможно, используются фиксированные варианты ответа.',
        'Сводка и итоговый JSON всегда под рукой.',
      ],
      githubBlocks: {
        requiredScopes: 'Обязательные права доступа',
        recommendedScopes: 'Рекомендуемые права доступа',
        notes: 'Примечания',
        scopes: ['repo', 'project'],
        recommended: ['read:org', 'workflow'],
        notesList: [
          'Набор scopes сам по себе не гарантирует доступ на запись в конкретный репозиторий.',
          'Защиту веток и права записи в GitHub Project нужно проверять отдельно.',
        ],
      },
    },
    summary: {
      language: 'Язык',
      architecture: 'Frontend-архитектура',
      execution: 'Режим работы',
      prFlow: 'Пул-реквесты',
      review: 'Ревью и слияние',
      projectMap: 'Карта проекта',
      fields: {
        repositoryLanguage: 'Язык репозитория',
        workflowLanguage: 'Язык workflow',
        mode: 'Режим',
        checkpoints: 'Контрольные точки',
        useFsd: 'Использовать FSD',
        enabled: 'Используются',
        creation: 'Когда создавать',
        required: 'Ревью обязательно',
        reviewers: 'Кто проводит ревью',
        squash: 'Схлопывать коммиты',
        integration: 'Способ встраивания',
        greenChecks: 'Только при успешных проверках',
        selfMerge: 'Самослияние агентом',
        readComments: 'Агент читает комментарии',
        replyComments: 'Агент отвечает на комментарии',
        applyFeedback: 'Агент применяет принятую обратную связь',
        minApprovals: 'Минимум approvals',
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
            'Задайте язык, frontend-архитектуру, режим работы, правила для пул-реквестов и карту проекта для нового репозитория AI Dev Template.',
          primary_action: 'Начать настройку',
        },
        language: {
          title: 'Язык',
          description:
            'Выберите язык артефактов репозитория. GitHub labels останутся на английском.',
        },
        execution_mode: {
          title: 'Режим работы',
          description:
            'Выберите, насколько самостоятельно может работать агент.',
        },
        architecture: {
          title: 'Frontend-архитектура',
          description:
            'Выберите, должен ли шаблон считать Feature-Sliced Design базовой архитектурой фронтенда.',
        },
        pull_requests: {
          title: 'Пул-реквесты',
          description:
            'Выберите, будет ли работа в этом репозитории идти через пул-реквесты.',
        },
        review_merge: {
          title: 'Ревью и слияние',
          description:
            'Политика ревью нужна только если включены пул-реквесты.',
        },
        project_map: {
          title: 'Карта проекта',
          description:
            'Агент может поддерживать структурированную карту файловой системы проекта для навигации между сессиями.',
        },
        github_permissions: {
          title: 'Права доступа GitHub',
          description:
            'Показаны права доступа, которые ожидаются от токена. На первом этапе этот экран только информационный.',
        },
        review: {
          title: 'Проверка конфигурации',
          description:
            'Проверьте сводку перед генерацией итогового JSON.',
        },
        result: {
          title: 'Конфигурация готова',
          description:
            'Итоговый JSON можно скопировать или скачать готовым файлом.',
        },
      },
      fields: {
        'language.repository': {
          label: 'Язык репозитория',
          help_text:
            'Используется для документации, README, архитектурных решений и задач GitHub.',
        },
        'language.workflow': {
          label: 'Язык workflow',
          help_text:
            'Используется для текста PR, комментариев ревью и сообщений коммитов.',
        },
        'workflow.execution_mode': { label: 'Режим работы' },
        'architecture.use_fsd': {
          label: 'Использовать Feature-Sliced Design (FSD)',
          help_text:
            'Определяет, должны ли инструкции и структура проекта явно ориентироваться на FSD-слои и границы во frontend-коде.',
        },
        'pull_requests.enabled': { label: 'Использовать пул-реквесты' },
        'pull_requests.creation_mode': {
          label: 'Правило для пул-реквестов по задачам',
        },
        'pull_requests.review.required': { label: 'Требовать ревью' },
        'pull_requests.review.reviewers': { label: 'Кто проводит ревью' },
        'pull_requests.review.agent_must_read_comments': {
          label: 'Агент должен читать комментарии ревью',
        },
        'pull_requests.review.agent_must_reply_to_comments': {
          label: 'Агент должен отвечать на комментарии ревью',
        },
        'pull_requests.review.agent_must_apply_accepted_feedback': {
          label: 'Агент должен применять принятое замечание',
        },
        ai_reviewer_note: {
          label: 'Требуется внешний ИИ-ревьювер',
          help_text:
            'Ревью от ИИ требует установленного и настроенного GitHub App veni-vidi-review.',
        },
        'pull_requests.merge.squash_commits': {
          label: 'Схлопывать коммиты перед слиянием',
          help_text:
            'Если включено, несколько коммитов из ветки задачи будут объединены в один перед merge.',
        },
        'pull_requests.merge.integration_method': {
          label: 'Способ встраивания ветки задачи',
        },
        'pull_requests.merge.min_approvals': {
          label: 'Минимум approvals',
        },
        'pull_requests.merge.require_green_checks': {
          label: 'Требовать зелёные проверки перед слиянием',
        },
        'pull_requests.merge.allow_agent_self_merge': {
          label: 'Разрешить агенту сливать изменения самому',
        },
        branch_protection_note: {
          label: 'Требуется branch protection',
          help_text:
            'Правила ревью и слияния с этого экрана агент соблюдает логически, но GitHub branch protection всё равно нужен для технического enforcement.',
        },
        'project_map.enabled': {
          label: 'Поддерживать карту проекта',
          help_text:
            'Если включено, агент создаёт и обновляет docs/project-map.md с деревом файлов и краткими описаниями.',
        },
      },
      options: {
        'language.repository': { en: 'Английский', ru: 'Русский' },
        'language.workflow': { en: 'Английский', ru: 'Русский' },
        'workflow.execution_mode': {
          autonomous: {
            label: 'Автономный',
            description:
              'Агент работает итеративно и не останавливается между стадиями без необходимости.',
          },
          manual: {
            label: 'Ручной',
            description:
              'Агент может завершить одну ограниченную волну маршрутизации и остановиться до следующей явной execution-сессии.',
          },
        },
        'architecture.use_fsd': {
          true: {
            label: 'Включено',
            description:
              'Frontend-инструкции опираются на FSD и рекомендуют держать код в слоях с явными границами.',
          },
          false: {
            label: 'Выключено',
            description:
              'Шаблон не навязывает FSD и позволяет использовать другую структуру frontend-проекта.',
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
              'Работа идёт через документацию, задачи и коммиты без этапа пул-реквестов.',
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
              'Использовать пул-реквесты только для значимых задач, если branch protection не требует PR для каждого изменения.',
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
