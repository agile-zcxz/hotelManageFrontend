<template>
    <div>
        <el-row class="tac">
            <el-col>
                <el-menu style="width: 200px; min-height: calc(100vh - 50px)"
                         :default-active="currentPath"
                         router
                         class="el-menu-vertical-demo">
                    <el-menu-item index="/">酒店信息</el-menu-item>
                    <el-menu-item index="/">信息管理</el-menu-item>
                    <el-menu-item index="/">编辑客房</el-menu-item>
                    <el-menu-item index="/">酒店列表</el-menu-item>
                    <el-menu-item index="/">操作用户</el-menu-item>
                    <el-menu-item index="/">订单管理</el-menu-item>
                    <el-sub-menu>
                        <template #title>管理员功能</template>
                        <el-menu-item index="/">用户管理</el-menu-item>
                        <el-menu-item index="/">重置密码</el-menu-item>
                        <el-menu-item index="/">注册酒店管理员</el-menu-item>
                    </el-sub-menu>
                    <el-menu-item index="/">登录页面</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Aside"
    }
</script>

<style scoped>

</style>