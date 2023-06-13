<template>
    <div>
        <div class="aside_header">
            <div class="aside_header_font">
                <div class="aside_header_left"><svg t="1685586928735" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4083" width="30" height="30">
                        <path
                            d="M440.832 785.408v29.696H583.68v-29.696h-24.576v-296.96h24.576v-29.696H440.32v29.696h24.576v297.472h-24.064zM169.472 785.408v29.696H312.32v-29.696h-24.576v-296.96H312.32v-29.696H169.472v29.696h24.576v297.472h-24.576zM711.68 785.408v29.696h142.848v-29.696h-24.576v-296.96h24.576v-29.696H711.68v29.696h24.576v297.472H711.68z"
                            fill="#409EEF" p-id="4084"></path>
                        <path
                            d="M102.4 871.936v12.288c-0.512 9.728 7.168 17.92 16.896 18.432h786.432c9.728-0.512 16.896-8.704 16.384-18.432v-12.288c0.512-9.728-7.168-17.92-16.384-18.432H118.784c-9.728 0-16.896 8.704-16.384 18.432zM966.656 934.912H57.344c-9.728 0.512-16.896 8.704-16.896 18.432v12.288c-0.512 9.728 7.168 17.92 16.896 18.432h909.312c9.728-0.512 16.896-8.704 16.896-18.432v-12.288c0-9.728-7.168-17.92-16.896-18.432zM89.6 424.448h844.8c7.68-0.512 14.848-5.632 16.384-13.312 2.56-7.68 0-16.384-6.144-22.016L522.24 43.52c-5.632-5.12-14.336-5.12-20.48 0L79.36 389.12c-6.144 5.632-8.704 13.824-6.144 22.016 2.048 7.168 8.704 12.8 16.384 13.312zM512.512 174.08c37.376 0 67.072 33.792 67.072 75.776s-30.208 75.776-67.072 75.776c-36.864 0-67.584-33.792-67.584-75.776S475.136 174.08 512.512 174.08z"
                            fill="#409EEF" p-id="4085"></path>
                    </svg>
                </div>
                <div class="aside_header_right"><span style="color: #409EEF;">微校园竞赛管理平台</span></div>

            </div>
            <div class="aside_header_back" style="cursor:pointer;">
                <div style="display: inline-block;margin-right: 30px;margin-top: 5px;"
                    @click="this.$router.push('/admin/signup'), mm()">
                    <svg t="1685588515854" class="icon" viewBox="0 0 1091 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="6187" width="15" height="15">
                        <path
                            d="M545.901727-6.34913734a300.183426 300.183426 0 0 0-185.834452 536.106341A552.015159 552.015159 0 0 0 0.625237 961.44889766a48.629576 48.629576 0 0 0 40.154136 55.576659 49.602168 49.602168 0 0 0 7.850203 0.625237 48.629576 48.629576 0 0 0 47.795926-40.779373 453.088707 453.088707 0 0 1 449.545696-382.089526A300.391839 300.391839 0 0 0 545.901727-6.34913734z m0 503.802409a203.41057 203.41057 0 1 1 203.41057-203.41057 203.618982 203.618982 0 0 1-203.41057 203.41057zM1091.178216 961.44889766A551.459393 551.459393 0 0 0 833.649876 578.24783866a48.629576 48.629576 0 1 0-50.57476 82.670279 454.686536 454.686536 0 0 1 212.441777 315.953303 48.629576 48.629576 0 0 0 47.795926 40.779373 49.602168 49.602168 0 0 0 7.780732-0.625237 48.629576 48.629576 0 0 0 40.084665-55.576659z"
                            p-id="6188"></path>
                    </svg>&#8194;我的
                </div>
                <div style="color: #808080;font-size: 13px;display: inline-block;">
                    {{ zz }}
                    <a style="cursor:pointer;">
                        <LocationFilled style="width: 1em; height: 1em; " @click="centerDialogVisible = true" />
                    </a>
                </div>
            </div>
        </div>
        <!-- <hr color="#E6E6E6" /> -->
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
                <el-table-column prop="aimCompetition" label="目标赛事" width="173" align="center" />
                <!-- <el-table-column prop="state" label="状态" width="70" align="center" />
                <el-table-column prop="checked" label="审核" width="70" align="center" /> -->
                <!-- <el-table-column prop="schoolId" label="学校编号" width="60" align="center" /> -->
                <el-table-column prop="startTime" label="竞赛开始时间" width="135" align="center" />
                <el-table-column prop="endTime" label="结束时间" width="135" align="center" />
                <el-table-column prop="signup" label="开始报名" width="90" align="center" />
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
                    <el-button type="primary" @click="centerDialogVisible = false, ab(),bb(this.zz)">
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
            zz: "泉州信息工程学院"
        }
    },
    mounted() {
        this.zzc(2)
    },
    methods: {
        bb(zz) {
            const cc = { name3: zz }
            sessionStorage.setItem("name3", JSON.stringify(cc));
            console.log(cc)
        },
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
            this.zz = JSON.parse(sessionStorage.getItem("name")).name;
            if (this.zz == " 泉州信息工程学院") {
                this.listVi = true;
            } else {
                this.listVi = false;
                this.zzc(1)
            }
        },
        selectSchool() {

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
                        }if(item.aimCompetition == 1275){
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
    height: 60px;
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
