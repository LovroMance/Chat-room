<script setup>
defineOptions({
    name: "HomePageMenu"
})
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
</script>

<template>
    <el-row class="tac">
        <el-col class="menu-container">
            <h2 class="menu-title">Monkey聊天室</h2>
            <el-menu
                router
                active-text-color="#ffd04b"
                background-color="#545c64"
                default-active="2"
                text-color="#fff"
            >
                <el-sub-menu index="/FriendList">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span style="margin-bottom: 3px;">好友列表</span>
                    </template>
                        <el-menu-item index="/FriendList">好友1</el-menu-item>
                        <el-menu-item index="1-2">好友2</el-menu-item>
                        <el-menu-item index="1-3">好友3</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="/ChatCannel">
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <span style="margin-bottom: 3px;">聊天频道</span>
                </el-menu-item>
                <el-menu-item index="/FriendsCircle">
                    <el-icon>
                        <document />
                    </el-icon>
                    <span style="margin-bottom: 3px;">朋友圈</span>
                </el-menu-item>
                <el-menu-item index="/HomePage/Chat">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span style="margin-bottom: 3px;">测试页面</span>
                </el-menu-item>
                <el-menu-item index="/SystemSetting">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span style="margin-bottom: 3px;">系统设置</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<style scoped lang="scss">
/* 菜单部分样式 .tac */
.tac {
    height: 100%;
}
/*  */
.tac .menu-container {
    height: 100%;
    display: flex; /* 启用 Flex 布局 */
    flex-direction: column; /* 垂直排列子元素 (标题和菜单) */
    background-color: #545c64; /* 背景色移到容器 */
    border-radius: 20px 0 0 20px; /* 圆角移到容器 */
    overflow: hidden; /* 防止内容溢出圆角 */
}
/* 菜单栏标题样式 */
.tac .menu-title {
    color: #cecece; /* 白色字体，与菜单背景形成对比 */
    text-align: center; /* 文字居中 */
    font-size: 1.5rem; /* 设置合适的字体大小 (例如 20px) */
    font-weight: 600; /* 字体稍粗 */
    padding: 25px 0 15px 0; /* 增加上下内边距 */
    flex-shrink: 0; /* 防止标题被压缩 */
    margin-bottom: 10px;
}
/* 这个是左边菜单栏标题以下整体的类包 */
.tac .el-menu {
    border-right: none; /* 这里的背景色和.bg-color相同 */
    flex-grow: 1; /* 让菜单填充剩余空间 */
    height: 0; /* 配合 flex-grow */
    overflow-y: auto; /* 内容过多时允许滚动 */
    border-bottom-left-radius: 20px; /* 底部圆角 */
}
/* 菜单栏目录图标样式 */
.tac .el-icon {
    margin-left: 10px;
    font-size: 20px;
}

/* 菜单栏目录字体样式 */
.tac .el-menu-item span,.tac .el-sub-menu span{
    font-size: 1.2rem; /* 设置合适的字体大小 */
    font-weight: 400; /* 使用常规字重 */
    letter-spacing: 1px; /* 稍微增加字间距 */
    margin-left: 5px;
}
.tac .el-menu--inline .el-menu-item{
    margin-left: 5px;
    font-weight: 400; /* 使用常规字重 */
    letter-spacing: 1px; /* 稍微增加字间距 */
    font-size: 17px;
}

</style>