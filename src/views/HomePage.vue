<script setup>
import HomePageMenu from '@/components/HomePage/Menu.vue'
import HomePageHeader from '@/components/HomePage/PageHeader.vue'

// 获取用户仓库，存储用户信息
import { useUserStore } from '@/stores/index'
const userStore = useUserStore()
console.log(userStore)

</script>

<template>
  <div class="container">
    <!-- 左侧菜单栏 -->
    <aside class="sidebar">
      <HomePageMenu/>
    </aside>
    <!-- 右侧内容 -->
    <main class="main-content">
      <HomePageHeader/>
      <div class="router-content">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  background-color: #f0f2f5;
  padding: 0;
  overflow: hidden;
}

.sidebar {
  width: 240px;
  min-width: 240px;
  max-width: 240px;
  background: #545c64;
  /* border-radius: 20px 0 0 20px;  // 移除圆角 */
  box-shadow: 2px 0 8px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  z-index: 10;
  overflow: hidden;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #363b42;
  /* border-radius: 0 20px 20px 0;  // 移除圆角 */
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.12);
  height: 100vh;
  overflow: hidden;
}

.router-content {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
}
</style>