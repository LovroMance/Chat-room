2025/4/23 1：38
1.看ai 两个 CSS 属性 flex-grow: 1; 和 height: 0; 是如何工作的？
2.看一下git怎么控制版本
3.有点困哈

2025/4/24 13:31
4.右侧设置二级路由，点击左边菜单栏然后进行切换，子菜单的样式需要调整一下

2025/4/24 9:09
5.菜单默认选中的要修改，根据路由跳转要自动修改default-active值

2025/4/29 22:33
6.现在私聊界面是需要手动获取消息，到时候修改一下在挂在mounted的时候就获取消息就可以了
7.做一下注册登陆界面
8.控制一下git

我的github名字为origin, gitee上的是chat

# 添加到缓存区
git add .

# 提交到本地仓库
git commit -m "提交信息"

# 将本地 fronted 分支推送到远程 frontend 分支
git push chat fronted:frontend

# 查看本地分支
git branch

# 查看远程分支
git branch -r

# 查看所有分支（本地+远程）
git branch -a

# 查看 chat 远程仓库的详细信息
git remote show chat

# 强制推送（会覆盖远程内容，谨慎使用）
# 把本地main分支推送到远程仓库chat的frontend分支
git push -f chat main:frontend