---
id: tag # 唯一ID
slug: /repo/tag # URL(最多三级结构，便于seo 和理解，遵循doc/资源/具体说明项 的原则)
sidebar_label: Tag # 在sidebar 中的名称
title: Tag # 页面标题
tags:
  - repo
  - tag
hide_title: false
---

### Tag

Tag is a version at a certain point in time. Tags are usually used to identify important versions of the repository, such as creating tags at project milestones.
Git uses two main types of tags: lightweight tags and annotated tags. For more information about Git tags, please refer to Git Basics - Tagging in the Git manual.

### View tags

There are two entrances to view tags: "tag" and "submit".

#### View in "tag"

You can view the tag list on the "tag" page.
Note tag displays the tag name and description information.
Lightweight tags appear as tag names and commits.

![](./img/23.jpg)

You can filter the search by tag name.

#### View in "Submit"

View the tag in the submission record:
![](./img/22.jpg)

### Create tag

The developer role has permission to create tags.

Click "New tag" in "tag", enter the tag name, specify the creation source, enter the description information, and then click "Confirm":

![](./img/21.jpg)

After creation, it will be displayed in the tag list.

### Delete tag

Developers and above can delete tags.
Select the tag to be deleted in the tag list, click the "Delete" icon, and click "Confirm" to complete the deletion of the selected tag:
![](./img/24.jpg)
