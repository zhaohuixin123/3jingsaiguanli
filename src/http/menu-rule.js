
import instance from "./axios";

const getmenuruleByPage = (data) => {
   return instance.request({
      url: 'api/role/page', //url=baseURL+url
      method: 'post',
      data
   })
}

const deleteById = (data) => {
   return instance.request({
      url: 'api/role/delete',
      method: 'get',
      params: data
   })
}


const updateById = (data) => {
   return instance.request({
      url:'api/role/edit',
      method:'post',
      data
   })
}


const queryById = (data) => {
   return instance.request({
      url:'api/role/one',
      method:'get',
      params:data
   })
}


const addOne = (data) => {
   return instance.request({
      url:'api/role/add',
      method:'post',
      data
   })
}








//查询全部
const getall = () => {
    return instance.request({
        url:'api/role/all',
        method:'get',
     })
}


export default {
   getmenuruleByPage,
   deleteById,
   updateById,
   queryById,
   addOne,
   getall,

   
}