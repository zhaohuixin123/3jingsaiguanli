//统一api管理
import instance from "./axios";
const userLogin = (data) => {
    //返回Promise对象
    return instance.request({
        url: 'api/mobile/elogin', //url=baseUrl+url,
        method: 'post',
        data,
        headers: {

        }
    })
}

//对应all
const getallAdmin = (data) => {
    return instance.request({
        url: 'api/admin/all',
        data
    })
}
//对应delete
const deleteAdmin = (params) => {
    return instance.request({
        url: 'api/admin/delete',
        params
    })
}
//对应add
const addAdmin = (data) => {
    return instance.request({
        url: 'api/admin/add',//看api文档
        method: 'post',
        data
    })
}

//对应edit
const editAdmin = (data) => {
    return instance.request({
        url: 'api/admin/edit',//改 
        method: 'post',
        data
    })
}

const getoneAdmin = (data) => {
    return instance.request({
        url: 'api/admin/one',//改

        data
    })
}
//里面的内容要改名记得一起 下面这些名字在dormitory.vue 的116行一样 记得要一起
export {
    userLogin,
    getallAdmin,
    addAdmin,
    deleteAdmin,
    editAdmin,
    getoneAdmin

} 