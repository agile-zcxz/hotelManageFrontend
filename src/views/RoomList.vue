<template>
    <el-container>
        <el-header><h1>客房信息</h1></el-header>
        <el-main>
            <div style="margin: 10px 0">
                <h3>客房列表</h3>
                <el-input placeholder="Search" style="width: 200px;" clearable></el-input>
                <el-button type="primary" style="margin: 10px 2px" round size="small">查询</el-button>
                <el-button type="primary" style="margin: 10px 2px" round size="small">新增
                </el-button>
            </div>
            <el-table border style="width: 100%">
                <el-table-column label="类型" prop=""></el-table-column>
                <el-table-column label="酒店" prop=""></el-table-column>
                <el-table-column label="规格" prop=""></el-table-column>
                <el-table-column label="价格" prop=""></el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "RoomList"
    }
</script>

<style scoped>

</style>