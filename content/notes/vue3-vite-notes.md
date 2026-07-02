---
id: vue3-vite-notes
type: tech
title: Vue3 + Vite 学习笔记：从环境搭建到路由管理
date: 2025.02.17
summary: 一份完整的 Vue3 + Vite 入门实践笔记：从 Node.js 环境搭建、项目目录结构，到响应式（ref/reactive）、常用指令（v-model/v-if/v-for）、计算属性与监听、组件通信（props/emit/slot/provide-inject）、生命周期，再到 Pinia 状态管理和 Vue Router 路由配置。
tags: [Vue3, Vite, 前端, Pinia, Vue Router]
---

# 安装环境

## 1.下载 nodejs

[Node.js — Download Node.js®](https://nodejs.org/zh-cn/download)

v18 版本

## 2.安装 CNPM

```bash
npm install cnpm -g
```

## 3.安装 Vue

```bash
cnpm init vue@latest
```

![Vue 项目初始化](/Tang-Space/assets/img/tech/vue3-notes-01-vue-init.png)

## 4.安装 vite

```bash
#最好进入桌面进行安装
cd Desktop
cnpm create vite@latest
npm create vite@4.3.2
```

![Vite 项目初始化](/Tang-Space/assets/img/tech/vue3-notes-02-vite.png)

然后使用 vs 打开 vite

# Vue3+Vite

## 目录结构介绍

1. node_modules：存放项目依赖的其他模块
2. public：用于存放静态文件，可以使用 /xxx 进行访问，一般把第三方文件放在这个目录
3. src：项目源代码目录
    1. asset：也是用来存放静态文件，比如字体，图片，icon 等
    2. components：用于存放组件，一个个 vue 文件
    3. App.vue：项目的根组件，index.html 通过导入 main.js 实现 App.vue 和 index.html 的内容绑定，同时其他组件也通过 app.vue 进行导入
    4. main.js：程序的入口文件，可以实现 app.vue 和 index.html 绑定
    5. style.css：全局样式表，也是通过 main.js 导入
4. index.html：网站的入口
5. package.json：项目的描述文件，依赖的包，版本
6. 没有被列出来的目录：
    1. src/
        1. router：vue 路由配置目录
        2. store：状态存储
        3. views：页面组件
        4. utils：封装的工具类
        5. config：程序配置
        6. api：后端接口配置

## ref 与 reactive 区别

```vue
//ref reactive区别
    //ref:一般用于定义简单的响应式数据
    //reactive：一般用于创建一个响应式对象
    const count = ref(0)
    const name = ref("dk")
    name.value="try"
    console.log(name)
    //定义一个对象
    const info = reactive({
    name:"try",
    age:19,
    address:"xxx"
    })
    console.log("默认的info",info)
    info.age=40
    console.log("修改后的info",info)

    <template>


    <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>用户信息:{{ info.name }}</p>
    </div>
    </template>
```

## 定义只读数据

```vue
//只读数据，不能修改
    const readOnlyData = readonly("这是一个只读数据")
    console.log(readOnlyData)
```

## v-on

```vue
<!-- v-开头 -->
<!-- 语法糖：@:v-on  :v-model -->
<div class="card">
  <button type="button" @click="plus1(10)">count is {{ count }}</button>
    或者
      <button type="button" v-on:="plus1(10)">count is {{ count }}</button>
```

## v-model

`v-model` 是 Vue 中非常常用的指令，用于在表单元素（如 `<input>`, `<textarea>`, `<select>` 等）和组件之间创建双向数据绑定。它可以简化表单数据的管理，并使数据和视图保持同步。

```vue
const plus1=() ={
  // count.value++
  count.value+=inputValue.value
  }

  // 与v-model进行双向绑定
  let inputValue = ref(0)

  </script>

  <template>

  <!-- v-开头 -->
  <!-- 语法糖：@:v-on  :v-model -->
  <div class="card">
  <!-- v-model:用来实现数据的双向绑定  输入的值与相应式的数据进行绑定-->
  <!-- 修饰符
  .number:把value转成number类型
  .trim:去除左右两边的空格
  .lazy:当数据失去焦点或者回车时才会更新
  -->
  <input v-model.number="inputValue" placeholder="请输入你要加的值">
  <button type="button" @click="plus1()">count is {{ count }}</button>
  <p>用户信息:{{ name }}</p>
  <p>用户信息:{{ info.name }}</p>

  </div>
  </template>
```

## v-show

v-show 可以帮助我们实现很简单的实验元素的显示和隐藏

```vue
let show = ref(true)
  const display=()=>{
  //true->flase ,false-<true
  show.value=!show.value


  <!-- v-show 可以帮助我们实现很简单的实验元素的显示和隐藏-->
  <h1 v-show="show">
  这是一个标题
  </h1>
  <button type="button" @click="display()">{{show?"隐藏":"显示"}}</button>
```

## v-if-else

```vue
<!-- v-if
根据表达式的真假直接去操作DOM，而v-show只是操作元素的display属性
v-if开销比较大，v-show开销比较小 
-->
<!-- 
切换比较频繁的场景用show，不频繁用if，复杂逻辑用if
-->
<!-- <h1 v-if="show">
这是一个v-if控制的标题
</h1>
<h2 v-else>这是一个v-else的标题</h2>
<button type="button" @click="display()">{{show?"隐藏":"显示"}}</button> -->
```

## v-for

```vue
//v-for
    let menu = reactive(["鸭子","烧鹅","里脊"])
    let menuPrice=reactive([
    {
    name:"鸭子",
    price:10
    },
    {
    name:"烧鹅",
    price:20
    },
    {
    name:"里脊",
    price:30
    },
    ])

    let info2=reactive({
    name:"唐睿阳",
    age:21,
    address:"成都"
    })

    let newItem= ref()
    const submitItem=()=>{
    menu.push(newItem.value)
    newItem.value=""
    }


  <!-- v-for
  用来遍历数据，然后渲染页面的指令
  -->
  <!-- 遍历数组的数据 -->
                    <span>今天的菜单有：</span>
                      <ul>
                      <li v-for="(item,index) in menu">
                      {{index}}-{{ item }}
                      </li>
                      </ul>
                      <input v-model="newItem" placeholder="请输入菜名">
                      <button type="button" @click="submitItem()">提交</button>
                      <!-- 遍历数组嵌套对象的数据 -->
                      <span>今天的菜单和价格是：</span>
                      <ul>
                      <li v-for="(item,index) in menuPrice">
                      {{index}}-菜品：{{ item.name }} 价格：{{ item.price }}
  </li>
    </ul>
    <!-- 遍历对象的数据 -->
    <span>你的信息如下</span>
    <ul>
    <li v-for="(value,key) in info2">
    {{ key }}:{{ value }}
  </li>
    </ul>
```

## method 与 computed

```vue
//methods:一种定义方法的方式，这些方法可以被模板中的某个地址调用，每次调用都会执行方法
//里面的代码，然后处理业务逻辑，处理事件
//computed:一种定义计算属性的方法，根据依赖的数据动态计算并返回一个新值
//computed是具有缓存性质的，只有当依赖的数据发生变化时才会重新计算
```

### method（方法属性）

```vue
let price=ref()
let counts=ref()
let total=ref()
//定义一个方法
let costTotal=()=>{
  total.value=price.value*counts.value
}


<input placeholder="请输入价格" v-model.number="price">
  <input placeholder="请输入数量" v-model.number="counts">
  <button type="button" @click="costTotal">计算</button>
  {{ total }}
```

![method 计算结果](/Tang-Space/assets/img/tech/vue3-notes-03-method.png)

### computed（计算属性）

```vue
let price=ref()
let counts=ref()
let total=ref()

//定义一个计算属性
let costTotalComputed = computed(
  ()=>{
    return price.value*counts.value
  }
)

计算结果：{{ costTotalComputed }}
```

![computed 计算结果](/Tang-Space/assets/img/tech/vue3-notes-04-computed.png)

## watch

### 监听普通数据类型

```vue
let message = ref("")
let confirmMessage = ref("")
//watch
/* 
  watch(监听的数据,("现在的值","之前的值")=>{
  动作
  })
*/
//监听多个值
watch([message,confirmMessage],(newValue,oldValue)=>{
  //动作
  console.log(newValue,oldValue)
  if(newValue[0]==newValue[1]){
    console.log("两次输入一样")
  }else{
    console.log("两次不一样")
  }
})


    <input placeholder="请输入新值" v-model.lazy="message">
    <input placeholder="请确认输入新值" v-model.lazy="confirmMessage">
```

### 监听对象

```vue
//监听对象
//定义一个对象
const userInfo = reactive({
  name:"try",
  age:18,
  QQ:"123122131",
  //数据嵌套
  phone:{
    mode:"iPhone",
    price:9999
  }
})
//getter函数
watch(()=>userInfo.age,(newValue,oldValue)=>{
  console.log("oldvalue:",oldValue)
  console.log("newvalue:",newValue)

})

watch(()=>userInfo.phone.price,(newValue,oldValue)=>{
  console.log("oldvalue:",oldValue)
  console.log("newvalue:",newValue)

}),{deep:true}



    <input placeholder="请输入年龄" v-model.number="userInfo.age">
    <input placeholder="请输入手机号" v-model.number="userInfo.phone.price">
```

## 键盘修饰符

```vue
let messages = ref()
//定义一个回车键事件函数
const enterHandler = ()=>{
  console.log("你敲了回车键")
}
//定义一个删除键事件函数
const deleteHandler = ()=>{
  console.log("你敲了删除键")
}
const tabHandler = ()=>{
  console.log("你敲了tab键")
}
const ctrlEnterHandler = ()=>{
  console.log("你敲了ctrl+enter键")
}
//ctrl不放
let v =ref(0)


  <!--键盘修饰符 
    keyup:键盘抬起事件
    keydown:键盘按下事件
-->
    <!--  -->
<span>回车事件:</span>
<input v-model="messages" placeholder="请输入" @keyup.enter="enterHandler">
<span>删除事件：</span>
<input v-model="messages" placeholder="请输入" @keyup.delete="deleteHandler">
<!-- tab 
  当监听的tab是keyup时，只有按tab并且抬起的时候进入到了input内，才会执行tabHandler
-->
 <p>tab事件</p>
 <input v-model="messages" placeholder="请输入" @keydown.tab="tabHandler">
 <p>Crtl事件</p>
 <input v-model="messages" placeholder="请输入" @keyup.ctrl.enter="ctrlEnterHandler">
 <p>按住ctrl不放，才可以点击的功能：</p>
 {{ v }}
 <button type="button" @click.ctrl="v++">点我</button>
```

## 鼠标修饰符

```vue
//鼠标右击事件
const rightHandler= ()=>{
  console.log("你点击了右键")
}


 <button type="button" @click.ctrl="v++">点我</button>
 <!-- 鼠标左击 -->
 <button type="button" @click.left="v++">点我</button>

 <!-- 鼠标右击 -->
<p>鼠标右击</p>
<textarea @click.right="rightHandler" oncontextmenu="return false">
  这里面有些内容
</textarea>
```

## 组件

vue 组件可以将一个复杂的应用程序（或者页面）拆分成多个小的模块，每个模块可以独立的进行开发和测试，在 vue 当中组件是通过虚拟 DOM 来实现的，可以将多复杂的页面拆分成小的 DOM 节点，每个节点对应一个组件，这些组件组合成一个完整的页面

```vue
<script setup>
import { ref } from 'vue'
//定义组件可以接收的参数
const props=defineProps({
    //定义参数
    //参数名：参数数据类型
    // step: Number
    step:{
        type:Number, //string,array,object
        //必须要传递参数
        //required:true,
        //设置默认值
        default:10,
        //自定义校验规则
        validator: function(value){
            console.log("c传递的参数是:",value)
            //true:校验通过
            //false:校验失败
            //传递的值必须小于10
            if(value<10){
                return true
            }else{
                return false
            }
        }
    }
})
const count = ref(0)
const plus=()=>{
    count.value=count.value+props.step
}
</script>

<template>
    <div>
        <p>你传递的参数是{{ step }}</p>
        <button class="button" @click="plus">You clicked me {{ count }} times.</button>
    </div>
</template>

<style  scoped>
.button{
    font-size: 20px;
    background-color: aqua;
}
</style>
```

在 App.vue 中调用

```vue
<ButtonCounter :step="2"></ButtonCounter>
  <ButtonCounter ></ButtonCounter>
```

### emit

```vue
<script setup>
import { ref } from 'vue'
//定义组件可以接收的参数
//参数为单项数据流
//ROOT <-Button<-Submit
//ROOT -> Button->Submit
//step：只能在父组件进行修改，不能在子组件进行修改
const props=defineProps({
    msg:{
        type: String, //string,array,object
    }
})
const emit = defineEmits(['changeValue'])
//子组件内不能修改父组件的值
const modefiMsg=()=>{
    //直接改不可以
    // props.msg="这是通过子组件通过修改的值"
    //通过emit事件让父组件修改
    emit('changeValue',"我是子组件，我要接收你的值")
}
</script>

<template>
    <div>
        {{ msg }}
        <button placeholder="请输入值" type="button" @click="modefiMsg">修改</button>
        <!-- <p>你传递的参数是{{ step }}</p>
        <button class="button" @click="plus">You clicked me {{ count }} times.</button> -->
    </div>
</template>

<style  scoped>
.button{
    font-size: 20px;
    background-color: aqua;
}
</style>
```

```vue
const msg = ref("这是父组件传递的参数")
const modify=(value)=>{
  //由父组件直接更改
  // msg.value="这是一个新的值，由子组件触发"
  //接收参数进行修改
  msg.value=value
}
</script>

<template>
  <div>

  </div>
  <!-- <lianxi msg="Vite + Vue" /> -->
   <Message :msg="msg" @change-value="modify"></Message>
  <ButtonCounter :step="2"></ButtonCounter>
```

### 插槽 slot

插槽是 vue 中一种特殊的机制，可以让我们在组件中定义可插入区域

也就是可以在不同的地方插入不同的内容

可以让一个通用的组件，展示不同的内容

```vue
    <div>
        <!-- 定义一个插槽 -->
         <!-- 具名插槽，命名插槽 -->
         <slot name="header">
            <p>这是插槽的默认值</p>
         </slot>
         <slot name="main">
            <p>这是插槽的默认值</p>
         </slot>
         <slot name="footer">
            <p>这是插槽的默认值</p>
         </slot>
    </div>
```

```vue
<div>
    <!-- 使用插槽这个组件 -->
      
    <slotDemo>
      <!-- 第一种写法 -->
      <template v-slot:header>
       <p>这是header</p> 
      </template>
      <!-- 第二种写法 -->
       <template #main>
    <p>这是main的内容</p>
       </template>
       <template #footer>
    <p>这是footer的内容</p>
       </template>
      <!-- <p>这是通过插槽实现的页面内容</p> -->
    </slotDemo>
        <!-- <lianxi msg="Vite + Vue" /> -->
```

## Vue 数据的发布和订阅

### vue Provide 和 inject 发布和订阅数据

provide：用来发布数据

inject：用来订阅数据

```vue
<script setup>
import { inject ,ref} from "vue";

//订阅父组件发布的数据
// inject语法：inject("数据的名字")
let injectMsg = inject("message")
//订阅父组件发布的订阅修改函数
const changeValueHandler = inject("modifyHandler")
let newMsg = ref('')
const submit=()=>{
    //也是可以直接通过子组件修改数据
    // injectMsg.value = newMsg.value//不推荐
    changeValueHandler(newMsg.value)
}
</script>

<template>
    <div>
        <p>{{injectMsg}}</p>
        <input placeholder="请输入新值" v-model="newMsg">
        <button type="button" @click="submit">修改</button>
    </div>
</template>
```

```vue
<script setup>
import { provide ,ref} from "vue"
import Message from "./Message.vue";
import MessageProvide from "./MessageProvide.vue";


let defaultMsg=ref("这是父组件发布的数据")
//provide语法：provide("发布的命令","你要发布谁")
provide('message',defaultMsg)
//发布一个数据

//发布一个用于修改数据的函数
const modifyHandler = (newValue)=>{
    defaultMsg.value = newValue
}
provide('modifyHandler',modifyHandler)
</script>

<template>
    <div>
        <MessageProvide></MessageProvide>
    </div>
</template>
```

```vue
 <ProvideInject></ProvideInject>
```

## 声明周期

```vue
<script setup lang="ts">
//声明周期钩子函数
//beforCreate,created --> setup

import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted ,onUnmounted,onUpdated} from 'vue';

//beforMount --> onNeforeMount
onBeforeMount(
    ()=>{
        console.log("钩子函数:onBeforeMount")
    }
)    
//mounted-->onMounted
onMounted(
    ()=>{
        console.log("钩子函数:onMounted")
    }
) 
//beforUpdata->onbeforUpdate
onBeforeUpdate(
    ()=>{
        console.log("钩子函数:onBeforeUpdate")
    }
) 
//Updata->onUpdated
onUpdated(
    ()=>{
        console.log("钩子函数:onUpdated")
    }
) 
//beforUmount-->onBeforUnmount
onBeforeUnmount(
    ()=>{
        console.log("钩子函数:onBeforeUnmount")
    }
) 
//unmounted-->onUnmounted
onUnmounted(
    ()=>{
        console.log("钩子函数:onUnmounted")
    }
)
</script>
```

# Vue 高级管理

## pinia

vue 的状态管理库，可以定义一些全局的数据或者共享状态，之前叫做 vueX

可以理解为 Pinia 或者 VueX 具有存储数据的作用，这个数据可以在任意的页面或者组件使用

使用场景：

1. 用户登录状态
2. 应用程序设置
3. 共享数据
4. 全局状态

[Pinia 🍍](https://pinia.vuejs.org/zh/core-concepts/)

### 安装

```bash
cnpm install pinia
```

### 在 main.js 插入

```vue
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.mount('#app')
```

### 使用

```vue
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { userStoreDemo } from '../store/index.js';
const store = userStoreDemo()
//从Pinia数据中结构出数据  
const {msg} = storeToRefs(store)
console.log(msg)
//直接修改pinia的数据，不推荐
msg.value="新数据"
//直接调用修改函数
const changeValue=()=>{
    //调用函数第一种写法，解构
    // const {changeStoreDemo} = userStoreDemo()
    //const {changeStoreDemo} = store
    // changeStoreDemo()
    //第二种
    store.changeStoreDemo("这是从其他组件传的数据") //配合const store = userStoreDemo()

}

</script>

<template>
    <div>
        {{ msg }}
        <button type="button" @click="changeValue">改变</button>
    </div>
</template>
```

```vue
import { defineStore } from 'pinia'

//创建一个全局的状态，容器
//容器接收两个参数，第一个参数：容器的ID，第二个：容器的内容
//defineStore返回的是一个函数，这个函数按照useXXX去命名
//counter --> userCounter storeDemo-->useStoreDemo
export const userStoreDemo = defineStore('storeDemo', {
    //容器的内容
    //state:用来存储全局状态/数据，可以理解为数据配置的位置
    //data
    state:()=>{
        return{
            msg:"Hello,Pinia"
        }
    },
    //相当于计算属性
    getters:{},
    //定义修改数据的方法
    //相当于methods
    actions: {
        //接收参数
        changeStoreDemo(value){
            this.msg = value
        }
    }
  })
  //怎么被其他组件使用
```

## Vue router

### 下载

```bash
cnpm install vue-router@4
```

### 使用

```vue
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//导入router
import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')
```

```vue
//导入创建路由的方法
import{createRouter,createWebHashHistory} from 'vue-router'
// import { createMemoryHistory, createRouter } from 'vue-router'
//导入需要路由的组件
import index from "../views/index.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
//直接导入组件
// import User from '../views/User.vue';
//路由懒加载
//使用路由懒加载的形式导入组件
const User = ()=> import('../views/User.vue')

//创建一个路由对象，并且包含子路由
//list/tv  list/movie
const listRoutes = {
    path: '/list', component: ()=> import('../views/list/List.vue'),
    children: [
        { path: 'tv', component: ()=> import('../views/list/TV.vue')},
        { path: 'movie', component: ()=> import('../views/list/Movie.vue')},
    ],
}
//定义路由映射
const routes = [
    listRoutes,
    { path: '/', component: index ,name:"index"},
    { path: '/about', component: About },
    { path: '/home', component: Home },
    { 
        path: '/users/:id', component: User ,name:"users",
        //独享守卫
        beforeEnter(to, from, next) {
             //如果id不是try，直接跳转到/
             //?limit  query
             if(to.params.id != 'try'){
                // next("/")
                next({
                    name:"index"
                })
                return false
            }else{
                next()
            }
        },
    },
  ]

  //创建路由实例
  const router =  createRouter({
    history: createWebHashHistory(),
    routes,
  })

    //定义一个全局的守卫，去判断请求链接有没有token字段
    router.beforeEach(
        (to,from,next)=>{
            //如果id不是try，直接跳转到/
            if(to.query.token != 'try' && to.path == '/list'){
                next("/")
                return false
            }else{
                next()
            }
        }
      )

  export default router
```

```vue
<script setup>
//1.首先导入router
// import router from './router/index.js'
//2.通过内置函数实例化一个router进行路由的调整或者操作
import {useRouter} from 'vue-router'
const router = useRouter

//定义一个通过js跳转路由的方法
const user = ()=>{
  // router.push("/users/try")
  //通过对象跳转路由，并传递参数
  router.push({
    name:"users",
    params:{
      id: 'try',
      username: '唐睿阳'
    },
    query:{
      limit:10,
      area:"成都"
    }
  })
}
</script>

<template>
    <h1>Hello router!</h1>
  <div>
    <!-- push:可以回退 replace不能回退 -->
    <router-link to="/">Go to index</router-link>
    <router-link to="/home">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
    <router-link to="/users/try">Go to User</router-link>

    <button type="button" @click="user()">我的</button>
    <router-link to="/list">看视频</router-link>
    <router-view></router-view>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
```

```vue
<script setup lang="ts">
    
</script>

<template>
    <div>
        这是电影页
    </div>
</template>

<style lang="" scoped>
    
</style>
```

```vue
<script setup lang="ts">
    
</script>

<template>
    <div>
        这是电视剧页
    </div>
</template>

<style lang="" scoped>
    
</style>
```

```vue
<script setup lang="ts">
    
</script>

<template>
    <div>
        这是列表页
        <router-link to="/list/movie">看电影</router-link>
        <router-link to="/list/tv">看电视剧</router-link>
        <router-view></router-view>
    </div>
</template>

<style lang="" scoped>
    
</style>
```

```vue
<script setup lang="ts">
    //js 如何获取参数
    import {useRoute} from 'vue-router'
    const route = useRoute()
    //获取参数
    console.log("username:",route.params.id)
    
</script>

<template>
    <div>
        这是用户页
        用户名ID:{{ $route.params.id }}
    </div>
    <!-- <button @click="getUsername()">获取用户名</button> -->
</template>

<style lang="" scoped>
    
</style>
```
