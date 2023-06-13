//统一api管理
import instance from "./axios";
// data json
const userLogin=(data)=>{
    //返回Promise对象
   return instance.request({
        url:'api/mobile/elogin', //fullpath=baseURL+url  http://api.jqrjq.cn/api/mobile/elogin
        method:'post',
        data,
      
    })
}
const adminLogin=(data)=>{
   return instance.request({
    url:'', //url=baseURL+url
        method:'post',
        data
   })
}
const all=(data)=>{
   return instance.request({
    url:'api/competition/all',
    method:'get',
    data
   })
}
const del=(params)=>{
    return instance.request({
        url:'api/competition/delete',
        params
    })
}
const add=(data)=>{
    return instance.request({
        url:'api/competition/add',
        method:'post',
        data
    })
}
const edit=(data)=>{
    return instance.request({
        url:'api/competition/edit',
        method:'post',
        data
    })
}




export {
    userLogin,
    adminLogin,
    all,
    del,
    add,
    edit
} 