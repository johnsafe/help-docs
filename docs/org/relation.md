---
id: org-relation
slug: relate
title: 关联组织 # 页面标题
sidebar_label: 关联组织
hide_title: true
---

## 关联组织

在 AtomGit 中，允许不同的组织间进行关联，目前只支持「父组织-子组织」这种单向、单层级的关联：

- 某个组织可以作为子组织关联唯一的一个父组织
- 某个组织如果已经存在关联的子组织，则无法再关联、申请关联父组织

在存在关联关系的组织中，父组织会有一个【组织】的模块以及【组织成员】的列表页面，用于展现该父组织的子组织信息；子组织会有一个【组织】模块，用于展现该子组织的父组织信息。

此外，你可以通过以下方式解除已存在的组织关联关系：

- 子组织退出已关联的父组织
- 父组织移除已关联的子组织

### 申请组织关联

你可以通过一下方式来申请组织关联（关联父组织、关联子组织）

1. 打开【组织-组织设置】页面
2. 点击【成员组织】
3. 点击【添加】按钮
4. 选择申请关联的类型（关联父组织、关联子组织）
5. 输入组织名称、组织 Path 搜索要申请关联的组织
6. 点击【确定】按钮，提交组织关联申请
7. 提交申请之后，系统会向被申请的组织管理员发送邮件通知，在管理员通过申请后，双方组织间即可建立组织关联关系

> 注1： 在点击【确定】后，系统会检查当前申请组织以及被申请组织现有的组织关联关系，以确保双方组织间可以形成单向、单层级的组织关联。
> 注2： 如果当前组织是【子组织】则无法再进行关联申请，【添加】按钮将不可用

### 查看组织关联申请

当有其他组织向你的组织发出了关联申请后，我们将会通过电子邮件通知的方式告知你组织的所有管理员，管理员可以通过以下两种方式查看并处理申请：

1. 点击邮件正文中的【查看申请】链接，跳转至申请详情页，详情页面中包括申请组织的相关信息、申请关联的关系类型
2. 组织管理员进入【组织-组织设置-成员组织】页面，并点击【申请】按钮，进入申请列表并查看申请

在第 2 种方式中，申请列表中是与当前组织相关的所有组织关联申请，包括：

- 当前组织发起但还未通过的组织关联申请，支持【撤销申请】操作
- 其它组织向当前组织发起但还未处理的组织关联申请，支持【查看申请】并进入到申请详情页中进行处理操作（通过申请或拒绝申请）

### 解除关联

你可以通过以下方式来解决已经存在的组织关联关系：

1. 打开【组织-组织设置】页面
2. 点击【成员组织】按钮，查看组织成员列表
3. 如果当前组织是父组织，列表中则会列出当前组织关联的子组织，你可以点击【移除成员】来解除与某一个或多个子组织的关联关系
4. 如果当前组织是子组织，列表中会列出当前子组织关联的唯一父组织，你可以点击【退出组织】来解除与该父组织的关联关系
