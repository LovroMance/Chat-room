<script setup>
import { useUserStore } from '@/stores/index'
const userStore = useUserStore()
</script>

<template>
  <el-page-header>
    <template #content>
      <div class="flex items-center">
        <!-- 头像 -->
        <el-avatar
        :size="40"
        :src="userStore.avatar"/>
        <span class="username" style="margin-left: 10px;"> {{ userStore.username }} </span>
      </div>
    </template>
  </el-page-header>
</template>

<style>
.el-page-header {
  padding: 25px 0 15px 0;
}
.el-page-header__header {
  justify-content: flex-end;
}
/* 返回按钮 */
.el-page-header__back {
  display: none;
}
/* 分割线 */
.el-page-header__left .el-divider--vertical {
  border-left: none;
}
/*  */
.el-page-header__header .el-page-header__left {
  margin-right: 50px;
}
/* 头像和文字 */
.el-page-header__content .items-center {
  display: flex;
  align-items: center;
  font-size: 1.5rem; /* 字体大小与菜单栏标题一致 */
  font-weight: 600; /* 字体加粗 */
  color: #800000; /* 字体颜色与菜单栏标题一致 */
  border-radius: 20px; /* 左侧圆角，与菜单栏一致 */
}
.username {
  color: #ececec;
}
</style>