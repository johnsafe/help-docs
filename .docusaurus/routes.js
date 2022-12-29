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
    path: '/en/docs/tags',
    component: ComponentCreator('/en/docs/tags', '867'),
    exact: true
  },
  {
    path: '/en/docs/tags/上手',
    component: ComponentCreator('/en/docs/tags/上手', 'ba1'),
    exact: true
  },
  {
    path: '/en/docs/tags/演示',
    component: ComponentCreator('/en/docs/tags/演示', '175'),
    exact: true
  },
  {
    path: '/en/docs/tags/用户-ssh-密钥设置',
    component: ComponentCreator('/en/docs/tags/用户-ssh-密钥设置', '5a3'),
    exact: true
  },
  {
    path: '/en/docs/tags/用户认证',
    component: ComponentCreator('/en/docs/tags/用户认证', '601'),
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
    component: ComponentCreator('/en/docs', '66e'),
    routes: [
      {
        path: '/en/docs/category/用户',
        component: ComponentCreator('/en/docs/category/用户', 'b07'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/category/组织',
        component: ComponentCreator('/en/docs/category/组织', 'dc8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/introduction',
        component: ComponentCreator('/en/docs/introduction', 'a6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/orgnization/congratulations',
        component: ComponentCreator('/en/docs/orgnization/congratulations', '922'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/user/sshkey',
        component: ComponentCreator('/en/docs/user/sshkey', '9ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/user/verify',
        component: ComponentCreator('/en/docs/user/verify', '5e5'),
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
