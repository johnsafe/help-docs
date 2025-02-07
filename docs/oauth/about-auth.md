---
slug: /oauth/
title: 'OAuth 应用'
sidebar_position: 1
hide_title: true
---

## OAuth 应用

> OAuth2 是一种协议，它允许外部应用程序请求授权在不使用密码的情况下访问用户 AtomGit 帐户中的私有信息。 此协议优先于基本验证，因为令牌可能仅限于特定类型的数据，用户可以随时撤销。

OAuth 应用使用 AtomGit 作为身份提供程序以验证为授予应用程序访问权限的用户。 这意味着，当用户授予 OAuth 应用访问权限时，将授权访问其帐户的基本信息，其账户有权访问的所有代码库，以及他们所属的、未阻止第三方访问的任何组织。

## 注意事项

1. 一个用户或组织最多可以拥有 100 个 OAuth 应用。
1. OAuth 应用在所有 AtomGit 中（例如，在提供用户通知时）应始终代表经身份验证的 AtomGit 用户。
1. 通过为经身份验证的用户启用“使用 AtomGit 进行登录”，OAuth 应用可用作身份提供程序。
1. 如果将 OAuth 应用程序与 AtomGit Actions 一起使用并且想要修改工作流文件，则 OAuth 标记必须具有 workflow 作用域，并且用户必须对包含工作流文件的代码库具有所有者或写入权限。 有关详细信息，请参阅“了解 OAuth 应用的作用域。

> 请注意，OAuth 应用是需要托管在某处的应用程序。