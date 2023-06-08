<a name="chtqL"></a>
# 1.应用安装
应用创建完成后，可引导用户对应用进行安装，若应用未上架至应用市场，可引导用户至平台提供的统一安装链接进行应用安装，若应用已发布至应用市场，则可让用户在应用市场进行自助安装。
<a name="BaPFK"></a>
## 1.1 统一安装入口页安装
可引导用户至如下链接进行应用安装:
```
https://atomgit.com/apps/{appSlug}/installations/new
```
appSlug:应用标识<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1686217777395-04c1af7e-c069-4193-bd24-3ebe0ec59452.png#clientId=u1011f031-c0ca-4&from=paste&height=392&id=u8bf959c5&originHeight=784&originWidth=2878&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1370225&status=done&style=none&taskId=uca71e827-e7e4-4d18-af70-a7802be0f93&title=&width=1439)<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1686217839784-d16f2928-4a7d-4bee-9043-d74bb89998e2.png#clientId=u1011f031-c0ca-4&from=paste&height=755&id=u47f32be4&originHeight=1510&originWidth=2802&originalType=binary&ratio=2&rotation=0&showTitle=false&size=2688845&status=done&style=none&taskId=ud5b4823b-1548-4cae-8cb4-16f9bd22b0d&title=&width=1401)<br />点击安装后即可完成应用安装
<a name="c5nmY"></a>
## 1.2 安装完成后应用侧获取ats access_token
用户在个人空间或组织下完成应用安装后，应用侧可以以应用身份来通过调用平台的openApi来获取平台数据。以应用身份调用平台openApi，需要使用ats access_token进行认证，应用ats access_token的生成流程如下:<br />![2FAA5CC1-6F7E-45CC-9F2E-C5A8977C6709.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1686218955387-4fcfc9cd-f271-4a6c-a2fc-66b1ec593e2e.png#clientId=u1011f031-c0ca-4&from=drop&id=u80be4d24&originHeight=1722&originWidth=1958&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1002597&status=done&style=none&taskId=u2bb2de38-ea7d-4bd5-a118-e709b53da6f&title=)
<a name="nO012"></a>
### 1.2.1 生成JWT-TOKEN
当需查询应用本身的安装单据信息或生成access_token时，需要获取应用Id来生成jwt-token，并且应用私钥对生成的jwt-token进行签名，让服务端进行验签<br />生成jwt-token方式样例如下(以java代码为例):
```java
Algorithm algorithm = Algorithm.RSA256(getPrivateKeyFromPem());
Date currentTime = new Date();
JWT.create()
  //签发人
  .withIssuer("75")
  //签发时间
  .withIssuedAt(DateUtils.addMinutes(currentTime, -1))
  //过期时间
  .withExpiresAt(DateUtils.addMinutes(currentTime, 10))
  //签名算法
  .sign(algorithm);
```
签发人为appId,appId可在app详情-应用信息中查看<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1686219089342-4b80f752-20ea-4353-b027-4076f65fa9b1.png#clientId=u1011f031-c0ca-4&from=paste&height=435&id=u13118bb7&originHeight=870&originWidth=2474&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1311924&status=done&style=none&taskId=u2e1e3523-a4a5-4f49-9b87-8cabc44c03f&title=&width=1237)<br />应用私钥的获取可在应用配置页应用信息-私钥中点击新建私钥生成<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1686224876901-bb90e54d-4463-459e-84c0-a4e164802492.png#clientId=u1011f031-c0ca-4&from=paste&height=761&id=u3663d20e&originHeight=1522&originWidth=2878&originalType=binary&ratio=2&rotation=0&showTitle=false&size=2656679&status=done&style=none&taskId=u3fdf06d4-b858-4ed1-b172-10285cbea69&title=&width=1439)
<a name="e42v8"></a>
### 1.2.2 基于JWT-TOKEN获取应用安装信息
生成jwt-token后，采用jwt-token进行认证，调用atomgit平台的openApi获取安装单据，调用实例如下:
```java
curl --request GET \
--url "https://api.atomgit.com/app/installations" \
--header "Authorization: Bearer YOUR_JWT"
```
	返回内容样例如下:
```json
[
    {
        "access_tokens_url": "https://api.atomgit.com/app/installations/14/access_tokens",
        "account": {
            "id": 10912,
            "org_name": "yanqianyu",
            "organization_id": "62c3ea551b506da49a835225",
            "path": "yanqianyu"
        },
        "app_id": 75,
        "app_slug": "car-dove-marketplace-test",
        "created_at": "2023-04-26T14:18:39+08:00",
        "events": [
            "push"
        ],
        "id": 14,
        "permissions": {
            "emails": "write",
            "checks": "write",
            "contents": "write",
            "keys": "write",
            "statuses": "write"
        },
        "repository_selection": "ALL",
        "target_id": "62c3ea551b506da49a835225",
        "updated_at": "2023-04-26T16:12:05+08:00"
    },
    {
        "access_tokens_url": "https://api.atomgit.com/app/installations/18/access_tokens",
        "account": {
            "id": 13618,
            "org_name": "hanshuorg2",
            "organization_id": "6311ec658cfdd5a134b25fd3",
            "path": "hanshuorg2"
        },
        "app_id": 75,
        "app_slug": "car-dove-marketplace-test",
        "created_at": "2023-04-27T16:42:50+08:00",
        "events": [
            "{\"code\":\"push\"",
            "\"desc\":\"push event\"}"
        ],
        "id": 18,
        "permissions": {
            "emails": "write",
            "checks": "write",
            "contents": "write",
            "keys": "write",
            "statuses": "write"
        },
        "repository_selection": "ALL",
        "target_id": "6311ec658cfdd5a134b25fd3",
        "updated_at": "2023-04-27T16:42:50+08:00"
    }
]
```
	从返回结果中，可以获取应用在对应组织下的安装单据号，后续依赖此安装单据号(返回体的id字段)获取ats token
<a name="DpRGR"></a>
### 1.2.3 基于安装单据信息与JWT-TOKEN获取ats access_token
获取安装单据号后，可调用atomgit平台的openApi获取ats access_token，调用样例如下:
```json
curl --request POST \
--url "https://api.atomgit.com/app/installations/{INSTALLATION_ID}/access_tokens" \
--header "Authorization: Bearer YOUR_JWT" 
```
返回结果样例:
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
可从返回结果中获取ats token
<a name="fZ6hu"></a>
### 1.2.4 基于ats token调用openApi样例
假设我们的应用实现的功能为自动查询安装应用的组织下的库列表并展示，则可调用平台的获取组织下库列表的openApi，调用样例如下:
```json
curl --location 'https://test-api.atomgit.com/orgs/{ORGPATH}/repos' \
--header 'Authorization: Bearer YOUR_ATS_TOKEN'
```
<a name="ogBud"></a>
# 2.应用授权
当应用需要扮演用户身份获取平台数据时，应用需要获取用户授权，平台侧提供了oauth授权认证支持，用于支持用户向对应应用进行授权。首先应用若需要获取用户授权，需要在注册应用时**配置用户授权回调URL:**<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1686226713106-9e4f8a29-13b8-4447-976a-fecab26622bc.png#clientId=u1011f031-c0ca-4&from=paste&height=552&id=ud47e3ec8&originHeight=1104&originWidth=2878&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1897858&status=done&style=none&taskId=u8d1eed42-a608-40b0-a400-dd1db8f86fc&title=&width=1439)
<a name="HywR3"></a>
## 2.1 引导用户授权
平台提供了统一的用户授权页面用于引导用户进行授权，统一的访问页面:
```json
https://atomgit.com/login/oauth/authorize?client_id=xxxxxxx&state=state_test&redirect_uri=xxxx
```
| **参数** | **类型** | **说明** |
| --- | --- | --- |
| client_id | String | 必须:应用clientId |
| state | String | 选填:若填写次字段，再授权回调时会带上此字段 |
| redirect_uri | String | 选填:授权回调地址，授权成功后回重定向至此回调地址，需要确保此地址在配置的回到地址列表中 |

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1686227097328-a20b90bc-6803-4104-a268-7ae8b53a4d58.png#clientId=u1011f031-c0ca-4&from=paste&height=370&id=ueb8fda41&originHeight=740&originWidth=2878&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1272535&status=done&style=none&taskId=u3afb3831-2c1f-4d76-a871-1df7a6d6e04&title=&width=1439)<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1686227145897-59d1f5c9-a66c-4dd2-8ec5-7693d6778918.png#clientId=u1011f031-c0ca-4&from=paste&height=563&id=u3c458124&originHeight=1126&originWidth=2500&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1778843&status=done&style=none&taskId=u1d3a3409-b3da-4be3-bce7-411d176a2d6&title=&width=1250)<br />授权成功后，会重定向至配置的授权回调地址，并在RequestParam中追加上code(oauth临时授权凭证)
<a name="WMvDs"></a>
## 2.2 基于临时授权码获取atu access_token
调用如下openApi获取atu token
```json
curl https://api.atomgit.com/login/oauth/access_token 
-X POST 
-d '{"client_id":"49521b236a3e8937","client_secret":"fc58279a2b1869b6df00cc9342af147792e4dd9a","code":"acdc24186bc7a8485544"}' 
--header "Content-Type: application/json"
```
client_id为应用clientId,<br />client_secret为应用客户端密钥，可在应用管理中生成<br />code为授权后产生的临时授权凭证<br />调用完成后返回信息如下:
```json
{
    "access_token":"atu_7139d12be03e5f34bb6027abe39422be",
    "expires_in":1684166156606,
    "refresh_token":"refresh_1cb0f0db0ec7ddff96d1e11f7df4bd7a",
    "refresh_token_expires_in":1700034956606
}
```
access_token:atu token<br />expires_in:过期时间<br />refresh_token:refresh_token<br />refresh_token_expires_in:refresh_token过期时间
<a name="fkZRw"></a>
## 2.3 刷新atu access_token
由于atu access_token默认过期时间为8小时，过期后需要用refresh_token获取新的atu access_token<br />调用方式如下
```json
curl https://api.atomgit.com/login/oauth/access_token 
-X POST 
-d '{"client_id":"Iv1.49521b236a3e8937","client_secret":"fc58279a2b1869b6df00cc9342af147792e4dd9a","grant_type":"refresh_token","refresh_token":"refresh_2ff47923f2f454fd9b104729ec807d6e"}' 
--header "Content-Type: application/json"
```
client_id为应用clientId,<br />client_secret为应用客户端密钥，可在应用管理中生成<br />grant_type:填写"refresh_token"<br />返回结果样例如下:
```json
{
    "access_token": "atu_f73759ba921bc22c213429dfa741e926",
    "expires_in": 1684506494639,
    "refresh_token": "refresh_2ff47923f2f454fd9b104729ec807d6e",
    "refresh_token_expires_in": 1700375294639
}
```
返回结果中会获取新的有效期8小时的access_token
<a name="I32by"></a>
## 2.4 使用atu access_token调用openApi
假设我们的应用实现的功能为查询用户个人空间下的库列表，已授予库列表查询权限，则调用方式如下:
```json
curl --location 'https://test-api.atomgit.com/user/{USERNAME}/repos' \
--header 'Authorization: Bearer YOUR_ATU_TOKEN'
```
使用atu token作为认证token即可
