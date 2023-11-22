---
id: revert # 唯一ID
slug: /repo/commit/revert # URL(最多三级结构，便于seo 和理解，遵循doc/资源/具体说明项 的原则)
sidebar_label: Revert # 在sidebar 中的名称
title: Revert # 页面标题
tags:
  - Commit
  - Revert
hide_title: false
---

The function of the `git revert` command is to undo an operation and roll back the previous commit with a new commit.

Click the submission name to expand the submission details, and click "..." in the upper right corner to revert the current submission:
![](./img/05.jpg)

In the pop-up window, select the target branch you want to submit:
![](./img/09.jpg)

It is recommended to check the box to create a new branch and merge the code after reviewing it through a change request to ensure that the merge process is compliant and traceable:
![](./img/10.jpg)

If you do not choose to use change requests, you can also directly push the current submission to the target branch to complete the revert:
![](./img/11.jpg)
