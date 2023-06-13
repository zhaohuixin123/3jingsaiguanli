import instance from "./axios";

//添加
const addOne = (data) => {
   return instance.request({
      url:'api/course/add',
      method:'post',
      data
   })
}

//删除
const deleteById = (data) => {
   return instance.request({
      url: 'api/course/delete',
      method: 'get',
      params: data
   })
}

//数据回显
const queryById = (data) => {
   return instance.request({
      url:'api/course/one',
      method:'get',
      params:data
   })
}

//分页查询
const getcourseByPage = (data) => {
   return instance.request({
      url: 'api/course/page', //url=baseURL+url
      method: 'post',
      data
   })
}

//编辑
const updateById = (data) => {
   return instance.request({
      url:'api/course/edit',
      method:'post',
      data
   })
}



export default {
   getcourseByPage,
   deleteById,
   updateById,
   queryById,
   addOne
}