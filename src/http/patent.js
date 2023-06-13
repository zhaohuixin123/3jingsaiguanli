import instance from "./axios";

const getPage = (data) => {
   return instance.request({
      url: 'api/patent/page', 
      method: 'post',
      data
   })
}

const add = (data) => {
    return instance.request({
       url:'api/patent/add',
       method:'post',
       data
    })
 }

const remove = (data) => {
   return instance.request({
      url: 'api/patent/delete',
      method: 'get',
      params: data
   })
}

const update = (data) => {
   return instance.request({
      url:'api/patent/edit',
      method:'post',
      data
   })
}

const select = (data) => {
   return instance.request({
      url:'api/patent/one',
      method:'get',
      params:data
   })
}

export default {
    add,remove,update,select,getPage
 }


