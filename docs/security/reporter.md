---
id: reporter
slug: security/reporter
title: 关于扫描结果json文件内容结构的说明 # 页面标题
sidebar_label: 关于扫描结果json文件内容结构的说明
hide_title: true
---

## 安全

### 关于扫描结果json文件内容结构的说明

当您的应用完成检测后，您可以将检测结果文件通过OpenAPI接口上传到平台（<a href="/openAPI/api_versioned/save-security-results" target="_blank">保存安全扫描结果</a>）。上传检测结果文件后，您可以在**对应仓库下->安全->代码扫描**页面查看检测结果。

### 扫描结果属性描述

| 属性                | 类型   | 描述                       |  是否必传 |
|---------------------|--------|----------------------------| ---------|
| scanInfo            | Object | 包含有关扫描信息的对象     |  是      |
| repository          | Object | 有关代码仓库的信息对象     |  是      |
| app                 | Object | 应用信息对象           | 是       |
| leakResults         | Array  | 包含有关漏洞检测结果的数组 | 否       |
| permitResults       | Array  | 包含有关许可证检测结果的数组 | 否       |
| maintenanceResults  | Array  | 包含有关维护风险检测结果的数组 | 否       |
| codeResults         | Array  | 包含有关静态代码检测结果的数组 | 否       |
| comprehensiveReport | String | 综合报告文件的链接             | 是       |

### `scanInfo` 属性描述

| 属性名         | 类型   | 描述                  |  是否必传 |
|---------------|--------|-----------------------|---------|
| type          | String | 触发类型              |  是      |
| id            | String | 触发扫描任务的 ID     |  是      |
| sender        | Object | 触发人信息        |  是      |

### `scanInfo.sender` 属性描述

| 属性名         | 类型   | 描述                  |  是否必传 |
|---------------|--------|-----------------------|---------|
| id     | String | 用户或组织 ID        |  是      |
| type   | String | 类型，用户或组织      |  是      |
| login  | String | 用户名                |  是      |

### `repository` 属性描述

| 属性名         | 类型   | 描述                  |  是否必传 |
|---------------|--------|-----------------------|---------|
| id            | String | 仓库 ID               |  是      |
| name          | String | 仓库名称             |  是      |
| branch        | String | 仓库分支             |  是      |
| commitId      | String | 提交 ID               | 否       |
| permit        | String | 许可证信息           | 否       |

### `app` 属性描述

| 属性名         | 类型   | 描述                  |  是否必传 |
|---------------|--------|-----------------------|---------|
| id            | String | 应用程序 ID          | 是      |
| name          | String | 应用程序名称         | 是      |
| version       | String | 应用程序版本         | 否       |

### `leakResults` 属性描述

| 子属性        | 类型   | 描述                                  |  是否必传 |
|--------------|--------|---------------------------------------| ---------|
| `name`         | String | 漏洞名称                              |  是      |
| `number`       | String | 漏洞编号                              |  是      |
| `precision`    | String | 风险等级,0:未分级1:紧急2:高危3:中危4:低危                                  |  是      |
| `properties`   | Object | 包含有关漏洞属性的对象                | 否       |
| `NVDCVSS3Properties` | Object | 包含有关漏洞的 CVSS3 属性的对象   |  是      |
| `NVDCVSS2Properties` | Object | 包含有关漏洞的 CVSS2 属性的对象   |  是      |
| `locations`    | Array  | 包含有关漏洞位置的数组                |  是      |

### `leakResults.properties` 属性描述

| 子属性               | 类型     | 描述                                      |  是否必传 |
|---------------------|----------|-------------------------------------------| ---------|
| `description`         | String   | 漏洞描述                                  | 否       |
| `releaseTime`         | String   | 发布时间                                  | 否       |
| `PoC`                 | Array    | Proof of Concept（PoC）示例,String数组                | 否       |
| `officialPatchesLink` | Array    | 官方补丁链接,String数组                              | 否       |
| `mitigates`           | String   | 缓解措施文本描述                          | 否       |
| `referLinks`          | Array    | 参考链接,String数组                                  | 否       |
| `suggestions`         | Array    | 建议                                     | 否       |
| `lable`         | Array    | 漏洞标签                                     | 否       |
| `CPE`         | Array    | CPE，string数组                                     | 否       |
| `similarLeak`         | Array    | 相似漏洞                                     | 否       |
| `leakHistory`         | Array    | 漏洞发展历史                                    | 否       |

### `leakResults.properties.lable` 属性描述

| 子属性               | 类型     | 描述                                      |  是否必传 |
|---------------------|----------|-------------------------------------------|---------|
| `name`         | String   | 名称                                  |  是      |
| `introduce`         | String   | 简介                                  |  否      |
| `jumpUrl`         | String   | 点击后的跳转链接                                  |  否      |


### `leakResults.properties.similarLeak` 属性描述

| 子属性               | 类型     | 描述                                      |  是否必传 |
|---------------------|----------|-------------------------------------------|---------|
| `number`         | String   | 编号                                  |  是      |
| `name`         | String   | 名称                                  |  是      |
| `jumpUrl`         | String   | 点击后的跳转链接                                  |  否      |

### `leakResults.properties.leakHistory` 属性描述

| 子属性               | 类型     | 描述                                      |  是否必传 |
|---------------------|----------|-------------------------------------------|---------|
| `event`         | String   | 事件名称                                  |  是      |
| `time`         | String   | 时间                                  |  是      |


### `leakResults.properties.suggestions` 属性描述

| 子属性               | 类型     | 描述                                      |  是否必传 |
|---------------------|----------|-------------------------------------------|---------|
| `title`         | String   | 标题                                  |  是      |
| `description`         | String   | 描述                                  |  是      |

### `leakResults.NVDCVSS3Properties` 属性描述

| 子属性    | 类型   | 描述                  |  是否必传 |
|----------|--------|-----------------------|---------|
| `score`    | Number | 分数                  |  是      |
| `AV`       | String | 攻击向量              |  是      |
| `AC`       | String | 攻击复杂度            |  是      |
| `PR`       | String | 权限要求              |  是      |
| `UI`       | String | 用户交互              |  是      |
| `S`        | String | 影响范围              |  是      |
| `C`        | String | 机密性                |  是      |
| `I`        | String | 完整性                |  是      |
| `A`        | String | 可用性                |  是      |

### `leakResults.NVDCVSS2Properties` 属性描述

| 子属性    | 类型   | 描述                  |  是否必传 |
|----------|--------|-----------------------|---------|
| `score`    | Number | 分数                  |  是      |
| `AV`       | String | 攻击向量              |  是      |
| `AC`       | String | 攻击复杂度            |  是      |
| `PR`       | String | 权限要求              |  是      |
| `UI`       | String | 用户交互              |  是      |
| `S`        | String | 影响范围              |  是      |
| `C`        | String | 机密性                |  是      |
| `I`        | String | 完整性                |  是      |
| `A`        | String | 可用性                |  是      |

### `leakResults.locations` 属性描述

| 子属性                 | 类型   | 描述                                       |
|-----------------------|--------|--------------------------------------------|
| `physicalLocation`      | Object | 包含有关物理位置的对象                     |

### `leakResults.locations.physicalLocation` 属性描述

| 子属性               | 类型     | 描述                                  |
|---------------------|----------|---------------------------------------|
| `artifactLocation`    | Object   | 包含有关组件位置的对象                |

### `leakResults.locations.physicalLocation.artifactLocation` 属性描述

| 子属性         | 类型   | 描述                              |  是否必传 |
|---------------|--------|-----------------------------------|---------|
| `name`          | String | 组件名称                         |  是      |
| `version`       | String | 组件版本                         |  是      |
| `fixVersion`    | String | 修复版本                         | 否       |
| `uri`           | String | 构件位置的 URI                    |  是      |

### `permitResults` 属性描述

| 子属性                   | 类型   | 描述                                  |  是否必传 |
|-------------------------|--------|---------------------------------------|---------|
| `name`                  | String | 许可证名称                           |  是      |
| `componentName`         | String | 组件名称                             |  是      |
| `componentVersion`      | String | 组件版本                             |  是      |
| `conflictComponentName` | String | 冲突组件名称                         | 否       |
| `conflictComponentVersion` | String | 冲突组件版本                       | 否       |
| `conflictDescription`   | Array  | 冲突描述数组,String数组                         | 否       |
| `precision`             | String | 风险等级，1:高风险2:中风险3:低风险                        |  是      |
| `properties`            | Object | 包含有关许可证属性的对象              |  是      |
| `locations`             | Array  | 包含有关许可证位置的数组              |  是      |

### `permitResults.properties` 属性描述

| 子属性             | 类型   | 描述                   |  是否必传 |
|-------------------|--------|------------------------|---------|
| `description`     | String | 许可证描述             |  是      |
| `referLinks`      | Array  | 参考链接,String数组               | 否       |

### `permitResults.locations` 属性描述

| 子属性                 | 类型   | 描述                                       |
|-----------------------|--------|--------------------------------------------|
| `physicalLocation`      | Object | 包含有关物理位置的对象                     |

### `permitResults.locations.physicalLocation` 属性描述

| 子属性                   | 类型     | 描述                                  |
|-------------------------|----------|---------------------------------------|
| `artifactLocation`       | Object   | 包含有关许可证位置的对象                |

### `permitResults.locations.physicalLocation.artifactLocation` 属性描述

| 子属性               | 类型   | 描述                              |  是否必传 |
|---------------------|--------|-----------------------------------|---------|
| `uri`                | String | LICENCE文件所在位置                  |  是      |
| `conflictUri`       | String | 冲突LICENCE文件所在位置              | 否       |

### `maintenanceResults` 属性描述

| 子属性               | 类型   | 描述                              |  是否必传 |
|---------------------|--------|-----------------------------------|---------|
| `name`              | String | 组件名称                         |  是      |
| `version`           | String | 组件版本                         |  是      |
| `address`           | String | 上游项目地址                     |  是      |
| `type`              | String | 风险类型,断供风险/停服风险                     |  是      |
| `properties`        | Object | 包含有关风险属性的对象        |  是      |

### `maintenanceResults.properties` 属性描述

| 子属性             | 类型   | 描述                   | 是否必传 |
|-------------------|--------|------------------------|---------|
| `description`     | String | 风险描述               | 是      |
| `referLinks`      | Array  | 参考链接,String数组               | 否      |

### `codeResults` 属性描述

| 子属性               | 类型   | 描述                          |  是否必传 |
|---------------------|--------|-------------------------------|---------|
| `name`              | String | 风险名称                     |  是      |
| `precision`         | String | 风险等级,0:未分级1:紧急2:高危3:中危4:低危                          |  是      |
| `properties`        | Object | 包含有关风险属性的对象        |  是      |
| `locations`         | Array  | 包含有关风险位置的数组        |  是      |

### `codeResults.properties` 属性描述

| 子属性             | 类型   | 描述                   |  是否必传 |
|-------------------|--------|------------------------|---------|
| `description`     | String | 风险描述               | 是      |
| `referLinks`      | Array  | 参考链接,String数组               |  否      |

### `locations` 属性描述

| 子属性                 | 类型   | 描述                                       |
|-----------------------|--------|--------------------------------------------|
| `physicalLocation`      | Object | 包含有关物理位置的对象                     |

### `locations.physicalLocation` 属性描述

| 子属性                   | 类型     | 描述                                  |
|-------------------------|----------|---------------------------------------|
| `artifactLocation`       | Object   | 包含有关代码位置的对象                |

### `locations.physicalLocation.artifactLocation` 属性描述

| 子属性         | 类型   | 描述                              |  是否必传 |
|---------------|--------|-----------------------------------|---------|
| `uri`          | String | 代码所在文件路径                 |  是      |

### `locations.physicalLocation.artifactLocation.region` 属性描述

| 子属性            | 类型   | 描述                          |  是否必传 |
|------------------|--------|-------------------------------|---------|
| `startLine`      | Number | 起始行号                       |  是      |
| `startColumn`    | Number | 起始列号                       |  是      |
| `endColumn`      | Number | 结束列号                       |  是      |

> 示例

```json
{
"runs":[
    {
        "scanInfo":{
            "type":"Webhook", 
            "id":"123",
            "sender":{
                "id":"321",
                "type":"User",
                "login":"username"
            }
        },
        "respository":{
            "id": "35170",
            "name":"respositoryName",
            "branch":"master",
            "commitId":"1234567890123456789012345678901234567890",
            "permit":"GPL-3.0"
        },
        "app":{
                "id": "324",
                "name": "毒霸爸爸",
                "version": "1.0.0"
        },
       "leakResults":[
            {
                "name":"远程脚本执行漏洞",
                "number":"cve-2020-1000",
                "precision": "1",
                "properties":{
                    "description":"漏洞描述",
                    "releaseTime": "2019-08-14",
                    "PoC": ["POC"],
                    "officialPatchesLink":[
                        "官方补丁链接1",
                        "官方补丁链接2"
                    ],
                    "mitigates":"缓解措施文本描述",
                    "referLinks":[ 
                        "参考链接1", 
                        "参考链接2"
                    ],
                    "suggestions":[{ 
                        "title":"标题",
                        "description":"描述"
                    }]
                 },
                 "NVDCVSS3Properties":{
                    "score":75,
                    "AV":"攻击向量",
                    "AC":"攻击复杂度",
                    "PR":"权限要求",
                    "UI":"用户交互",
                    "S":"影响范围",
                    "C":"机密性",
                    "I":"完整性 ",
                    "A":"可用性",
                    "vectorString":"AV:N/AC:L/Au:N/C:N/I:N/A:P"
                 },
                "NVDCVSS2Properties":{
                    "score":75,
                    "AV":"攻击向量",
                    "AC":"攻击复杂度",
                    "PR":"权限要求",
                    "UI":"用户交互",
                    "S":"影响范围",
                    "C":"机密性",
                    "I":"完整性 ",
                    "A":"可用性",
                    "vectorString":"AV:N/AC:L/Au:N/C:N/I:N/A:P"
                 },
                "locations": [ 
                    {
                       "physicalLocation": {
                          "artifactLocation": {
                               "name":"组件名称",
                               "version":"组件版本",
                               "fixVersion":"对应组件的修复版本",
                               "uri": "src/pom.xml"
                           }
                        }
                    }
                ]
            }
        ],
        "permitResults":[
            {
                "name":"GPL",
                "componentName":"组件名称",
                "componentVersion":"组件版本",
                "conflictComponentName":"冲突组件名称",
                "conflictComponentVersion":"冲突组件版本",
                "conflictDescription":["冲突描述1","冲突描述2"],
                "precision":"1",
                "properties":{
                    "description":"许可证描述",
                    "referLinks":[ 
                        "参考链接1", 
                        "参考链接2"
                    ]
                 },
                "locations": [
                    {
                       "physicalLocation": {
                          "artifactLocation": {
                               "uri": "src/package/xxxxx/LICENCE",
                               "conflictUri": "src/package/yyyy/LICENCE"
                           }
                        }
                    }
                ]
            }
        ],
        "maintenanceResults":[
            {
                "name":"组件名称",
                "version":"组件版本",
                "address": "https://atomgit.com/xxx/yyy",
                "type":"断供风险",
                "properties":{
                    "description":"风险描述",
                    "referLinks":[ 
                        "参考链接1", 
                        "参考链接2"
                    ]
                 }
            }
        ],
        "codeResults":[  
            {
                "name":"未使用到的变量",
                "precision":"1",
                "properties":{
                    "description":"风险描述",
                    "referLinks":[ 
                        "参考链接1", 
                        "参考链接2"
                    ]
                 },
                "locations": [
                    {
                       "physicalLocation": {
                           "artifactLocation": {
                              "uri": "src/main.js"
                            },
                           "region": {
                              "startLine": 2,
                              "startColumn": 7,
                              "endColumn": 10
                            }   
                        }
                    }
                ]
            }
        ],
        "comprehensiveReport":"https://atomgit.oss-cn-beijing.aliyuncs.com/security/result/代码风险报告.doc"
    }
]
}
```