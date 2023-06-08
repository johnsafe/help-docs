<a name="Y4DuH"></a>
# 1.应用注册
<a name="qkAz2"></a>
## 1.1 创建应用
首先需要现在平台上创建出应用，应用需要由用户或组织的形式提供，可以在个**人设置->开放集成**或**组织设置->开放集成**中创建应用:<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1683510377635-4de0f956-d988-4f14-acce-0c7215d64c1b.png#clientId=uf65fb308-b69e-4&from=paste&height=599&id=ud97e6653&originHeight=1198&originWidth=2550&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1164919&status=done&style=none&taskId=u1ba27cb8-b959-4d48-b370-0d8524a1b04&title=&width=1275)<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1683510396589-f8421484-b635-4d59-bdeb-c03c55ab3bac.png#clientId=uf65fb308-b69e-4&from=paste&height=728&id=u07c626a9&originHeight=1456&originWidth=2854&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1993520&status=done&style=none&taskId=u97cb9cb7-38d1-43c2-8edc-44178ec8d6d&title=&width=1427)
<a name="XSLMD"></a>
### 1.1.1 应用基础信息
| **字段** | **说明** |
| --- | --- |
| 应用名称 | 必填:全局唯一应用名称，尽量使用英文，可唯一标识应用 |
| 应用主页 | 必填:平台内跳转至应用侧的应用主页地址，由应用发布方提供 |
| 应用简介 | 必填:关于应用功能的简单介绍 |
| 应用安装授权范围 | 必填:标识应用是否可安装至其他组织，是否全局可见，如初始设置为公开全局可见，后续需慎重修安装授权范围 |

<a name="zE6Eq"></a>
### 1.1.2 用户授权模块
此模块主要包含用户授权相关信息配置，主要适用于应用需要获取用户授权扮演用户身份调用openApi获取Atomgit平台数据的场景，如果创建的应用不需要用户授权，可以不做用户授权相关配置<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1683511966189-e9911852-231f-4ec2-a2c4-3b52130282c8.png#clientId=uf65fb308-b69e-4&from=paste&height=361&id=ud6b01048&originHeight=722&originWidth=1884&originalType=binary&ratio=2&rotation=0&showTitle=false&size=568726&status=done&style=none&taskId=u1c6dad63-c15c-4bd5-b775-6b9fb2216ee&title=&width=942)

| **字段** | **说明** |
| --- | --- |
| 授权回调URL | 若需要获取用户授权，必填此字段，支持配置多项授权回调URL，在用户授权时可手工指定在配置范围内的授权回调URL |
| 安装并要求用户授权 | 勾选此字段后，在应用安装时，会自动完成用户授权，跳转至授权成功回调页 |

<a name="Fic2b"></a>
### 1.1.3 应用安装模块
安装回调URL,此URL信息为应用安装完成后重定向的地址，此配置与用户授权中的**安装并要求用户授权**字段配置互斥，如勾选了**安装并要求用户授权，则此URL配置失效**<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1683513549934-492892ae-8a17-4b7f-a25e-77cde107d63b.png#clientId=uf65fb308-b69e-4&from=paste&height=148&id=ue6cb4afd&originHeight=296&originWidth=1848&originalType=binary&ratio=2&rotation=0&showTitle=false&size=276067&status=done&style=none&taskId=u2bd68aca-01ee-4352-b293-cf70eadca1e&title=&width=924)
<a name="ONhAk"></a>
### 1.1.4 **app所需权限相关配置**
此模块主要配置应用所属的数据权限，例如需要获取仓库数据的读权限，则在仓库数据权限点出选择为只读
<a name="oxDhj"></a>
### ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1683514195106-478b4f83-c866-4531-8acf-53eb9e789ff8.png#clientId=uf65fb308-b69e-4&from=paste&height=459&id=ubbfd4e54&originHeight=918&originWidth=1930&originalType=binary&ratio=2&rotation=0&showTitle=false&size=692204&status=done&style=none&taskId=uea7b580b-1c2f-4a5e-bb44-cc67d447d52&title=&width=965)<br />1.1.5 webHook相关配置
开启webhook配置后，可进行订阅事件相关配置，勾选订阅配置后，应用安装的组织触发对应的事件后，会发送webHook至应用配置的webHook地址。<br />例如:在组织O下安装了应用A，应用A订阅了PUSH事件，此时对应用A下代码库R发起一次PUSH，则会发送push事件至应用A配置的webHook地址<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1683515158826-b07fbafc-228c-4603-b4d1-3678da1e89be.png#clientId=uf65fb308-b69e-4&from=paste&height=296&id=u3ea882bd&originHeight=592&originWidth=1804&originalType=binary&ratio=2&rotation=0&showTitle=false&size=542267&status=done&style=none&taskId=ua4d23a9d-13dc-4f2e-b567-6b063a9096f&title=&width=902)<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1683515259032-eea5bd6b-25b6-45c7-875c-1dfd4e99a8bf.png#clientId=uf65fb308-b69e-4&from=paste&height=242&id=ubf4f187e&originHeight=484&originWidth=2102&originalType=binary&ratio=2&rotation=0&showTitle=false&size=496297&status=done&style=none&taskId=u52b55307-cd42-4bea-97a6-25d196bc186&title=&width=1051)
<a name="BwzkM"></a>
## 1.2 应该密钥配置
<a name="o1l8m"></a>
### 1.2.1 应用私钥
当需要应用扮演应用本身的身份发起接口调用时，需要新建应用私钥，使用应用私钥来调用平台的openApi，获取应用维度的ats access_token<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1683517650988-90c615ac-c852-4b3d-a1a5-b8e0b6c17b6b.png#clientId=uf65fb308-b69e-4&from=paste&height=163&id=uad040d3b&originHeight=326&originWidth=2428&originalType=binary&ratio=2&rotation=0&showTitle=false&size=388955&status=done&style=none&taskId=u62be1409-ed66-4ce9-bfa6-328cb69a15e&title=&width=1214)<br />新建私钥完成后，会自动下载私钥至本地**，需要保留此私钥，此私钥不可重复获取**<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1683517755588-26b28934-2829-4d96-84e0-baf0842e8962.png#clientId=uf65fb308-b69e-4&from=paste&height=635&id=u2690ac7d&originHeight=1270&originWidth=2878&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1342061&status=done&style=none&taskId=u18b4a4c1-9008-480d-b8d5-b6e34f97e33&title=&width=1439)<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1683517804799-759ae9f3-4ed8-4706-be0e-b2a7e4c87fb9.png#clientId=uf65fb308-b69e-4&from=paste&height=245&id=u3fd1c45b&originHeight=490&originWidth=2672&originalType=binary&ratio=2&rotation=0&showTitle=false&size=658245&status=done&style=none&taskId=uacc6cac7-bca5-4251-a713-22ba6156303&title=&width=1336)
<a name="fDbeA"></a>
### 1.2.2 应用客户端密钥
当应用需要扮演用户身份时，需要用生成应用的客户端密钥，使用应用的客户端密钥获取atu access_token<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1683517631063-cdc979aa-0a21-4ea2-8319-11e079e496ef.png#clientId=uf65fb308-b69e-4&from=paste&height=336&id=uc115436b&originHeight=672&originWidth=2878&originalType=binary&ratio=2&rotation=0&showTitle=false&size=967484&status=done&style=none&taskId=u2c40be4b-6c67-44b2-bd72-b282b35b116&title=&width=1439)<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1683517935255-05c3d7e1-400e-480a-933c-2ca7e5d009f4.png#clientId=uf65fb308-b69e-4&from=paste&height=235&id=ue4277956&originHeight=470&originWidth=2400&originalType=binary&ratio=2&rotation=0&showTitle=false&size=568739&status=done&style=none&taskId=u99b36a77-af7f-46ad-9a58-a9bdb1197ff&title=&width=1200)<br />新建客户端密钥后明文只可查看一次，需要及时保存，不可重复获取
<a name="dx2OH"></a>
# 2.安装应用
应用创建完成后，可引导用户对应用进行安装，若应用未上架至应用市场，可引导用户至平台提供的统一安装链接进行应用安装，若应用已发布至应用市场，则可让用户在应用市场进行自助安装
<a name="BaPFK"></a>
## 2.1 统一安装入口页安装
可引导用户至如下链接:
```json
https://atomgit.com/apps/{appName}/installations/new
```
{appName}:应用名称<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1683516984623-5579ce28-b0af-478b-bf9c-ca3800d04090.png#clientId=uf65fb308-b69e-4&from=paste&height=646&id=uebdc9503&originHeight=1292&originWidth=2052&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1389535&status=done&style=none&taskId=ud18ba2a0-cca6-4169-a18c-d020d767df9&title=&width=1026)<br />点击安装后可自动重定向到应用指定的安装地址完成安装
<a name="c5nmY"></a>
## 2.2 安装完成后应用侧获取获取ats access_token
当有组织完成对应的应用安装后，应用开发者可通过调用平台的openApi获取应用当前的安装单据，而后可通过安装单据获取此安装单据对应的应用ats access_token来调用平台的openApi获得如代码库信息等业务数据
<a name="WE9aN"></a>
### 2.2.1 生成JWT-TOKEN
当需查询应用本身的安装单据信息或生成access_token时，需要获取应用Id来生成jwt-token，并且应用私钥对生成的jwt-token进行签名，让服务端进行验签<br />生成jwt-token方式样例如下(以java代码为例):
```json
Algorithm algorithm = Algorithm.RSA256(getPrivateKeyFromPem());
Date currentTime = new Date();
JWT.create()
  //签发人
  .withIssuer("75")
  //签发时间
  .withIssuedAt(DateUtils.addMinutes(currentTime, -1))
  //过期时间
  .withExpiresAt(DateUtils.addMinutes(currentTime, 10))
  //签入
  .sign(algorithm);
```
签发人为appId,app发布人可在app配置详情中获取<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1683518771901-928b7905-9827-4b3e-a1c2-8079d8359538.png#clientId=uf65fb308-b69e-4&from=paste&height=404&id=ua8b1b4ec&originHeight=808&originWidth=2244&originalType=binary&ratio=2&rotation=0&showTitle=false&size=908123&status=done&style=none&taskId=u63e35e41-1413-41de-921f-7e400dd18fe&title=&width=1122)
<a name="WhqSi"></a>
### 2.2.2 基于JWT-TOKEN获取应用安装单据
生成jwt-token后，采用jwt-token进行认证，调用atomgit平台的openApi获取安装单据，调用实例如下:
```json
curl --request GET \
--url "https://api.atomgit.com/app/installations" \
--header "Authorization: Bearer YOUR_JWT"
```
返回内容样例:
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
可获取返回的access_tokens_url来解析安装单据Id
<a name="DpRGR"></a>
### 2.2.3 基于安装单据信息与JWT-TOKEN获取ats access_token
获取安装单据后，可调用atomgit平台的openApi获取ats access_token，调用样例如下:
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
### 2.2.4 基于ats token调用openApi样例
生成应用ats token后，调用openApi时可用ats token来扮演应用身份进行认证，如需要获取某个库下的分支详情信息，则调用样例如下:
```json
curl --request POST \
--url https://api.atomgit.com/repos/wujianchi/test-private-3/branches/master \
--header 'Authorization:Bearer ats_6c91b91bc9ca751ec61140ab55ae8a71'
```
平台侧会基于ats token进行身份认证，认证通过后返回对应的openApi请求结果
<a name="ogBud"></a>
# 3.授权应用
当应用需要扮演用户身份获取平台数据时，应用需要获取用户授权，平台侧提供了oauth授权认证支持，用于支持用户向对应应用进行授权。首先应用若需要获取用户授权，需要在注册应用时**配置用户授权回调URL**
<a name="HywR3"></a>
## 3.1 引导用户授权
平台提供了统一的用户授权页面用于引导用户进行授权，统一的访问页面:
```json
https://atomgit.com/login/oauth/authorize?client_id=xxxxxxx&state=state_test
```
client_id信息可由应用提供方在应用详情页查询<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1683528460915-58b9513e-2a78-4e69-8d9c-5cb89321a642.png#clientId=ud9e1e17e-72b5-4&from=paste&height=504&id=uafb5aecd&originHeight=1008&originWidth=2424&originalType=binary&ratio=2&rotation=0&showTitle=false&size=832185&status=done&style=none&taskId=u8c9e0793-b179-4785-9553-7ac9a6537a4&title=&width=1212)<br />state字段由应用侧生成，平台侧会将state字段加入授权回调地址中，让应用侧进行身份验证<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1683528554991-ec16fbe9-fb5e-4b5f-b082-adf8e889e9ab.png#clientId=ud9e1e17e-72b5-4&from=paste&height=549&id=ueee2a835&originHeight=1098&originWidth=2180&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1180457&status=done&style=none&taskId=u0d84f360-5bbb-4a75-9b7d-111ed267d17&title=&width=1090)<br />点击授权完成后，会自动回调至应用指定的授权地址，并返回临时授权码(code)<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1683529726572-8b9e2c83-ab42-45ef-ad0e-273899a7e1f6.png#clientId=ud9e1e17e-72b5-4&from=paste&height=43&id=u1c1ede76&originHeight=86&originWidth=2272&originalType=binary&ratio=2&rotation=0&showTitle=false&size=116149&status=done&style=none&taskId=ube512fae-5a4b-4341-bbcb-48e50e7a60a&title=&width=1136)
<a name="WMvDs"></a>
## 3.2 基于临时授权码获取atu access_token
调用如下openApi
```json
curl https://api.atomgit.com/login/oauth/access_token 
-X POST 
-d '{"client_id":"Iv1.49521b236a3e8937","client_secret":"fc58279a2b1869b6df00cc9342af147792e4dd9a","code":"acdc24186bc7a8485544"}' 
--header "Content-Type: application/json"
```
client_id:应用client_id，可由应用发布者在应用详情页查询<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1683531307297-75f375ad-55b1-4cf9-9cbe-1e6a84c445ad.png#clientId=u6493f023-cc9c-4&from=paste&height=264&id=u083e622f&originHeight=528&originWidth=2444&originalType=binary&ratio=2&rotation=0&showTitle=false&size=649340&status=done&style=none&taskId=uf2199600-0bc2-420d-8ba1-38f23fb35e2&title=&width=1222)<br />client_secret:应用客户端密钥，可由应用发布者在应用详情页创建后首次查询<br />![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/166642/1683531318999-338c1dc1-0564-4b12-9c2a-f4361f4ebaf8.png#clientId=u6493f023-cc9c-4&from=paste&height=621&id=u794781bb&originHeight=1242&originWidth=2874&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1782222&status=done&style=none&taskId=u0dc254bc-6482-42cd-952a-77fa8db833b&title=&width=1437)<br />调用完成后返回信息如下:
```json
{
    "access_token":"atu_7139d12be03e5f34bb6027abe39422be",
    "expires_in":1684166156606,
    "refresh_token":"refresh_1cb0f0db0ec7ddff96d1e11f7df4bd7a",
    "refresh_token_expires_in":1700034956606
}
```
access_token:atu token<br />expires_in:过期时间<br />refresh_token:refresh_token<br />refresh_token_expires_in:refresh_token过期时间
<a name="Bn1Ie"></a>
## 3.3 刷新atu access_token
由于atu access_token默认过期时间为8小时，过期后需要用refresh_token获取新的atu access_token<br />调用方式如下
```json
curl https://test-api.atomgit.com/login/oauth/access_token 
-X POST 
-d '{"client_id":"Iv1.49521b236a3e8937","client_secret":"fc58279a2b1869b6df00cc9342af147792e4dd9a","grant_type":"refresh_token","refresh_token":"refresh_2ff47923f2f454fd9b104729ec807d6e"}' 
--header "Content-Type: application/json"
```
除了传递client_id与client_secret外，需要额外指定grant_type:"refresh_token" <br />返回结果样例如下:
```json
{
    "access_token": "atu_f73759ba921bc22c213429dfa741e926",
    "expires_in": 1684506494639,
    "refresh_token": "refresh_2ff47923f2f454fd9b104729ec807d6e",
    "refresh_token_expires_in": 1700375294639
}
```
<a name="n74Xr"></a>
# 4.发布应用至应用市场
当前平台暂不支持向三方提供应用自助发布至应用市场功能，若需要发布应用至应用市场，需要联系平台侧针对应用进行手工上架处理
<a name="QUgEu"></a>
# 5.最佳实践
<a name="scoJM"></a>
## 5.1 非网页应用接入
仅需要ats token,无需获取用户授权 (待补充)
<a name="GJFVV"></a>
## 5.2 网页应用接入
接入流程既需要ats token扮演应用身份进行认证，又需要获取用户授权扮演用户身份进行认证 (待补充)
