---
id: app-pages # 唯一ID
slug: /app/pages # URL(最多三级结构，便于seo 和理解，遵循doc/资源/具体说明项 的原则)
sidebar_label: 介绍 # 在sidebar 中的名称
title: AtomGit Pages 介绍 # 页面标题
tags:
  - app
  - AtomGit Pages
hide_title: false
---

## pages 功能介绍
AtomGit Pages 是 AtomGit 提供的一项静态网页托管服务，它允许用户直接通过 AtomGit 仓库来托管和发布自己的网站。无论是个人博客、项目文档、产品展示还是其他任何类型的静态网页，都可以轻松利用 AtomGit Pages 进行托管和分享。

AtomGit Pages 具有以下特点：
### 1.简单易用：
无需额外的服务器或托管服务，只需在 AtomGit 上创建一个仓库，并将网页文件上传至该仓库，即可通过特定的 URL 访问你的网站。

###  2.自定义域名：
AtomGit Pages 支持自定义域名绑定，但由于域名备案和安全审核等问题，此功能暂不开放，如确有自定义域名需求，可自行通过 cname 等方式解决。

###  3.支持多种主题和模板：
各个社区中有大量的开源主题和模板可供选择，你可以根据自己的需求选择合适的主题或模板，快速搭建出美观且功能丰富的网站。

###  4.版本控制：
作为 AtomGit 的一部分，AtomGit Pages 自然继承了 Git 的版本控制功能。你可以方便地追踪网站的修改历史，进行协作开发，以及回滚到之前的版本。

###  5.高度可扩展性：
虽然 AtomGit Pages 主要用于托管静态网页，但你可以通过集成 JavaScript 框架、CSS 样式表等技术来增强网站的功能和交互性。此外，你还可以利用 AtomGit 的 API 进行更高级的数据交互和操作。

AtomGit Pages 是一个功能强大且易于使用的静态网页托管服务，无论你是个人开发者还是团队项目，都可以通过它轻松搭建和发布自己的网站。

###  注意：
AtomGit Pages 目前还没有集成自动构建能力，这意味着 AtomGit pages 暂时只支持 html 格式的 pages 服务，如果您的 pages 项目是基于 Hugo、VuePress、MdBook 等工具，暂时需要您在自己的可编译环境中进行打包编译，然后将生成的 html 内容单独作为 Pages 仓库推送到 AtomGit 平台

## AtomGit Pages 使用方法：
### 组织 page 仓库：

1.创建或选择组织（如 A 组织）下的一个仓库（如 B 仓库，B仓库需为空仓）作为 pages 仓库

2.将本应用安装到 A 组织的 B 仓库

3.将编译好的内容（dist 或build 等编译结果目录，入口文件为 index.html）初始化为单独的 git 仓，推送到 B 仓库

4.访问 pages 站点，地址规则为： https://A.atomgit.net/B

### 个人 pages 仓库：

1.创建或选择个人名下的一个仓库（如 B 仓库，B仓库需为空仓）作为 pages 仓库

2.将本应用安装到个人名下的 B 仓库

3.将编译好的内容（dist 或build 等编译结果目录，入口文件为 index.html）初始化为单独的 git 仓，推送到 B 仓库

4.访问 pages 站点，地址规则为： https://username.atomgit.net/B (username为用户的用户名，如 john， https://john.atomgit.net/docs) 

您也可在仓库的【设置】-【pages】中查看和管理 pages 地址和设置信息

注意：根据相关规定，网站服务需要进行 icp 备案，atomgit.net 域名备案信息为：京ICP备2020036654号-9 ，使用 pages 服务的静态站点需自行添加此备案信息至所有页面。

## 👮重要提醒：

为了确保 AtomGit Pages 服务的健康、安全和合规运行，我们要求所有使用 AtomGit Pages 的用户必须遵守以下规定和要求：

### 一、遵守法律法规

使用 AtomGit Pages 的用户必须遵守当地以及国际相关法律法规，包括但不限于知识产权法、个人信息保护法、网络安全法等。禁止利用 AtomGit Pages 传播或分享任何违法违规的内容。

### 二、维护内容合规性

用户所托管和发布的网站内容必须合法、健康、积极，不得包含色情、暴力、恐怖、恶意软件、侵权盗版、虚假广告等违法违规内容。我们强烈要求用户自行审核并确保其内容的合规性。

### 三、尊重他人权益

用户在使用 AtomGit Pages 时，应尊重他人的知识产权、隐私权等合法权益。禁止未经授权地复制、传播或利用他人的作品、信息或数据。四、不得用于恶意行为

禁止利用 AtomGit Pages 进行任何形式的网络攻击、钓鱼、诈骗等恶意行为。任何试图破坏他人网站或服务的行为都是严格禁止的。五、及时处理投诉和举报

我们鼓励用户积极举报发现的违法违规行为。一旦收到相关投诉或举报，我们将立即展开调查，并根据情况采取相应的处理措施。

### 四、积极配合监管

用户应积极配合相关监管机构的工作，按要求提供所需的信息和协助，确保 AtomGit Pages 服务的合规运营。请所有使用 AtomGit Pages 的用户严格遵守以上要求，共同维护一个安全、健康、合规的网络环境。如有违反，我们将依法依规处理，并保留追究法律责任的权利。

