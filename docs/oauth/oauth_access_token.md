---
slug: /oauth/access_token
title: 'OAuth2 获取AccessToken'
sidebar_position: 4
hide_title: true
---
## OAuth2 获取AccessToken

### 1. 授权码模式

A. 应用通过 浏览器 或 Webview 将用户引导到AtomGit三方认证页面上（ **GET请求** ）

```
https://atomgit.com/login/oauth/authorize?client_id=xxxxxxx&state=state_test&redirect_uri=xxxx
```

B. 用户对应用进行授权（注：如果用户未登录，则会先跳转到登录页，登录完成后跳转到授权页面）
![用户授权中间页](./img/new_auth_app.png) 

C. AtomGit认证服务器通过回调地址{redirect_uri}将 用户授权码 传递给 应用服务器 或者直接在 Webview 中跳转到携带 用户授权码的回调地址上，Webview 直接获取code即可（{redirect_uri}?code=abc&state=xyz)

D. 应用服务器 或 Webview 使用 access_token API 向 AtomGit认证服务器发送post请求传入 用户授权码,应用Id,应用secret（ **POST请求** ）获取access_token

```
curl https://api.atomgit.com/login/oauth/access_token 
-X POST 
-d '{"client_id":"49521b236a3e8937","client_secret":"fc58279a2b1869b6df00cc9342af147792e4dd9a","code":"acdc24186bc7a8485544"}' 
--header "Content-Type: application/json"
```

E. AtomGit认证服务器返回 access_token,refresh_token,应用通过 access_token 访问 Open API 使用用户数据。

F. 当 access_token 过期后（有效期为8小时），你可以通过以下 refresh_token 方式重新获取 access_token（ **POST请求** ）
```
curl https://api.atomgit.com/login/oauth/access_token 
-X POST 
-d '{"client_id":"Iv1.49521b236a3e8937","client_secret":"fc58279a2b1869b6df00cc9342af147792e4dd9a","grant_type":"refresh_token","refresh_token":"refresh_2ff47923f2f454fd9b104729ec807d6e"}' 
--header "Content-Type: application/json"
```





