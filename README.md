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
1、[commitizen](https://github.com/commitizen/cz-cli)

```
全局安装：
npm install commitizen -g

项目安装：
commitizen init cz-conventional-changelog --save-dev --save-exact

项目提交：
git cz
```

2、[nprogress](https://www.npmjs.com/package/nprogress)

页面载入进度条

3、[vue-ls](https://www.npmjs.com/package/vue-ls)

设置和获取本地存储的数据

## 组件

目录：/src/components/XComp

1、XInput (用于表单提交验证el-input)

对el-input的二次封装（插槽没有拓展，如需使用插槽，请暂使用el-input）

```js
// 参数
label：当有值得时候显示在value上面的文案，没有值得时候不显示
prop：对应校验规则
v-model: 值

// demo
<x-input label="活动名称" prop="name" v-model="ruleForm.name" placeholder="请输入活动名称"></x-input>
<el-form-item prop="name" label="活动名称" :class="{'el-form-empty' : ruleForm.name.trim() == ''}">
    <el-input v-model="ruleForm.name" placeholder="请输入活动名称"></el-input>
</el-form-item>

```

2、XSelect（用于表单提交验证el-select）

对el-select的二次封装（插槽没有拓展，如需要使用插槽，请暂使用el-select）

```js
// 参数
label, prop, v-model 同XInput
options: 下拉列表 (value为String)
options: [
    {
        label: 'A',
        value: '1'
    },
    {
        label: 'B',
        value: '2'
    }
]

```

## 混入（mixins）

目录：/src/mixins

### 表单相关（FormMixin.js）

1、 表单校验 validateForm(formName, modelName)  

返回一个promise ,如果传递了modelName, 校验通过会返回对应的data（this[modelName]）

```js
// 参数： formName 必传  modelName 选传
// demo
<el-form :model="ruleForm" ref="ruleForm" :rules="rules">
    <x-input label="活动名称" prop="name" v-model="ruleForm.name" placeholder="请输入活动名称"></x-input>
    <x-select label="活动区域" prop="region" v-model="ruleForm.region" placeholder="请选择活动区域" :options=options></x-select>
    <el-button @click="submitForm">submit</el-button>
</el-form>

methods: {
    submitForm （） {
        this.validateForm('ruleForm', 'ruleForm')
          .then(data => {
            // data 相当于this.ruleForm
            console.log(data)
          })
          .catch(() => {
            console.log('error')
          })
    }
}
```



2、表单重置 resetForm(formName)