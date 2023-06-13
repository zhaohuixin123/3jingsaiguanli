import request from "./axios";

export function getList(data) {
	return request({
		url: `/api/region/pid?pid=${data}`,
		method: 'get',
	});
}

export function getSchoolsByRegion  (data) {
    return request ({
       url:'api/school/search',
       method:'post',
       data
    })
 }
