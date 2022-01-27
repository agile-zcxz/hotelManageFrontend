<template>
    <el-container>
        <el-header>
            <h1>用户信息</h1>
        </el-header>
        <el-main>
            <div style="margin: 10px 0">
                <h3>用户列表</h3>
                <el-input v-model="searchName" placeholder="Search" style="width: 200px;" clearable></el-input>
                <el-button type="primary" style="margin: 10px 2px" round size="small">查询</el-button>
                <el-button type="primary" style="margin: 10px 2px" round size="small">新增
                </el-button>
            </div>
            <el-table border style="width: 100%">
                <el-table-column label="序号" prop=""></el-table-column>
                <el-table-column label="用户名" prop=""></el-table-column>
                <el-table-column label="名字" prop=""></el-table-column>
                <el-table-column label="联系方式" prop=""></el-table-column>
                <el-table-column label="操作" prop=""></el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "UserList"
    }
</script>

<style scoped>

</style>