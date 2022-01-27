<template>
    <div>
        <el-row class="tac">
            <el-col>
                <el-menu style="width: 200px; min-height: calc(100vh - 50px)"
                         :default-active="currentPath"
                         router
                         class="el-menu-vertical-demo">
                    <el-menu-item index="/hotelList">酒店信息</el-menu-item>
                    <el-menu-item index="/orderList">订单管理</el-menu-item>
                    <el-menu-item index="/roomList">客房信息</el-menu-item>
                    <el-sub-menu>
                        <template #title>管理员功能</template>
                        <el-menu-item index="/userList">用户管理</el-menu-item>
                    </el-sub-menu>
                    <el-menu-item index="/login">登录页面</el-menu-item>
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