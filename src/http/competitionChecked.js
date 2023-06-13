//统一api管理
import instance from "./axios";
// data json
const userLogin=(data)=>{
    //返回Promise对象
   return instance.request({
        url:'api/mobile/elogin', //fullpath=baseURL+url  http://api.jqrjq.cn/api/mobile/elogin
        method:'post',
        data,
      
    })
}
const adminLogin=(data)=>{
   return instance.request({
    url:'', //url=baseURL+url
        method:'post',
        data
   })
}
const all=(data)=>{
   return instance.request({
    url:'api/competitionCreate/page/user',
    method:'post',
    data
   })
}
const del=(params)=>{
    return instance.request({
        url:'api/competitionSignup/getStudentSignupCompetitionVos',
        params
    })
}


const getstudent=(params)=>{
    return instance.request({
        url:'api/student/one',
        params
    })
}

const add=(data)=>{
    return instance.request({
        url:'api/competitionCreate/add',
        method:'post',
        data
    })
}

const update=(data)=>{
    return instance.request({
        url:'api/competitionSignup/updateBatchCheckSignupCompetitionDTO',
        method:'post',
        data
    })
}

const edit=(data)=>{
    return instance.request({
        url:'api/competitionCreate/edit',
        method:'post',
        data
    })
}


const getOne=(params)=>{
    return instance.request({
        url:'api/competitionCreate/getCompetitionCreateAndSignupedCountVoByUserId',
        params
    })
}




export {
    userLogin,
    adminLogin,
    all,
    del,
    getstudent,
    update,
    add,
    edit,
    getOne
} 