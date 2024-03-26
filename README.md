# Стартовый шаблон для верстки (Webpack)

## Навигация

1. [Установка](#установка)
2. [Разработка](#разработка)
3. [Стандартная файловая структура](#стандартная-файловая-структура)
4. [Рекомендации по использованию](#рекомендации-по-использованию)
   - Разметка HTML
   - Шрифты
   - Стили CSS
   - Скрипты JS
5. [Предустановленные зависимости](#предустановленные-зависимости)

## Установка

Необходимо установить [Node.js](https://nodejs.org/) и [Yarn](https://yarnpkg.com/) последних версий.
В качестве локального сервера используется Webpack Dev Server.

Клонируем репозиторий себе на компьютер:
```sh
git clone https://github.com/maxvgr/dr-hand.git
```

Переходим в каталог с проектом:
```sh
cd dr-hand
```

Установливаем все зависимости командой:
```sh
yarn
```

## Разработка

Для запуска локального сервера, открываем в корневом каталоге терминал и пишем
```sh
yarn run dev
```
После чего, в браузере автоматически откроется новая вкладка с корневой страницей и запустятся процессы отслеживания изменения файлов

Для сборки проекта в единые бандлы и подготовки к деплою:
```sh
yarn run build
```

Для отправки на удаленный хост необходимо в файле [deploy.js](node_scripts/deploy.js) прописать FTP-доступы к серверу.
После чего используем команду:

```sh
yarn run deploy
```

## Стандартная файловая структура

```
boilerplate
├── node_scripts
├── config
├── src
│   ├── assets
│   │   ├── fonts
│   │   ├── images
│   │   ├── misc
│   ├── js
│   ├── layout
│   ├── scss
│   ├── home.html
│   └── index.html
├── package.json
└── webpack.config.js
├── .browserslistrc
├── .editorconfig
├── .eslintrc
├── .gitattributes
├── .gitignore
├── .postcssrc
├── .stylelintignore
├── .stylelintrc
├── .yarnrc.yml
```

* Корень папки:
    * ```package.json``` — список зависимостей и общая конфигурация проекта
    * ```webpack.config.js``` — настройки сборки Webpack
    * ```.browserslistrc``` – список поддерживаемых браузеров
    * ```.editorconfig``` – единый формат настроек для всех IDE
    * ```.eslintrc``` — настройки ESLint
    * ```.gitattributes``` – настройки конца строк в файлах для репозитория
    * ```.gitignore``` – запрет на отслеживание версионности определенных файлов и каталогов
    * ```.postcssrc``` — конфигурация PostCSS
    * ```.stylelintrc``` — конфигурация Stylelint
    * ```.stylelintignore``` – запрет на отслеживание файлов Stylelint'ом
    * ```.yarnrc``` – дополнительные параметры Yarn
* Папка ```src``` - используется во время разработки:
    * страницы сайта: ```src/*.html```
    * шрифты: ```src/assets/fonts```
    * изображения: ```src/assets/images```
    * фавиконы: ```src/assets/favicons```
    * другие ассеты (видео, конфиги и т.д.): ```src/assets/*```
    * JS-файлы: ```src/js```
    * HTML-файлы: ```src/layout```
    * SCSS-файлы: ```src/scss```
* Папка ```dist``` - папка для билда проекта, из нее с помощью команды ```gulp deploy``` файлы отправляются на удаленный сервер)
* Папка ```node_scripts``` - папка с NPM-скриптами
* Папка ```node_modules``` - папка с NPM-зависимостями, никогда не трогаем

## Рекомендации по использованию
### Страницы проекта
Для упрощения разработки многостраничных сайтов был внедрен "шаблонизатор". С помощью тега ```<include src=""></include>``` можно встраивать любые файлы в разметку, в том числе ```.html```
* страницы проекта находятся в корне папки ```src/```
    * Страница-навигатор: ```src/layout/index.html```
    * главная страница: ```src/layout/page-home.html```
    * страницы собираются с помощью плагина [postHtmlInclude](https://www.npmjs.com/package/posthtml-include/v/1.2.0)
    * всевозможные карточки товаров, услуг и т.п. размещаем в отдельных [фрагментах](src/layout/template/)

Чтобы не засорять разметку SVG кодом, был внедрен еще один [плагин](https://www.npmjs.com/package/posthtml-inline-svg). С помощью тега ```<inline src=""></inline>```, мы можем указывать путь к нужному векторному изображению. При таком способе добавления, SVG проходит через минификацию и очистку от лишнего кода, нужно это учитывать, когда планируется делать сложные анимации. Для этого лучше подключать через ```<include src=""></include>```

### Шрифты
Каждое семейство шрифтов необходимо разместить в [отдельной папке](src/assets/fonts/).
* шрифты находятся в папке ```src/assets/fonts```
    * используйте [форматы](https://caniuse.com/#search=woff) ```.woff``` и ```.woff2```
    * шрифты подключаются в файл ```src/scss/settings/_fonts.scss```
    * рекомендуется использовать шрифты локально, а не подключать из внешних источников
    * сконвертировать локальные шрифты можно с помощью [данного сервиса](https://transfonter.com/)
    * используйте только те толщины шрифтов, которые используюся по дизайн-макету

### Стили CSS
```
scss/
├── abstracts/
│   ├── _main.scss           # Главный файл
│   ├── mixins.scss          # Каталог с миксинами
│       ├── _container.scss  #
│       ├── _font.scss       #
│   ├── variables.scss       # Каталог с переменными
│       ├── _typography.scss #
│       ├── _z-index.scss    #
├── base/
│   ├── _common.scss         #
│   ├── _misc.scss           #
│   └── _normalize_.scss     #
│   ├── _reset.scss          #
├── layout/
│   ├── components/          # Main layout file
│   ├── global/              # Footer
│   ├── pages/               # Forms
│   ├── partials/            # Grid
│   ├── templates/           # Navbar
├── settings/
│   ├── _breakpoint.scss     #
│   ├── _common.scss         #
│   ├── _container.scss      #
│   ├── _fonts.scss          #
│   └── _palette.scss        #
├── vendors/
│   └── _vendors.scss        # Main vendors file
├── _settings.scss           # Sass Settings
└── main.scss                # Главная точка входа
```

### Предустановленные зависимости

В шаблон установлено несколько по моему личному опыту наиболее удобных и полезных библиотек

#### JS-библиотеки

| Название         | Ссылка                                     | Описание                                     |
| ------------     | --------------------------------------     | --------------------------------------       |
| imask.js         | https://imask.js.org/                      | Различные маски для полей ввода, по умолчанию маска реализована для мобильного телефона (+7) |
| vanilla-lazyload | https://github.com/verlok/vanilla-lazyload | Гибкая и удобная библиотека реализующая ленивую загрузку для всевозможных элементов |

#### SASS-библиотеки
| Название         | Ссылка                                     | Описание                                     |
| ---------------- | ------------------------------------------ | --------------------------------------       |
| family.scss      | https://lukyvj.github.io/family.scss/      | Удобные миксины для стилизации на основе нумерации в дереве элементов. |
| hamburgers       | https://jonsuh.com/hamburgers/             | Универсальные бургеры на любой вкус и цвет |
| breakpoints      | -                                          | Миксины для media-запросов |