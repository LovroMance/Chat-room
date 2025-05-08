import request from '@/utils/request'

// 获取用户数据库
export const getUserDB = () => {
    return request.get('/db_info')
}