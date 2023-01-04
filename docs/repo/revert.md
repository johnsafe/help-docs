---
id: revert # 唯一ID
slug: /repo/commit/revert # URL(最多三级结构，便于seo 和理解，遵循doc/资源/具体说明项 的原则)
sidebar_label: Revert # 在sidebar 中的名称
title: Revert # 页面标题
tags:
  - 提交
  - Revert
hide_title: false
---

git revert命令的作用，是撤销某次操作，用一次新的 commit 回滚之前的 commit。

点击提交名展开提交详情，点击右上角「...」对当前提交进行 revert：
![](./img/05.jpg)

在弹窗内选择期望提交的目标分支：
![](./img/09.jpg)

建议勾选创建新分支并通过变更请求的方式评审后合并代码，保证合入过程合规且可追溯：
![](./img/10.jpg)

若不选择使用变更请求，还可以直接将当前提交推送到目标分支上，完成 revert：
![](./img/11.jpg)