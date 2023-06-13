import instance from "./axios";

const getPage = (data) => {
   return instance.request({
      url: 'api/role/page', 
      method: 'post',
      data
   })
}
const one = (data) => {
    return instance.request({
       url:'api/role/one',
       method:'get',
       params:data
    })
 }
const remove = (data) => {
   return instance.request({
      url: 'api/role/delete',
      method: 'get',
      params: data
   })
}
const insert = (data) => {
    return instance.request({
       url:'api/role/add',
       method:'post',
       data
    })
 }
const update = (data) => {
   return instance.request({
      url:'api/role/edit',
      method:'post',
      data
   })
}

const all = () => {
    return instance.request({
       url:'api/role/all',
       method:'get',
    })
 }

 const getRolesByColums = (data) => {
    return instance.request({
       url:'api/role/colums',
       method:'get',
       params: data
    })
 }


export default {
    insert,remove,update,one,getPage,getRolesByColums,all
 }


