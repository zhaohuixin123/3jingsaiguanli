import instance from "./axios";

const adminLogin = (data) => {
    return instance.request({
        url: '', 
        method: 'post',
        data
    })
}
const userLogin = (data) => {
    //返回Promise对象
    return instance.request({
        url: 'api/mobile/elogin', 
        method: 'post',
        data,

    })
}
// 修改管理分组
const admingroupEdit = (data) => {
    return instance.request({
        url: '/api/admin-group/edit',
        method: 'post',
        data
    })
}
// 添加管理分组
const admingroupAdd = (data) => {
    return instance.request({
        url: '/api/admin-group/add',
        method: 'post',
        data
    })
}
// 通过ID查找分组
const admingroupOne = (params) => {
    return instance.request({
        url: '/api/admin-group/one',
        params
    })
}
// 通过ID删除分组
const admingroupDelete = (params) => {
    return instance.request({
        url: '/api/admin-group/delete',
        method: 'post',
        params
    })
}
const admingroupgetArticleCatsByColums = (params) => {
    return instance.request({
        url: '/api/admin-group/colums',
        method: 'get',
        params
    })
}
// 查询所有分组内容
const admingroupgall = (params) => {
    return instance.request({
        url: '/api/admin-group/all',
        method: 'get',
        params
    })
}

export {
    adminLogin,
    userLogin,
    admingroupEdit,
    admingroupAdd,
    admingroupOne,
    admingroupDelete,
    admingroupgetArticleCatsByColums,
    admingroupgall,
} 