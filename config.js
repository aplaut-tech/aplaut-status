module.exports = {
  title: 'Сервисы Aplaut',
  description: 'Вы можете подписаться на статус всех сервисов Aplaut',
  baseUrl: 'https://status.aplaut.io',
  analytics: {
    ga: 'UA-XXXXXXXXX-Y',
  },
  defaultLocale: 'ru',
  locales: [
    { code: 'ru', iso: 'ru-RU', name: 'Русский' },
  ],
  content: {
    frontMatterFormat: 'yaml',
    systems: [
      'widgets-api',
      'platform-api',
      'submissions-api',
      'web-console',
      'email-delivery', 
      'reviews-monitoring' 
    ]
  },
  theme: {
    scheduled: {
      position: 'aboveGlobalStatus'
    }
  },
  head: {
    link: [
      { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3e4e88' }
    ]
  }, 
  notifications: {
    webpush: {
      onesignal: {
        appId: "ea9e0f21-e485-41d9-aa51-a775c1a9b9e0"
      }
    }
  }
}