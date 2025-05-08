<script setup>
defineOptions({
    name: 'testPage',
})
// import { ref } from 'vue'
// import { getMessageListApi } from '@/api/getMessage'

// const messageList = ref([])
// const getMessageList = async () => {
//     const {
//         data: { data },
//     } = await getMessageListApi()
//     messageList.value = data
//     console.log(data)
// }
</script>

<template>
    <div class="chat-container">
        <div class="chat-messages">
            <!-- 获取消息渲染（暂时取消） -->
            <div v-for="item in messageList" :key="item">
                <!-- 对方/自己消息 -->
                <div :class="['message-row', item.fromUid === 1 ? 'left' : 'right']">
                    <!-- 自己消息的时间 -->
                    <div class="msg-time" v-if="item.fromUid === 2">{{ item.time }}</div>
                    <!-- 自己消息的内容 -->
                    <div class="bubble right-bubble" v-if="item.fromUid === 2">{{ item.content }}</div>
                    <!-- 双方头像 -->
                    <img class="avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        alt="avatar" />
                    <!-- 对方消息的内容 -->
                    <div class="bubble left-bubble" v-if="item.fromUid === 1">{{ item.content }}</div>
                    <!-- 对方消息的时间 -->
                    <div class="msg-time" v-if="item.fromUid === 1">{{ item.time }}</div>
                </div>
            </div>

            <!-- 对方消息 -->
            <div class="message-row left">
                <img
                    class="avatar"
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    alt="avatar"
                />
                <div class="bubble left-bubble">你好呀！</div>
                <div class="msg-time">09:00</div>
            </div>
            <!-- 自己消息 -->
            <div class="message-row right">
                <div class="msg-time">09:01</div>
                <div class="bubble right-bubble">你好！你是谁？</div>
                <img
                    class="avatar"
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    alt="avatar"
                />
            </div>
            <!-- 对方消息 -->
            <div class="message-row left">
                <img
                    class="avatar"
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    alt="avatar"
                />
                <div class="bubble left-bubble">我是AI助手，很高兴认识你！</div>
                <div class="msg-time">09:02</div>
            </div>
            <!-- 自己消息 -->
            <div class="message-row right">
                <div class="msg-time">09:03</div>
                <div class="bubble right-bubble">我也很高兴认识你！</div>
                <img
                    class="avatar"
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    alt="avatar"
                />
            </div>
        </div>
        <div class="chat-input">
            <input type="text" placeholder="请输入消息..." />
            <button>发送</button>
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
    width: 4px;           /* 滚动条宽度 */
    background: transparent; /* 滚动条轨道透明 */
}
.chat-messages::-webkit-scrollbar-thumb {
    background: #444c56;  /* 滚动条滑块颜色 */
    border-radius: 2px;   /* 圆角 */
}
.chat-messages::-webkit-scrollbar-thumb:hover {
    background: #6b7b8a;  /* 滑块悬浮颜色 */
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