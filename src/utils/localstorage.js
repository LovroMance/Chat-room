const USER_TOKEN = 'user-token'

// 将token存储到本地
export const setTokenStorage = (token) => {
    if (typeof value === 'object') {
        token = JSON.stringify(token)
    }
    setStorage(USER_TOKEN, token)
}

// 本地存储数据
export const setStorage = (key, value) => {
    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
}

// 获取本地存储数据
export const getStorage = (key) => {
    try {
        const value = localStorage.getItem(key)
        if (value === 'undefined' || value === null) {
            return null
        }
        // 尝试 JSON 解析
        try {
            const parsed = JSON.parse(value)
            return parsed
        } catch {
            // 解析失败说明不是 JSON 格式 直接返回（例如字符串类或整数类型）
            return value
        }
    } catch (error) {
        console.error('获取本地存储数据失败:', error)
        return null
    }
}

// 移除本地存储数据
export const removeStorage = (key) => {
    localStorage.removeItem(key)
}

// 清空本地存储数据 (勿随意使用)
export const clearStorage = () => {
    localStorage.clear()
}