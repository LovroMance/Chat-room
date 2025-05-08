import request from '@/utils/request'
// 导出的为...Api， 使用时重新const use...Api =


// 用户注册
export const register = (username, password) => {
    return request.post('/auth/register', {
        username: username,
        password: password
    })
}

// 用户登录
export const login = (username, password, uid) => {
    return request.post('/auth/login', {
        username: username,
        password: password,
        uid: uid
    })
}

// 修改用户名
export const setUsername = (uid, username) => {
    return request.post('/modify_name', {
        uid: uid,
        username: username  // 新用户名
    })
}

// 修改密码
export const setPassword = (uid, password) => {
    return request.post('modify_password', {
        uid: uid,
        password: password  // 新密码
    })
}

// 删除用户
export const deleteUser = (uid) => {
    return request.post('/delete_user', {
        uid: uid  // 用户uid
    })
}

// 获取用户信息
export const getUserInfo = (uid) => {
    return request.get('/get_user', {
        params: {
            uid: uid  // 用户uid
        }
    })
}