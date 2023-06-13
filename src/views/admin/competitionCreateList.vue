<template>
    <div class="competitionCreates" style="width:1150px">
        <div style="margin-left: 30px;margin-top: 30px;font-size: 20px;margin-bottom: 10px;">竞赛管理</div>
        <div class="competitionCreates-tools" style="margin-left:89%;margin-bottom: 10px;">
            <!-- <el-button type="success" color="" @click="toAdd" style="width: 80px;">添加</el-button> -->
        </div>
        <el-table :data="competitions" border style="width: 100%; margin-left:20px">
            <el-table-column fixed prop="id" label="id" width="60" align="center" />
            <el-table-column prop="title" label="竞赛标题" width="100" align="center" />
            <el-table-column prop="signup" label="开始报名" width="70" align="center" />
            <el-table-column prop="target" label="赛事对象" width="90" align="center" />
            <el-table-column prop="type" label="赛事类型" width="90" align="center" />
            <el-table-column prop="aimCompetition" label="目标赛事" width="160" align="center" />
            <el-table-column prop="content" label="竞赛方案" width="210" align="center">
                <template #default="scope">
                    <div v-html="scope.row.content"></div>
                </template>
            </el-table-column>
            <el-table-column prop="checked" label="审核" width="70" align="center" />
            <el-table-column prop="state" label="状态" width="70" align="center" />
            <!-- <el-table-column prop="schoolId" label="学校编号" width="60" align="center" /> -->
            <el-table-column prop="startTime" label="竞赛开始时间" width="135" align="center" />
            <el-table-column prop="endTime" label="结束时间" width="135" align="center" />
            <!-- <el-table-column prop="userId" label="用户编号" width="135" align="center" /> -->
            <el-table-column prop="createTime" label="创建时间" width="135" align="center" />
            <el-table-column prop="updateTime" label="更新时间" width="135" align="center" />
            <el-table-column fixed="right" label="操作" width="300" align="center">
                <template #default="scope">
                    <el-button type="primary" @click="toEdit(scope.row)">编辑</el-button>
                    <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
                    <el-button type="success" @click="toEdit1(scope.row)">审核同意</el-button>
                    <!-- <el-button type="success" @click="del(scope.row.id)">报名审核</el-button> -->
                </template>
            </el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" :page-size="page.size" :total="page.total"
            @current-change="currentchange" />
    </div>


    <el-dialog v-model="dialogFormVisible" title="竞赛">
        <el-form :model="competitionCreate">
            <el-form-item label="id" :label-width="formLabelWidth">
                <el-input v-model="competitionCreate.id" autocomplete="off" />
            </el-form-item>
            <el-form-item label="竞赛标题" :label-width="formLabelWidth">
                <el-input v-model="competitionCreate.title" autocomplete="off" />
            </el-form-item>
            <el-form-item label="开始报名" :label-width="formLabelWidth">
                <el-input v-model="competitionCreate.signup" autocomplete="off" />
            </el-form-item>
            <el-form-item label="赛事对象" :label-width="formLabelWidth">
                <el-input v-model="competitionCreate.target" autocomplete="off" />
            </el-form-item>
            <el-form-item label="赛事类型" :label-width="formLabelWidth">
                <el-input v-model="competitionCreate.type" autocomplete="off" />
            </el-form-item>
            <el-form-item label="目标赛事" :label-width="formLabelWidth">
                <el-input v-model="competitionCreate.aimCompetition" autocomplete="off" />
            </el-form-item>
            <el-form-item label="竞赛方案" :label-width="formLabelWidth">
                <el-input v-model="competitionCreate.content" autocomplete="off" />
            </el-form-item>
            <el-form-item label="状态" :label-width="formLabelWidth">
                <el-input v-model="competitionCreate.state" autocomplete="off" />
            </el-form-item>
            <el-form-item label="审核" :label-width="formLabelWidth">
                <el-input v-model="competitionCreate.checked" autocomplete="off" />
            </el-form-item>
            <!-- <el-form-item label="学校编号" :label-width="formLabelWidth">
                <el-input v-model="competitionCreate.schoolId" autocomplete="off" />
            </el-form-item> -->
            <el-form-item label="竞赛开始时间" :label-width="formLabelWidth">
                <el-input v-model="competitionCreate.startTime" autocomplete="off" />
            </el-form-item>
            <el-form-item label="结束时间" :label-width="formLabelWidth">
                <el-input v-model="competitionCreate.endTime" autocomplete="off" />
            </el-form-item>
            <!-- <el-form-item label="用户编号" :label-width="formLabelWidth">
                <el-input v-model="competitionCreate.userId" autocomplete="off" />
            </el-form-item> -->
            <!-- <el-form-item label="逻辑删除" :label-width="formLabelWidth">
                <el-input v-model="competitionCreate.deleted" autocomplete="off" />
            </el-form-item> -->
            <!-- <el-form-item label="竞赛创建时间" :label-width="formLabelWidth">
                <el-input v-model="competitionCreate.createTime" autocomplete="off" />
            </el-form-item> -->
            <!-- <el-form-item label="更新时间" :label-width="formLabelWidth">
                <el-input v-model="competitionCreate.updateTime" autocomplete="off" />
            </el-form-item> -->
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="save">
                    保存
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script>
import { defineComponent } from "vue"
import { all, del, add, edit, getOne } from "../../http/competitionCreateList";
import { ElMessage } from 'element-plus'
import dayjs from "dayjs";
import { cloneDeep } from 'lodash-es'
export default defineComponent({
    data() {
        return {
            competitionCreates: [],
            page: {
                total: 0,
                current: 1,
                size: 10
            },
            dialogFormVisible: false,
            competitionCreate: {

            },
            formLabelWidth: 80
        }
    },
    mounted() {
        this.getall(1)
        // this.zz(0)
    },
    methods: {
        zz(id) {
            console.log(id)
            const params = {
                userId: id
            }
            getOne(params).then(res => {
                if (res.success) {
                    // console.log(res.data.competitionCreate.title)
                    console.log(res.data.competitionCreates)
                    this.competitionCreates = res.data.competitionCreates
                    console.log(this.competitionCreates)
                    this.competitionCreates.forEach((item) => {
                        item.startTime = dayjs(item.startTime).format(
                            "YYYY年MM月DD日 HH:mm:ss"
                        );
                        item.endTime = dayjs(item.endTime).format(
                            "YYYY年MM月DD日 HH:mm:ss"
                        );
                        if (item.aimCompetition == 0) {
                            item.aimCompetition = "无目标赛事"
                        }
                        if (item.checked == 0) {
                            item.checked = "未审核"
                        } else {
                            item.checked = "已审核"
                        }
                        if (item.signup == 0) {
                            item.signup = "未开始"
                        } else {
                            item.signup = "已开始"
                        }
                        if (item.state == 0) {
                            item.state = "未启用"
                        } else if (item.state == 1) {
                            item.state = "启用"
                        } else {
                            item.state = "结束"
                        }
                    });
                }
                else {
                    console.log(res.msg)
                    return false
                }

            }).catch(err => {

            })
        },
        toEdit(row) {
            console.log(row);
            this.dialogFormVisible = true;
            this.competitionCreate = cloneDeep(row);
        },
        toEdit1(row) {
            console.log(row);
            // this.dialogFormVisible = true;
            this.competitionCreate = cloneDeep(row);
            this.save1()
        },
        getall(current) {
            const data = {
                colums: [],
                current: current,
                size: 100,
                userId: 2
            }
            all(data).then(res => {
                console.log(res.data.page.records);
                const page = res.data.page.records;
                this.competitions = page;
                this.page = page;
                this.competitions.forEach((item) => {
                    item.startTime = dayjs(item.startTime).format(
                        "YYYY年MM月DD日 HH:mm:ss"
                    );
                    item.endTime = dayjs(item.endTime).format(
                        "YYYY年MM月DD日 HH:mm:ss"
                    );
                    item.updateTime = dayjs(item.updateTime).format(
                        "YYYY年MM月DD日 HH:mm:ss"
                    );
                    item.createTime = dayjs(item.createTime).format(
                        "YYYY年MM月DD日 HH:mm:ss"
                    );
                    if (item.aimCompetition == 0) {
                        item.aimCompetition = "无目标赛事"
                    }
                    if (item.checked == 0) {
                        item.checked = "未审核"
                    } else {
                        item.checked = "已审核"
                    }
                    if (item.signup == 0) {
                        item.signup = "未开始"
                    } else {
                        item.signup = "已开始"
                    }
                    if (item.state == 0) {
                        item.state = "未启用"
                    } else if (item.state == 1) {
                        item.state = "启用"
                    } else {
                        item.state = "结束"
                    }
                    if (item.aimCompetition == 1275) {
                        item.aimCompetition = "中国软件杯”大学生软件设计大赛"
                    }
                });
            }).catch(err => {
                console.log(err);
            })
        },
        currentchange(current) {
            // console.log(current);
            this.getall(current);
            this.page.current = current;//数据更新目前显示的页面
        },
        del(id) {
            console.log(id)
            const params = {
                id: id
            }
            del(params).then(res => {
                if (res.success) {
                    this.getall(1)

                }
                else {
                    console.log(res.msg)
                    return false
                }


            }).catch(err => {

            })
        },
        toAdd() {

            //到添加的页面
            this.dialogFormVisible = true;
            this.competitionCreate = {
                "aimCompetition": 0,
                "checked": 0,
                "content": "",
                "createTime": "",
                "deleted": 0,
                "endTime": "",
                "id": 0,
                "schoolId": 0,
                "signup": 0,
                "startTime": "",
                "state": 0,
                "target": "",
                "title": "",
                "type": "",
                "updateTime": "",
                "userId": 0
            }
        },
        save() {
            console.log(this.competitionCreate)
            const competitioncreate = this.competitionCreate;
            if (competitioncreate.id == 0) {
                add(competitioncreate).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false;
                        // this.getall(this.page.current)
                        // ElMessage(res.msg)
                        console.log(res)
                    }
                    else {
                        ElMessage(res.msg)
                        return false
                    }
                }).catch(err => {
                    ElMessage('网络错误联系管理员')
                })
            }
            else {
                if (competitioncreate.checked == "未审核") {
                    competitioncreate.checked = 0
                } else {
                    competitioncreate.checked = 1
                }

                if (competitioncreate.signup == "未开始") {
                    competitioncreate.signup = 0
                } else {
                    competitioncreate.signup = 1
                }

                if (competitioncreate.state == "未启用") {
                    competitioncreate.state = 0
                } else if ((competitioncreate.state == "启用")) {
                    competitioncreate.state = 1
                } else {
                    competitioncreate.state = 2
                }
                if (competitioncreate.aimCompetition == "中国软件杯”大学生软件设计大赛") {
                    competitioncreate.aimCompetition = 1275
                }
                if (competitioncreate.aimCompetition == "无目标赛事") {
                    competitioncreate.aimCompetition = 0
                }
                // console.log(this.competitionzzs[competitioncreate.id].createTime)
                // const day = new Date(competitioncreate.createTime).getTime()
                console.log(competitioncreate.createTime.slice(0, 4) + "-" + competitioncreate.createTime.slice(5, 7) + "-" + competitioncreate.createTime.slice(8, 10) + "T" + competitioncreate.createTime.slice(12, 20) + ".000+08:00")
                let data = {
                    aimCompetition: competitioncreate.aimCompetition,
                    checked: competitioncreate.checked,
                    content: competitioncreate.content,
                    createTime: competitioncreate.createTime.slice(0, 4) + "-" + competitioncreate.createTime.slice(5, 7) + "-" + competitioncreate.createTime.slice(8, 10) + "T" + competitioncreate.createTime.slice(12, 20) + ".000+08:00",
                    deleted: competitioncreate.deleted,
                    endTime: competitioncreate.endTime.slice(0, 4) + "-" + competitioncreate.endTime.slice(5, 7) + "-" + competitioncreate.endTime.slice(8, 10) + "T" + competitioncreate.endTime.slice(12, 20) + ".000+08:00",
                    id: competitioncreate.id,
                    schoolId: competitioncreate.schoolId,
                    signup: competitioncreate.signup,
                    startTime: competitioncreate.startTime.slice(0, 4) + "-" + competitioncreate.startTime.slice(5, 7) + "-" + competitioncreate.startTime.slice(8, 10) + "T" + competitioncreate.startTime.slice(12, 20) + ".000+08:00",
                    state: competitioncreate.state,
                    target: competitioncreate.target,
                    title: competitioncreate.title,
                    type: competitioncreate.type,
                    updateTime: new Date(),
                    userId: competitioncreate.userId,
                }
                console.log(new Date())
                edit(data).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false;
                        this.getall(1)
                        ElMessage({
                            message: '编辑成功',
                            type: 'success',
                        })
                    }
                    else {
                        ElMessage(res)
                        return false
                    }
                }).catch(err => {
                    ElMessage('网络错误联系管理员')
                })
            }

        },
        save1() {
            console.log(this.competitionCreate)
            const competitioncreate = this.competitionCreate;
                if (competitioncreate.checked == "未审核") {
                    competitioncreate.checked = 1
                }

                if (competitioncreate.signup == "未开始") {
                    competitioncreate.signup = 0
                } else {
                    competitioncreate.signup = 1
                }

                if (competitioncreate.state == "未启用") {
                    competitioncreate.state = 0
                } else if ((competitioncreate.state == "启用")) {
                    competitioncreate.state = 1
                } else {
                    competitioncreate.state = 2
                }
                if (competitioncreate.aimCompetition == "中国软件杯”大学生软件设计大赛") {
                    competitioncreate.aimCompetition = 1275
                }
                if (competitioncreate.aimCompetition == "无目标赛事") {
                    competitioncreate.aimCompetition = 0
                }
                // console.log(this.competitionzzs[competitioncreate.id].createTime)
                // const day = new Date(competitioncreate.createTime).getTime()
                console.log(competitioncreate.createTime.slice(0, 4) + "-" + competitioncreate.createTime.slice(5, 7) + "-" + competitioncreate.createTime.slice(8, 10) + "T" + competitioncreate.createTime.slice(12, 20) + ".000+08:00")
                let data = {
                    aimCompetition: competitioncreate.aimCompetition,
                    checked: competitioncreate.checked,
                    content: competitioncreate.content,
                    createTime: competitioncreate.createTime.slice(0, 4) + "-" + competitioncreate.createTime.slice(5, 7) + "-" + competitioncreate.createTime.slice(8, 10) + "T" + competitioncreate.createTime.slice(12, 20) + ".000+08:00",
                    deleted: competitioncreate.deleted,
                    endTime: competitioncreate.endTime.slice(0, 4) + "-" + competitioncreate.endTime.slice(5, 7) + "-" + competitioncreate.endTime.slice(8, 10) + "T" + competitioncreate.endTime.slice(12, 20) + ".000+08:00",
                    id: competitioncreate.id,
                    schoolId: competitioncreate.schoolId,
                    signup: competitioncreate.signup,
                    startTime: competitioncreate.startTime.slice(0, 4) + "-" + competitioncreate.startTime.slice(5, 7) + "-" + competitioncreate.startTime.slice(8, 10) + "T" + competitioncreate.startTime.slice(12, 20) + ".000+08:00",
                    state: competitioncreate.state,
                    target: competitioncreate.target,
                    title: competitioncreate.title,
                    type: competitioncreate.type,
                    updateTime: new Date(),
                    userId: competitioncreate.userId,
                }
                console.log(new Date())
                edit(data).then(res => {
                    if (res.success) {
                        //刷新页面
                        // this.dialogFormVisible = false;
                        this.getall(1)
                        ElMessage({
                            message: '编辑成功',
                            type: 'success',
                        })
                    }
                    else {
                        ElMessage(res)
                        return false
                    }
                }).catch(err => {
                    ElMessage('网络错误联系管理员')
                })
            

        }
    }

});
</script>

<style lang="scss" scoped></style>
