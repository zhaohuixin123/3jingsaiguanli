
import instance from "./axios";

//分页查询业务
const getcommunityByPage = (data) => {
   return instance.request({
      url: 'api/community/page', //url=baseURL+url
      method: 'post',
      data
   })
}

//删除业务
const deleteById = (data) => {
   return instance.request({
      url: 'api/community/delete',
      method: 'get',
      params: data
   })
}

//编辑业务
const updateById = (data) => {
   return instance.request({
      url:'api/community/edit',
      method:'post',
      data
   })
}

//数据回显
const queryById = (data) => {
   return instance.request({
      url:'api/community/one',
      method:'get',
      params:data
   })
}

//添加业务
const addOne = (data) => {
   return instance.request({
      url:'api/community/add',
      method:'post',
      data
   })
}

export default {
   getcommunityByPage,
   deleteById,
   updateById,
   queryById,
   addOne
}