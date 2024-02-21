import { createRouter,createWebHistory } from "vue-router";

// 二级路由
const children = [
    {
        path:'home',
        component:()=>import('@/views/Home/index.vue')
    },
    {
        path:'category',
        component:()=>import('@/views/Category/index.vue')
    },
    {
        path:'gallery',
        component:()=>import('@/views/Gallery/index.vue')
    },
    {
        path:'message',
        component:()=>import('@/views/Message/index.vue')
    },
    {
        path:'about',
        component:()=>import('@/views/About/index.vue')
    }
]

// 一级路由
const routes = [
    {
        path:'/',
        component:()=>import('@/views/Layout/index.vue'),
        children
    }
]



const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router