<script setup>
defineOptions({
  name: 'testPage',
})

import { ref, nextTick } from 'vue'
const message = ref('')

// websocket发送消息
const send = () => {
  const msg = {
    avatar: getStorage('user-info')?.avatar,
    content: message.value,
  }
  sendMessage(msg)
  message.value = ''
  nextTick(scrollToBottom)
}

// 进入聊天室后发送和收到的聊天记录
import { useReceiveHistoryStore } from '@/stores/receiveHistory'
const receiveHistoryStore = useReceiveHistoryStore()
const receiveHistory = receiveHistoryStore.receiveHistory

// 获取用户uid
import { getStorage } from '@/utils/localstorage'
const user_uid = getStorage('user-info')?.uid //可选链操作符 如果为空直接返回undefined

// 用户信息仓库刷新后重新加载
import { useUserStore } from '@/stores/index'
const userStore = useUserStore()

import { onMounted, onUnmounted } from 'vue'
import { createWebSocket, closeWebSocket, sendMessage } from '@/utils/chatroom'

// 利用IndexedDB来存储聊天记录
import { openDB, getAllChatRecords } from '@/utils/IndexedDB'
// 异步操作
const openChatDB = async () => {
  await openDB()
}

// 获取IndexedDB中已经存在的之前的聊天记录
const chatMessages = ref([])
// 获取IndexedDB中的历史聊天记录
const loadChatMessages = async () => {
  chatMessages.value = await getAllChatRecords()
}

// 进入页面连接websocket
onMounted(() => {
  // 刷新用户信息仓库，从本地存储获取
  userStore.setInfo(getStorage('user-info'))
  // 进入页面，连接websocket
  createWebSocket()
  // 进入页面，打开IndexedDB数据库
  openChatDB()
  // 获取IndexedDB中的历史聊天记录
  loadChatMessages()
    .then(() => {
      // 加载成功打印获取到的数据
      console.log(chatMessages.value)
    })
    .catch((error) => {
      // 加载失败打印错误信息
      console.error('加载聊天记录失败:', error)
    })
  // 组件挂载到DOM后，聊天页面滚动到最底部
  if (chatMessagesRef.value) {
    chatMessagesRef.value.scrollTop = chatMessagesRef.value.scrollHeight
  }
})
// 离开页面断开websocket
onUnmounted(() => {
  closeWebSocket()
})

// 聊天框滚动到底部
const chatMessagesRef = ref(null)
const scrollToBottom = () => {
  if (chatMessagesRef.value) {
    chatMessagesRef.value.scrollTop = chatMessagesRef.value.scrollHeight
  }
}

setTimeout(() => {
  navigator.storage.estimate().then((estimate) => {
  console.log(`可用空间: ${(estimate.quota - estimate.usage)/1024/1024} MB`);
  console.log(`总配额: ${estimate.quota/1024/1024} MB`); // 通常为硬盘的50%
});
}, 2000);
</script>

<template>
  <div class="chat-container">
    <div class="chat-messages" ref="chatMessagesRef">
      <!-- 这里渲染已经存在的之前的放在IndexedDB的聊天历史 -->
      <div v-for="item in chatMessages" :key="item">
        <!-- 对方/自己消息 -->
        <div :class="['message-row', item.sender_uid !== user_uid ? 'left' : 'right']">
          <!-- 自己消息的时间 -->
          <div class="msg-time" v-if="item.sender_uid === user_uid">
            {{ item.create_time.slice(0, 19) }}
          </div>
          <!-- 自己消息的内容 -->
          <div class="bubble right-bubble" v-if="item.sender_uid === user_uid">
            {{ item.content }}
          </div>
          <!-- 双方头像 -->
          <img class="avatar" :src="item.avatar" alt="avatar" />
          <!-- 对方消息的内容 -->
          <div class="bubble left-bubble" v-if="item.sender_uid !== user_uid">
            {{ item.content }}
          </div>
          <!-- 对方消息的时间 -->
          <div class="msg-time" v-if="item.sender_uid !== user_uid">
            {{ item.create_time.slice(0, 19) }}
          </div>
        </div>
      </div>

      <!-- 这里渲染新发生的聊天消息 -->
      <div v-for="item in receiveHistory" :key="item">
        <!-- 对方/自己消息 -->
        <div :class="['message-row', item.sender_uid !== user_uid ? 'left' : 'right']">
          <!-- 自己消息的时间 -->
          <div class="msg-time" v-if="item.sender_uid === user_uid">
            {{ item.create_time.slice(0, 19) }}
          </div>
          <!-- 自己消息的内容 -->
          <div class="bubble right-bubble" v-if="item.sender_uid === user_uid">
            {{ item.content }}
          </div>
          <!-- 双方头像 -->
          <img class="avatar" :src="item.avatar" alt="avatar" />
          <!-- 对方消息的内容 -->
          <div class="bubble left-bubble" v-if="item.sender_uid !== user_uid">
            {{ item.content }}
          </div>
          <!-- 对方消息的时间 -->
          <div class="msg-time" v-if="item.sender_uid !== user_uid">
            {{ item.create_time.slice(0, 19) }}
          </div>
        </div>
      </div>
    </div>
    <div class="chat-input">
      <input type="text" placeholder="请输入消息..." v-model="message" @keyup.enter="send" />
      <button @click="send">发送</button>
    </div>
  </div>
</template>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 186px);
  background: #23272e;
  border-radius: 0 0 20px 0;
  padding: 20px;
  height: 100%;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 10px;
  background: transparent;
}
.chat-messages::-webkit-scrollbar {
  width: 4px; /* 滚动条宽度 */
  background: transparent; /* 滚动条轨道透明 */
}
.chat-messages::-webkit-scrollbar-thumb {
  background: #444c56; /* 滚动条滑块颜色 */
  border-radius: 2px; /* 圆角 */
}
.chat-messages::-webkit-scrollbar-thumb:hover {
  background: #6b7b8a; /* 滑块悬浮颜色 */
}
.message-row {
  display: flex;
  align-items: flex-end;
  margin-bottom: 16px;
}

.msg-time {
  font-size: 0.8rem;
  color: #999;
  margin: 2px 8px 0 8px;
  text-align: right;
}

.message-row.left {
  justify-content: flex-start;
}

.message-row.right {
  justify-content: flex-end;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 8px;
  border: 1px solid #444c56;
  /* 深色边框 */
  background: #23272e;
  /* 与主背景一致 */
}

.bubble {
  max-width: 60%;
  padding: 10px 16px;
  border-radius: 18px;
  font-size: 1rem;
  line-height: 1.5;
  word-break: break-all;
}

.left-bubble {
  background: #545c64;
  /* 主色 */
  color: #ececec;
  /* 高对比度白色 */
  border-top-left-radius: 0;
  margin-left: 0;
}

.right-bubble {
  background: #6b7b8a;
  /* 辅助色，和主色有区分 */
  color: #ececec;
  border-top-right-radius: 0;
  margin-right: 0;
}

.chat-input {
  display: flex;
  align-items: center;
  background: #23272e;
  /* 深色输入区 */
  border-radius: 0 0 20px 0;
}

.chat-input input {
  flex: 1;
  height: 36px;
  border: 1px solid grey;
  border-radius: 18px;
  padding: 0 16px;
  font-size: 1rem;
  outline: none;
  margin-right: 10px;
}

.chat-input button {
  height: 36px;
  padding: 0 20px;
  border: none;
  border-radius: 18px;
  background: #23272e;
  color: #ececec;
  border: 1px solid #444c56;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

.chat-input button:hover {
  background: #6b7b8a;
}
</style>