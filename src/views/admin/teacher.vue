<template>
    <div>
        <div v-show="isLogin == false" class="aaa">
            <el-button type="primary" color="" @click="toLogin()" v-show="isLogin == false"
                style="margin-left:40%;margin-top:20%;font-size:20px;height:80px;width: 180px;">获取最新教师信息</el-button>
        </div>
        <div v-show="isLogin">
            <div style="margin-left: 30px;margin-top: 30px;font-size: 20px;">教师信息管理</div>
            <el-button type="success" color="" @click="dialogFormVisible = true" v-show="isLogin"
                style="margin-left:89%;width: 80px;">添加</el-button>
        </div>
        <br>
        <div v-show="isLogin">
            <div>
                <el-table :data="tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)" border
                    style="width: 100%; margin-left:20px">
                    <el-table-column fixed prop="id" label="id" width="80" align="center" />
                    <el-table-column prop="school" label="学校" width="170" align="center" />
                    <el-table-column prop="depart" label="所属学院" width="90" align="center" />
                    <el-table-column prop="teacherNo" label="工号" width="120" align="center" />
                    <el-table-column prop="teacherName" label="教师姓名" width="120" align="center" />
                    <el-table-column prop="professional" label="教师职称" width="120" align="center" />
                    <el-table-column prop="createTime" label="创建时间" width="140" align="center" />
                    <el-table-column prop="updateTime" label="更新时间" width="140" align="center" />
                    <el-table-column fixed="right" label="操作" width="160" align="center">
                        <template #default="scope">
                            <el-button type="primary" color=""
                                @click="updateDialogFormVisible = true, show(scope.row.id)">更新</el-button>
                            <el-button type="danger" color="" @click="del(scope.row.id)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination background layout="prev, pager, next, sizes, total, jumper" :page-sizes="[5, 10, 15, 20]"
                    :page-size="pagesize" :total="tableData.length" @current-change="handleCurrentChange"
                    @size-change="handleSizeChange">
                </el-pagination>
            </div>
            <br>
        </div>
        <el-dialog v-model="dialogFormVisible" title="添加/更改">
            <el-form :model="newOne">
                <el-form-item label="学校" :label-width="formLabelWidth">
                    <el-input v-model="newOne.school" autocomplete="off" />
                </el-form-item>
                <el-form-item label="所属学院" :label-width="formLabelWidth">
                    <el-input v-model="newOne.depart" autocomplete="off" />
                </el-form-item>
                <el-form-item label="工号" :label-width="formLabelWidth">
                    <el-input v-model="newOne.teacherNo" autocomplete="off" />
                </el-form-item>
                <el-form-item label="教师姓名" :label-width="formLabelWidth">
                    <el-input v-model="newOne.teacherName" autocomplete="off" />
                </el-form-item>
                <el-form-item label="教师职称" :label-width="formLabelWidth">
                    <el-input v-model="newOne.professional" autocomplete="off" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false, add()">
                        保存
                    </el-button>
                </span>
            </template>
        </el-dialog>
        <el-dialog v-model="updateDialogFormVisible" title="添加/更改">
            <el-form :model="newOne">
                <el-form-item label="学校" :label-width="formLabelWidth">
                    <el-input v-model="editOne.school" autocomplete="off" />
                </el-form-item>
                <el-form-item label="所属学院" :label-width="formLabelWidth">
                    <el-input v-model="editOne.depart" autocomplete="off" />
                </el-form-item>
                <el-form-item label="工号" :label-width="formLabelWidth">
                    <el-input v-model="editOne.teacherNo" autocomplete="off" />
                </el-form-item>
                <el-form-item label="教师姓名" :label-width="formLabelWidth">
                    <el-input v-model="editOne.teacherName" autocomplete="off" />
                </el-form-item>
                <el-form-item label="教师职称" :label-width="formLabelWidth">
                    <el-input v-model="editOne.professional" autocomplete="off" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="updateDialogFormVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="updateDialogFormVisible = false, update()">
                        保存
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { useUserStore } from "@/store/user";
import dayjs from "dayjs";
import { login, getAll, delOne, addOne, updateOne, getOne } from '@/http/teacher';
const stor = useUserStore();
const isLogin = ref(false);
const dialogFormVisible = ref(false);
const updateDialogFormVisible = ref(false);
const loginForm = ref({
    email: "116964635@qq.com",
    password: "12345678"
});
onMounted(() => {
    console.log("111")
    toLogin
})
const tableData = ref([]);
let pagesize = ref(10)
let currentPage = ref(1)
const newOne = ref({
    createTime: "",
    depart: "",
    id: 0,
    professional: "",
    school: "",
    teacherName: "",
    teacherNo: "",
    updateTime: "",
    userId: 2
});
const editOne = ref({});
const toLogin = () => {
    let data = loginForm.value;
    login(data).then((res) => {
        if (res.code == 1) {
            let token = res.data.userinfo.token;
            stor.setToken(token);
            isLogin.value = true;
            loadData();
        } else {
            alert("登录失败，请检查账号或密码输入是否有误。");
        }
    });
}
toLogin;
const logOut = () => {
    if (confirm('是否要退出登录？')) {
        stor.setToken('');
        isLogin.value = false;
        alert('退出登录成功。');
    }
}

function handleCurrentChange(cpage) {
    currentPage = cpage;
    loadData()
}

function handleSizeChange(psize) {
    pagesize = psize;
    loadData()
}

const add = () => {
    let data = {
        createTime: new Date(),
        depart: newOne.value.depart,
        id: 0,
        professional: newOne.value.professional,
        school: newOne.value.school,
        teacherName: newOne.value.teacherName,
        teacherNo: newOne.value.teacherNo,
        updateTime: new Date(),
        userId: 2
    };
    addOne(data).then(resp => {
        if (resp.code == 1) {
            alert('添加教师信息成功！');
            loadData();
        }
    });
}

const show = (id) => {
    getOne(id).then(resp => {
        let one = resp.data.teacher;
        editOne.value = one;
        console.log(one)
    });
}

const update = () => {
    if (confirm("是否要进行更新？")) {
        if (editOne.value.id == '') {
            alert('请选择要操作的教师信息。');
        } else {
            let data = {
                createTime: editOne.value.createTime,
                depart: editOne.value.depart,
                id: editOne.value.id,
                professional: editOne.value.professional,
                school: editOne.value.school,
                teacherName: editOne.value.teacherName,
                teacherNo: editOne.value.teacherNo,
                updateTime: new Date(),
                userId: 2
            };
            updateOne(data).then(resp => {
                if (resp.code == 1) {
                    alert('更新成功。');
                    toEmpty();
                    loadData();
                }
            });
        }
    }

}

const toEmpty = () => {
    editOne.value = {
        createTime: "",
        depart: "",
        id: '',
        professiona: " ",
        school: "",
        teacherName: "",
        teacherNo: "",
        updateTime: "",
        userId: ''
    }
}

const del = (id) => {
    console.log(id)
    if (confirm("是否要删除该教师信息？")) {
        delOne(id).then(resp => {
            if (resp.code == 1) {
                alert('成功删除教师信息！');
                loadData();
            }
        });
    }
}

function loadData() {
    getAll().then((res) => {
        console.log(res);
        tableData.value = res.data.teachers;
        console.log(tableData.value)
        tableData.value.forEach((item) => {
            item.createTime = dayjs(item.createTime).format(
                "YYYY年MM月DD日 HH:mm:ss"
            );
            item.updateTime = dayjs(item.updateTime).format(
                "YYYY年MM月DD日 HH:mm:ss"
            );
        })
    });
}

</script>
  
<style>
.aaa {
    background: url(../../assets/bg.png);
    background-repeat: no-repeat;
    height: 688px;
    background-size: 100%;
}</style>