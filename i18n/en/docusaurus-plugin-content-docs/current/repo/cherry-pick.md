---
id: cherry-pick # 唯一ID
slug: /repo/commit/cherry-pick # URL(最多三级结构，便于seo 和理解，遵循doc/资源/具体说明项 的原则)
sidebar_label: Cherry-pick # 在sidebar 中的名称
title: Cherry-pick # 页面标题
tags:
  - Cherry-pick
hide_title: false
---

The `git cherry-pick` command can apply the specified commit to other branches.

Click the submission name to expand the submission details, and click "..." in the upper right corner to cherry-pick the current submission:
![](./img/05.jpg)

In the pop-up window, select the target branch you want to submit:
![](./img/04.jpg)

It is recommended to check the box to create a new branch and merge the code after reviewing it through a change request to ensure that the merge process is compliant and traceable:
![](./img/06.jpg)

If you do not choose to use change requests, just leave it unchecked and directly push the current submission to the target branch to complete cherry-pick:
![](./img/08.jpg)
![](./img/07.jpg)
