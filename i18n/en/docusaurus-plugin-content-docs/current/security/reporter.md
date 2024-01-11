---
id: reporter
slug: security/reporter
title: Description of the content structure of the scan result json file # 页面标题
sidebar_label: Description of the content structure of the scan result json file
hide_title: true
---

## Security

### Description of the content structure of the scan result json file

After your application completes the detection, you can upload the detection result file to the platform through the OpenAPI interface（<a href="/openAPI/api_versioned/save-security-results" target="_blank">Save security scan results</a>）.After uploading the test result file, you can view the test results on the **corresponding warehouse->Security->Code Scan** page.

### `Scan Result`property description

| property name               | type   |description                       | required |
|---------------------|--------|----------------------------| ---------|
| scanInfo            | Object | Object containing information about the scan     | yes      |
| repository          | Object | Information object about the code repository     | yes      |
| app                 | Object | application information object           | yes       |
| leakResults         | Array  | Array containing vulnerability detection results | no       |
| permitResults       | Array  | Array containing license detection results | no       |
| maintenanceResults  | Array  | Array containing detection results about maintenance risks | no       |
| codeResults         | Array  | Array containing results about static code instrumentation | no       |
| comprehensiveReport | String | Link to integrated reporting document             | yes       |

### `scanInfo` property description

| property name        | type   |description                  | required |
|---------------|--------|-----------------------|---------|
| type          | String | trigger type              | yes      |
| id            | String | The ID that triggered the scan task     | yes      |
| sender        | Object | Trigger information        | yes      |

### `scanInfo.sender` property description

| property name        | type  | description                  | required |
|---------------|--------|-----------------------|---------|
| id     | String | user or org ID        | yes      |
| type   | String | type:user or org      | yes      |
| login  | String | username                | yes      |

### `repository` property description

| property name        | type   |description                  | required |
|---------------|--------|-----------------------|---------|
| id            | String | repository ID               | yes      |
| name          | String | repository name             | yes      |
| branch        | String | repository branch             | yes      |
| commitId      | String | commit ID               | no       |
| permit        | String | License information           | no       |

### `app` property description

| property name        | type   |description                  | required |
|---------------|--------|-----------------------|---------|
| id            | String | App ID          | yes      |
| name          | String | App name         | yes      |
| version       | String | App version         | no       |

### `leakResults` property description

| child property        | type   |description                                  | required |
|--------------|--------|---------------------------------------| ---------|
| `name`         | String | Vulnerability name                              | yes      |
| `number`       | String | Vulnerability id                              | yes      |
| `precision`    | String | risk level,0: Unclassified 1: Urgent 2: High risk 3: Moderate risk 4: Low risk                              | yes      |
| `properties`   | Object | An object containing properties about the vulnerability                | no       |
| `NVDCVSS3Properties` | Object | Object containing CVSS3 properties about the vulnerability   | yes      |
| `locations`    | Array  | Array containing information about vulnerability locations                | yes      |

### `leakResults.properties` property description

| child property               | type     | description                                     | required |
|---------------------|----------|-------------------------------------------| ---------|
| `description`         | String   | Vulnerability description                                  | no       |
| `releaseTime`         | String   | publish time                                  | no       |
| `PoC`                 | Array    | Proof of Concept（PoC）examples,String array                | no       |
| `officialPatchesLink` | Array    | Official patch link,String array                              | no       |
| `mitigates`           | String   | Mitigation text description                          | no       |
| `referLinks`          | Array    | Reference link,String array                                | no       |
| `suggestions`         | Array    | suggestion                                     | no       |

### `leakResults.properties.suggestions` property description

| child property               | type     | description                                     | required |
|---------------------|----------|-------------------------------------------|---------|
| `title`         | String   | title                                  | yes      |
| `description`         | String   |description                                  | yes      |

### `leakResults.NVDCVSS3Properties` property description

| child property    | type   |description                  | required |
|----------|--------|-----------------------|---------|
| `score`    | Number | score                  | yes      |
| `AV`       | String | attack vector              | yes      |
| `AC`       | String | Attack complexity            | yes      |
| `PR`       | String | Permission requirements              | yes      |
| `UI`       | String | User Interaction              | yes      |
| `S`        | String | Scope              | yes      |
| `C`        | String | Confidentiality                | yes      |
| `I`        | String | integrity                | yes      |
| `A`        | String | Availability                | yes      |

### `leakResults.locations` property description

| child property                 | type  | description                                       |
|-----------------------|--------|--------------------------------------------|
| `physicalLocation`      | Object | Contains objects about physical location                     |

### `leakResults.locations.physicalLocation` property description

| child property               | type     | description                                 |
|---------------------|----------|---------------------------------------|
| `artifactLocation`    | Object   | Contains objects about components location                |

### `leakResults.locations.physicalLocation.artifactLocation` property description

| child property         | type   |description                              | required |
|---------------|--------|-----------------------------------|---------|
| `name`          | String | component name                         | yes      |
| `version`       | String | component version                         | yes      |
| `fixVersion`    | String | Repair version                         | no       |
| `uri`           | String | URI of widget location                    | yes      |

### `permitResults` property description

| child property                   | type  | description                                  | required |
|-------------------------|--------|---------------------------------------|---------|
| `name`                  | String | License information                           | yes      |
| `componentName`         | String | component name                             | yes      |
| `componentVersion`      | String | component version                             | yes      |
| `conflictComponentName` | String | Conflicting component name                         | no       |
| `conflictComponentVersion` | String | Conflicting component version                       | no       |
| `conflictDescription`   | Array  | Conflict description array, String array                         | no       |
| `precision`             | String | Risk level, 1: high risk 2: medium risk 3: low risk                        | yes      |
| `properties`            | Object | Object containing properties about the license              | yes      |
| `locations`             | Array  | Array containing the location of the license              | yes      |

### `permitResults.properties` property description

| child property             | type  | description                   | required |
|-------------------|--------|------------------------|---------|
| `description`     | String | License description             | yes      |
| `referLinks`      | Array  | Reference link,String array              | no       |

### `permitResults.locations` property description

| child property                 | type   | description                                       |
|-----------------------|--------|--------------------------------------------|
| `physicalLocation`      | Object | Contains objects about physical location                     |

### `permitResults.locations.physicalLocation` property description

| child property                   | type     | description                                 |
|-------------------------|----------|---------------------------------------|
| `artifactLocation`       | Object   | Contains an object about the license location                |

### `permitResults.locations.physicalLocation.artifactLocation` property description

| child property               | type  | description                              | required |
|---------------------|--------|-----------------------------------|---------|
| `uri`                | String | LICENCE file location                 | yes      |
| `conflictUri`       | String | conflicted LICENCE file location              | no       |

### `maintenanceResults` property description

| child property               | type   |description                              | required |
|---------------------|--------|-----------------------------------|---------|
| `name`              | String | component name                         | yes      |
| `version`           | String | component version                         | yes      |
| `address`           | String | Upstream project address                     | yes      |
| `type`              | String | Risk type, supply interruption risk/service suspension risk                    | yes      |
| `properties`        | Object | Object containing attributes about risk        | yes      |

### `maintenanceResults.properties` property description

| child property             | type   |description                   | required |
|-------------------|--------|------------------------|---------|
| `description`     | String | risk description               | yes      |
| `referLinks`      | Array  | Reference link,String array              | no      |

### `codeResults` property description

| child property               | type   |description                          | required |
|---------------------|--------|-------------------------------|---------|
| `name`              | String | risk name                     | yes      |
| `precision`         | String | Risk level, 0: Ungraded 1: Urgent 2: High risk 3: Medium risk 4: Low risk                          | yes      |
| `properties`        | Object | Object containing attributes about risk        | yes      |
| `locations`         | Array  | Object containing attributes about risk location        | yes      |

### `codeResults.properties` property description

| child property             | type  | description                   | required |
|-------------------|--------|------------------------|---------|
| `description`     | String | risk description               | yes      |
| `referLinks`      | Array  | Reference link,String array              |  no      |

### `locations` property description

| child property                 | type  | description                                       |
|-----------------------|--------|--------------------------------------------|
| `physicalLocation`      | Object | Contains objects about physical location                     |

### `locations.physicalLocation` property description

| child property                   | type     | description                                 |
|-------------------------|----------|---------------------------------------|
| `artifactLocation`       | Object   | object containing information about the location of the code                |

### `locations.physicalLocation.artifactLocation` property description

| child property         | type   |description                              | required |
|---------------|--------|-----------------------------------|---------|
| `uri`          | String | uri of code               | yes      |

### `locations.physicalLocation.artifactLocation.region` property description

| child property            | type   |description                          | required |
|------------------|--------|-------------------------------|---------|
| `startLine`      | Number | startLine                       | yes      |
| `startColumn`    | Number | startColumn                       | yes      |
| `endColumn`      | Number | endColumn                       | yes      |

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
                    "A":"可用性"
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
                    "description":"risk description",
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
                    "description":"risk description",
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
