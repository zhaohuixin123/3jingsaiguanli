<template>
    <el-dialog v-model="dialogVisible" title="请绑定角色" width="30%" :before-close="open2">
        <div style="margin-top: 20px;margin-left:40px">
            <el-radio-group v-model="radio2">
                <el-radio label="1" border>学生</el-radio>
                <el-radio label="2" border>老师</el-radio>
                <el-radio label="3" border>教辅</el-radio>
            </el-radio-group>
            <el-input style="margin-Top:20px;width:300px" v-if="radio2 == 3 || radio2 == 2" v-model="input" placeholder="请输入工号"
                clearable />
            <el-input style="margin-Top:20px;width:300px" v-if="radio2 == 1" v-model="input" placeholder="请输入学号" clearable />
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false, open2()">取消</el-button>
                <el-button type="primary" @click="open1(input)">
                    确定
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
  
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { ElMessage } from 'element-plus'
const router = useRouter();
const open2 = () => {
    ElMessage({
        message: '绑定失败',
        type: 'error',
    })
    router.push({ path: '/home' })
}
const open1 = (input) => {
    if (input == "2003010301") {
        ElMessage({
            message: '绑定成功',
            type: 'success',
        })
        router.push({ path: '/admin/signup' })
    }else if(input == "2003010361"){
        dialogVisible = true
        ElMessage({
            message: '该学号或工号已绑定过账号，请联系管理员',
            type: 'warning',
        })
    }else if(input == ""){
        ElMessage({
            message: '学号或工号不能为空',
            type: 'error',
        })
    }
}
let input = ref('')
let dialogVisible = ref(true)
let radio2 = ref('1')
</script>
<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
  