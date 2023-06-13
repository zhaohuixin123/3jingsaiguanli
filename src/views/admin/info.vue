<template>
    <div class="main">
        <div class="title">竞赛创建</div>
        <div class="leave_btn">
            <el-button type="primary" size="large" icon="Edit" @click="toAdd">创建竞赛</el-button>
        </div>
        <el-table :data="competitionCreates" border style="width: 100%; margin-left:20px">
          <el-table-column fixed prop="id" label="id" width="100" />
          <el-table-column prop="title" label="竞赛标题" width="170" />
          <el-table-column prop="startTime" label="竞赛开始时间" width="120" />
          <el-table-column prop="endTime" label="结束时间" width="120" />
          <el-table-column prop="signup" label="开始报名" width="120" />
          <el-table-column prop="target" label="赛事对象" width="120" />
          <el-table-column prop="aimCompetition" label="目标赛事" width="120" />
          <el-table-column prop="state" label="状态" width="120" />
          <el-table-column prop="checked" label="审核" width="120" />
          <el-table-column prop="schoolId" label="学校编号" width="120" />
          <el-table-column prop="signupedCount" label="报名数量" width="120" />
          <el-table-column fixed="right" label="操作" width="160">
              <template #default="scope">
                  <el-button  type="primary"  @click="toEdit(scope.row)">更新</el-button>
                  <el-button type="danger"  @click="del(scope.row.id)">删除</el-button>
              </template>
          </el-table-column>
      </el-table>
      <el-dialog v-model="dialogFormVisible" title="竞赛">
        <el-form :model="competition">
            <el-form-item label="目标赛事" :label-width="formLabelWidth">
                <el-input v-model="competition.aimCompetition" autocomplete="off" />
            </el-form-item>
            <el-form-item label="审核" :label-width="formLabelWidth">
                <el-input v-model="competition.checked" autocomplete="off" />
            </el-form-item>
            <el-form-item label="竞赛方案" :label-width="formLabelWidth">
                <el-input v-model="competition.content" autocomplete="off" />
            </el-form-item>
            <el-form-item label="创建时间" :label-width="formLabelWidth">
                <el-input v-model="competition.createTime" autocomplete="off" />
            </el-form-item>
            <el-form-item label="逻辑删除" :label-width="formLabelWidth">
                <el-input v-model="competition.deleted" autocomplete="off" />
            </el-form-item>
            <el-form-item label="结束时间" :label-width="formLabelWidth">
                <el-input v-model="competition.endTime" autocomplete="off" />
            </el-form-item>
            <el-form-item label="id" :label-width="formLabelWidth">
                <el-input v-model="competition.id" autocomplete="off" />
            </el-form-item>
            <el-form-item label="学校编号" :label-width="formLabelWidth">
                <el-input v-model="competition.schoolId" autocomplete="off" />
            </el-form-item>
            <el-form-item label="开始报名" :label-width="formLabelWidth">
                <el-input v-model="competition.signup" autocomplete="off" />
            </el-form-item>
            <el-form-item label="竞赛开始时间" :label-width="formLabelWidth">
                <el-input v-model="competition.startTime" autocomplete="off" />
            </el-form-item>
            <el-form-item label="状态" :label-width="formLabelWidth">
                <el-input v-model="competition.state" autocomplete="off" />
            </el-form-item>
            <el-form-item label="赛事对象" :label-width="formLabelWidth">
                <el-input v-model="competition.target" autocomplete="off" />
            </el-form-item>
            <el-form-item label="赛事标题" :label-width="formLabelWidth">
                <el-input v-model="competition.title" autocomplete="off" />
            </el-form-item>
            <el-form-item label="赛事类型" :label-width="formLabelWidth">
                <el-input v-model="competition.type" autocomplete="off" />
            </el-form-item>
            <el-form-item label="更新时间" :label-width="formLabelWidth">
                <el-input v-model="competition.updateTime" autocomplete="off" />
            </el-form-item>
            <el-form-item label="用户编号" :label-width="formLabelWidth">
                <el-input v-model="competition.userId" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="save" >
                    保存
                </el-button>
            </span>
        </template>
    </el-dialog>
</div>
</template>
<script>
import { defineComponent } from "vue"
import { all, del, add, edit,getOne } from "../../http/competitionCreateList";
import { ElMessage } from 'element-plus'
import { cloneDeep } from 'lodash-es'
export default defineComponent({
    data() {
        return {
            competitionCreates: [],
            competitions: [],
            page: {
                colums: [],
                current: 1,
                schoolId: 0,
                size: 50
            },
            dialogFormVisible: false,
            competition: {
                "aimCompetition": 0,
                "checked": 0,
                "content": "",
                "createTime": "2022-10-30T16:00:00.000+00:00",
                "deleted": 0,
                "endTime": "2022-10-30T16:00:00.000+00:00",
                "id": 0,
                "schoolId": 1,
                "signup": 0,
                "startTime": "2022-10-30T16:00:00.000+00:00",
                "state": 0,
                "target": "",
                "title": "",
                "type": "",
                "updateTime": "2022-10-30T16:00:00.000+00:00",
                "userId": 0
            },
            formLabelWidth: 80
        }
    },
    mounted() {
        this.getall(1)
        this.newDate()
        this.zz(0)
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
                    this.competitionCreates=res.data.competitionCreates
                }
                else {
                    console.log(res.msg)
                    return false
                }

            }).catch(err => {

            })
        },
        newDate() {
            let aData = new Date();
            console.log(aData) //Wed Aug 21 2019 10:00:58 GMT+0800 (中国标准时间)
            //2022-10-30T16:00:00.000+00:00
        },
        toEdit(competition) {
            console.log(competition);
            this.dialogFormVisible = true;
            this.competition = cloneDeep(competition);
        },
        getall(current) {
            const data = {
                current: current,
                size: 50
            }
            all(data).then(res => {
                console.log(res);
                const page = res.data.competitions;
                this.competitions = page;
                this.page = page;
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
                    this.getall(this.page.current)
                    this.zz(0)

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
            this.competition = {
                "aimCompetition": 0,
                "checked": 0,
                "content": "",
                "createTime": "2022-10-30T16:00:00.000+00:00",
                "deleted": 0,
                "endTime": "2022-10-30T16:00:00.000+00:00",
                "id": 0,
                "schoolId": 1,
                "signup": 0,
                "startTime": "2022-10-30T16:00:00.000+00:00",
                "state": 0,
                "target": "",
                "title": "",
                "type": "",
                "updateTime": "2022-10-30T16:00:00.000+00:00",
                "userId": 0
            }
        },
        save() {
            console.log(this.competition)
            const Competition = this.competition;
            if (Competition.id == 0) {
                add(Competition).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.getall(this.page.current)
                        this.dialogFormVisible = false;
                        this.zz(0)
                        ElMessage(res.msg)

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
                edit(Competition).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false;
                        this.getall(this.page.current)
                        this.zz(0)
                        ElMessage(res.msg)
                    }
                    else {
                        ElMessage(res.msg)
                        return false
                    }
                }).catch(err => {
                    ElMessage('网络错误联系管理员')
                })
            }

        }

    }

});
</script>

<style lang="scss" scoped>
.main {

    width: 80%;
    position: absolute;
    background-color: #F4F9FD;
}

.title {
    width: 100%;
    height: 100px;
    align-items: center;
    padding-left: 55px;
    font-size: 20px;
    display: flex;
}

.leave_btn {
    width: 100%;
    height: 100px;
    align-items: center;
    padding-right: 55px;
    font-size: 20px;
    display: flex;
    font-size: 17px;
    float: right;
    flex-direction: row-reverse;
}

</style>
