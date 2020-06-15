import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    meta: {
      whiteList: true

    },
    component: () => import('@/views/error.vue')
  },
  {
    path: '/',
    redirect: '/index',
    meta: {
      title: '框架'
    },
    component: Layout,
    children: [
      {
        path: 'index',
        meta: {
          whiteList: true,
          title: '首页'
        },
        component: () => import('@/views/index')
      }
    ]
  },
  {
    path: '/login',
    meta: {
      whiteList: true
    },
    component: () => import('@/views/login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const IconRoute = [{
  path: '/icons',
  meta: {
    whiteList: true
  },
  component: () => import('@/icons/icons.vue')
}]

// 如果是开发环境，添加icons路由
if (process.env.NODE_ENV === 'development') {
  router.addRoutes(IconRoute)
}

export default router
