# 网站

基于开源框架 [Docusaurus 2](https://docusaurus.io/), 生成静态网站.

### node 环境
```
>=18.0.0 
```

### 安装

```
$ yarn
```

### 本地开发环境

```
// 生成 API 的 markdown 文档
yarn gen-all
// 启动
$ yarn start
```

该启动命令会在本地启动一个开发环境服务，并在浏览器中打开该站点。所有的内容修改，在保存时都会自动重启服务。

### 编译

```
//根据根目录中的 openAPI 文件夹，生成 API 的 markdown 文档到 docs/openAPI 文件夹
yarn gen-all
// 编译
$ yarn build
```

编译成功后的结果将会放在 `build` 文件夹下，我们可以使用 `live-server` 或者本地的nginx 进行预览

### 部署

方式1:  
作为服务器应用，在服务器上启动`yarn run start`

方式2:  
将 `build` 文件夹以静态站点的方式发布到线上

## API 文档

API 使用文档找到了一个 `docusaurus` 的插件项目，可参考： <https://gitcode.net/mirrors/PaloAltoNetworks/docusaurus-openapi-docs>

### 备注

该文档修改需要经过代码评审