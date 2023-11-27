# 网站

基于开源框架 [Docusaurus 2](https://docusaurus-archive-october-2023.netlify.app/zh-CN/docs/2.2.0), 生成静态网站.

## node 环境

```bash
>=18.0.0 
```

## 安装

```bash
yarn
```

## 本地开发环境

```bash
# 生成 API 的 markdown 文档
yarn gen-all
# 启动
$ yarn start
```

该启动命令会在本地启动一个开发环境服务，并在浏览器中打开该站点。所有的内容修改，在保存时都会自动重启服务。

## 编译

```bash
# 根据根目录中的 openAPI 文件夹，生成 API 的 markdown 文档到 docs/openAPI 文件夹
yarn gen-all
# 编译
$ yarn build
```

编译成功后的结果将会放在 `build` 文件夹下，我们可以使用 `live-server` 或者本地的nginx 进行预览

## 部署

方式1:  
作为服务器应用，在服务器上启动`yarn run start`

方式2:  
将 `build` 文件夹以静态站点的方式发布到线上

## API 文档

API 使用文档找到了一个 `docusaurus` 的插件项目，可参考： <https://gitcode.net/mirrors/PaloAltoNetworks/docusaurus-openapi-docs>

## 国际化

### 方案

AtomGit docs 项目的国际化方案参考 [i18n - 教程 | Docusaurus](https://docusaurus-archive-october-2023.netlify.app/zh-CN/docs/2.2.0/i18n/tutorial) ，由于项目基本上都是 markdown 文档，所以采用了 [Git-i18n](https://docusaurus-archive-october-2023.netlify.app/zh-cn/docs/2.2.0/i18n/git) 的翻译方案；

初始化流程已经走完，英文对应的文件都放在 `i18n/en`目录下。

### 更新及维护

后续维护工作，需要关注的几个文件/目录为：

```bash
# 翻译文档目录，对应着 docs 目录
i18n/en/docusaurus-plugin-content-docs/current

# sidebar 对应的 en 翻译文件
i18n/en/docusaurus-plugin-content-docs/current.json

# navbar 对应的 en 翻译文件
i18n/en/docusaurus-theme-classic/navbar.json

# footer 对应的 en 翻译文件
i18n/en/docusaurus-theme-classic/footer.json
```

#### 普通文档维护

如有 docs 下的 markdown 文档更新（Open API 文档更新方式见 [OpenAPI维护](#OpenAPI)），需**同步更新** `i18n/en/docusaurus-plugin-content-docs/current` 目录下对应的英文文档：

- 例如 `docs/agreements/declare.md` 文件有更新，则需更新它对应的英文文档 `i18n/en/docusaurus-plugin-content-docs/current/agreements/declare.md`
- 如新增了一个 `docs/user/new.md` 文档，内容为：

```md
---
id: user-new # 唯一ID
slug: /user/new
description: user new
title: user new
hide_title: true
sidebar_label: 新用户文档
---

# User new

示例文档

```

则需增加它的翻译文档：`i18n/en/docusaurus-plugin-content-docs/current/user/new.md`，内容为：

```md
---
id: user-new # 唯一ID
slug: /user/new
description: user new
title: user new
hide_title: true
sidebar_label: New User doc
---

# User new

demo doc

```

> 未增加相应的翻译文档时，切换到英文，项目会展示中文文档。

#### navbar 维护

如果**侧边栏新增了 category 、navbar 或 footer 有调整**，可以运行 `yarn write-translations --locale en --override`，该命令会将我们上面提到的 `i18n/en` 目录下的`current.json`、`footer.json` 和 `navbar.json` 重新生成，可以在执行该指令前，可以先复制一份原来的 json 文件，在新生成的 json 中，翻译完新增内容后，将原来未改动的已翻译部分拷贝回来。

#### OpenAPI维护<a name="OpenAPI"></a>

`docs/openAPI` 目录下的 mdx 文档，是用 `docusaurus-plugin-openapi-docs` 插件从 `openAPI/api.yaml` 生成的，具体配置可以到 `docusaurus.config.js` 里查看；

我对 `openAPI/api.yaml` 文档进行了翻译，翻译后的文件在同级目录下（`openAPI/api_en.yaml`），当前`i18n/en/docusaurus-plugin-content-docs/current/openAPI` 目录下的 API 文档，是从 `openAPI/api_en.yaml` 生成的；

后续 `api.yaml` 有更新的话，可以考虑按如下步骤更新或生成对应的英文 API 文档：

1. 更新 `api_en.yaml`
2. 在项目根目录下的`./docusaurus.config.js` 文件中，将 `specPath: "openAPI/api.yaml"` 临时改为 `specPath: "openAPI/api_en.yaml`
3. 执行 `yarn gen-all-en` 命令，生成英文版本的 API 文档
4. 将对应的 API 文档，从 `docs/openAPI/api_versioned` 目录下，拷贝到 `i18n/en/docusaurus-plugin-content-docs/current/openAPI/api_versioned` 目录下（**建议只调整新增、修改的文档**），如需覆盖全部的 API 英文文档，也可以执行下面的命令：

```bash
# linux & mac
cp -rf docs/openAPI/api_versioned/* i18n/en/docusaurus-plugin-content-docs/current/openAPI/api_versioned

# window powershell 7
# window cmd 可以用 copy 命令
cp -Recurse -Force docs/openAPI/api_versioned/* i18n/en/docusaurus-plugin-content-docs/current/openAPI/api_versioned
```

5. 在 `docusaurus.config.js` 中，将 `specPath: "openAPI/api_en.yaml` 配置改回 `specPath: "openAPI/api.yaml"`

### 本地开发预览

运行 `yarn start --locale en`，以开发模式启动英文站点。

### 错误处理

#### 启动失败

`yarn start --locale en` 报错：

```bash
[ERROR] Loading of version failed for version current
[ERROR] Error: Invalid sidebar file at "sidebars.js".
These sidebar document ids do not exist:
```

这种情况一般是 `api_en.yaml` 与 `api_yaml` 格式不一致导致的，可以按下面的流程，进行验证：

1. 执行`yarn clean-all` 清空 `docs/openAPI` 目录
2. 再执行 `yarn gen-all` ，生成中文 API 文档
3. 执行 `yarn start` 启动默认中文语言版本，如果能执行的话，一般能确认是 `api_en.yaml` 与 `api_yaml` 格式不一致导致的错误，可以详细检查下缩进、大小写，或有无字段缺失等问题

#### API 文档生成失败

`yarn gen-all-en` 失败，报错：

```bash
Loading of api failed for "xxxxx\docs\openAPI\api_en.yaml"
[ERROR] Error: can not read a block mapping entry; a multiline key may not be an implicit key in "xxxxx\docs\openAPI\api_en.yaml" (2040:18)
```

上面的错误示例里，指明了行数`2040:18`，可以到 `api_en.yaml` 对应行查看，进行处理，一般是缩进、大小写的问题。

#### API 英文介绍文档——侧边栏 label 名为 “介绍”

一般是因为把`i18n\en\docusaurus-plugin-content-docs\current\openAPI\api_versioned\atomgit-openapi.info.mdx`覆盖了，可以去这个文档里，把 `sidebar_label` 改成 `Introduction` 即可。

### 线上效果预览

运行 `yarn build`，等中英文版本均构建完成后，再执行`yarn serve`，可以预览线上效果，进行多语言切换检查。

### 翻译工具

可调用谷歌翻译接口（`https://translate.googleapis.com/translate_a/single`），进行翻译。
