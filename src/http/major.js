/*
 * @Descripttion: 
 * @version: 6.6
 * @Author: 润彬彬彬彬
 * @Date: 2023-05-18 17:39:53
 * @LastEditors: Andy
 * @LastEditTime: 2023-05-19 12:16:32
 */
import instance from "./axios";

//分页查询业务
const getMajorByPage = (data) => {
   return instance.request({
      url: 'api/major/page', //url=baseURL+url
      method: 'post',
      data
   })
}

//删除业务
const deleteById = (data) => {
   return instance.request({
      url: 'api/major/delete',
      method: 'get',
      params: data
   })
}

//编辑业务
const updateById = (data) => {
   return instance.request({
      url:'api/major/edit',
      method:'post',
      data
   })
}

//数据回显
const queryById = (data) => {
   return instance.request({
      url:'api/major/one',
      method:'get',
      params:data
   })
}

//添加业务
const addOne = (data) => {
   return instance.request({
      url:'api/major/add',
      method:'post',
      data
   })
}



//根据学院id查询
const getMajorForSelectByDepartld = (data) => {
    return instance.request({
        url:'api/major/getMajorForSelectByDepartId',
        method:'get',
        params:data
     })
}

//根据学校id查询
const getMajorsForSelectBySchoolId = (data) => {
    return instance.request({
        url:'api/major/getMajorsForSelectBySchoolId',
        method:'get',
        params:data
     })
}

//根据学院名称查询
const getMajorsForSelectByDepart = (data) => {
    return instance.request({
        url:'api/major/getMajorsForSelectByDepart',
        method:'get',
        params:data
     })
}

//根据标题栏查询
const getcolums = (data) => {
    return instance.request({
        url:'api/major/colums',
        method:'get',
        params:data
     })
}

//查询全部
const getall = () => {
    return instance.request({
        url:'api/major/all',
        method:'get',
     })
}


export default {
   getMajorByPage,
   deleteById,
   updateById,
   queryById,
   addOne,
   getall,
   getcolums,
   getMajorsForSelectByDepart,
   getMajorsForSelectBySchoolId,
   getMajorForSelectByDepartld
}