// 存储收到的消息
// 无论发送还收收取信息，都会收到服务端返回的信息，因此都可以统称为收到的信息
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { readonly } from 'vue'
export const useReceiveHistoryStore = defineStore('receiveHistory', () => {
    const receiveHistory = ref([])
    const getSendHistory = (newInfo) => {
        receiveHistory.value.push(newInfo)
    }
    return {
        receiveHistory: readonly(receiveHistory),
        getSendHistory
    }
})