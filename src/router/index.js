import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: '登录',
        component: () => import('@/views/Login/login.vue')
    },
    {
        path: '/register',
        name: '注册',
        component: () => import('@/views/Register/register.vue')
    },
    {
        path: '/HomePage',
        name: '首页',
        component: () => import('@/views/HomePage.vue'),
        children: [
            {
                path: '/HomePage/Chat',
                name: '聊天框',
                component: () => import('@/views/Chat.vue')
            },
            {
                // 好友列表
                path: '/HomePage/FriendList',
                component: () => import('@/views/FriendList/FriendList.vue')
            },
            {
                // 聊天频道
                path: '/HomePage/ChatCannel',
                component: () => import('@/views/ChatCannel/ChatCannel.vue')
            },
            {
                // 朋友圈
                path: '/HomePage/FriendsCircle',
                component: () => import('@/views/FriendsCircle/FriendsCircle.vue')
            },
            {
                // 系统设置
                path: '/HomePage/SystemSetting',
                component: () => import('@/views/Setting/SystemSetting.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router