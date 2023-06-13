<template>
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
                @click="this.$router.push('/admin'), mm()">
                <svg t="1685588515854" class="icon" viewBox="0 0 1091 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="6187" width="15" height="15">
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
    <div class="list">
        <div>
            <svg t="1686117464537" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="30884" width="40" height="40">
                <path
                    d="M926.5 251c0-10.2-7.8-18.5-17.5-18.5H806.5v-2c0.1-6.4 0.3-12.7 0.3-18.9 0-19.6-0.8-40.2-2.4-62.9-0.7-9.6-8.4-17.1-17.5-17.1H235.4c-9.1 0-16.8 7.5-17.5 17.1-1.6 19.9-2.5 43-2.5 66.3 0 1.7 0.1 6.9 0.2 12.1l0.1 5.5H115c-9.6 0-17.5 8.3-17.5 18.6-6.4 134.8 48.8 283 186.7 310 1 0.3 2.1 0.4 3.3 0.4 1.9 0 3.7-0.4 5.5-1l1.3-0.5 0.8 1.5c21.6 39.9 46.7 73.2 74.5 99.1 34.9 32.5 72.9 52.2 113 58.6l11.1 2v134.1h-137c-9.6 0-17.5 8.3-17.5 18.5 0 9.8 7.4 17.9 16.6 18.4h310.1c9.6 0 17.5-8.3 17.5-18.4 0-10.2-7.9-18.5-17.5-18.5h-137V736c-0.1-0.6 0-1.1 0-2.1v-12.7l11.1-1.9c40.1-6.4 78.1-26.1 113-58.5 27.9-26 53.1-59.6 74.9-99.8l0.9-1.6 1.6 0.7c1.9 1 4.2 1.5 6.6 1.5 1.2 0 2.3-0.2 3.3-0.5C877.7 534.2 932.9 386 926.5 251zM272 520.8c-68.6-19.3-141.3-105.7-139-249.3h0.1v-1.9h84.6l0.1 1.9c6.5 91 25.5 174 56.4 246.7l1.6 3.8-3.8-1.2z m619-249.3c2.3 145.3-71.3 231.4-140.7 249.8l-3.9 1 1.6-3.8c20.5-48.3 36-101.4 45.7-157.8 0 0 1.5-8.4 1.8-10.7 3.4-20.8 6-42.4 7.9-64l0.6-7.6 0.6-8.8h86.3l0.1 1.9z"
                    fill="#FFCC80" p-id="30885"></path>
                <path
                    d="M512 272.1l38.8 78.5 86.7 12.6-62.8 61.2 14.8 86.3L512 470l-77.5 40.7 14.8-86.3-62.8-61.2 86.7-12.6z"
                    fill="#F44336" p-id="30886"></path>
            </svg>
        </div>
        <div>
            互联网+页面设计大赛
        </div>
    </div>
    <div class="competitionCreates" style="width:1150px">
            <el-table :data="competitionCreates" border style="width: 100%; margin-left:20px">
                <el-table-column fixed prop="id" label="id" width="60" align="center" />
                <el-table-column prop="title" label="竞赛标题" width="100" align="center" />
                <el-table-column prop="signup" label="开始报名" width="90" align="center" />
                <el-table-column prop="signupedCount" label="报名数量" width="100" align="center" />
                <el-table-column prop="target" label="赛事对象" width="90" align="center" />
                <el-table-column prop="aimCompetition" label="目标赛事" width="120" align="center" />
                <el-table-column prop="state" label="状态" width="70" align="center" />
                <el-table-column prop="checked" label="审核" width="70" align="center" />
                <!-- <el-table-column prop="schoolId" label="学校编号" width="60" align="center" /> -->
                <el-table-column prop="startTime" label="竞赛开始时间" width="135" align="center" />
                <el-table-column prop="endTime" label="结束时间" width="135" align="center" />
                <el-table-column fixed="right" label="操作" width="130" align="center">
                    <template #default="scope">
                        <!-- <el-button type="primary" @click="toEdit(scope.row)">编辑</el-button>
                    <el-button type="danger" @click="del(scope.row.id)">删除</el-button> -->
                        <el-button type="success" @click="del(scope.row.id)">报名审核</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination layout="prev, pager, next" :page-size="page.size" :total="page.total"
                @current-change="currentchange" />
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
</template>

<script>
import region from "../admin/region.vue"
import { defineComponent } from "vue"
import {getOne } from "../../http/competitionCreateList";
import { ElMessage } from 'element-plus'
import dayjs from "dayjs";
export default defineComponent({
    setup() {
    },
    components: { region },
    data() {
        return {
            message: '欢迎来到微校园竞赛管理平台，我们是来自20级软件工程3班的第3组，小组成员为：张瑶、杨体评、赵慧鑫。',
            marqueeVar: null,
            speed1: 0,
            speed2: 0,
            centerDialogVisible: false,
            options: [],
            zz: "泉州信息工程学院",
            competitionCreates: [],

        }
    },
    mounted() {
        this.zzc(2)
    },
    methods: {
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
                    });
                }
                else {
                    console.log(res.msg)
                    return false
                }

            }).catch(err => {

            })
        },
        mm() {
            const cc = { name2: this.zz }
            sessionStorage.setItem("name2", JSON.stringify(cc));
            console.log(cc)
        },
        ab() {
            this.zz = JSON.parse(sessionStorage.getItem("name")).name;
        },
        selectSchool() {

        },

        //     //将移动的关键代码移出
        //     moveMarquee() {
        //         // 获取内容区宽度
        //         var width1 = (document.getElementById('marquee1').getBoundingClientRect().width)
        //         var width2 = (document.getElementById('marquee2').getBoundingClientRect().width)
        //         //width为第二个span标签尾部到盒子尾部的距离，500为外层盒子的宽度
        //         var width = width1 + width2 - 500
        //         var marquee1 = document.getElementById("marquee1");
        //         var marquee2 = document.getElementById("marquee2");
        //         this.speed1 = this.speed1 - 1;
        //         this.speed2 -= 1;
        //         // 如果speed2的尾部移到盒子的尾部并且speed1的移动距离不超过文字的距离
        //         if (-this.speed2 >= width && -this.speed1 >= width1) {
        //             //让speed1重新在原位置移动
        //             this.speed1 = 500;
        //         }
        //         if (-this.speed2 >= width1 + width2) {
        //             //如果speed2的尾部移动到盒子的头部，让speed2跟在speed1之后移动
        //             this.speed2 = 0
        //         }
        //         marquee1.style.transform = "translateX(" + this.speed1 + "px)";
        //         marquee2.style.transform = "translateX(" + this.speed2 + "px)";
        //     },
        //     runMarquee() {
        //         var marquee1 = document.getElementById("marquee1");
        //         var marquee2 = document.getElementById("marquee2");
        //         this.marqueeVar = setInterval(() => this.moveMarquee(), 30);
        //         //监听鼠标移入，清空定时器
        //         marquee1.addEventListener('mouseenter', () => {
        //             clearInterval(this.marqueeVar);
        //             this.marqueeVar = null
        //         })
        //         marquee2.addEventListener('mouseenter', () => {
        //             clearInterval(this.marqueeVar);
        //             this.marqueeVar = null
        //         })
        //         //监听鼠标移开，重启定时器
        //         marquee1.addEventListener('mouseleave', () => {
        //             this.marqueeVar = setInterval(() => this.moveMarquee(), 30);
        //         }
        //         )
        //         marquee2.addEventListener('mouseleave', () => {
        //             this.marqueeVar = setInterval(() => this.moveMarquee(), 30);
        //         }
        //         )
        //     }
    },

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

#marquee1 {
    display: inline-block;
}

#marquee2 {
    display: inline-block;
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
}</style>