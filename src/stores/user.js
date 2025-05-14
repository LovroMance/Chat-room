// 只对token设置了单独的set方法，其他字段没有设置set和get方法，后续需要再进行补充
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { readonly } from 'vue'
export const useUserStore = defineStore('user', () => {
    const token = ref('')  // token认证
    const uid = ref('')  // 用户id
    const username = ref('')  // 用户名
    const password = ref('')  // 密码
    const avatar = ref('')  // 用户头像

    const setInfo = (newInfo) => {
        token.value = newInfo.token
        uid.value = newInfo.uid
        username.value = newInfo.username
        password.value = newInfo.password
        // 用户默认头像，后续可以通过个人资料修改来上传头像
        avatar.value = newInfo.avatar
    }

    // 登录成功后，设置token
    const setToken = (newToken) => {
        token.value = newToken
    }
    // 清除token
    const clearToken = () => {
        token.value = ''
    }

    return {
        // 设置只读，避免直接通过赋值修改
        token: readonly(token),
        uid: readonly(uid),
        username: readonly(username),
        password: readonly(password),
        avatar: readonly(avatar),
        setInfo,
        setToken,
        clearToken
    }
})