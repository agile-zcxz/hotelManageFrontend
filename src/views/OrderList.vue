<template>
    <el-container>
        <el-header><h1>订单信息</h1></el-header>
        <el-main>
            <div style="margin: 10px 0">
                <h3>订单列表</h3>
                <el-input v-model="searchName" placeholder="Search" style="width: 200px;" clearable></el-input>
                <el-button type="primary" style="margin: 10px 2px" round size="small">查询</el-button>
            </div>
            <el-table border style="width: 100%">
                <el-table-column label="序号"></el-table-column>
                <el-table-column label="名称" sortable></el-table-column>
                <el-table-column label="大小"></el-table-column>
                <el-table-column label="价格"></el-table-column>
                <el-table-column label="酒店"></el-table-column>
                <el-table-column label="数量"></el-table-column>
                <el-table-column label="操作"></el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "OrderList",
        data() {
            return {
                searchName: '',
            }
        }
    }
</script>

<style scoped>

</style>