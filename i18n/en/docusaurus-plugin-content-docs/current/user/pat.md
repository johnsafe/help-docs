---
id: pats # 唯一ID
slug: /user/pats # URL(最多三级结构，便于seo 和理解，遵循doc/资源/具体说明项 的原则)
description: personal access token # 描述
title: Personal Access Token # 页面标题
hide_title: true
tags:
  - personal access token
---

Personal access tokens can be used for user calls to the AtomGit OpenAPI interface.

### Create personal access token

There is no limit on the number of personal access tokens, but all access keys for the same user share the [frequency limit] (<http://api#limit>) of API calls. You can create your personal access token in the following ways:

1. Log in to AtomGit
1. Click your avatar in the upper right corner and select **Personal Settings**
1. On the User Settings menu, select **Access Keys**
1. Set the key's name and optional expiration date
1. Select the scope and permissions of the key
1. Click the [Create] button
1. After creation, please keep your [personal access token] properly. This key will only be displayed once after successful creation. It will no longer be displayed after you leave the current page.

### Revoke personal access token

You can revoke your personal access token at any time by clicking the [Delete] button of the personal access token

### Scope of PAT

You can use one or more scopes to create a personal access token. The following are the scopes and related permissions provided by AtomGit:

| scope | remark |
| --- | --- |
| `repo` | All API interfaces related to the code base |
| `admin:repo_issues` | All API interfaces related to code base issues |
| `admin:org_issues` | All API interfaces related to organization issues |
| `workflow` | All API interfaces related to pipelines |
| `write:packages` | Write permission for all API interfaces of the product library |
| `delete:packages` | Delete the API interface permissions of the product library |
| `admin:org` | All organization-related API interfaces |
| `admin:public_key` | API interface for user SSH public key |
| `admin:repo_hook` | Code base webhook API interface |
| `admin:org_hook` | Organization webhook API interface |
| `notifications` | API interface for user message notification |
| `user` | All user-related API interfaces |
| `delete_repo` | Delete the API interface of the code base |
| `audit_log` | Audit log API interface |
| `project` | Kanban API interface |
| `admin:gpg_key` | API interface for GPG keys |
| `admin:ssh_signing_key` | API interface for SSH signing key |
