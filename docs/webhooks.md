---
id: webhooks # 唯一ID
slug: /repo/webhooks # URL(最多三级结构，便于seo 和理解，遵循doc/资源/具体说明项 的原则)
sidebar_label: 开放与集成 # 在sidebar 中的名称
title: 开放与集成 # 页面标题
tags:
  - webhook
hide_title: false
---

通过代码库的 Webhook，允许服务端在接收到特殊事件的时候，调用指定的 URL。

这些可以 Webhook 配置的特殊事件有：代码推送，代码评审。平台会发送一个带数据的 Post 请求到 Webhook 的定义 URL。

Webhooks 可以用来触发 CI 构建，执行镜像备份甚至用来触发部署到生产环境等功能。

![图片](./img/03.jpg)

## 事件说明
### 推送事件
推送事件指客户端将代码 Push 到服务端，一个例外：Push 标签，不会形成推送事件。

#### 请求头
```
X-AtomGit-Event: Push Hook
```

#### 请求内容
```
{
  "object_kind": "push",
  "before": "f2e2d577fab1562a6239b82721fd9827e05fdce6",
  "after": "eb63d0277e64684236ebf8394b919230c4b8a286",
  "ref": "refs/heads/master",
  "user_id": 4,
  "user_name": "atomgit",
  "user_email": "email@atomgit.com",
  "project_id": 15,
  "repository": {
    "name": "Diaspora",
    "url": "git@atomgit.codechina.net:demo/demo.git",
    "description": "",
    "homepage": "https://atomgit.codechina.net/demo/demo",
    "git_http_url":"https://atomgit.codechina.net/demo/demo.git",
    "git_ssh_url":"git@atomgit.codechina.net:demo/demo.git",
    "visibility_level":0
  },
  "commits": [
    {
      "id": "f2e2d577fab1562a6239b82721fd9827e05fdce6",
      "message": "Update readme.",
      "timestamp": "2019-01-01T00:08:00+08:00",
      "url": "https://atomgit.codechina.net/demo/demo/commits/f2e2d577fab1562a6239b82721fd9827e05fdce6",
      "author": {
        "name": "atomgit",
        "email": "email@atomgit.com"
      }
    },
    {
      "id": "eb63d0277e64684236ebf8394b919230c4b8a286",
      "message": "fixed readme",
      "timestamp": "2019-01-03T23:36:29+08:00",
      "url": "https://atomgit.codechina.net/demo/demo/commits/eb63d0277e64684236ebf8394b919230c4b8a286",
      "author": {
        "name": "atomgit",
        "email": "email@atomgit.com"
      },
    }
  ],
  "total_commits_count": 2

}
```

### 标签推送事件
当创建或者删除标签时触发。

#### 请求头
```
X-AtomGit-Event: Tag Push Hook
```
#### 请求内容
```
{
  "object_kind": "tag_push",
  "ref": "refs/tags/v1.0.0",
  "before": "0000000000000000000000000000000000000000",
  "after": "eb63d0277e64684236ebf8394b919230c4b8a286",
  "user_id": 1,
  "user_name": "atomgit",
  "project_id": 1,
  "repository": {
    "name": "demo",
    "url": "ssh://git@atomgit.codechina.net/demo/demo.git",
    "description": "",
    "homepage": "https://atomgit.codechina.net/demo/demo",
    "git_http_url":"https://atomgit.codechina.net/demo/demo.git",
    "git_ssh_url":"git@atomgit.codechina.net:demo/demo.git",
    "visibility_level":0
  },
  "commits": [],
  "total_commits_count": 0
}
```

### 评论事件
当任何一条评论生成时触发，无论是在代码提交、代码评审的评论。评论数据会存在 object_attributes 字段里。

#### 请求头
```
X-AtomGit-Event: Note Hook
```
#### 请求内容
```
{
  "object_kind": "note",
  "user": {
    "name": "atomgit",
    "username": "atomgit",
    "avatar_url": ""
  },
  "project_id": 5,
  "repository": {
    "name": "demo",
    "url": "https://atomgit.codechina.net/demo/demo.git",
    "description": "demo.",
    "homepage": "https://atomgit.codechina.net/demo/demo"
  },
  "object_attributes": {
    "id": 1243,
    "note": "This is a commit comment. How does this work?",
    "noteable_type": "Commit",
    "author_id": 1,
    "created_at": "2019-05-17 18:08:09 UTC",
    "updated_at": "2019-05-17 18:08:09 UTC",
    "project_id": 5,
    "attachment":null,
    "line_code": "bec9703f7a456cd2b4ab5fb3220ae016e3e394e3_0_1",
    "commit_id": "cfe32cf61b73a0d5e9f13e774abde7ff789b1660",
    "noteable_id": null,
    "system": false,
    "st_diff": {
      "diff": "--- /dev/null\n+++ b/six\n@@ -0,0 +1 @@\n+Subproject commit 409f37c4f05865e4fb208c771485f211a22c4c2d\n",
      "new_path": "six",
      "old_path": "six",
      "a_mode": "0",
      "b_mode": "160000",
      "new_file": true,
      "renamed_file": false,
      "deleted_file": false
    },
    "url": "https://atomgit.codechina.net/demo/demo/commits/cfe32cf61b73a0d5e9f13e774abde7ff789b1660#note_1243"
  },
  "commit": {
    "id": "cfe32cf61b73a0d5e9f13e774abde7ff789b1660",
    "message": "Add submodule",
    "timestamp": "2019-02-27T10:06:20+02:00",
    "url": "https://atomgit.codechina.net/demo/demo/commits/cfe32cf61b73a0d5e9f13e774abde7ff789b1660",
    "author": {
      "name": "Demo",
      "email": "demo@gmail.com"
    }
  }
}
```

### 代码评审评论
当任何一条评论生成时触发，无论是在代码提交、代码评审的评论。评论数据会存在 object_attributes 字段里。

#### 请求头
```
X-AtomGit-Event: Note Hook
```
#### 请求内容
```
{
  "object_kind": "note",
  "user": {
    "name": "atomgit",
    "username": "atomgit",
    "avatar_url": ""
  },
  "project_id": 5,
  "repository": {
    "name": "demo",
    "url": "https://atomgit.codechina.net/demo/demo/.git",
    "description": "Aut reprehenderit ut est.",
    "homepage": "https://atomgit.codechina.net/demo/demo"
  },
  "object_attributes": {
    "id": 1244,
    "note": "This MR needs work.",
    "noteable_type": "MergeRequest",
    "author_id": 1,
    "created_at": "2019-05-17 18:21:36 UTC",
    "updated_at": "2019-05-17 18:21:36 UTC",
    "project_id": 5,
    "attachment": null,
    "line_code": null,
    "commit_id": "",
    "noteable_id": 7,
    "system": false,
    "st_diff": null,
    "url": "https://atomgit.codechina.net/demo/demo/merge_requests/1#note_1244"
  },
  "merge_request": {
    "id": 7,
    "target_branch": "markdown",
    "source_branch": "master",
    "source_project_id": 5,
    "author_id": 8,
    "assignee_id": 28,
    "title": "Tempora et eos debitis quae laborum et.",
    "created_at": "2019-03-01 20:12:53 UTC",
    "updated_at": "2019-03-21 18:27:27 UTC",
    "milestone_id": 11,
    "state": "opened",
    "merge_status": "cannot_be_merged",
    "target_project_id": 5,
    "iid": 1,
    "description": "Et voluptas corrupti assumenda temporibus. Architecto cum animi eveniet amet asperiores. Vitae numquam voluptate est natus sit et ad id.",
    "position": 0,
    "locked_at": null,
    "source": {
      "name": "demo",
      "ssh_url": "git@atomgit.codechina.net:demo/demo.git",
      "http_url": "https://atomgit.codechina.net/demo/demo.git",
      "web_url": "https://atomgit.codechina.net/demo/demo",
      "namespace": "demo",
      "visibility_level": 10
    },
    "target": {
      "name": "demo",
      "ssh_url": "git@atomgit.codechina.net:demo/demo.git",
      "http_url": "https://atomgit.codechina.net/demo/demo.git",
      "web_url": "https://atomgit.codechina.net/demo/demo",
      "namespace": "demo",
      "visibility_level": 10
    },
    "last_commit": {
      "id": "562e173be03b8ff2efb05345d12df18815438a4b",
      "message": "Merge branch 'another-branch' into 'master'\n\nCheck in this test\n",
      "timestamp": "2019-04-08T21: 00:25-07:00",
      "url": "https://atomgit.codechina.net/demo/demo/commits/562e173be03b8ff2efb05345d12df18815438a4b",
      "url": "https://atomgit.codechina.net/demo/demo/commits/562e173be03b8ff2efb05345d12df18815438a4b",
      "author": {
        "name": "atomgit",
        "email": "atomgit@codechina.com"
      }
    },
    "work_in_progress": false
  }
}
```

### 代码评审事件
当任何一条评论生成时触发，无论是在代码提交、代码评审的评论。评论数据会存在 object_attributes 字段里。

#### 请求头
```
X-AtomGit-Event: Merge Request Hook
```
#### 请求内容
```
{
  "object_kind": "merge_request",
  "user": {
    "name": "atomgit",
    "username": "atomgit",
    "avatar_url": ""
  },
  "object_attributes": {
    "id": 99,
    "target_branch": "master",
    "source_branch": "ms-viewport",
    "source_project_id": 14,
    "author_id": 51,
    "assignee_id": 6,
    "title": "MS-Viewport",
    "created_at": "2019-09-03T17:23:00Z",
    "updated_at": "2019-09-03T17:23:00Z",
    "st_commits": null,
    "st_diffs": null,
    "milestone_id": null,
    "state": "opened",
    "merge_status": "unchecked",
    "target_project_id": 14,
    "iid": 1,
    "description": "",
    "source": {
      "name": "demo",
      "ssh_url": "git@atomgit.codechina.net:demo/demo.git",
      "http_url": "https://atomgit.codechina.net/demo/demo.git",
      "web_url": "https://atomgit.codechina.net/demo/demo",
      "namespace": "demo",
      "visibility_level": 10
    },
    "target": {
      "name": "demo",
      "ssh_url": "git@atomgit.codechina.net:demo/demo.git",
      "http_url": "https://atomgit.codechina.net/demo/demo.git",
      "web_url": "https://atomgit.codechina.net/demo/demo",
      "namespace": "demo",
      "visibility_level": 10
    },
    "last_commit": {
      "id": "da1560886d4f094c3e6c9ef40349f7d38b5d27d7",
      "message": "fixed readme",
      "timestamp": "2019-02-03T23:36:29+02:00",
      "url": "https://atomgit.codechina.net/demo/demo/commits/da1560886d4f094c3e6c9ef40349f7d38b5d27d7",
      "author": {
        "name": "atomgit",
        "email": "atomgit@codechina.com"
      }
    },
    "work_in_progress": false,
    "url": "https://atomgit.codechina.net/demo/demo/merge_requests/1",
    "action": "open"
  }
}
```

## Webhook 接收端例子
如果出于测试的目的，想看下 Webhook 的执行效果，可以用一个简单的 Echo 脚本

把下面脚本保存成 print_http_body.rb.

```
server = WEBrick::HTTPServer.new(:Port => ARGV.first)
server.mount_proc '/' do |req, res|
  puts req.body
end

trap 'INT' do
  server.shutdown
end
server.start
```

选个未被使用的端口（比如8000），并启动脚本：ruby print_http_body.rb 8000 然后在 AtomGit 上配置 Webhook 的 URL http://my.host:8000/

在 AtomGit 上点击 Test Hook，可以在命令行里看到如下内容:

```
{"before":"f2e2d577fab1562a6239b82721fd9827e05fdce6","after":"eb63d0277e64684236ebf8394b919230c4b8a286"}
aliyun.com - - [14/May/2019:11:11:11 EDT] "POST / HTTP/1.1" 200 0
- -> /
```

### 使用 HTTP Basic Authentication
当触发支持 HTTP Basic Authentication 的服务器时， 允许在 URL中添加用户名和密码进行访问，Webhook 形如：
```
http://userName:password@my.host:8080/project/test-job
```