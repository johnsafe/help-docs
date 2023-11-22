---
id: label # 唯一ID
slug: /repo/label # URL(最多三级结构，便于seo 和理解，遵循doc/资源/具体说明项 的原则)
sidebar_label: Label # 在sidebar 中的名称
title: Label # 页面标题
tags:
  - label
  - issue
hide_title: true
---

## Label

Label is one of the important contents of [Kanban]. It can be used to manage [Issue](issue) and [Change request](change-request). Through the marking function, you can easily implement:

- Categorize Issues and Change Requests using colors and text (e.g. `bug`, `New Features` or `Documentation` etc.)
- Filter and filter Issues and Change Requests by labels

### Create label

AtomGit provides two different types of labels: repository label and organization label, among which:

- Repository label, which can only be used for specific repository, and is suitable for relatively independent projects (such as personal projects)

- Organization label, organization label can be applied to all repositories under the organization, and newly created repositories under the organization will inherit the organization label (of course you can also use the repository label in a single repository)

> Note: You need to be at least the `maintainer` of the code base or organization to use functions such as create , edit, and delete labels.

#### Create repository label

1. Open the Issue page of the code base
1. Click the [Labels] button
1. Click the [New Label] button and fill in the relevant information of the label
    - label name
    - label description, used to describe the specific function of the label in detail
    - Label color, you can choose the system preset color or enter the hexadecimal color code
1. Click [New Label] to save and create a new label

![新建代码库label](./img/new-repo-label.png)

#### Create Organization label

1. Open the organization settings page
1. Click the [Labels] option
1. Click the [New Organization Label] button and fill in the relevant information of the label
    - label name
    - label description, used to describe the specific function of the label in detail
    - Label color, you can choose the system preset color or enter the hexadecimal color code
1. Click [New Organization Label] to save and create a new organization label.

![新建组织label](./img/new-org-label.png)

### Import system preset label

When the content of the code base label and organization label is empty, you can also use **Import system preset Label** to quickly create a set of labels.

![导入系统预设 label](./img/ues-system-label.png)

### Relate label

On the issue page, you can associate a label with the issue through the setting button [Labels] on the right.

> Note: You need at least `developer` permissions of the code base or organization to use functions such as associating labels and removing labels.

![关联label](./img/issue-link-label.gif)
