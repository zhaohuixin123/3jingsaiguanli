<template>
  <div class="competitions">
      <div class="competition-tools">
          <el-button type="warning" @click="toAdd">添加</el-button>
      </div>
      <el-table :data="competitions" style="width: 100%">
          <el-table-column fixed prop="id" label="" width="50" />
          <el-table-column prop="name" label="竞赛名称" width="120" />
          <el-table-column prop="start" label="开始时间" width="120" />
          <el-table-column prop="end" label="结束时间" width="120" />
          <el-table-column prop="homePage" label="竞赛官网" width="120" />
          <el-table-column prop="type" label="竞赛类型" width="120" />
          <el-table-column prop="level" label="竞赛等级" width="120" />
          <el-table-column prop="organizer" label="" width="120" />
          <el-table-column fixed="right" label="操作" width="120">
              <template #default="scope">
                  <el-button link type="primary" size="small" @click="toEdit(scope.row)">更新</el-button>
                  <el-button link type="primary" size="small" @click="del(scope.row.id)">删除</el-button>
              </template>
          </el-table-column>
      </el-table>
      <el-pagination layout="prev, pager, next" :page-size="page.size" :total="page.total"
          @current-change="currentchange" />
  </div>
  <el-dialog v-model="dialogFormVisible" title="竞赛">
      <el-form :model="competition">
          <el-form-item label="竞赛名称" :label-width="formLabelWidth">
              <el-input v-model="competition.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="开始时间" :label-width="formLabelWidth">
              <el-input v-model="competition.start" autocomplete="off" />
          </el-form-item>
          <el-form-item label="结束时间" :label-width="formLabelWidth">
              <el-input v-model="competition.end" autocomplete="off" />
          </el-form-item>
          <el-form-item label="竞赛官网" :label-width="formLabelWidth">
              <el-input v-model="competition.homePage" autocomplete="off" />
          </el-form-item>
          <el-form-item label="竞赛类型" :label-width="formLabelWidth">
              <el-input v-model="competition.type" autocomplete="off" />
          </el-form-item>
          <el-form-item label="竞赛等级" :label-width="formLabelWidth">
              <el-input v-model="competition.level" autocomplete="off" />
          </el-form-item>
          <el-form-item label="schoolId" :label-width="formLabelWidth">
              <el-input v-model="competition.schoolId" autocomplete="off" />
          </el-form-item>
          <el-form-item label="组织者" :label-width="formLabelWidth">
              <el-input v-model="competition.organizer" autocomplete="off" />
          </el-form-item>
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
import { all, del, add, edit } from "../../http/competition";
import { ElMessage } from 'element-plus'
import {cloneDeep} from 'lodash-es'
export default defineComponent({
    data() {
        return {
            competitions: [],
            page: {
                total: 0,
                current: 1,
                size: 10
            },
            dialogFormVisible: false,
            competition: {
                "id": 0,
                "name": "",
                "start": "",
                "end": "",
                "homePage": "",
                "schoolId": 1,
                "level":"",
                "type": "",
                "organizer": "",
            },
            formLabelWidth: 80
        }
    },
    mounted() {
        this.getall(1)
    },
    methods: {
        toEdit(competition) {
            console.log(competition);
            this.dialogFormVisible=true;
            this.competition=cloneDeep(competition);    
        },
        getall(current) {
            const data = {
                current: current,
                size: 2
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
            this.competition= {
                "id": 0,
                "name": "",
                "start": "",
                "end": "",
                "homePage": "",
                "schoolId": 1,
                "type": "",
                "level":"",
                "organizer": "",
            }
        },
        save() {
            console.log(this.competition)
            const Competition = this.competition;
            if (Competition.id == 0) {
                add(Competition).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false;
                        this.getall(this.page.current)
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
            else{
                edit(Competition).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false;
                        this.getall(this.page.current)
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

<style lang="scss" scoped></style>
