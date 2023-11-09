---
id: git-config # 唯一ID
slug: /user/git/config # URL(最多三级结构，便于seo 和理解，遵循doc/资源/具体说明项 的原则)
sidebar_label: git 配置 # 在sidebar 中的名称
description: git 配置 # 描述
title: git 配置 # 页面标题
tags:
  - git
hide_title: true
---

## 初次运行 Git 前的配置

一般在新的系统上，我们都需要先配置下自己的 Git 工作环境。

配置工作只需一次，以后升级时还会沿用现在的配置。当然，如果需要，你随时可以用相同的命令修改已有的配置。 

详细内容请参考 [Git-scm book](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-%E9%85%8D%E7%BD%AE-Git?spm=a2c4g.11186623.0.0.66cb7184saEn5B)，[Git权威指南](http://www.worldhello.net/gotgit/02-git-solo/010-git-init.html?spm=a2c4g.11186623.0.0.66cb7184saEn5B)。

#### 设置用户名和邮箱（必须设置）
在命令行里输入以下命令来添加用户名和 Email ，这个信息将用在后续你的每一次 Git 提交里。
```
git config --global user.name "Your Name"      # 请替换你的用户名
git config --global user.email your@email      # 请替换你自己的公司邮箱
```

#### 设置命令别名
Git 允许用户配置别名命令，简化命令行操作，也可以沿用以前使用其他版本控制工具的习惯。例如如下命令创建和 SVN 兼容的命令：
```
git config --global alias.st status
git config --global alias.ci "commit -s"
git config --global alias.co checkout
git config --global alias.br branch
```

#### 中文惯用设置
为了支持能够正确显示带中文的目录、文件，启用如下设置：
```
git config --global core.quotepath false
```

#### 其他设置
系统安装的 Git 通常会启用带颜色输出：
```
sudo git config --system color.ui auto
```

执行合并操作时，自动生成的合并提交说明中包含源分支的精简提交说明：
```
git config --global merge.log true
```

执行交互式变基操作时，自动将带有 “fixup!” 前缀的提交压缩（squash）到匹配的提交上。
```
git config --global rebase.autosquash true
```

### Windows 换行符问题
虽然 Windows 用户可以通过配置 core.autocrlf 来实现自动的换行符转换，但是如果不能确保每一个用户都能采用相同的配置，反而会因为不同用户的不同设置导致协同开发时，文件的换行符出现不一致。

一个推荐的方法是在仓库中创建一个 .gitattributes 文件，定义文件的换行符格式。

### 查看配置
以上设置执行完成后，可以通过以下命令查看是否配置正确。
```
$ git config --global --list
```
