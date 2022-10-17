import Vue from 'vue'
import Router from 'vue-router'

//1、创建路由组件
import HelloWorld from '@/components/HelloWorld'
import TimeZone from '../views/TimeZone'
import ProductInfo from '../views/ProductInfo'
import CpuInfo from '../views/CpuInfo'
import Network from '../views/Network'
import Main from '@/views/Main'
import VueRouter from 'vue-router'

//避免导航重复路由
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)

//2、将路由与组件进行映射
const routes =[
  //主路由
  {
    path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
  },
  {
    path: '/',
    component: Main,
    children:[
      //嵌套路由
      {path:'/', name:'home_pdct',component:ProductInfo},
      {path:'cpuinfo', name:'cpuinfo',component:CpuInfo},
      {path:'network', name:'network',component:Network},
      {path:'timezone', name:'timezone',component:TimeZone}
    ]
  },
]

const router =new VueRouter({
  routes //缩写 相当于routes : routes
 })
 export default router

//3创建router实例
// export default new Router({
//   routes: [
//     {
//       path: '/HelloWorld',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/',
//       name: 'Main',
//       component: Main
//     },
//   ]
// })
 
 
//4、将router挂载到根结点上 Main.js

