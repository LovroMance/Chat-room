import { createRouter, createWebHistory  } from "vue-router";

const routes = [
    {
        path: '/',
        name: '首页',
        component: () => import('@/views/HomePage.vue'),
        children: [
            {
                path: '/Chat',
                name: '聊天框',
                component: () => import('@/views/Chat.vue')
            },
            {
                // 好友列表
                path: '/FriendList',
                component: () => import('@/views/FriendList/FriendList.vue')
            },
            {
                // 聊天频道
                path: '/ChatCannel',
                component: () => import('@/views/ChatCannel/ChatCannel.vue')
            },
            {
                // 朋友圈
                path: '/FriendsCircle',
                component: () => import('@/views/FriendsCircle/FriendsCircle.vue')
            },
            {
                // 系统设置
                path: '/SystemSetting',
                component: () => import('@/views/Setting/SystemSetting.vue')
            }
        ]
    }
    // {
    //     path: '/test',
    //     name: 'TestView',
    //     component: () => import('@/views/test.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router