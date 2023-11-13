---
id: app-demo # 唯一ID
slug: /app/demo # URL(最多三级结构，便于seo 和理解，遵循doc/资源/具体说明项 的原则)
sidebar_label: App Install # 在sidebar 中的名称
title: App Install # 页面标题
tags:
  - app
  - App Install
hide_title: false
---

# 1.App Install

After the application is created, the user can be guided to install the application. If the application has not been put on the application market, the user can be guided to the unified installation link provided by the platform to install the application. If the application has been released to the application market, the user can be directed to the application market. Perform a self-service installation.

## 1.1 Install

Users can be directed to the following link for application installation:

```
https://atomgit.com/apps/{appSlug}/installations/new
```

appSlug:<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1686217777395-04c1af7e-c069-4193-bd24-3ebe0ec59452.png#clientId=u1011f031-c0ca-4&from=paste&height=392&id=u8bf959c5&originHeight=784&originWidth=2878&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1370225&status=done&style=none&taskId=uca71e827-e7e4-4d18-af70-a7802be0f93&title=&width=1439)<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1686217839784-d16f2928-4a7d-4bee-9043-d74bb89998e2.png#clientId=u1011f031-c0ca-4&from=paste&height=755&id=u47f32be4&originHeight=1510&originWidth=2802&originalType=binary&ratio=2&rotation=0&showTitle=false&size=2688845&status=done&style=none&taskId=ud5b4823b-1548-4cae-8cb4-16f9bd22b0d&title=&width=1401)<br />
Click "Install" to finish App install.

## 1.2 Get ats access_token

After the user completes the application installation in the personal space or organization, the application side can obtain platform data by calling the platform's openApi as the application. User should use **ats access_token** to get an authorization, The generation process of access_token is as follows:<br />![2FAA5CC1-6F7E-45CC-9F2E-C5A8977C6709.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1686218955387-4fcfc9cd-f271-4a6c-a2fc-66b1ec593e2e.png#clientId=u1011f031-c0ca-4&from=drop&id=u80be4d24&originHeight=1722&originWidth=1958&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1002597&status=done&style=none&taskId=u2bb2de38-ea7d-4bd5-a118-e709b53da6f&title=)

### 1.2.1 Generate JWT-TOKEN

When you need to query the installation document information of the application itself or generate access_token, you need to obtain the application ID to generate jwt-token, and use the private key to sign the generated jwt-token, so that the server can verify the signature<br />Generate jwt- An example of the token method is as follows (taking java code as an example):

```java
Algorithm algorithm = Algorithm.RSA256(getPrivateKeyFromPem());
Date currentTime = new Date();
JWT.create()
  //signer
  .withIssuer("75")
  //sign time
  .withIssuedAt(DateUtils.addMinutes(currentTime, -1))
  //expires at
  .withExpiresAt(DateUtils.addMinutes(currentTime, 10))
  //sign algorithm
  .sign(algorithm);
```

the 'signer' is appId which can be found in app-detail-appInfo<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1686219089342-4b80f752-20ea-4353-b027-4076f65fa9b1.png#clientId=u1011f031-c0ca-4&from=paste&height=435&id=u13118bb7&originHeight=870&originWidth=2474&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1311924&status=done&style=none&taskId=u2e1e3523-a4a5-4f49-9b87-8cabc44c03f&title=&width=1237)<br />The application private key can be obtained by clicking on the new private key in Application Information-Private Key on the application configuration page.<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1686224876901-bb90e54d-4463-459e-84c0-a4e164802492.png#clientId=u1011f031-c0ca-4&from=paste&height=761&id=u3663d20e&originHeight=1522&originWidth=2878&originalType=binary&ratio=2&rotation=0&showTitle=false&size=2656679&status=done&style=none&taskId=u3fdf06d4-b858-4ed1-b172-10285cbea69&title=&width=1439)

### 1.2.2 Obtain application installation information based on JWT-TOKEN

After generating the jwt-token, use the jwt-token for authentication and call the openApi of the atomgit platform to obtain the installation document. The calling example is as follows:

```java
curl --request GET \
--url "https://api.atomgit.com/app/installations" \
--header "Authorization: Bearer YOUR_JWT"
```

Sample return content is as follows:

```
"[{"access_tokens_url":"https://api.atomgit.com/app/installations/14/access_tokens","account":{"id":10912,"org_name":"yanqianyu","organization_id":"62c3ea551b506da49a835225","path":"yanqianyu"},"app_id":75,"app_slug":"car-dove-marketplace-test","created_at":"2023-04-26T14:18:39+08:00","events":["push"],"id":14,"permissions":{"emails":"write","checks":"write","contents":"write","keys":"write","statuses":"write"},"repository_selection":"ALL","target_id":"62c3ea551b506da49a835225","updated_at":"2023-04-26T16:12:05+08:00"},{"access_tokens_url":"https://api.atomgit.com/app/installations/18/access_tokens","account":{"id":13618,"org_name":"hanshuorg2","organization_id":"6311ec658cfdd5a134b25fd3","path":"hanshuorg2"},"app_id":75,"app_slug":"car-dove-marketplace-test","created_at":"2023-04-27T16:42:50+08:00","events":["{\"code\":\"push\"","\"desc\":\"push event\"}"],"id":18,"permissions":{"emails":"write","checks":"write","contents":"write","keys":"write","statuses":"write"},"repository_selection":"ALL","target_id":"6311ec658cfdd5a134b25fd3","updated_at":"2023-04-27T16:42:50+08:00"}]"
```

From the returned result, you can obtain the installation document number of the application under the corresponding organization, and then rely on this installation document number (the id field of the return body) to obtain ats token

### 1.2.3 Obtain ats access_token based on installation document information and JWT-TOKEN

After obtaining the installation document number, you can call the openApi of the atomgit platform to obtain ats access_token. The calling example is as follows:

```json
curl --request POST \
--url "https://api.atomgit.com/app/installations/{INSTALLATION_ID}/access_tokens" \
--header "Authorization: Bearer YOUR_JWT" 
```

Sample return content is as follows:

```json
{
    "expires_at": "2023-05-07T04:02:40.758+08:00",
    "permissions": {
        "emails": "write",
        "checks": "write",
        "contents": "write",
        "keys": "write",
        "statuses": "write"
    },
    "repository_selection": "ALL",
    "token": "ats_6c91b91bc9ca751ec61140ab55ae8a71"
}
```

ats token can be obtained from the returned result

### 1.2.4 Example of calling openApi based on ats token

Assuming that the function implemented by our application is to automatically query and display the library list under the organization where the application is installed, we can call the platform's openApi to obtain the library list under the organization. The calling example is as follows:

```json
curl --location 'https://test-api.atomgit.com/orgs/{ORGPATH}/repos' \
--header 'Authorization: Bearer YOUR_ATS_TOKEN'
```

# 2.Application authorization

When an application needs to pretend to be a user to obtain platform data, the application needs to obtain user authorization. The platform provides oauth authorization authentication support to support users to authorize the corresponding application. First, if the application needs to obtain user authorization，you need to config **user authorization callback URL** when register the app.<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1686226713106-9e4f8a29-13b8-4447-976a-fecab26622bc.png#clientId=u1011f031-c0ca-4&from=paste&height=552&id=ud47e3ec8&originHeight=1104&originWidth=2878&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1897858&status=done&style=none&taskId=u8d1eed42-a608-40b0-a400-dd1db8f86fc&title=&width=1439)

## 2.1 Guide users to authorize

The platform provides a unified user authorization page to guide users to authorize, and a unified access page:

```json
https://atomgit.com/login/oauth/authorize?client_id=xxxxxxx&state=state_test&redirect_uri=xxxx
```

| **parameter** | **type** | **info** |
| --- | --- | --- |
| client_id | String | required:app clientId |
| state | String | optional:If you fill in this field, this field will be included in the authorization callback. |
| redirect_uri | String | optional:authorization callback URL，After successful authorization, you will be redirected to this callback url. You need to ensure that this url exists in the configured return address list. |

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1686227097328-a20b90bc-6803-4104-a268-7ae8b53a4d58.png#clientId=u1011f031-c0ca-4&from=paste&height=370&id=ueb8fda41&originHeight=740&originWidth=2878&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1272535&status=done&style=none&taskId=u3afb3831-2c1f-4d76-a871-1df7a6d6e04&title=&width=1439)<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1686227145897-59d1f5c9-a66c-4dd2-8ec5-7693d6778918.png#clientId=u1011f031-c0ca-4&from=paste&height=563&id=u3c458124&originHeight=1126&originWidth=2500&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1778843&status=done&style=none&taskId=u1d3a3409-b3da-4be3-bce7-411d176a2d6&title=&width=1250)<br />After the authorization is successful, it will be redirected to the configured authorization callback address, and code (oauth temporary authorization credential) will be appended to RequestParam.

## 2.2 Obtain atu access_token based on temporary authorization code

call the openApi below to obtain **atu token**:

```json
curl https://api.atomgit.com/login/oauth/access_token 
-X POST 
-d '{"client_id":"49521b236a3e8937","client_secret":"fc58279a2b1869b6df00cc9342af147792e4dd9a","code":"acdc24186bc7a8485544"}' 
--header "Content-Type: application/json"
```

client_id is "app clientId",<br />client_secret is the application client secret, which can be generated in application management<br />code is the temporary authorization certificate generated after authorization.<br />After the call is completed, the return information is as follows:

```json
{
    "access_token":"atu_7139d12be03e5f34bb6027abe39422be",
    "expires_in":1684166156606,
    "refresh_token":"refresh_1cb0f0db0ec7ddff96d1e11f7df4bd7a",
    "refresh_token_expires_in":1700034956606
}
```

access_token:atu token<br />expires_in:expires_in<br />refresh_token:refresh_token<br />refresh_token_expires_in:refresh_token_expires_in

## 2.3 Refresh atu access_token

Since the default expiration time of atu access_token is 8 hours, you need to use refresh_token to obtain a new atu access_token after expiration.<br />call like:

```json
curl https://api.atomgit.com/login/oauth/access_token 
-X POST 
-d '{"client_id":"Iv1.49521b236a3e8937","client_secret":"fc58279a2b1869b6df00cc9342af147792e4dd9a","grant_type":"refresh_token","refresh_token":"refresh_2ff47923f2f454fd9b104729ec807d6e"}' 
--header "Content-Type: application/json"
```

client_id is "app clientId",<br />client_secret is the application client secret, which can be generated in application management<br />grant_type:fill with"refresh_token"<br />the return information is as follows:

```json
{
    "access_token": "atu_f73759ba921bc22c213429dfa741e926",
    "expires_in": 1684506494639,
    "refresh_token": "refresh_2ff47923f2f454fd9b104729ec807d6e",
    "refresh_token_expires_in": 1700375294639
}
```

A new access_token valid for 8 hours will be obtained from the returned result.

## 2.4 Use atu access_token to call openApi

Assuming that the function implemented by our application is to query the library list in the user's personal space, and the library list query permission has been granted, the calling method is as follows:

```json
curl --location 'https://test-api.atomgit.com/user/{USERNAME}/repos' \
--header 'Authorization: Bearer YOUR_ATU_TOKEN'
```

Use atu token as authentication token.
