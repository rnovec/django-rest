const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Curso de Django',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/django-rest/',

  /**
   * AntDocs theme for AntDesign for vue
   * Ref: https://antdocs.seeyoz.cn/guide/getting-started.html#引用主题
   */
  theme: 'antdocs',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/rnovec/django-rest',
    editLinks: false,
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Django',
        link: '/django/'
      },
      {
        text: 'REST Framework',
        link: '/rest-framework/'
      },
      // {
      //   text: 'Advanced topics',
      //   link: '/advanced/'
      // },
      {
        text: 'Proyecto',
        link: '/project/'
      },
      // {
      //   text: 'Glosario',
      //   link: '/glossary/'
      // }
    ],
    sidebar: {
      '/django/': [
        {
          title: 'Intro',
          collapsable: false,
          children: ['', 'intro', 'models', 'other']
        }
      ],
      '/rest-framework/': [
        {
          title: 'REST Framework',
          collapsable: false,
          children: ['', 'jwt', 'serializers', 'views', 'router', 'security']
        }
      ],
      // '/advanced/': [
      //   {
      //     title: 'Advanced topics',
      //     collapsable: false,
      //     children: [
      //       '',
      //       'db',
      //       'heroku',
      //       'celery',
      //       's3',
      //       'testing',
      //       'registration'
      //     ]
      //   }
      // ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom']
}
