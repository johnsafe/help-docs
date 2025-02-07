---
id: repo-config # 唯一ID
slug: /repo/config/general # URL(最多三级结构，便于seo 和理解，遵循doc/资源/具体说明项 的原则)
sidebar_label: 代码库设置 # 在sidebar 中的名称
title: 代码库设置 # 页面标题
tags:
  - repo
  - 代码库设置
hide_title: false
---

### 基本信息

作为代码库管理员（包括继承的组织管理员），可以修改代码库基本信息，包含名称、描述、封面、公开性，以便于其他开发者更快的找到代码库。

![](./img/28.jpg)


### 高危操作
![](./img/29.jpg)

其中公开性包括两种：
- 公开：任何人包括匿名可见
- 私有：仅代码库成员及所属组织成员可见

> 组织成员的权限将继承至其下的代码库中，即如果在组织上是开发者，则在其下库上也将拥有开发者权限。

![](./img/30.jpg)

#### 修改代码库路径：

作为开发人员，一个常规访问路径是直接输入URL访问，一个有意义的 Path 能够使开发人员更快速的输入 URL 找到代码库，以及在各自 Workspace 下快速找到对应目标库。

#### 转移代码库：

可以快速将代码库移动到另一个组下，方便管理。

#### 代码库归档：

如果一个代码库不再被维护了，作为代码库管理员，可以将代码库进行归档，归档后代码库只读，不可做提交或更改操作。
在代码库归档后可解除归档，代码库访问状态回归正常。

#### 删除代码库：

作为代码库管理员，可以管理自己的代码库，如果该代码库永久不会再被使用，可以操作删除。

### 存储空间管理
存储库 GC：作为代码库管理员，可以在代码库接近存储限制时使用存储库 GC，压缩存储库对象，减少磁盘占用，提升读写仓库的效率。