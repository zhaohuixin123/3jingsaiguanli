
import instance from "./axios";

const getUserinfosPage = (data) => {
   return instance.request({
      url: 'api/userinfo/page', //url=baseURL+url
      method: 'post',
      data
   })
}


const deleteById = (data) => {
   return instance.request({
      url: 'api/userinfo/delete',
      method: 'get',
      params: data
   })
}

const updateById = (data) => {
   return instance.request({
      url:'api/userRole/add',
      method:'post',
      data
   })
}

const edit = (data) => {
   return instance.request({
      url:'api/userinfo/edit',
      method:'post',
      data
   })
}

const queryById = (params) => {
   return instance.request({
      url:'api/userinfo/one',
      method:'get',
      params
   })
}


const addOne = (data) => {
   return instance.request({
      url:'api/userinfo/register',
      method:'post',
      data
   })
}
const login = (data) => {
   return instance.request({
      url:'api/userinfo/login',
      method:'post',
      data
   })
}

const register = (data) => {
   return instance.request({
      url:'api/userinfo/register',
      method:'post',
      data
   })
}

const changePassword = (data) => {
   return instance.request({
      url:'api/userinfo/changpassword',
      method:'post',
      data
   })
}

const getAssitentFoSelectByUserTypeBySchoolId = (data) => {
   return instance.request({
       url:'api/userRole/getRoleIdsByUserId',
       method:'get',
       params:data
    })
}

const getCommunitiesByColums = (data) => {
   return instance.request({
       url:'api/userinfo/colums',
       method:'get',
       params:data
    })
}

const getBindStudentVosPage = (data) => {
   return instance.request({
       url:'api/userinfo/page/getBindStudentVos',
       method:'post',
       params:data
    })
}

const getBindTeacherVosPage = (data) => {
   return instance.request({
       url:'api/userinfo/page/getBindTeacherVos',
       method:'post',
       params:data
    })
}
const getSelectByOne = (data) => {
   return instance.request({
       url:'api/userinfo/one',
       method:'get',
       params:data
    })
}





export default {
   getUserinfosPage,
   deleteById,
   updateById,
   queryById,
   addOne,
   getBindTeacherVosPage,
   getBindStudentVosPage,
   getCommunitiesByColums,
   getAssitentFoSelectByUserTypeBySchoolId,
   changePassword,
   register,
   login,
   edit,
   getSelectByOne

   
}