import instance from "./axios";
const getSchoolsByRegion = (data) => {
    return instance.request({
       url:'api/school/search',
       method:'post',
       data
    })
 }
 export default {
    getSchoolsByRegion
 }