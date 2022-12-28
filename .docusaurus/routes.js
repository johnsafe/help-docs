import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/blog',
    component: ComponentCreator('/en/blog', 'dd5'),
    exact: true
  },
  {
    path: '/en/blog/archive',
    component: ComponentCreator('/en/blog/archive', '7a2'),
    exact: true
  },
  {
    path: '/en/blog/first-blog-post',
    component: ComponentCreator('/en/blog/first-blog-post', '7c8'),
    exact: true
  },
  {
    path: '/en/blog/long-blog-post',
    component: ComponentCreator('/en/blog/long-blog-post', '077'),
    exact: true
  },
  {
    path: '/en/blog/mdx-blog-post',
    component: ComponentCreator('/en/blog/mdx-blog-post', '409'),
    exact: true
  },
  {
    path: '/en/blog/tags',
    component: ComponentCreator('/en/blog/tags', '68f'),
    exact: true
  },
  {
    path: '/en/blog/tags/docusaurus',
    component: ComponentCreator('/en/blog/tags/docusaurus', '228'),
    exact: true
  },
  {
    path: '/en/blog/tags/facebook',
    component: ComponentCreator('/en/blog/tags/facebook', 'f8e'),
    exact: true
  },
  {
    path: '/en/blog/tags/hello',
    component: ComponentCreator('/en/blog/tags/hello', '967'),
    exact: true
  },
  {
    path: '/en/blog/tags/hola',
    component: ComponentCreator('/en/blog/tags/hola', '795'),
    exact: true
  },
  {
    path: '/en/blog/welcome',
    component: ComponentCreator('/en/blog/welcome', '406'),
    exact: true
  },
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', '174'),
    exact: true
  },
  {
    path: '/en/search',
    component: ComponentCreator('/en/search', '127'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', 'e23'),
    routes: [
      {
        path: '/en/docs/category/tutorial---basics',
        component: ComponentCreator('/en/docs/category/tutorial---basics', '47e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/category/tutorial---basics-1',
        component: ComponentCreator('/en/docs/category/tutorial---basics-1', '3cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/category/tutorial---extras',
        component: ComponentCreator('/en/docs/category/tutorial---extras', '134'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/category/tutorial---extras-1',
        component: ComponentCreator('/en/docs/category/tutorial---extras-1', 'cfe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/i18n/en/intro',
        component: ComponentCreator('/en/docs/i18n/en/intro', '8fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/i18n/en/tutorial-basics/congratulations',
        component: ComponentCreator('/en/docs/i18n/en/tutorial-basics/congratulations', '3a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/i18n/en/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/en/docs/i18n/en/tutorial-basics/create-a-blog-post', '383'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/i18n/en/tutorial-basics/create-a-document',
        component: ComponentCreator('/en/docs/i18n/en/tutorial-basics/create-a-document', '1ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/i18n/en/tutorial-basics/create-a-page',
        component: ComponentCreator('/en/docs/i18n/en/tutorial-basics/create-a-page', 'd5a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/i18n/en/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/en/docs/i18n/en/tutorial-basics/deploy-your-site', '936'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/i18n/en/tutorial-basics/markdown-features',
        component: ComponentCreator('/en/docs/i18n/en/tutorial-basics/markdown-features', '953'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/i18n/en/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/en/docs/i18n/en/tutorial-extras/manage-docs-versions', 'de8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/i18n/en/tutorial-extras/translate-your-site',
        component: ComponentCreator('/en/docs/i18n/en/tutorial-extras/translate-your-site', '4a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/intro',
        component: ComponentCreator('/en/docs/intro', 'fb4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/en/docs/tutorial-basics/congratulations', '8bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/en/docs/tutorial-basics/create-a-blog-post', '5c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/en/docs/tutorial-basics/create-a-document', 'e5b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/en/docs/tutorial-basics/create-a-page', '3b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/en/docs/tutorial-basics/deploy-your-site', '50b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/en/docs/tutorial-basics/markdown-features', '590'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/en/docs/tutorial-extras/manage-docs-versions', 'd3c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/en/docs/tutorial-extras/translate-your-site', '7c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', '936'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
