---
id: pats # 唯一ID
slug: /user/pats # URL(最多三级结构，便于seo 和理解，遵循doc/资源/具体说明项 的原则)
description: 个人访问密钥设置 # 描述
title: 个人访问密钥 # 页面标题
hide_title: true
tags:
  - 用户个人访问密钥
---

个人访问密钥可用于用户与 AtomGit OpenAPI 接口的调用。

### 创建个人访问密钥

个人访问密钥的数量没有限制，但同一个用户的全部访问密钥都共享 API 调用的[频率限制](http://api#limit)，你可以通过以下方式创建你的个人访问密钥：

1. 登录 AtomGit
1. 点击右上角的头像，然后选择**个人设置**
1. 在用户设置菜单上，选择**访问密钥**
1. 设置密钥的名称和可选的到期日期
1. 选择密钥的作用范围及权限
1. 单击【创建】按钮
1. 创建完成后，请妥善保管你的【个人访问密钥】，该秘钥仅在创建成功后显示一次，离开当前页面后，将不再展示

### 撤销个人访问密钥

你可以随时通过单击个人访问密钥的【删除】按钮来撤销你的个人访问密钥

### 个人访问密钥的作用范围

你可以使用一个或者多个作用范围来创建个人访问密钥，以下是 AtomGit 提供的作用范围(scope)以及相关权限：

| 作用范围 | 说明 |
| --- | --- |
| `repo` | 代码库相关的全部 API 接口 |
| `admin:repo_issues` | 代码库 issue 相关的全部 API 接口 |
| `admin:org_issues` | 组织 issue 相关的全部 API 接口 |
| `workflow` |  流水线相关的全部 API 接口 |
| `write:packages` |  制品库的全部 API 接口的写权限 |
| `delete:packages` |  删除制品库的 API 接口权限 |
| `admin:org` | 组织相关的全部 API 接口 |
| `admin:public_key` | 用户 SSH 公钥的 API 接口 |
| `admin:repo_hook` | 代码库 webhook API 接口 |
| `admin:org_hook` | 组织 webhook API 接口 |
| `notifications` | 用户消息通知的 API 接口 |
| `user` | 用户相关的全部 API 接口 |
| `delete_repo` | 删除代码库的 API 接口 |
| `audit_log` | 审计日志的 API 接口 |
| `project` | 看板的 API 接口 |
| `admin:gpg_key` | GPG 密钥的 API 接口 |
| `admin:ssh_signing_key` | SSH 签名密钥的 API 接口 |