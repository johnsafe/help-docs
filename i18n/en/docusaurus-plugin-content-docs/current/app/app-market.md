---
id: app-market # 唯一ID
slug: /app/market # URL(最多三级结构，便于seo 和理解，遵循doc/资源/具体说明项 的原则)
sidebar_label: App Market # 在sidebar 中的名称
title: App Market # 页面标题
tags:
  - app
  - app market
hide_title: false
---

## App Market

The platform provides an open market for users to choose and install applications suitable for their own projects, and will continue to build the richness of market applications.
![](./img/07.jpg)

Click the application card to enter the application details:
![](./img/08.jpg)

### App Install

1. Enter the application details, click "Free to use", and follow the prompts to select the space you want to install:
![](./img/09.jpg)

2. Enter the installation confirmation page and confirm the installation and authorization information:
![](./img/10.jpg)

* Effective warehouse scope: Controls the scope of code base data that the application can obtain.
If you select some code libraries, you need to manually select the libraries that can obtain data and add them to the list:
![](./img/11.jpg)

* Confirmation of resource and user permissions: Declare according to the permissions required when the application is accessed, and complete the application installation after confirmation.

After the installation is completed, it will jump to the callback address filled in by the application. If the application also requires Oauth user authorization, it will jump to the third-party application to enter the Oauth authorization process.

After the application installation authorization is completed, it can operate according to the capabilities provided by the application itself.

* For WebIDE applications, after installation is complete, you can start the online coding service through the WebIDE button in the code library:
![](./img/12.jpg)

* For example, for continuous integration applications, after the installation is completed, the check result status can be written back in the code base for submissions and change requests to assist in code review:
![](./img/13.jpg)
![](./img/14.jpg)
