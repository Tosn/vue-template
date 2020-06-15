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

### 基本规范

1、空格2

2、所有组件采用大驼峰命名且为副词（CompName不要是单个单词）

3、所有页面views采用小驼峰命名（viewPage）

4、路由名称推荐使用小写自摸命名

其他规范：[Eslint standard规范](https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md)

备注：在代码提交git的时候会进行eslint检查，如检查不通过，不可以提交，为了开发方便目前在开发阶段，书写保存不会进行校验，如若需要开启实时校验，修改自己开发本地的vue.config.js

```js
module.exports = {
    ...
    lintOnSave: true,
    ...
}
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
label[string, unrequired]：当有值得时候显示在value上面的文案，没有值得时候不显示
prop[string, unrequired]：对应校验规则
v-model[string, unrequreid]: 值

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
options[Array, required]: 下拉列表 (value为String)
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

3、SvgIcon（用于矢量图标）

```js
// 目录：/src/icons/components/SvgIcon
// 参数：
iconClass[string, required]，和icon的名称一致  
className[string, unrequired] 可以设定样式
// demo
<svg-icon iconClass="arrow-left"></arrow-left>
可以绑定任意时间，例如 添加@click
<svg-icon iconClass="arrow-left" @click="$router.go(-1)"></arrow-left>

// 查看项目已有icon 列表
路由： /icons(仅在开发模式存在)
```

4、CountDownButton（按钮倒计时组件）

```js
// 目录：/src/components/Register/CountDownButton.vue
// 参数： 
time[number，unrequired] :倒计时时间
text[string, unrequired] ：默认显示的文案
countText[string, unrequired]: 倒计时过程中的文案
```



## 混入（mixins）

目录：/src/mixins

### 表单相关（FormMixin.js）

1、 表单校验 validateForm(formName, modelName)  

返回一个promise ,如果传递了modelName, 校验通过会返回对应的data（this[modelName]）

```js
// 参数： formName[string, required]  modelName[string, unrequired]
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

### 登录注册相关（RegMixin.js）

1、倒计时 countDown

用于倒计时，倒计时过程中不可再次点击、返回一个promise 用于倒计时结束时候执行

```js
// 传参 time[number, unrequired]，text[string, unrequired] text内容需要有空格，执行倒计时的时候会把倒计时的秒替换所在空格位置，若text没有空格，则倒计时默认追加在结尾处
countDown(time, text)
    .then(() => {
    	console.log('倒计时结束')
	}
)
```

### 路由

1、白名单：不需要登录权限可以访问的页面

路由设置的时候添加meta whiteList: true

```js
{
    meta: {
        whiteList: true
    }
}
```

2、页面标题

```js
{
    meta: {
        title: 'Page Title'
    }
}
```

3、布局

需要头尾布局的页面引用Layout component，页面路由写在子路由里面，独立模块路由在modules建立对应的文件

```js
import Layout from ...
import OtherModule from './modules/moduleName'
const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/index',
        children: [
            {
                path: 'index',
                component...
            }
        ]
    },
    ...OtherModule
]
```

### 插件

1、toast

```js
// 参数
duration[number, unreqired]： 显示时间 默认3000ms
iconClass[String, unreqired]: 按钮样式class 默认没有，需要自己添加对应的class 样式 .toast-icon-iconClass
// 使用
this.$toast('toast message')
// 带 icon图标
this.$toast('toast success message', {
    iconClass: 'success',  // 可自定义
})
// 带回调
this.$toast('toast message')
	.then(() => {
    	console.log('toast remove')
})
```

### 公用方法（utils）

目录：/src/utils

1、getPageInfo.js

存放一些获取页面信息的公用方法

* getPageTitle  获取页面的title

  ```js
  // 参数
  matched: [array, unrequred] 路由的match 用于拼接完整的title
  separator：[string, unrequired] title的分割符
  
  // 返回的title为 全局默认 + separator + 父级 + separator + 自身
  ```

2、validate.js

存放表单的校验规则



### 过滤器（filter）不支持v-model

目录：/src/filters

1、空白填充（bl）

```js
// 参数
ft[string, unrequired]  // 没有值时候默认展示的文本

// demo
{{user.name | bl}}
当user.name 为空或不存在时，或默认展示填充的文本（默认'——'）

// 设置文本
{{user.name | bl('****')}}
```



2、文本脱敏（tl）

```js
// 参数
start[number, unreqired] 脱敏开始位置,没有则默认为0
end[number, unreqired] 脱敏结束位置，没有则默认为value.length  可以为负值，负值则为结束倒数
isTake[boolean, unrequired] 是否脱敏 默认为true 主要为脱敏切换考虑
max[number or string, unrequired]脱敏显示的长度 默认为4 如果不超过4 显示4，可以传入参数字符串'all' 脱敏长度为原字符串长度
takeText[string unreqired]脱敏替换文本 默认为"*"

// demo
{{'1234567890' | tl}} => '****'
{{'1234567890' | tl(3, 6)}} => '123***7890'
{{'1234567890' | tl(3, -2)}} => '123****90'
{{'1234567890' | tl(3, 9, false)}} => '1234567890'
{{'1234567890' | tl(3, 9, true, 2)}} => '123**90'
{{'1234567890' | tl(3, -2, true, 4, "&")}} => '123&&&&90'
```



