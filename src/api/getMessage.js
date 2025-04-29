import request from '@/utils/request'

export const getMessageListApi = () => {
    return request.get('/getMessage')
}