import instance from "./axios";

//分页查询业
const getBuildingsPage= (data) => {
   return instance.request({
      url: 'api/building/page', //url=baseURL+url
      method: 'post',
      data
   })
}

//删除
const deleteById = (data) => {
   return instance.request({
      url: 'api/building/delete',
      method: 'get',
      params: data
   })
}

//编辑
const updateById = (data) => {
   return instance.request({
      url:'api/building/edit',
      method:'post',
      data
   })
}

//数据
const queryById = (data) => {
   return instance.request({
      url:'api/building/one',
      method:'get',
      params:data
   })
}

//添加
const addOne = (data) => {
   return instance.request({
      url:'api/building/add',
      method:'post',
      data
   })
}

//根据学校id查询
const getBuildingBySchoolId = (data) => {
    return instance.request({
        url:'api/building/getBuildingBySchoolId',
        method:'get',
        params:data
     })
}


const getBuildingsBySchoolIdPage = (data) => {
    return instance.request({
        url:'api/building/getBuildingsBySchoolIdPage',
        method:'post',
        params:data
     })
}

const getcolums = (data) => {
    return instance.request({
        url:'api/building/colums',
        method:'get',
        params:data
     })
}

//查询全部
const getall = () => {
    return instance.request({
        url:'api/building/all',
        method:'get',
     })
}
const getone = (data) => {
    return instance.request({
        url:'api/building/one',
        method:'get',
        params:data
     })
}


export default {
 getBuildingsPage,
   deleteById,
   updateById,
   queryById,
   addOne,
   getall,
   getcolums,
   getone,
   getBuildingsBySchoolIdPage,
   getBuildingBySchoolId 
}