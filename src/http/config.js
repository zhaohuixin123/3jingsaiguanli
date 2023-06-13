import instance from "./axios";
const configEdit=(data)=>{
    return instance.request({
        url:'api/config/edit',
        method:'post',
        data
    })
}
const configAdd=(data)=>{
    return instance.request({
        url:'api/config/add',
        method:'post',
        data
    })
}
const configDel=(params)=>{
    return instance.request({
        url:'api/config/delete',
        params
    })
}
const configOne=(params)=>{
    return instance.request({
        url:'api/config/one',
        params
    })
}
const configPage=(data)=>{
    return instance.request({
        url:'api/config/page',
        method:'post',
        data
    })
}
const configdel=(data)=>{
    return instance.request({
        url:'/api/config/del/{id}',
        method:'post',
        data
    })
}
export {
    configEdit,
    configAdd,
    configDel,
    configOne,
    configPage,
    configdel,
} 