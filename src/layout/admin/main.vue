<template>
    <el-main>
        <el-menu :default-active="1" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
            <div style="margin-left: 2%;color: #808080;font-size: 13px;">
                {{zz.name2}}
                <a style="cursor:pointer;"><LocationFilled style="width: 1em; height: 1em; margin-top:15%" @click="selectSchool"/></a>
            </div>
            <div class="flex-grow" />
            <el-sub-menu index="1">
                <template #title><svg t="1685588515854" class="icon" viewBox="0 0 1091 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="6187" width="15" height="15">
                        <path
                            d="M545.901727-6.34913734a300.183426 300.183426 0 0 0-185.834452 536.106341A552.015159 552.015159 0 0 0 0.625237 961.44889766a48.629576 48.629576 0 0 0 40.154136 55.576659 49.602168 49.602168 0 0 0 7.850203 0.625237 48.629576 48.629576 0 0 0 47.795926-40.779373 453.088707 453.088707 0 0 1 449.545696-382.089526A300.391839 300.391839 0 0 0 545.901727-6.34913734z m0 503.802409a203.41057 203.41057 0 1 1 203.41057-203.41057 203.618982 203.618982 0 0 1-203.41057 203.41057zM1091.178216 961.44889766A551.459393 551.459393 0 0 0 833.649876 578.24783866a48.629576 48.629576 0 1 0-50.57476 82.670279 454.686536 454.686536 0 0 1 212.441777 315.953303 48.629576 48.629576 0 0 0 47.795926 40.779373 49.602168 49.602168 0 0 0 7.780732-0.625237 48.629576 48.629576 0 0 0 40.084665-55.576659z"
                            p-id="6188"></path>
                    </svg>&#8194;我的</template>
                <el-menu-item index="2-1" @click="this.$router.push('/home')">返回首页</el-menu-item>
                <el-menu-item index="2-2" @click="this.$router.push('/admin/competitionCreateList')">竞赛管理</el-menu-item>
                <el-menu-item index="2-3">安全退出</el-menu-item>
            </el-sub-menu>
        </el-menu>
        <RouterView :key="key"></RouterView>
    </el-main>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
    setup(){
    },
    data() {
        return {
            zz:JSON.parse(sessionStorage.getItem("name2")),
            icon: "Expand",
            src: '../../../src/assets/logo.png',
        }
    },
    computed: {
        key() {
            return this.$route.path

        },

    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        },
        collapse(icon) {
            if (icon == 'Expand') {
                this.icon = "Fold"
                this.isCollapse = true;
            }
            else {
                this.icon == 'Fold'
                this.isCollapse = false
            }

        },
        selectSchool(){
            
        }
    }

});
</script>

<style lang="scss" scoped>
.el-main {
    padding: 0 !important;
}

.flex-grow {
    flex-grow: 1;
}
</style>
