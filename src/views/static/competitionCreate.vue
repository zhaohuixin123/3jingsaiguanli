<template>
    <div class="main">
        <div class="title">竞赛创建</div>
        <div class="leave_btn">
            <el-button type="primary" size="large" icon="Edit" @click="toAdd">创建竞赛</el-button>
        </div>
        <div class="statistics">
            <div class="Rest">
                <div style="margin-top: 10px;margin-left: 35px;align-items: center;display: flex;">
                    <el-progress type="circle" :show-text="false" :percentage="25" width="105" color="#15C0E6"
                        stroke-width="4" :format="format" />
                    <div class="text_box_one">
                        <p class="text_one">1</p>
                    </div>
                </div>
                <div class="statistics-font">未启用</div>
                <div class="statistics-bottom-font">1/12未启用</div>
            </div>
            <div class="sick_leave">
                <div style="margin-top: 10px;margin-left: 35px;align-items: center;display: flex;">
                    <el-progress type="circle" :show-text="false" :percentage="25" width="105" color="#F65160"
                        stroke-width="4" :format="format" />
                    <div class="text_box_two">
                        <p class="text_two">1</p>
                    </div>
                </div>
                <div class="statistics-font">启用</div>
                <div class="statistics-bottom-font">6/12个已启用</div>
            </div>
            <div class="Leave">
                <div style="margin-top: 10px;margin-left: 35px;align-items: center;display: flex;">
                    <el-progress type="circle" :show-text="false" :percentage="25" width="105" color="#6D5DD3"
                        stroke-width="4" :format="format" />
                    <div class="text_box_three">
                        <p class="text_three">1</p>
                    </div>
                </div>
                <div class="statistics-font">结束</div>
                <div class="statistics-bottom-font">1/12个已结束</div>
            </div>
        </div>
        <div class="title">提交记录</div>
        <div class="all_recording">
            <div class="Recording">
                <div class="type">
                    <div class="Recording_title">竞赛标题</div>
                    <div class="Recording_content">
                        <div class="Recording_icon">
                            <svg t="1685671294482" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="17933" width="15" height="15">
                                <path
                                    d="M849.170732 0c97.404878 0 174.829268 77.42439 174.829268 174.829268v674.341464c0 97.404878-77.42439 174.829268-174.829268 174.829268H174.829268c-97.404878 0-174.829268-77.42439-174.829268-174.829268V174.829268c0-97.404878 77.42439-174.829268 174.829268-174.829268h674.341464z m-182.321952 237.268293H359.64878c-17.482927 0-29.970732 14.985366-32.468292 32.468292V312.195122h-4.995122c-49.95122 9.990244-87.414634 54.946341-87.414634 109.892683 0 57.443902 44.956098 107.395122 102.4 109.892683h4.995122l2.497561 4.995122c24.97561 54.946341 74.926829 94.907317 134.868292 107.395122h7.492683v92.409756h-67.434146c-12.487805 0-24.97561 9.990244-24.97561 24.97561 0 12.487805 9.990244 22.478049 22.478049 24.975609H601.912195c12.487805 0 24.97561-9.990244 24.97561-24.975609 0-12.487805-9.990244-22.478049-22.478049-24.97561H534.478049v-89.912195c67.434146-7.492683 124.878049-52.44878 149.853658-114.887805 54.946341-4.995122 99.902439-52.44878 99.902439-109.892683 0-49.95122-34.965854-92.409756-79.921951-107.395122l-4.995122-2.497561v-44.956098c0-17.482927-14.985366-29.970732-29.970732-32.468292l-2.497561 2.497561z m-167.336585 99.902439c7.492683-12.487805 17.482927-12.487805 24.97561 0l2.497561 2.497561 22.478049 47.453658 47.453658 7.492683h2.497561c14.985366 2.497561 17.482927 14.985366 7.492683 24.97561l-2.497561 2.497561-34.965854 37.463415 7.492683 52.44878v2.497561c2.497561 14.985366-7.492683 22.478049-19.980487 14.985366l-2.497561-2.497561-42.458537-24.97561-42.458537 24.97561h-2.497561c-12.487805 7.492683-19.980488 0-19.980487-14.985366v-2.497561l7.492683-52.44878-37.463415-37.463415c-9.990244-9.990244-7.492683-22.478049 7.492683-24.97561h2.497561l47.453658-7.492683 24.97561-49.951219z m-172.331707 24.975609v102.4c0 4.995122 0 9.990244 2.497561 14.985366-24.97561-7.492683-44.956098-29.970732-44.956098-59.941463 0-24.97561 14.985366-47.453659 37.463415-57.443903h4.995122z m374.634146 4.995122l2.497561 2.497561c19.980488 9.990244 32.468293 29.970732 32.468293 54.946342 0 24.97561-14.985366 47.453659-37.463415 57.443902v-114.887805z"
                                    fill="#409eef" p-id="17934"></path>
                            </svg>
                        </div>
                        <div>
                            互联网+院赛
                        </div>
                    </div>
                </div>
                <div class="duration">
                    <div class="Recording_title_one">期间</div>
                    <div class="Recording_content_one">1天</div>
                </div>
                <div class="start_duration">
                    <div class="Recording_title_one">开始日期</div>
                    <div class="Recording_content_one">2021-10-13</div>
                </div>
                <div class="end_duration">
                    <div class="Recording_title_one">结束日期</div>
                    <div class="Recording_content_one">2021-10-16</div>
                </div>
                <div class="state_duration">
                    <div class="state_yes">
                        已审核
                    </div>
                </div>
            </div>
            <div class="Recording">
                <div class="type">
                    <div class="Recording_title">请求类型</div>
                    <div class="Recording_content">
                        <div class="Recording_icon">
                            <svg t="1685671294482" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="17933" width="15" height="15">
                                <path
                                    d="M849.170732 0c97.404878 0 174.829268 77.42439 174.829268 174.829268v674.341464c0 97.404878-77.42439 174.829268-174.829268 174.829268H174.829268c-97.404878 0-174.829268-77.42439-174.829268-174.829268V174.829268c0-97.404878 77.42439-174.829268 174.829268-174.829268h674.341464z m-182.321952 237.268293H359.64878c-17.482927 0-29.970732 14.985366-32.468292 32.468292V312.195122h-4.995122c-49.95122 9.990244-87.414634 54.946341-87.414634 109.892683 0 57.443902 44.956098 107.395122 102.4 109.892683h4.995122l2.497561 4.995122c24.97561 54.946341 74.926829 94.907317 134.868292 107.395122h7.492683v92.409756h-67.434146c-12.487805 0-24.97561 9.990244-24.97561 24.97561 0 12.487805 9.990244 22.478049 22.478049 24.975609H601.912195c12.487805 0 24.97561-9.990244 24.97561-24.975609 0-12.487805-9.990244-22.478049-22.478049-24.97561H534.478049v-89.912195c67.434146-7.492683 124.878049-52.44878 149.853658-114.887805 54.946341-4.995122 99.902439-52.44878 99.902439-109.892683 0-49.95122-34.965854-92.409756-79.921951-107.395122l-4.995122-2.497561v-44.956098c0-17.482927-14.985366-29.970732-29.970732-32.468292l-2.497561 2.497561z m-167.336585 99.902439c7.492683-12.487805 17.482927-12.487805 24.97561 0l2.497561 2.497561 22.478049 47.453658 47.453658 7.492683h2.497561c14.985366 2.497561 17.482927 14.985366 7.492683 24.97561l-2.497561 2.497561-34.965854 37.463415 7.492683 52.44878v2.497561c2.497561 14.985366-7.492683 22.478049-19.980487 14.985366l-2.497561-2.497561-42.458537-24.97561-42.458537 24.97561h-2.497561c-12.487805 7.492683-19.980488 0-19.980487-14.985366v-2.497561l7.492683-52.44878-37.463415-37.463415c-9.990244-9.990244-7.492683-22.478049 7.492683-24.97561h2.497561l47.453658-7.492683 24.97561-49.951219z m-172.331707 24.975609v102.4c0 4.995122 0 9.990244 2.497561 14.985366-24.97561-7.492683-44.956098-29.970732-44.956098-59.941463 0-24.97561 14.985366-47.453659 37.463415-57.443903h4.995122z m374.634146 4.995122l2.497561 2.497561c19.980488 9.990244 32.468293 29.970732 32.468293 54.946342 0 24.97561-14.985366 47.453659-37.463415 57.443902v-114.887805z"
                                    fill="#409eef" p-id="17934"></path>
                            </svg>
                        </div>
                        <div>
                            软件杯校赛
                        </div>
                    </div>
                </div>
                <div class="duration">
                    <div class="Recording_title_one">期间</div>
                    <div class="Recording_content_one">4小时</div>
                </div>
                <div class="start_duration">
                    <div class="Recording_title_one">开始日期</div>
                    <div class="Recording_content_one">2021-10-13 9:00</div>
                </div>
                <div class="end_duration">
                    <div class="Recording_title_one">结束日期</div>
                    <div class="Recording_content_one">2021-10-13 13:00</div>
                </div>
                <div class="state_duration">
                    <div class="state_yet">
                        未审核
                    </div>
                </div>
            </div>
            <div class="Recording">
                <div class="type">
                    <div class="Recording_title">请求类型</div>
                    <div class="Recording_content">
                        <div class="Recording_icon">
                            <svg t="1685671294482" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="17933" width="15" height="15">
                                <path
                                    d="M849.170732 0c97.404878 0 174.829268 77.42439 174.829268 174.829268v674.341464c0 97.404878-77.42439 174.829268-174.829268 174.829268H174.829268c-97.404878 0-174.829268-77.42439-174.829268-174.829268V174.829268c0-97.404878 77.42439-174.829268 174.829268-174.829268h674.341464z m-182.321952 237.268293H359.64878c-17.482927 0-29.970732 14.985366-32.468292 32.468292V312.195122h-4.995122c-49.95122 9.990244-87.414634 54.946341-87.414634 109.892683 0 57.443902 44.956098 107.395122 102.4 109.892683h4.995122l2.497561 4.995122c24.97561 54.946341 74.926829 94.907317 134.868292 107.395122h7.492683v92.409756h-67.434146c-12.487805 0-24.97561 9.990244-24.97561 24.97561 0 12.487805 9.990244 22.478049 22.478049 24.975609H601.912195c12.487805 0 24.97561-9.990244 24.97561-24.975609 0-12.487805-9.990244-22.478049-22.478049-24.97561H534.478049v-89.912195c67.434146-7.492683 124.878049-52.44878 149.853658-114.887805 54.946341-4.995122 99.902439-52.44878 99.902439-109.892683 0-49.95122-34.965854-92.409756-79.921951-107.395122l-4.995122-2.497561v-44.956098c0-17.482927-14.985366-29.970732-29.970732-32.468292l-2.497561 2.497561z m-167.336585 99.902439c7.492683-12.487805 17.482927-12.487805 24.97561 0l2.497561 2.497561 22.478049 47.453658 47.453658 7.492683h2.497561c14.985366 2.497561 17.482927 14.985366 7.492683 24.97561l-2.497561 2.497561-34.965854 37.463415 7.492683 52.44878v2.497561c2.497561 14.985366-7.492683 22.478049-19.980487 14.985366l-2.497561-2.497561-42.458537-24.97561-42.458537 24.97561h-2.497561c-12.487805 7.492683-19.980488 0-19.980487-14.985366v-2.497561l7.492683-52.44878-37.463415-37.463415c-9.990244-9.990244-7.492683-22.478049 7.492683-24.97561h2.497561l47.453658-7.492683 24.97561-49.951219z m-172.331707 24.975609v102.4c0 4.995122 0 9.990244 2.497561 14.985366-24.97561-7.492683-44.956098-29.970732-44.956098-59.941463 0-24.97561 14.985366-47.453659 37.463415-57.443903h4.995122z m374.634146 4.995122l2.497561 2.497561c19.980488 9.990244 32.468293 29.970732 32.468293 54.946342 0 24.97561-14.985366 47.453659-37.463415 57.443902v-114.887805z"
                                    fill="#409eef" p-id="17934"></path>
                            </svg>
                        </div>
                        <div>
                            挑战杯校赛
                        </div>
                    </div>
                </div>
                <div class="duration">
                    <div class="Recording_title_one">期间</div>
                    <div class="Recording_content_one">1天</div>
                </div>
                <div class="start_duration">
                    <div class="Recording_title_one">开始日期</div>
                    <div class="Recording_content_one">2021-10-13</div>
                </div>
                <div class="end_duration">
                    <div class="Recording_title_one">结束日期</div>
                    <div class="Recording_content_one">2021-10-16</div>
                </div>
                <div class="state_duration">
                    <div class="state_yet">
                        未审核
                    </div>
                </div>
            </div>
            <div class="Recording">
                <div class="type">
                    <div class="Recording_title">请求类型</div>
                    <div class="Recording_content">
                        <div class="Recording_icon">
                            <svg t="1685671294482" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="17933" width="15" height="15">
                                <path
                                    d="M849.170732 0c97.404878 0 174.829268 77.42439 174.829268 174.829268v674.341464c0 97.404878-77.42439 174.829268-174.829268 174.829268H174.829268c-97.404878 0-174.829268-77.42439-174.829268-174.829268V174.829268c0-97.404878 77.42439-174.829268 174.829268-174.829268h674.341464z m-182.321952 237.268293H359.64878c-17.482927 0-29.970732 14.985366-32.468292 32.468292V312.195122h-4.995122c-49.95122 9.990244-87.414634 54.946341-87.414634 109.892683 0 57.443902 44.956098 107.395122 102.4 109.892683h4.995122l2.497561 4.995122c24.97561 54.946341 74.926829 94.907317 134.868292 107.395122h7.492683v92.409756h-67.434146c-12.487805 0-24.97561 9.990244-24.97561 24.97561 0 12.487805 9.990244 22.478049 22.478049 24.975609H601.912195c12.487805 0 24.97561-9.990244 24.97561-24.975609 0-12.487805-9.990244-22.478049-22.478049-24.97561H534.478049v-89.912195c67.434146-7.492683 124.878049-52.44878 149.853658-114.887805 54.946341-4.995122 99.902439-52.44878 99.902439-109.892683 0-49.95122-34.965854-92.409756-79.921951-107.395122l-4.995122-2.497561v-44.956098c0-17.482927-14.985366-29.970732-29.970732-32.468292l-2.497561 2.497561z m-167.336585 99.902439c7.492683-12.487805 17.482927-12.487805 24.97561 0l2.497561 2.497561 22.478049 47.453658 47.453658 7.492683h2.497561c14.985366 2.497561 17.482927 14.985366 7.492683 24.97561l-2.497561 2.497561-34.965854 37.463415 7.492683 52.44878v2.497561c2.497561 14.985366-7.492683 22.478049-19.980487 14.985366l-2.497561-2.497561-42.458537-24.97561-42.458537 24.97561h-2.497561c-12.487805 7.492683-19.980488 0-19.980487-14.985366v-2.497561l7.492683-52.44878-37.463415-37.463415c-9.990244-9.990244-7.492683-22.478049 7.492683-24.97561h2.497561l47.453658-7.492683 24.97561-49.951219z m-172.331707 24.975609v102.4c0 4.995122 0 9.990244 2.497561 14.985366-24.97561-7.492683-44.956098-29.970732-44.956098-59.941463 0-24.97561 14.985366-47.453659 37.463415-57.443903h4.995122z m374.634146 4.995122l2.497561 2.497561c19.980488 9.990244 32.468293 29.970732 32.468293 54.946342 0 24.97561-14.985366 47.453659-37.463415 57.443902v-114.887805z"
                                    fill="#409eef" p-id="17934"></path>
                            </svg>
                        </div>
                        <div>
                            三创赛校赛
                        </div>
                    </div>
                </div>
                <div class="duration">
                    <div class="Recording_title_one">期间</div>
                    <div class="Recording_content_one">1天</div>
                </div>
                <div class="start_duration">
                    <div class="Recording_title_one">开始日期</div>
                    <div class="Recording_content_one">2021-10-13</div>
                </div>
                <div class="end_duration">
                    <div class="Recording_title_one">结束日期</div>
                    <div class="Recording_content_one">2021-10-16</div>
                </div>
                <div class="state_duration">
                    <div class="state_yet">
                        未审核
                    </div>
                </div>
            </div>
        </div>

    <div class="competitions">
        <!-- <div class="competition-tools">
            <el-button type="warning" @click="toAdd">添加</el-button>
        </div> -->
        <!-- <el-table :data="competitions" style="width: 50%">
            <el-table-column fixed prop="aimCompetition" label="目标赛事" width="50" />
            <el-table-column prop="checked" label="审核" width="120" />
            <el-table-column prop="content" label="竞赛方案" width="120" />
            <el-table-column prop="createTime" label="创建时间" width="120" />
            <el-table-column prop="deleted" label="逻辑删除" width="120" />
            <el-table-column prop="id" label="结束时间" width="120" />
            <el-table-column prop="schoolId" label="id" width="120" />
            <el-table-column prop="signup" label="学校编号" width="120" />
            <el-table-column prop="startTime" label="开始报名" width="120" />
            <el-table-column prop="state" label="竞赛开始时间" width="120" />
            <el-table-column prop="target" label="状态" width="120" />
            <el-table-column prop="title" label="竞赛对象" width="120" />
            <el-table-column prop="type" label="竞赛标题" width="120" />
            <el-table-column prop="updateTime" label="竞赛类型" width="120" />
            <el-table-column prop="signup" label="更新时间" width="120" />
            <el-table-column fixed="userId" label="用户编号" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="toEdit(scope.row)">更新</el-button>
                    <el-button link type="primary" size="small" @click="del(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table> -->
        <!-- <el-pagination layout="prev, pager, next" :page-size="page.size" :total="page.total"
            @current-change="currentchange" /> -->
    </div>
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
                <el-button type="primary" @click="save">
                    保存
                </el-button>
            </span>
        </template>
    </el-dialog>
</div>
</template>
<script>
import { defineComponent } from "vue"
import { all, del, add, edit } from "../../http/competitionCreate";
import { ElMessage } from 'element-plus'
import { cloneDeep } from 'lodash-es'
export default defineComponent({
    data() {
        return {
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
    },
    methods: {
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
            else {
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

<style lang="scss" scoped>
.main {
    min-width: 1220px;
    position: absolute;
    width: 100%;
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

.statistics {
    width: 100%;
    height: 200px;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
}

.Rest {
    background: url(../../assets/Rest_background.png);
    background-size: 100% 100%;
    border-radius: 20px;
    width: 27%;
    height: 96%;
    background-color: #fff;
}

.sick_leave {
    background: url(../../assets/Leave_background.png);
    background-size: 100% 100%;
    border-radius: 20px;
    width: 27%;
    height: 90%;
    background-color: #fff;
}

.Leave {
    background: url(../../assets/sick_leave_background2.png);
    background-size: 100% 100%;
    border-radius: 20px;
    width: 27%;
    height: 90%;
    background-color: #fff;
}

.statistics-font {

    margin-top: 10px;
    margin-left: 56px;
    align-items: center;
    display: flex;
}

.statistics-bottom-font {
    font-size: 10px;
    color: #ccc;
    margin-left: 56px;
    align-items: center;
    display: flex;
    margin-top: 3px;
}

.text_box_two {
    position: absolute;
    margin-top: 57px;
    margin-left: 52px;
    transform: translate(-50%, -50%);
}

.text_box_one {
    position: absolute;
    margin-top: 57px;
    margin-left: 52px;
    transform: translate(-50%, -50%);
}

.text_box_three {
    position: absolute;
    margin-top: 57px;
    margin-left: 52px;
    transform: translate(-50%, -50%);
}

.all_recording {
    height: 100%;
    width: 100%;
}

.Recording {
    margin-bottom: 20px;
    display: flex;
    border-radius: 10px;
    width: 90%;
    height: 80px;
    background-color: #fff;
    margin-left: 5%;
}

.el-dialog {}

.type {
    margin-left: 4%;
    width: 25%;
    height: 100%;
}

.duration {
    width: 13%;
    height: 100%;
}

.start_duration {
    width: 25%;
    height: 100%;
}

.end_duration {
    width: 20%;
    height: 100%;
}

.state_duration {
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17%;
    height: 100%;
}

.Recording_title {
    margin-left: 2px;
    margin-top: 20px;
    font-size: 10px;
    color: #ccc;
    display: flex;
    margin-bottom: 5px;
}

.Recording_content {
    font-size: 14px;
    display: flex;
}

.Recording_icon {
    margin-right: 3px;
    margin-left: 2px;
    margin-top: 1px;
}

.Recording_title_one {
    margin-top: 20px;
    font-size: 10px;
    justify-content: center;
    color: #ccc;
    display: flex;
    margin-bottom: 5px;
}

.Recording_content_one {
    display: flex;
    font-size: 14px;
    justify-content: center;
}

.state_yet {
    width: 66px;
    height: 30px;
    background-color: #FDC748;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 10px;
    font-size: 12px;
}

.state_no {
    width: 66px;
    height: 30px;
    background-color: #D43030;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 10px;
    font-size: 12px;
}

.state_yes {
    width: 66px;
    height: 30px;
    background-color: #00D097;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 10px;
    font-size: 12px;
}

.leave_type {
    width: 80%;
    height: 100px;
}

.leave_type_title {
    margin-left: 16px;
}

.leave_type_radio {
    margin-left: 16px;
    margin-top: 8px;
}

.radio_group {
    margin-top: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.el-radio-button__original-radio:checked+.el-radio-button__inner {
    border-radius: 56px;
    padding: 10px 20px;
    font-size: 14px;
    width: 240px;
}

.el-radio-button--large .el-radio-button__inner {
    border-radius: 56px;
    padding: 10px 20px;
    font-size: 14px;
    width: 240px;
}

.el-radio-button__inner {
    background-color: #E6EDF5;
    border: 0px;
}

.el-radio-group {
    background-color: #E6EDF5;
    border-radius: 56px;
}

.dialog_body {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
}

.dialog_data {
    width: 490px;
    margin-top: 29px;
    margin-left: 6px;
}

.dialog_hour_message {
    height: 180px;
    width: 100%;
}

.dialog_hour_message_title {
    display: flex;
    justify-content: space-between;
}

.Length_of_leave {
    display: flex;
    align-items: center;
    width: 99%;
    border-radius: 10px;
    height: 67px;
    margin-top: 20px;
    background-color: #F4F9FD;
    margin-left: 5px;
}

.Length_of_leave_title {
    font-size: 15px;
    color: black;
    display: flex;
    justify-content: center;
    margin-left: 30px;
    align-items: center;
}

.Length {
    margin-left: 305px;
    font-size: 21px;
    color: #15C0E6;
    align-items: center;
}

.dialog_message {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.el-input__wrapper {
    margin-left: 6px;
}
</style>
