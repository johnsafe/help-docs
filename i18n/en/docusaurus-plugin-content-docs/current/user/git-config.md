---
id: git-config # 唯一ID
slug: /user/git/config # URL(最多三级结构，便于seo 和理解，遵循doc/资源/具体说明项 的原则)
sidebar_label: Git Config # 在sidebar 中的名称
description: git config # 描述
title: git config # 页面标题
tags:
  - git
  - git config
hide_title: true
---

## Configuration before running Git for the first time

Generally on new systems, we need to configure our own Git working environment first.

The configuration only needs to be done once, and the current configuration will be used during future upgrades. Of course, you can always modify the existing configuration with the same command if necessary.

For more, please refer [Git-scm book](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-%E9%85%8D%E7%BD%AE-Git?spm=a2c4g.11186623.0.0.66cb7184saEn5B)，[Git权威指南](http://www.worldhello.net/gotgit/02-git-solo/010-git-init.html?spm=a2c4g.11186623.0.0.66cb7184saEn5B)。

#### Set username and email (required)

Enter the following command on the command line to add your username and email. This information will be used in every subsequent Git commit you make.

```
git config --global user.name "Your Name"      # use your own username
git config --global user.email your@email      # use your own email
```

#### Set alias

Git allows users to configure alias commands to simplify command line operations, and they can also follow the previous habit of using other version control tools. For example, the following command creates a command compatible with SVN:

```
git config --global alias.st status
git config --global alias.ci "commit -s"
git config --global alias.co checkout
git config --global alias.br branch
```

#### Chinese custom settings

In order to support the correct display of directories and files with Chinese characters, enable the following settings:

```
git config --global core.quotepath false
```

#### Other settings

System installations of Git usually enable colored output:

```
sudo git config --system color.ui auto
```

When performing a merge operation, the automatically generated merge commit instructions include the condensed commit instructions of the source branch:

```
git config --global merge.log true
```

When performing an interactive rebase operation, commits prefixed with "fixup!" are automatically squashed onto matching commits.

```
git config --global rebase.autosquash true
```

### Windows line break problem

Although Windows users can implement automatic line break conversion by configuring core.autocrlf, if it cannot be ensured that every user can adopt the same configuration, the different settings of different users will lead to inconsistent line breaks in files during collaborative development.

A recommended approach is to create a .gitattributes file in the repository that defines the newline format for the file.

### View configuration

After the above settings are completed, you can run the following command to check whether the configuration is correct.

```
git config --global --list
```
