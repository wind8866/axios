const package = {
  "name": "axios", // 软件包名称，用于在 npm 注册表中唯一标识包
  "version": "1.15.0", // 软件包版本号，遵循语义化版本控制 (semver)
  "description": "Promise based HTTP client for the browser and node.js", // 软件包描述，简要说明包的功能
  "main": "./dist/node/axios.cjs", // CommonJS 格式的主入口文件路径
  "module": "./index.js", // ES 模块格式的入口文件路径
  "type": "module", // 指定包使用 ES 模块，可选值：'module' 或 'commonjs'
  "types": "index.d.ts", // TypeScript 类型定义文件路径
  "jsdelivr": "dist/axios.min.js", // 在 jsdelivr CDN 上的分发文件路径
  "unpkg": "dist/axios.min.js", // 在 unpkg CDN 上的分发文件路径
  "typings": "./index.d.ts", // 同 types，TypeScript 类型定义文件路径 
  "exports": {// 定义包的导出映射，指定不同环境和导入路径下的入口文件。详见 https://nodejs.org/api/packages.html#exports
    ".": {
      "types": {
        "require": "./index.d.cts", // CommonJS 环境下的类型定义
        "default": "./index.d.ts" // 默认类型定义
      }, // 
      "bun": {
        "require": "./dist/node/axios.cjs", // Bun 环境下的 CommonJS 入口
        "default": "./index.js" // Bun 环境下的默认入口
      }, // 
      "react-native": {
        "require": "./dist/browser/axios.cjs", // React Native 环境下的 CommonJS 入口
        "default": "./dist/esm/axios.js" // React Native 环境下的默认入口
      }, // 
      "browser": {
        "require": "./dist/browser/axios.cjs", // 浏览器环境下的 CommonJS 入口
        "default": "./index.js" // 浏览器环境下的默认入口
      }, // 
      "default": {
        "require": "./dist/node/axios.cjs", // 默认 CommonJS 入口
        "default": "./index.js" // 默认 ES 模块入口
      }
    }, // 
    "./lib/adapters/http.js": "./lib/adapters/http.js", // 导出 HTTP 适配器
    "./lib/adapters/xhr.js": "./lib/adapters/xhr.js", // 导出 XHR 适配器
    "./unsafe/*": "./lib/*", // 导出不安全（内部）模块的映射
    "./unsafe/core/settle.js": "./lib/core/settle.js", // 导出 settle 核心模块
    "./unsafe/core/buildFullPath.js": "./lib/core/buildFullPath.js", // 导出 buildFullPath 核心模块
    "./unsafe/helpers/isAbsoluteURL.js": "./lib/helpers/isAbsoluteURL.js", // 导出 isAbsoluteURL 辅助函数
    "./unsafe/helpers/buildURL.js": "./lib/helpers/buildURL.js", // 导出 buildURL 辅助函数
    "./unsafe/helpers/combineURLs.js": "./lib/helpers/combineURLs.js", // 导出 combineURLs 辅助函数
    "./unsafe/adapters/http.js": "./lib/adapters/http.js", // 导出 HTTP 适配器（不安全）
    "./unsafe/adapters/xhr.js": "./lib/adapters/xhr.js", // 导出 XHR 适配器（不安全）
    "./unsafe/utils.js": "./lib/utils.js", // 导出工具函数（不安全）
    "./package.json": "./package.json", // 导出 package.json 文件
    "./dist/browser/axios.cjs": "./dist/browser/axios.cjs", // 导出浏览器 CommonJS 构建
    "./dist/node/axios.cjs": "./dist/node/axios.cjs" // 导出 Node.js CommonJS 构建
  }, // 定义包的导出映射，指定不同环境和导入路径下的入口文件。详见 https://nodejs.org/api/packages.html#exports 
  "browser": {
    "./dist/node/axios.cjs": "./dist/browser/axios.cjs", // 替换 Node.js 构建为浏览器构建
    "./lib/adapters/http.js": "./lib/helpers/null.js", // 在浏览器中禁用 HTTP 适配器
    "./lib/platform/node/index.js": "./lib/platform/browser/index.js", // 替换 Node.js 平台模块为浏览器平台模块
    "./lib/platform/node/classes/FormData.js": "./lib/helpers/null.js" // 在浏览器中禁用 Node.js FormData
  }, // 浏览器环境下的模块替换映射，用于打包工具替换 Node.js 特定模块
  "react-native": {
    "./dist/node/axios.cjs": "./dist/browser/axios.cjs", // 替换 Node.js 构建为浏览器构建
    "./lib/adapters/http.js": "./lib/helpers/null.js", // 在 React Native 中禁用 HTTP 适配器
    "./lib/platform/node/index.js": "./lib/platform/browser/index.js", // 替换 Node.js 平台模块为浏览器平台模块
    "./lib/platform/node/classes/FormData.js": "./lib/helpers/null.js" // 在 React Native 中禁用 Node.js FormData
  }, // React Native 环境下的模块替换映射 
  "repository": {
    "type": "git", // 仓库类型，可选值：'git', 'svn', 'hg' 等
    "url": "https://github.com/axios/axios.git" // 仓库 URL
  }, // 代码仓库信息
  "keywords": [
    "xhr", // 
    "http", // 
    "ajax", // 
    "promise", // 
    "node", // 
    "browser", // 
    "fetch", // 
    "rest", // 
    "api", // 
    "client" // 
  ], // 关键词数组，用于 npm 搜索和包分类
  "author": "Matt Zabriskie", // 软件包的主要作者信息
  "contributors": [
    "Matt Zabriskie (https://github.com/mzabriskie)", // 
    "Jay (https://github.com/jasonsaayman)", // 
    "Dmitriy Mozgovoy (https://github.com/DigitalBrainJS)", // 
    "Nick Uraltsev (https://github.com/nickuraltsev)", // 
    "Emily Morehouse (https://github.com/emilyemorehouse)", // 
    "Rubén Norte (https://github.com/rubennorte)", // 
    "Justin Beckwith (https://github.com/JustinBeckwith)", // 
    "Martti Laine (https://github.com/codeclown)", // 
    "Xianming Zhong (https://github.com/chinesedfan)", // 
    "Remco Haszing (https://github.com/remcohaszing)", // 
    "Willian Agostini (https://github.com/WillianAgostini)", // 
    "Rikki Gibson (https://github.com/RikkiGibson)", // 
    "Ben Carp (https://github.com/carpben)" // 
  ], // 贡献者列表（忽略内部人员） 
  "sideEffects": false, // 是否包含副作用，可选值：false（无副作用）、true（有副作用）或文件路径数组
  "license": "MIT", // 软件包许可证类型
  "bugs": {
    "url": "https://github.com/axios/axios/issues" // 问题报告 URL
  }, // 问题跟踪信息
  "homepage": "https://axios-http.com", // 项目主页 URL 
  "scripts": {
    "build": "gulp clear && cross-env NODE_ENV=production rollup -c -m", // 构建生产版本
    "version": "npm run build && git add package.json", // 版本更新时自动构建并提交
    "preversion": "gulp version", // 版本更新前的准备脚本
    "test": "npm run test:vitest", // 运行测试（默认 vitest）
    "test:vitest": "vitest run", // 运行 vitest 测试
    "test:vitest:unit": "vitest run --project unit", // 运行单元测试
    "test:vitest:browser": "vitest run --project browser", // 运行浏览器测试
    "test:vitest:browser:headless": "vitest run --project browser-headless", // 运行无头浏览器测试
    "test:vitest:watch": "vitest", // 监听模式运行测试
    "test:smoke:cjs:vitest": "npm --prefix tests/smoke/cjs run test:smoke:cjs:mocha", // 运行 CommonJS 冒烟测试
    "test:smoke:esm:vitest": "npm --prefix tests/smoke/esm run test:smoke:esm:vitest", // 运行 ES 模块冒烟测试
    "test:smoke:deno": "deno task --cwd tests/smoke/deno test", // 运行 Deno 冒烟测试
    "test:smoke:bun": "bun test --cwd tests/smoke/bun", // 运行 Bun 冒烟测试
    "test:module:cjs": "npm --prefix tests/module/cjs run test:module:cjs", // 运行 CommonJS 模块测试
    "test:module:esm": "npm --prefix tests/module/esm run test:module:esm", // 运行 ES 模块测试
    "docs:dev": "cd docs && npm run docs:dev", // 启动文档开发服务器
    "start": "node ./sandbox/server.js", // 启动沙盒服务器
    "examples": "node ./examples/server.js", // 启动示例服务器
    "lint": "eslint lib/**/*.js", // 运行 ESLint 检查
    "fix": "eslint --fix lib/**/*.js", // 自动修复 ESLint 问题
    "prepare": "husky" // 安装 Git 钩子（husky）
  }, // npm 脚本定义，用于自动化构建、测试、文档等任务 
  "dependencies": {
    "follow-redirects": "^1.15.11", // 处理 HTTP 重定向
    "form-data": "^4.0.5", // 构建 multipart/form-data 请求
    "proxy-from-env": "^2.1.0" // 从环境变量获取代理设置
  }, // 生产依赖，运行时需要的包
  "devDependencies": {
    "@babel/core": "^7.29.0", // Babel 核心编译器
    "@babel/preset-env": "^7.29.0", // Babel 环境预设
    "@commitlint/cli": "^20.4.4", // Commitlint 命令行工具
    "@commitlint/config-conventional": "^20.4.4", // 传统 commitlint 配置
    "@eslint/js": "^10.0.1", // ESLint JavaScript 配置
    "@rollup/plugin-alias": "^6.0.0", // Rollup 别名插件
    "@rollup/plugin-babel": "^7.0.0", // Rollup Babel 插件
    "@rollup/plugin-commonjs": "^29.0.2", // Rollup CommonJS 插件
    "@rollup/plugin-json": "^6.1.0", // Rollup JSON 插件
    "@rollup/plugin-node-resolve": "^16.0.3", // Rollup Node 模块解析插件
    "@rollup/plugin-terser": "^1.0.0", // Rollup Terser 压缩插件
    "@vitest/browser": "^4.1.1", // Vitest 浏览器测试环境
    "@vitest/browser-playwright": "^4.1.1", // Vitest Playwright 浏览器提供者
    "abortcontroller-polyfill": "^1.7.8", // AbortController 填充
    "auto-changelog": "^2.5.0", // 自动生成变更日志
    "body-parser": "^2.2.2", // Express 体解析中间件
    "chalk": "^5.6.2", // 终端颜色输出
    "cross-env": "^10.1.0", // 跨平台环境变量设置
    "dev-null": "^0.1.1", // /dev/null 流
    "eslint": "^10.1.0", // ESLint 代码检查工具
    "express": "^5.2.1", // Express Web 框架
    "formdata-node": "^6.0.3", // Node.js FormData 实现
    "formidable": "^3.2.4", // 多部分表单数据解析
    "fs-extra": "^11.3.4", // 增强的文件系统操作
    "get-stream": "^9.0.1", // 获取流数据
    "globals": "^17.4.0", // 全局变量定义
    "gulp": "^5.0.1", // Gulp 构建工具
    "handlebars": "^4.7.8", // Handlebars 模板引擎
    "husky": "^9.1.7", // Git 钩子管理
    "lint-staged": "^16.4.0", // 对暂存文件运行 linter
    "memoizee": "^0.4.17", // 函数记忆化
    "minimist": "^1.2.8", // 参数解析
    "multer": "^2.1.1", // 多部分表单中间件
    "pacote": "^21.5.0", // npm 包提取工具
    "playwright": "^1.58.2", // 浏览器自动化工具
    "prettier": "^3.8.1", // 代码格式化工具
    "pretty-bytes": "^7.1.0", // 字节格式化
    "rollup": "^4.60.0", // Rollup 打包工具
    "rollup-plugin-bundle-size": "^1.0.3", // 包大小报告插件
    "selfsigned": "^5.5.0", // 自签名证书生成
    "stream-throttle": "^0.1.3", // 流限速
    "string-replace-async": "^3.0.2", // 异步字符串替换
    "tar-stream": "^3.1.8", // tar 流处理
    "typescript": "^5.9.3", // TypeScript 编译器
    "vitest": "^4.1.1" // Vitest 测试框架
  }, // 开发依赖，只在开发时需要的包 
  "commitlint": {
    "rules": {
      "header-max-length": [
        2, // 错误级别：2（错误）
        "always", // 何时应用：总是
        130 // 最大长度：130字符
      ]
    }, // commitlint 规则配置
    "extends": [
      "@commitlint/config-conventional" // 继承传统 commitlint 配置
    ]
  }, // commitlint 配置，用于检查 commit 消息格式
  "lint-staged": {
    "*.{js, // cjs, // mjs, // ts, // json, // md, // yml, // yaml}": "prettier --write" // 对暂存的文件运行 Prettier 格式化
  } // lint-staged 配置，对 git 暂存的文件运行工具
}
