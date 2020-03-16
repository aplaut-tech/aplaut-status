---
title: Плановое переключение трафика Widgets API
date: '2020-02-21T08:30:00Z'
severity: under-maintenance
affectedsystems:
  - widgets-api
resolved: true
---
Плановое переключение части трафика к Widgets API на новый кластер кэширующих серверов.
Переключение затрагивает только трафик через домены widgets.shoppilot.ru и w-api.shoppilot.ru.

::: update Monitoring | 2020-02-21T08:40:00Z
Наблюдаем увеличение времени задержки.
:::

::: update Monitoring | 2020-02-21T10:20:00Z
Переключили трафик обратно. Через 10 минут ожидаем восстановление latency.
:::

<!--- language code: ru -->
