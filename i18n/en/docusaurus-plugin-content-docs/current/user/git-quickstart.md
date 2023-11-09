---
id: git-quickstart # 唯一ID
slug: /user/git/quickstart # URL(最多三级结构，便于seo 和理解，遵循doc/资源/具体说明项 的原则)
sidebar_label: git 快速上手 # 在sidebar 中的名称
description: git 快速上手 # 描述
title: git 快速上手 # 页面标题
tags:
  - git
hide_title: true
---

### 1.基于代码库开始你的工作
在 Git 中，当你需要检出一个代码库时，在 Git 中称之为"克隆（clone）"。如果你需要在本地(也就是你自己的电脑上)使用一个 git 代码库，那么你首先必须要克隆。所以此时，你需要知道要克隆的代码库信息。

登录 AtomGit 平台，进入首页，展现代码库列表。点击进入具体代码库。
![](./img/47.jpg)

当你身处某个代码库中后，单击屏幕中心的"SSH"或"HTTP"选择按钮，并之后点击右侧的地址复制按钮。
![](./img/48.jpg)

### 2.命令行操作
#### 1）克隆代码库

打开你电脑上的 Shell 终端，并输入下面的命令
```
git clone <仓库地址>
```
如果使用的是 SSH 方式并完成了此前的 Setup 步骤，当权限正确的前提下，那么一个远端仓库将会顺利的 Clone 到你本地环境上。

如果你使用的是 HTTP 方式，那么需要输入你的登录账号及密码或 Token 令牌。
#### 2）进入代码库，目录或者操作文件来继续工作
```
cd <repo-name>
```
#### 3）在目录中创建一个 README.md 文件
```
vi README.md
```
#### 4）添加文件到索引区
```
git add README.md
```

#### 5）创建提交
```
git commit -s -m "Initial commit"
```

### 3.其他Git常用命令
#### 1）切换到 master 分支
```
git checkout master
```

#### 2）查看本地仓库对应的远程仓库地址
```
git remote -v
```

#### 3）将本地分支和远程某分支建立对应（如远程的 master 分支）
```
git branch -u origin/master
```

#### 4）和远程分支同步。若和远程分支偏离，执行合并以完成更新
```
git pull
```

#### 5）和远程分支同步。若和远程分支偏离，将本地差异提交变基到远程分支，以完成更新
```
git pull --rebase
```

#### 6）创建分支
```
git checkout -b <branch> <start-point>
```

#### 7）切换一个本地已经存在的分支
```
git checkout <branch>
```

#### 8）查看当前代码库的文件修改状态列表
了解发生了什么以及文件变更的状态很重要。
```
git status
```

#### 9）将本地提交推送至远端
```
git push
```

