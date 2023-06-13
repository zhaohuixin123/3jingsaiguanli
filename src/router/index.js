//引入vue-router
import { createRouter, createWebHashHistory } from 'vue-router'
//ES6  import输入  export 输出
// 模块化 默认私有，如何被别人使用？
// 通过export 输出
// 如何使用
// export default 默认输出
import Index from '@/views/static/index.vue'
import LayoutAdmin from '@/layout/admin/index.vue'
//白名单
const whiteList = [
    "/",
    "/login"
]
import { useUserStore } from '../store/user'

//路由表
const routes = [
    {
        path: '/admingroup',
        name: 'admingroup',
        component: () => import('@/views/static/admingroup.vue')
    },
    {
        path: '/home',
        name: 'zzhome',
        component: () => import('../views/static/home.vue')
    },
    {
        path: '/',//访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf 
        name: 'home', //命名路由
        component: Index,   //key:value  默认//页面组件 components 普通组件 页面组件和普通组件是一对多
    },
    {
        path: '/adcate',
        name: 'adCate',
        component: () => import('../views/static/adCate.vue')// 懒加载
    },
    {
        path: '/interview_type', name: 'interview_type', component: () => import('../views/static/interview_type.vue') //懒加载 
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/static/login.vue')// 懒加载
    },
    {
        path: '/menu-rule',
        name: 'admin-menu-rule',
        component: () => import('@/views/admin/menu-rule.vue')
    },
    {
        path: '/competition',
        name: 'competition',
        component: () => import('../views/static/competition.vue')// 懒加载
    },
    {
        path: '/logout',
        name: 'admin-logout',
        component: () => import('@/views/admin/logout.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        component: LayoutAdmin,
        children: [
            {
                path: 'student',
                name: 'admin-student',
                component: () => import('@/views/admin/student.vue')
            },
            {
                path: 'teacher',
                name: 'admin-teacher',
                component: () => import('@/views/admin/teacher.vue')
            },
            {
                path: '',
                name: 'admin-index',
                component: () => import('@/views/admin/index.vue')
            },
            {
                path: 'info',
                name: 'admin-info',
                component: () => import('@/views/admin/info.vue')
            },
            {
                path: 'competitionCreate',
                name: 'competitionCreate',
                component: () => import('@/views/admin/competitionCreate.vue')// 懒加载
            },
            {
                path: 'logout',
                name: 'admin-logout',
                component: () => import('@/views/admin/logout.vue')
            }, {
                path: 'changepassword',
                name: 'admin-changepassword',
                component: () => import('@/views/admin/changepassword.vue')
            },
            {
                path: 'forgetpassword',
                name: 'admin-forgetpassword',
                component: () => import('@/views/admin/forgetpassword.vue')
            },
            {
                path: 'major',
                name: 'admin-major',
                component: () => import('@/views/admin/major.vue')
            },
            {
                path: 'memorabilia',
                name: 'admin-memorabilia',
                component: () => import('@/views/admin/memorabilia.vue')
            },
            {
                path: 'course',
                name: 'admin-course',
                component: () => import('@/views/admin/course.vue')
            },
            {
                path: 'role',
                name: 'admin-role',
                component: () => import('@/views/admin/role.vue')
            },
            {
                path: 'competition',
                name: 'admin-competition',
                component: () => import('@/views/admin/competition.vue')
            },
            {
                path: 'competitionChecked',
                name: 'admin-competitionChecked',
                component: () => import('@/views/admin/competitionChecked.vue')
            },
            {
                path: 'competitionCreateList',
                name: 'admin-competitionCreateList',
                component: () => import('@/views/admin/competitionCreateList.vue')
            },
            {
                path: 'user',
                name: 'admin-user',
                component: () => import('@/views/admin/user.vue')
            },
            {
                path: 'userinfo',
                name: 'admin-userinfo',
                component: () => import('@/views/admin/userinfo.vue')
            },
            {
                path: 'school',
                name: 'admin-school',
                component: () => import('@/views/admin/school.vue')
            },
            {
                path: 'schoolSelect',
                name: 'admin-schoolSelect',
                component: () => import('@/views/admin/schoolSelect.vue')
            },
            {
                path: 'dormitory',
                name: 'admin-dormitory',
                component: () => import('@/views/admin/dormitory.vue')
            }, {
                path: 'userinfo',
                name: 'admin-userinfo',
                component: () => import('@/views/admin/userinfo.vue')
            },
            {
                path: 'patent',
                name: 'admin-patent',
                component: () => import('@/views/admin/patent.vue')
            },
            {
                path: 'interview',
                name: 'admin-interview',
                component: () => import('@/views/admin/interview.vue')
            },
            {
                path: 'frontendMenu',
                name: 'admin-frontendMenu',
                component: () => import('@/views/admin/frontendMenu.vue')
            },
            {
                path: 'articleCat',
                name: 'admin-articleCat',
                component: () => import('@/views/admin/articleCat.vue')
            },
            {
                path: 'community',
                name: 'admin-community',
                component: () => import('@/views/admin/community.vue')
            },
            {
                path: 'department',
                name: 'admin-department',
                component: () => import('@/views/admin/department.vue')
            },
            {
                path: 'config',
                name: 'admin-config',
                component: () => import('@/views/admin/config.vue')
            },
            {
                path: 'permission',
                name: 'admin-permission',
                component: () => import('@/views/admin/permission.vue')
            },
            {
                path: 'region',
                name: 'admin-permission',
                component: () => import('@/views/admin/region.vue')
            },
            {
                path: 'signup',
                name: 'admin-signup',
                component: () => import('@/views/admin/signup.vue')
            }
            
        ]
    },




    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../views/404.vue')// 懒加载  
    }

]
const router = createRouter({
    //模式
    history: createWebHashHistory(),
    routes
})
//前置路由守卫
//用户状态 user.js
router.beforeEach((to, from, next) => {
    const userStore = useUserStore();

    if (whiteList.includes(to.path)) {
        next();
    }
    else {

        if (userStore.token && userStore.token.length > 0) {
            next()
        }
        else {
            next({ name: "login" })
        }

    }


})
export default router;