---
id: repo-config # 唯一ID
slug: /repo/config/general # URL(最多三级结构，便于seo 和理解，遵循doc/资源/具体说明项 的原则)
sidebar_label: Repo Setting # 在sidebar 中的名称
title: Repo Setting # 页面标题
tags:
  - repo
  - repo setting
hide_title: false
---

### Basic Info

As a repository maintainer (including inherited organization maintainer), you can modify the basic information of the repository, including name, description, cover, and visibility, so that other developers can find the repo faster.

![](./img/28.jpg)

### High-risk operations

![](./img/29.jpg)

There are two types of visibility:

- Public: visible to anyone including anonymous
- Private: visible only to code base members and members of the organization to which they belong

> The permissions of organization members will be inherited to the repositories under it. That is, if you are a developer in the organization, you will also have developer permissions in the repository under it.

![](./img/30.jpg)

#### Change repository path

As a developer, a common access path is to directly enter the URL for access. A meaningful Path can enable developers to enter the URL more quickly to find the repo, and quickly find the corresponding target repo under their respective Workspace.

#### Transfer repository

You can quickly move the repository to another group for easier management.

#### Archive repository

If a repository is no longer maintained, as a repository maintainer, you can archive the repository. After archiving, the repository becomes read-only and cannot be commited or changed.
After the repository is archived, it can be unarchived and the access status of the repository returns to normal.

#### Delete repository

As a repository maintainer, you can manage your own repository. If the repository will never be used again, you can delete it.

### Storage management

Storage GC：As a repository maintainer，when the repository is close to its storage limit, you can use Repository GC to compress repository objects, reduce disk usage, and improve the efficiency of reading and writing the repository.
