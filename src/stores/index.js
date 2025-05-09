// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions
// 记得返回这些东西

import { createPinia } from 'pinia'
const pinia = createPinia()

export default pinia

export * from './user.js'