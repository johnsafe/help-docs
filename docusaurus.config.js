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
  url: 'https://docs.atomgit.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',//throw
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'johnsafe', // Usually your GitHub org/user name.
  projectName: 'johnsafe.github.io', // Usually your repo name.
  // 百度统计脚本
  scripts: [
    {
      src: 'https://hm.baidu.com/hm.js?dd6bceaa31549c06f7b0488133c25b7b',
      async: true,
    },
  ],

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
          docItemComponent: "@theme/ApiItem",
          rehypePlugins: [],
          routeBasePath: "/" ,
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          disableVersioning: false,
          includeCurrentVersion: true,
          breadcrumbs: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://atomgit.com/OpenAtomFoundation/AtomGit-Docs/blob/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        // specs: [
        //   {
        //     spec: "https://redocly.github.io/redoc/openapi.yaml",
        //     route: "/api/",
        //   },
        // ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#1890ff",
        },
      },
    ]
  ],
  plugins: [
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        editCurrentVersion: false,
        sidebarPath: require.resolve('./sidebarsAPI.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
        docItemComponent: "@theme/ApiItem",
      }),
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          petstore_versioned: {
            specPath: "openAPI/petstore.yaml",
            outputDir: "docs/openAPI/petstore_versioned", // No trailing slash
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            version: "2.0.0", // Current version
            label: "v2.0.0", // Current version label
            baseUrl: "/openAPI/petstore_versioned/swagger-petstore-yaml", // Leading slash is important
            versions: {
              "1.0.0": {
                specPath: "openAPI/petstore-1.0.0.yaml",
                outputDir: "docs/openAPI/petstore_versioned/1.0.0", // No trailing slash
                label: "v1.0.0",
                baseUrl: "/openAPI/petstore_versioned/1.0.0/swagger-petstore-yaml", // Leading slash is important
              },
            },
          },
          petstore: {
            specPath: "openAPI/petstore.yaml",
            proxy: "https://cors.pan.dev",
            outputDir: "docs/openAPI/petstore",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            template: "api.mustache", // Customize API MDX with mustache template
            downloadUrl:
              "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-openapi-docs/main/demo/openAPI/petstore.yaml",
          },
          cos: {
            specPath: "openAPI/openapi-cos.json",
            outputDir: "docs/openAPI/cos",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          burgers: {
            specPath: "openAPI/food/burgers/openapi.yaml",
            outputDir: "docs/openAPI/food/burgers",
          },
          yogurt: {
            specPath: "openAPI/food/yogurtstore/openapi.yaml",
            outputDir: "docs/openAPI/food/yogurtstore",
          },
        },
      },
    ],
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
    "docusaurus-theme-openapi-docs"
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
          // {
          //   to: '/api/', 
          //   label: 'API文档',
          //   position: 'left'
          // },
          {
            type: "dropdown",
            label: "Demos",
            position: "left",
            items: [
              {
                label: "API Zoo",
                to: "/category/petstore-api",
              },
              {
                label: "Petstore (versioned)",
                to: "/category/petstore-versioned-api",
              },
            ],
          },
          // {to: '/oauth/', label: '第三方接入', position: 'left'},
          // {to: '/blog', label: '博客', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right'
          },
          {
            href: 'https://atomgit.com/OpenAtomFoundation/AtomGit-Docs/issues',
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
        style: 'light',//[dark, light]
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
                to: '/oauth/',
              },
              {
                label: 'Git 入门',
                to: '/git',
              }
            ],
          },
          {
            title: '官方社区',
            items: [
              {
                label: '开放原子基金会',
                href: 'https://www.openatom.org/',
              },
              {
                label: 'AtomGit',
                href: 'https://atomgit.com/OpenAtomFoundation/',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: 'CSDN',
                href: 'https://www.csdn.net/',
              },
              {
                label: 'GitCode',
                href: 'https://gitcode.net/',
              },
              {
                label: '阿里云',
                href: 'https://developer.aliyun.com/',
              },
            ],
          },
          {
            title: '学习资料',
            items: [
              {
                label: 'Git 入门',
                to: '/git',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AtomGit, Inc. Built with Docusaurus.`,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;