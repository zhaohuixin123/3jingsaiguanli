<template>
    <!--
         1 el-table显示数据,分页 
         2  token cookie|session 服务端保存状态信息方式   
         H5 token 如果有值 登录状态 否则就是登录
         进入某个页面就要进行拦截：判断用户是否登录
         通过什么方式：路由守卫
         3 添加和更新
    -->


    <div class="copyRights">
        <div class="adcate-tools">
            <el-button type="warning" @click="toAdd">添加</el-button>
        </div>
        <el-table :data="copyRights" style="width: 100%">
            <el-table-column fixed prop="id" label="#" width="50" />
            <el-table-column prop="name" label="著作权名称" />
            <el-table-column prop="userId" label="著作权人" />
            <el-table-column prop="finishTime" label="完成时间"/>
            <el-table-column prop="publishTime" label="首次发表时间" />
            <el-table-column prop="attachment" label="佐证材料"/>
            <el-table-column prop="copyrightNo" label="著作权编号"/>

            <el-table-column fixed="right" label="操作" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="toEdit(scope.row)">更新</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" :page-size="page.size" :total="page.total"
            @current-change="currentchange" />
    </div>
    <el-dialog v-model="dialogFormVisible" title="著作权">
        <el-form :model="copyRight">
            <el-form-item label="著作权名称" :label-width="formLabelWidth">
                <el-input v-model="copyRight.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="著作权人" :label-width="formLabelWidth">
                <el-input v-model="copyRight.userId" autocomplete="off" />
            </el-form-item>
            <el-form-item label="完成时间" :label-width="formLabelWidth">
                <el-date-picker
                    v-model="copyRight.finishTime"
                    type="date"
                    placeholder="Pick a day"
                    :size="size"
                />
            </el-form-item>
            <el-form-item label="首次发表时间" :label-width="formLabelWidth">
                <el-date-picker
                    v-model="copyRight.publishTime"
                    type="date"
                    placeholder="Pick a day"
                    :size="size"
                />
            </el-form-item>
            <el-form-item label="佐证材料" :label-width="formLabelWidth">
                <el-input v-model="copyRight.attachment" autocomplete="off" />
            </el-form-item>
            <el-form-item label="著作权编号" :label-width="formLabelWidth">
                <el-input v-model="copyRight.copyrightNo" autocomplete="off" />
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
import { adTopicPage, adTopicAdd, adTopicEdit } from "../../http/copyright";
import { ElMessage } from 'element-plus'
import {cloneDeep} from 'lodash-es'
export default defineComponent({
    data() {
        return {
            copyRights: [],
            page: {
                total: 0,
                current: 1,
                size: 10
            },
            dialogFormVisible: false,
            copyRight: {
                "attachment": "",
                "copyrightNo": "",
                "finishTime": "",
                "id": 0,
                "name": "",
                "publishTime": "",
                "userId": 0
            },
            formLabelWidth: 80
        }
    },
    mounted() {
        this.getAdCatesPage(1)
    },
    methods: {
        toEdit(adcate) {
            console.log(adcate);
            this.dialogFormVisible=true;
            this.copyRight=cloneDeep(adcate);    
        },
        getAdCatesPage(current) {
            const data = {
                current: current,
                size: 2
            }
            adTopicPage(data).then(res => {
                console.log(res);
                const page = res.data.page;
                this.copyRights = page.records;
                this.page = page;
            }).catch(err => {
                console.log(err);
            })

        },
        currentchange(current) {
            // console.log(current);
            this.getAdCatesPage(current);
            this.page.current = current;//数据更新目前显示的页面
        },
        del(id) {
            //删除数据
            //模拟删除，服务器进行处理 
            //要别人反悔机会
            // 如果只有一条数据，删除数据之后如何处理？
            //人机交互
            console.log(id)
            const params = {
                id: id
            }
            adTopicDelId(params).then(res => {
                if (res.success) {
                    this.getAdCatesPage(this.page.current)

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
            this.copyRight =  {
                "attachment": "",
                "copyrightNo": "",
                "finishTime": "",
                "id": 0,
                "name": "",
                "publishTime": "",
                "userId": 0
            },
            this.dialogFormVisible = true;
        },
        save() {
            const adcate = this.copyRight;
            if (adcate.id == 0) {
                adTopicAdd(adcate).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false;
                        this.getAdCatesPage(this.page.current)
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
                adTopicEdit(adcate).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false;
                        this.getAdCatesPage(this.page.current)
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

  

