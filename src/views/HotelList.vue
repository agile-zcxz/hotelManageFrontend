<template>
    <el-container>
        <el-header>
            <h1>酒店信息</h1>
        </el-header>
        <el-main>
            <div style="margin: 10px 0">
                <h3>酒店列表</h3>
                <el-input v-model="searchName" placeholder="Search" style="width: 200px;" clearable></el-input>
                <el-button type="primary" style="margin: 10px 2px" round size="small">查询</el-button>
                <el-button type="primary" style="margin: 10px 2px" round size="small" @click="editNewHotel">新增
                </el-button>
            </div>
            <el-table border style="width: 100%">
                <el-table-column label="序号" prop=""></el-table-column>
                <el-table-column label="名称" prop="" sortable></el-table-column>
                <el-table-column label="地址" prop=""></el-table-column>
                <el-table-column label="简介" prop=""></el-table-column>
                <el-table-column label="操作" prop=""></el-table-column>
            </el-table>
        </el-main>
    </el-container>

    <el-dialog v-model="insertDialog" title="增加酒店" width="30%">
        <el-form :model="hotelInfo" label-width="120px">
            <el-form-item label="酒店名称">
                <el-input v-model="hotelInfo.hotelName" style="width: 80%"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="hotelInfo.hotelAddress" style="width: 80%"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
                <el-input v-model="hotelInfo.hotelPhone" style="width: 80%"></el-input>
            </el-form-item>
            <el-form-item label="星级">
                <el-input v-model="hotelInfo.hotelLevel" style="width: 80%"></el-input>
            </el-form-item>
            <el-form-item label="简介">
                <el-input v-model="hotelInfo.hotelDesc" style="width: 80%"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
                  <span class="dialog-footer">
                    <el-button @click="closeDialog">取消</el-button>
                    <el-button type="primary" @click="insertHotel">确认</el-button>
                  </span>
        </template>
    </el-dialog>

</template>

<script>

    export default {
        name: "HotelList",
        data() {
            return {
                searchName: '',
                tableData: {},
                hotelInfo: {},
                insertDialog: false,
            }
        },
        methods: {
            closeDialog() {
                this.insertDialog = false;
                this.hotelInfo = {};
            },
            editNewHotel() {
                this.insertDialog = true;
                this.hotelInfo = {};
            },
            insertHotel() {
                this.closeDialog();
            },
        }
    }
</script>

<style scoped>

</style>