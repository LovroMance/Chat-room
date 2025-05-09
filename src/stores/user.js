// 只对token设置了单独的set方法，其他字段没有设置set和get方法，后续需要再进行补充
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { readonly } from 'vue'
export const useUserStore = defineStore('user', () => {
    const token = ref('')
    const uid = ref('')
    const username = ref('')
    const password = ref('')

    const setInfo = (newInfo) => {
        uid.value = newInfo.uid
        username.value = newInfo.username
        password.value = newInfo.password
        token.value = newInfo.token
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
        setInfo,
        setToken,
        clearToken
    }
})