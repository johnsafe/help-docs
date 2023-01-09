// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// @ts-ignore
const lightCodeTheme = require('prism-react-renderer/themes/github');
// @ts-ignore
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AtomGit 帮助文档',
  tagline: '使用文档  接口文档  第三方接入文档',
  url: 'https://atomgit.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',//throw
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'johnsafe', // Usually your GitHub org/user name.
  projectName: 'johnsafe.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
    localeConfigs: {
      'zh-Hans': {
        htmlLang: 'zh-Hans'
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          docLayoutComponent: '@theme/DocPage',
          docItemComponent: '@theme/DocItem',
          rehypePlugins: [],
          routeBasePath: "/" ,
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          disableVersioning: false,
          includeCurrentVersion: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://atomgit.com/OpenAtomFoundation/AtomGit-Docs/blob/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://atomgit.com/OpenAtomFoundation/AtomGit-Docs/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        editCurrentVersion: true,
        sidebarPath: require.resolve('./sidebarsAPI.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
      }),
    ]
  ],
  themes: [
    [
      // @ts-ignore
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      // require.resolve("@easyops-cn/docusaurus-search-local"),
      // @ts-ignore
      ({
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'AtomGit',
        logo: {
          alt: 'AtomGit Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: '帮助文档',
          },
          {to: '/api/', label: 'API文档', position: 'left'},
          {to: '/oauth/', label: '第三方接入', position: 'left'},
          {to: '/blog', label: '博客', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right'
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: '反馈',
            position: 'right',
          },
        ],
      },
      metadata: [
        {name: 'keywords', content: 'gitlab,github'},
        {name: 'keywords', content: 'git,api'}
      ],
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '帮助文档',
                to: '/',
              },
              {
                label: 'API',
                to: '/api/',
              },
              {
                label: 'OAuth2',
                to: '/docs/introduction',
              },
              {
                label: 'Git 入门',
                to: '/git',
              }
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AtomGit, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
