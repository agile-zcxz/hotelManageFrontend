<template>
    <div style="width: 100%; height: 100vh; background-color: darkslateblue; overflow: hidden">
        <div style="width: 400px; margin: 150px auto">
            <div style="color: #cccccc; font-size: 30px; text-align: center; padding: 10px 0">欢迎登录</div>
            <el-form ref="form" :model="loginUser">
                <el-form-item>
                    <el-input v-model="loginUser.nickName" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="loginUser.password" placeholder="密码" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button style="width: 100%" type="primary" @click="login,$router.push('/')">登录</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button style="width: 100%" type="primary" @click="editNewUser">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>

    <el-dialog v-model="insertDialog" title="增加用户" width="30%">
        <el-form :model="registerUserInfo" label-width="120px">
            <el-form-item label="用户名">
                <el-input v-model="registerUserInfo.nickName" style="width: 80%"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="registerUserInfo.password" style="width: 80%"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input v-model="registerUserInfo.confirmPassword" style="width: 80%"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="registerUserInfo.username" style="width: 80%"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
                <el-input v-model="registerUserInfo.phone" style="width: 80%"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
                  <span class="dialog-footer">
                    <el-button @click="insertDialog = false">取消</el-button>
                    <el-button type="primary" @click="registerUser">确认</el-button>
                  </span>
        </template>
    </el-dialog>

</template>

<script>
    import request from "@/utils/request";

    export default {
        name: "Login",
        data() {
            return {
                loginUser: {},
                registerUserInfo: {},
                insertDialog: false,
                confirmPassword: '',
            }
        },
        methods: {
            login() {
                request.post(
                    "/login",
                    this.loginUser
                ).then(res => {
                    if (res.code === '0') {
                        this.$message({
                            type: "success",
                            message: "登录成功"
                        })
                        this.$router.push("/")
                    } else {
                        this.$message({
                            type: "error",
                            message: res.msg
                        })
                    }

                })
            },
            editNewUser() {
                this.insertDialog = true;
                this.loginUser = {};
            },
            registerUser() {
                if (this.registerUserInfo.password !== this.registerUserInfo.confirmPassword) {
                    this.$message({
                        type: "error",
                        message: "两次密码不一致"
                    })
                } else {
                    this.loginUser.nickName = this.registerUserInfo.nickName
                    this.loginUser.password = this.registerUserInfo.password
                    request.post(
                        "/insert",
                        this.loginUser
                    ).then(res => {
                        console.log(res)
                        if (res.code === '0') {
                            this.insertDialog = false
                            this.$message({
                                type: "success",
                                message: "注册成功"
                            })
                        } else {
                            this.$message({
                                type: "error",
                                message: res.msg
                            })
                            this.loginUser = {}
                        }
                    })
                }
            },
        }
    }
</script>

<style scoped>

</style>