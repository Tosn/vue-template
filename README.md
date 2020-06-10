## 英国H5改版
```
目录结构
├── babel.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── README.md
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── HelloWorld.vue
│   ├── main.js
│   ├── plugins
│   │   └── axios.js
│   ├── router
│   │   └── index.js
│   ├── store
│   │   └── index.js
│   ├── styles.scss
│   └── views
│       ├── About.vue
│       └── Home.vue
└── vue.config.js
```

### 插件
[commitizen](https://github.com/commitizen/cz-cli)
```
全局安装：
npm install commitizen -g

项目安装：
commitizen init cz-conventional-changelog --save-dev --save-exact

项目提交：
git cz
```