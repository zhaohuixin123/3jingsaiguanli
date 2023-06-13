import { method } from "lodash-es";
import instance from "./axios";

//分页查询业务
const getpermissionByPage = (data) => {
   return instance.request({
      url: 'api/permission/page', //url=baseURL+url
      method: 'post',
      data
   })
}

//删除业务
const deleteById = (data) => {
   return instance.request({
      url: 'api/permission/delete',
      method: 'get',
      params:data
   })
}

//编辑业务
const updateById = (data) => {
   return instance.request({
      url:'api/permission/edit',
      method:'post',
      data
   })
}

//数据回显
const queryById = (data) => {
   return instance.request({
      url:'api/permission/one',
      method:'get',
      params:data
   })
}

//添加业务
const addOne = (data) => {
   return instance.request({
      url:'api/permission/add',
      method:'post',
      data
   })
}

export default {
   getpermissionByPage,
   deleteById,
   updateById,
   queryById,
   addOne
}