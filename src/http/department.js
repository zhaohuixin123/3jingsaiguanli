
import instance from "./axios";

//分页
const getdepartmentByPage = (data) => {
   return instance.request({
      url: 'api/department/page', //url=baseURL+url
      method: 'post',
      data
   })
}

//数据回传
const queryById = (data) => {
   return instance.request({
      url: 'api/department/one',
      method: 'get',
      params: data
   })
}

//删除数据
const deleteById = (data) => {
   return instance.request({
      url: 'api/department/delete',
      method: 'get',
      params: data
   })
}



//全部数据
const getall = () => {
   return instance.request({
      url: 'api/department/all',
      method: 'get',
   })
}

//编辑
const updateById = (data) => {
   return instance.request({
      url: 'api/department/edit',
      method: 'post',
      data
   })
}





//添加数据
const addOne = (data) => {
   return instance.request({
      url: 'api/department/add',
      method: 'post',
      data
   })
}




//通过学校id查询
const getdepartmentsForSelectBySchoolId = (data) => {
   return instance.request({
      url: 'api/department/getdepartmentsForSelectBySchoolId',
      method: 'get',
      params: data
   })
}

//通过部门名称查询
const getdepartmentsForSelectByDepart = (data) => {
   return instance.request({
      url: 'api/department/getdepartmentsForSelectByDepart',
      method: 'get',
      params: data
   })
}

//通过部门id查询
const getdepartmentForSelectByDepartld = (data) => {
   return instance.request({
      url: 'api/department/getdepartmentForSelectByDepartId',
      method: 'get',
      params: data
   })
}

//通过标题栏查询
const getcolums = (data) => {
   return instance.request({
      url: 'api/department/colums',
      method: 'get',
      params: data
   })
}




export default {
   getdepartmentByPage,
   deleteById,
   updateById,
   queryById,
   addOne,
   getall,
   getcolums,
   getdepartmentsForSelectByDepart,
   getdepartmentsForSelectBySchoolId,
   getdepartmentForSelectByDepartld
}