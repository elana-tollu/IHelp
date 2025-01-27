# Проект "ЯПомогаю"

### Описание проекта

[Бриф](https://www.notion.so/3-9-4fb37047c4064717973bd79ab22a79b0)<br>
[Дизайн Figma](<https://www.figma.com/file/xYLbl9kLmcAwYCbAhCFMCy/%D0%AF%D0%9F%D0%BE%D0%BC%D0%BE%D0%B3%D0%B0%D1%8E-(Web)?type=design&node-id=179%3A1699&t=HpHfl6XqdAYSkylY-1>)  
Цель проекта - создание платформы, способствующей оказанию помощи гражданам, которые в силу
болезни, инвалидности или иных причин сталкиваются с бытовыми трудностями.  
В настоящее время проект находится в начальной стадии разработки, макет и бизнес-логика проекта не проработаны на 100%.  
Основной задачей текущей группы разработки была реализация верстки проекта с использованием React с разделением дизайна и бизнес-логики. Реализация дизайна и документирование компонентов в Storybook было обязательной частью. Реализация бизнес-логики в виде функционального прототипа на данном этапе не является обязательной частью. Предполагается, что разработка проекта в дальнейшем будет продолжена другими группами студентов Яндекс.Практикума.  
В рамках реализации проекта текущей группой разработки выполнена верстка и документирование в Storybook следующих частей проекта:

- UI
  1. Buttons
  2. Checkbox
  3. Forms
  4. Icons
  5. Logo
  6. Рамка попапов
  7. Footer
  8. Calendar
  9. ApplicationTooltip
  10. UserInfo
- Modules
  1. Header
- Components
  1. TitleBar
  2. Dropdown
  3. Filters
  4. Navigation
  5. Profile
  6. Registration
  7. AdminCard
  8. VolunteerCard
  9. RecipientCard

Дополнительно был разработан сервер для генерирования фиктивных ответов API. Также организована первоначальная работа роутинга.

Страницы историй Storybook опубликованы [здесь](https://alexanderstreltsov.github.io/IHelp/?path=/docs/example-introduction--docs)

По итогам работы текущая группа разработки рекомендует рассмотреть следующие вопросы:

- ограничение списка поступающих клиенту списка заявок хотя бы населенным пунктом, определяемом по адресу пользователя или выбранным пользователем вручную. Кроме того, для таких крупных городов, как Санкт-Петербург, считаем возможным ограничение и внутри населенного пункта. Такое ограничение, скорее всего, необходимо делать на стороне бэкенда;
- волонтёры могут видеть только те заявки (категории заявок), которые соответствуют его статусу. Разумно предусмотреть перевод в фильтрах в разделе фильтрации по категориям в состояние disabled чекбоксы, которые предусматривают выбор заявок тех категорий, которые волонтёр с текущим статусом не может увидеть.

### Ссылки на проект (dev)

[DEV server](https://alexanderstreltsov.github.io/IHelp)<br>
[DEV swagger api mock](https://app.swaggerhub.com/apis/WEB77_1/IHelp/1.1.0)

### Стек технологий

- React 18
- TypeScript
- React Router 6
- Sass
- Storybook
- SwaggerHub API Auto Mocking

### Локальная разработка (основные команды)

При разработке используется node.js версии 18.16<br><br>
Для установки зависимостей npm `npm install` или `npm ci` <br>
Для запуска проекта `npm start`<br>
Для сборки проекта (получение конечного бандла) `npm run build`<br><br>
Для проверки кода линтером ESLint `npm run lint`<br>
Для автоматического разрешения конфликтов, найденных линтером `npm run lint:fix`<br>
Для проверки корректного форматирования кода `npm run prettier`<br>
Для автоматического исправления ошибок форматирования кода `npm run prettier:format`<br><br>
Для запуска документации сторибук `npm run storybook`<br>
Для сборки сторибук `npm run storybook:build`<br><br>
Для запуска всех проверок (линтер, форматер, сборка проекта, сборка сторибук) `npm run isready`

### Команда разработки

**Александр Бобрик** ([GitHub](https://github.com/BobrikAU))<br>
**Дарья Макавчик** ([GitHub](https://github.com/daryamakavchik))<br>
**Евгений Меренков** ([GitHub](https://github.com/emerenkov))<br>
**Виктория Панченко** ([GitHub](https://github.com/levvic))<br>
**Владимир Рябцев** ([GitHub](https://github.com/vierim))<br>
**Александр Стрельцов** ([GitHub](https://github.com/AlexanderStreltsov))<br>
**Элана Толлю** ([GitHub](https://github.com/elana-tollu))<br>
**Денис Улесов** ([GitHub](https://github.com/denis-ttk-1975))
