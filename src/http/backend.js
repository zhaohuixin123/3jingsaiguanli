import { method } from "lodash-es";
import instance from "./axios";

const add = (data) => {
   return instance.request({
      url: 'api/backendApi/add',
      method: 'post',
      data
   })
}

const all = () => {
   return instance.request({
      url: 'api/backendApi/all',
      method: 'get'
   })
}

const delete1 = (data) => {
   return instance.request({
      url: 'api/backendApi/delete',
      method: 'get',
      params: data
   })
}

const edit = (data) => {
   return instance.request({
      url:'api/backendApi/edit',
      method:'post',
      data
   })
}

const one = (data) => {
   return instance.request({
      url:'api/backendApi/one',
      method:'get',
      params:data
   })
}


const getBackendApisByPageAndColums = (data) => {
   return instance.request({
      url:'/api/backendApi/page',
      method:'get',
      params:data
   })
}

export default {
   add,
   one,
   all,
   delete1,
   edit,
   getBackendApisByPageAndColums
}