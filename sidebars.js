/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const petstoreVersions = require("./docs/openAPI/petstore_versioned/versions.json");
const {
  versionSelector,
  versionCrumb,
} = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils");
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: '用户',
      link: {
        type: 'generated-index',
        title: '用户',
        slug: 'user',
        description:
          "帮助用户快速完成个人设置",
        keywords: ['users'],
        // image: '/img/docusaurus.png',
      },
      items: [
        'user/2fa',
        'user/user-sshkey',
        'user/user-gpgkey',
        'user/user-verify',
        'repo/repo-migrate',
        {
          type: 'category',
          label: 'Git',
          link: {
            type: 'generated-index',
            title: 'Git 入门',
            slug: 'git',
            keywords: ['git'],
          },
          items: [
            'user/git-install',
            'user/git-config',
            'user/git-quickstart',
            'user/git-advanced',
          ],
        },
        'user/pats',
      ],
    },
    {
      type: 'category',
      label: '代码库',
      link: {
        type: 'generated-index',
        title: '代码库',
        slug: 'repo',
        description:
          "代码库使用及设置",
        keywords: ['repos'],
      },
      items: [
        'repo/files',
        'repo/branch',
        'repo/tag',
        'repo/release',
        {
          type: 'category',
          label: '提交',
          link: {
            type: 'generated-index',
            title: '提交',
            slug: 'commit',
            keywords: ['commit'],
          },
          items: [
            'repo/commit',
            'repo/cherry-pick',
            'repo/revert',
          ],
        },
        'repo/change-request',
        // 'repo/issue',
        {
          type: 'category',
          label: 'Issue',
          link: {
            type: 'generated-index',
            title: 'Issue',
            slug: 'issue',
            keywords: ['issue'],
          },
          items: [
            'repo/issue',
            'repo/label',
            'repo/milestone',
            'repo/issue_template',
          ],
        },
        'user/repo-members',
        'repo/permission',
        {
          type: 'category',
          label: '代码库设置',
          link: {
            type: 'generated-index',
            title: '代码库设置',
            slug: 'repo-config',
            keywords: ['config'],
          },
          items: [
            'repo/repo-config',
            'repo/pr-config',
            'repo/br-config',
            'repo/push-rules',
            'repo/webhooks',
          ],
        },
        {
          type: 'category',
          label: '研发模式',
          link: {
            type: 'generated-index',
            title: '研发模式',
            slug: 'git-pr-mode',
            keywords: ['git-pr-mode'],
          },
          items: [
            'repo/git-pr-mode',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '组织',
      link: {
        type: 'generated-index',
        title: '组织',
        slug: 'group',
        description:
          "组织使用及设置",
        keywords: ['orgs'],
      },
      items: [
        'org/new-org',
        'org/org-members',
        'org/org-settings',
        'org/org-relation',
        'org/cla',
        'org/org-enterprise',
      ],
    },
    {
      type: 'category',
      label: '应用',
      link: {
        type: 'generated-index',
        title: '应用',
        slug: 'app',
        description:
          "应用开发以及开放市场",
        keywords: ['app'],
      },
      items: [
        'app/app-create',
        'app/app-market',
        'app/app-demo',
        {
          type: 'category',
          label: '平台应用',
          link: {
            type: 'generated-index',
            title: '平台应用',
            slug: 'platform-applications',
            description:
              "所有关于平台应用的信息",
            keywords: ['platform', 'applications'],
          },
          items: [
            {
              type: 'category',
              label: 'Pages',
              link: {
                type: 'generated-index',
                title: 'Pages',
                slug: 'pages',
                description:
                  "所有关于Pages的信息",
                keywords: ['pages'],
              },
              items: [
                'app/app-pages',
                'pages/app-help'
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '安全',
      link: {
        type: 'generated-index',
        title: '安全',
        slug: 'security',
        description:
          "关于扫描结果json文件内容结构的说明",
        keywords: ['securitys'],
      },
      items: [
        'security/securityUse',
        'security/reporter',
      ],
    },
    {
      type: 'category',
      label: 'AI',
      link: {
        type: 'generated-index',
        title: 'AI',
        slug: 'ai',
        description:
          "关于AtomGit Ai的使用说明",
        keywords: ['ais'],
      },
      items: [
        'ai/aiUse',
      ],
    },
    {
      type: 'category',
      label: '用户协议',
      link: {
        type: 'generated-index',
        title: '用户协议',
        slug: 'terms',
        description:
          "AtomGit 平台用户使用协议",
        keywords: ['agreements'],
      },
      items: [
        'agreements/declare',
        'agreements/tos',
        'agreements/privacy',
      ],
    },
    {
      type: 'category',
      label: '更新日志',
      link: {
        type: 'generated-index',
        title: '更新日志',
        slug: 'changelogs',
        description:
          "AtomGit 平台更新日志",
        keywords: ['change log'],
      },
      items: [
        'changelogs/v0.9.0'
      ],
    },
  ],
  api: [
    {
      type: "category",
      label: "开放接口",
      link: {
        type: "generated-index",
        title: "AtomGit OpenAPI 文档",
        description:
          "欢迎使用 AtomGit OpenAPI 开发者帮助文档，为了降低开发者的学习、使用成本，也为了更好的帮助各位开发者将自己的第三方应用 API 接口集成到 AtomGit 上，AtomGit OpenAPI接口的使用方式、Url、接口参数及返回值均与主流代码托管平台（eg：GitHub）保持一致。",
        slug: "/category/api",
      },
      items: require("./docs/openAPI/api_versioned/sidebar.js"),
    },
    /* {
       type: "category",
       label: "Petstore",
       link: {
         type: "generated-index",
         title: "Petstore API",
         description:
           "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
         slug: "/category/petstore-api",
       },
       items: require("./docs/openAPI/petstore/sidebar.js"),
     },*/
    /*   {
         type: "category",
         label: "Cloud Object Storage",
         link: {
           type: "generated-index",
           title: "Cloud Object Storage API",
           slug: "/category/cos-api",
         },
         items: require("./docs/openAPI/cos/sidebar.js"),
       },
       {
         type: "category",
         label: "Burgers",
         link: {
           type: "generated-index",
           title: "Burger API",
           slug: "/category/food-api",
         },
         items: [
           {
             type: "autogenerated",
             dirName: "openAPI/food/burgers", // '.' means the current docs folder
           },
         ],
       },*/
    /*    {
          type: "category",
          label: "Yogurt Store",
          link: {
            type: "generated-index",
            title: "Yogurt Store API",
            slug: "/category/yogurt-api",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "openAPI/food/yogurtstore", // '.' means the current docs folder
            },
          ],
        },*/
  ],
  "petstore-2.0.0": [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(petstoreVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v2.0.0`),
    },
    {
      type: "category",
      label: "Petstore",
      link: {
        type: "generated-index",
        title: "Petstore API (latest)",
        description:
          "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/category/petstore-versioned-api",
      },
      items: require("./docs/openAPI/petstore_versioned/sidebar.js"),
    },
  ],

  "petstore-1.0.0": [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(petstoreVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v1.0.0`),
    },
    {
      type: "category",
      label: "AtomGit-Api文档",
      link: {
        type: "generated-index",
        title: "AtomGit-Api文档(v1.0.0)",
        description:
          "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/category/petstore-api-1.0.0",
      },
      items: require("./docs/openAPI/petstore_versioned/1.0.0/sidebar.js"),
    },
  ],
  oauth: [
    {
      type: 'autogenerated',
      dirName: 'oauth',
    },
  ],
};

module.exports = sidebars;
