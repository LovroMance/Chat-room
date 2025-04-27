<script setup>
import HomePageMenu from '@/components/HomePage/Menu.vue'
import HomePageHeader from '@/components/HomePage/PageHeader.vue'
</script>

<template>
  <div class="container">
    <el-row>
      <!-- 左侧菜单 -->
      <el-col :span="4">
        <div class="grid-content bg-purple" style="border-radius: 20px 0 0 20px">
          <HomePageMenu></HomePageMenu>
        </div>
      </el-col>
      <!-- 右侧内容 -->
      <el-col :span="20">
        <div class="grid-content bg-purple-dark" style="border-radius: 0 20px 20px 0">
          <!-- 页头 -->
          <HomePageHeader></HomePageHeader>
          <!-- 路由跳转页面 -->
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.container {
  padding: 50px;
  height: 100vh;
  background-color: #f0f2f5;
}
.bg-purple-dark {
  background-color: #363b42; /* 新增：适配主色的深色背景 */
}
.bg-purple {
  background: rgb(253, 253, 253);
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  height: calc(100vh - 100px);
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.12); /* 底部阴影 */
}

/* 菜单部分样式 .tac */
.container .tac {
  height: 100%;
}
/*  */
.container .tac .menu-container {
  height: 100%;
  display: flex; /* 启用 Flex 布局 */
  flex-direction: column; /* 垂直排列子元素 (标题和菜单) */
  background-color: #545c64; /* 背景色移到容器 */
  border-radius: 20px 0 0 20px; /* 圆角移到容器 */
  overflow: hidden; /* 防止内容溢出圆角 */
}
/* 菜单栏标题样式 */
.container .tac .menu-title {
  color: #cecece; /* 白色字体，与菜单背景形成对比 */
  text-align: center; /* 文字居中 */
  font-size: 1.5rem; /* 设置合适的字体大小 (例如 20px) */
  font-weight: 600; /* 字体稍粗 */
  padding: 25px 0 15px 0; /* 增加上下内边距 */
  flex-shrink: 0; /* 防止标题被压缩 */
  margin-bottom: 10px;
}
/* 这个是左边菜单栏标题以下整体的类包 */
.container .tac .el-menu {
  border-right: none; /* 这里的背景色和.bg-color相同 */
  flex-grow: 1; /* 让菜单填充剩余空间 */
  height: 0; /* 配合 flex-grow */
  overflow-y: auto; /* 内容过多时允许滚动 */
  border-bottom-left-radius: 20px; /* 底部圆角 */
}

/* 菜单栏第一层目录字体样式 */
.container .tac .el-menu .first {
  font-size: 1.2rem; /* 设置合适的字体大小 */
  font-weight: 400; /* 使用常规字重 */
  letter-spacing: 1px; /* 稍微增加字间距 */
}
</style>