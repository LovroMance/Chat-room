import { getStorage } from './localstorage'

// WebSocket 服务器url
const WS_URL = 'ws://localhost:10086/ws/echo'

// WebSocket 实例
let ws = null
let isConnected = false

// 创建 WebSocket 连接
export const createWebSocket = () => {
    const token = getStorage('user-token')
    try {
        ws = new WebSocket(`${WS_URL}?token=${token}`)
        bindEvents()
    } catch (error) {
        console.error('WebSocket 连接失败:', error)
    }
}

// 绑定事件
const bindEvents = () => {
    ws.onopen = () => {
        console.log('WebSocket 连接成功')
        isConnected = true
    }

    ws.onmessage = (event) => {
        try {
            // 尝试解析 JSON
            try {
                const data = JSON.parse(event.data)
                console.log('收到消息:', data)
            } catch {
                // 如果不是 JSON 格式，直接输出原始消息
                console.log('收到消息:', event.data)
            }
        } catch (error) {
            console.error('消息处理失败:', error)
        }
    }

    ws.onclose = () => {
        console.log('WebSocket 连接关闭')
        isConnected = false
        // 可以在这里添加重连逻辑
    }

    ws.onerror = (error) => {
        console.error('WebSocket 错误:', error)
        isConnected = false
    }
}

// 发送消息
export const sendMessage = (message) => {
    if (!isConnected) {
        console.warn('WebSocket 未连接，无法发送消息')
        return
    }
    try {
        ws.send(JSON.stringify(message))
    } catch (error) {
        console.error('消息发送失败:', error)
    }
}

// 关闭连接
export const closeWebSocket = () => {
    if (ws) {
        ws.close()
        ws = null
    }
}