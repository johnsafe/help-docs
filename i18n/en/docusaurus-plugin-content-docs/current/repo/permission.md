---
id: permission # 唯一ID
slug: /permission # URL(最多三级结构，便于seo 和理解，遵循doc/资源/具体说明项 的原则)
sidebar_label: Permission # 在sidebar 中的名称
description: Permission # 描述
title: Permission # 页面标题
tags:
  - Permission
hide_title: true
---

## Visibility

Repository can restrict access by setting visibility.

### Repository visibility

- Private: Only members of the repository and parent organization can view the repository, other users cannot access the path
- Public: visible to anyone including anonymous

## Role

Users can obtain corresponding capabilities by configuring different permissions in specific repositories.
There are three types of user roles in the repository: maintainer, developer, and viewer. The specific description is as follows.

### Repository roles

- maintainer: Can read, clone, push and add member permissions to the repository.
- Developer: can read, clone, and push to the repository.
- Viewer: can read and clone the repository.

If the repository belongs to an organization, the repository inherits the user's role in the organization. If a user is assigned different roles in both the repository and the organization, the highest permission level is used as the user's role in the repository.

For example, if a user is on library b under organization a, organization a is the maintainer, and library b is a developer, then the final authority in library b is the maintainer.

## Permissions

### Repository Permissions

|  operate   | viewer  | developer  | maintainer  |
|  ----  | ----  |  ----  |  ----  |
| view repository  | ✔️ | ✔️   | ✔️  |
| clone / pull / download  | ✔️ | ✔️  | ✔️ |
| push （create / upload / edit）  | × | ✔️  | ✔️ |
| view commits  | ✔️ | ✔️  | ✔️ |
| comment commits  | ✔️ | ✔️  | ✔️ |
| create branch | × |  ✔️  | ✔️ |
| view branch |  ✔️ | ✔️  | ✔️ |
| delete non-protected branch  | × |  ✔️  | ✔️ |
| delete protected branch  | × | ×  | × |
| force push to protect branch  | × | ×  | × |
| create / edit cr | × |  ✔️  | ✔️ |
| view /comment cr  |  ✔️ | ✔️  | ✔️ |
| allow cr  | × |  ✔️  | ✔️ |
| Merge  | × |  ✔️  | ✔️ |
| close / reopen mr  | × |  ✔️  | ✔️ |
| create / edit tag  | × |  ✔️  | ✔️ |
| delete Tag | × |  ✔️  | ✔️ |
| view Tag  |  ✔️ | ✔️  | ✔️ |
| view repository members  |  ✔️ | ✔️  | ✔️ |
| manage repository members  | × | ×  | ✔️ |
| edit repository（name / desc / cover / visibility）  |× | ×  | ✔️ |
| repository danger actions（edit repo-path，archive / unarchive,delete  | × | ×  | ✔️ |
| manage GC | × | ×  | ✔️ |
| branch setting（edit default branch,edit protected branch）  | × | ×  | ✔️ |
| mr setting | × | ×  | ✔️ |
| Webhooks setting  | × | ×  | ✔️ |
| Deployment key settings  | × | ×  | ✔️ |
