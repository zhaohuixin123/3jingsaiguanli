<template>
    <div>
        <div class="aside_header">
            <div class="aside_header_back" style="cursor:pointer;" v-if="abz">
                <div style="display: inline-block;margin-right: 30px;margin-top: 5px;"
                    @click="this.$router.push('/admin'), mm()">
                </div>
                <div style="color: #808080;font-size: 13px;display: inline-block;">
                    {{ zz }}
                    <a style="cursor:pointer;">
                        <LocationFilled style="width: 1em; height: 1em; " @click="centerDialogVisible = true" />
                    </a>
                </div>
            </div>
        </div>
        <div class="bar">
            <div style="float:left;line-height:45px;margin-left:20px">
                竞赛列表
            </div>
            <div style="float:right;line-height:45px;margin-right:20px">
                <el-icon>
                    <Grid />
                </el-icon>
            </div>
        </div>

        <div class="competitionCreates" style="width:70%;display:block;margin:0 auto">
            <el-table :data="competitionCreates" border style="width: 100%;" v-show="listVi">
                <el-table-column fixed prop="id" label="id" width="60" align="center" />
                <el-table-column prop="title" label="竞赛标题" width="100" align="center" />
                <el-table-column prop="signupedCount" label="报名数量" width="100" align="center" />
                <el-table-column prop="target" label="赛事对象" width="90" align="center" />
                <el-table-column prop="aimCompetition" label="目标赛事" width="150" align="center" />
                <el-table-column prop="signup" label="开始报名" width="90" align="center" />
                <!-- <el-table-column prop="state" label="状态" width="70" align="center" />
                <el-table-column prop="checked" label="审核" width="70" align="center" /> -->
                <!-- <el-table-column prop="schoolId" label="学校编号" width="60" align="center" /> -->
                <el-table-column prop="startTime" label="竞赛开始时间" width="135" align="center" />
                <el-table-column prop="endTime" label="结束时间" width="135" align="center" />
                <el-table-column fixed="right" label="操作" width="130" align="center">
                    <template #default="scope">
                        <!-- <el-button type="primary" @click="toEdit(scope.row)">编辑</el-button>
                    <el-button type="danger" @click="del(scope.row.id)">删除</el-button> -->
                        <el-button type="primary" @click="sign(scope.row.id)">报名该竞赛</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination v-show="listVi" layout="prev, pager, next" :page-size="page.size" :total="page.total"
                @current-change="currentchange" />
            <div class="img" v-show="!listVi">
            </div>
        </div>

        <el-dialog v-model="centerDialogVisible" title="学校选择" width="50%" align-center>
            <div style="margin-left: 50px">
                <region></region>
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="centerDialogVisible = false, ab()">
                        确定
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<script>
import region from "../admin/region.vue"
import { defineComponent } from "vue"
import { getOne } from "../../http/competitionCreateList";
import { add } from "../../http/competitionSign";
import { ElMessage } from 'element-plus'
import dayjs from "dayjs";
import { cloneDeep } from 'lodash-es'
export default defineComponent({
    components: { region },
    data() {
        return {
            abz:false,
            listVi: true,
            competitionCreates: [],
            page: {
                total: 0,
                current: 1,
                size: 10
            },
            dialogFormVisible: false,
            competitionCreate: {

            },
            formLabelWidth: 80,
            centerDialogVisible: false,
            options: [],
            zz: "泉州信息工程学院",
            zc:JSON.parse(sessionStorage.getItem("name3")),
        }
    },
    mounted() {
        this.zzc(2)
        this.ab()
    },
    methods: {
        sign(id) {
            let data = {
                "checked": 0,
                "competitionId": id,
                "createTime": new Date(),
                "id": 0,
                "studentId": 0
            }
            add(data).then(res => {
                if (res.success) {
                    //刷新页面
                    console.log(res)
                    this.zzc(2)
                    ElMessage({
                        message: '报名成功',
                        type: 'success'
                    })
                }
                else {
                    ElMessage({
                        message: res.msg,
                        type: 'warning'
                    })
                    return false
                }
            }).catch(err => {
                ElMessage({
                    message: '网络错误联系管理员',
                    type: 'error'
                })
            })
        },
        mm() {
            const cc = { name2: this.zz }
            sessionStorage.setItem("name2", JSON.stringify(cc));
            console.log(cc)
        },
        ab() {
            this.zc = JSON.parse(sessionStorage.getItem("name3")).name;
            if (this.zc == "泉州信息工程学院") {
                
            } else {
                // this.listVi = false;
                this.listVi = true;
                this.zzc(1)
            }
        },
       
        zzc(id) {
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
                        if(item.aimCompetition == 1275){
                        item.aimCompetition = "中国软件杯”大学生软件设计大赛"
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

    }

});
</script>
<style lang="scss" scoped>
.bar {
    box-shadow: 0 2px 12px 0 #ccc;
    border: 1px solid #fff;
    height: 45px;
    width: 70%;
    display: block;
    margin: 0 auto;
}

.aside_header {
    width: 100%;
    height: 0px;
    border-bottom: 1px solid #E6E6E6;
}

.dibu2 {
    line-height: 30px;
    height: 30px;
    width: 100%;
    font-size: 15px;
    overflow: hidden;
    white-space: nowrap;
    background: #ECF5FF;
    color: #409EFF;
}

.img {
    display: block;
    margin: auto;
    width: 300px;
    height: 300px;
    margin-top:120px;
    background: url('../../assets/nodata.png') no-repeat;
    background-size: cover;
}

.aside_header_font {
    float: left;
    margin-left: 10px;

}

.aside_header_left {
    float: left;
    margin-left: 4px;
    margin-top: 14px;
}

.aside_header_right {
    font-weight: bold;
    font-size: 23px;
    float: right;
    margin-left: 5px;
    margin-top: 15px;
}

.aside_header_back {
    float: right;
    margin-right: 16px;
    margin-top: 15px;
}

.demonstration {
    color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
