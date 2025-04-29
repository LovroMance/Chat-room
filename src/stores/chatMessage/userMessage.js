import { defineStore } from 'pinia'

// 聊天内容
export const useUserMessageStore = defineStore('userMessage', {
    state: () => ({
        message: []
    }),
    getter: {

    },
    actions: {
        addMessage(msg) {
            this.message.push(msg)
        }
    }
})