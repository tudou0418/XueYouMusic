import { createRouter, createWebHashHistory } from 'vue-router'

const Recommend = () => import('@/views/recommend')
const Singer = () => import('@/views/singer')
const TopList = () => import('@/views/top-list')
const Search = () => import('@/views/search')
const routes = [
  {
    // 根路径的时候
    path: '/',
    redirect: '/recommend'
  },
  {
    // recommend 这个路径的时候 
    path: '/recommend',
    // 需要渲染的组件
    component: Recommend,
  },
  {
    path: '/singer',
    component: Singer,
  },
  {
    path: '/top-list',
    component: TopList,
  },
  {
    path: '/search',
    component: Search,
  }
]

const router = createRouter({
  // 改变的是hash（#）  还有createWebHistory 需要配置服务器 
  history: createWebHashHistory(),
  routes
})

export default router
