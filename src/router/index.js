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
    component: () => import('@/views/Error.vue')
  },
  {
    path: '/',
    redirect: '/index',
    component: Layout,
    children: [
      {
        path: 'index',
        meta: {
          whiteList: true
        },
        component: () => import('@/views/Index')
      }
    ]
  },
  {
    path: '/login',
    meta: {
      whiteList: true
    },
    component: () => import('@/views/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
