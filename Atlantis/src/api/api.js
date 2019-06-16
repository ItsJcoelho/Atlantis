import axios from 'axios'

function post(url,data) {
    return axios({
        method: 'post',
        url: url,
        data: data,
    });
}
function get(url) {
    return axios({
            method: 'get',
            url: url,
            responseType: 'json'
    })
    
}
async function put(url,data) {
    axios({
        method: 'put',
        url: url,
        data: data
    });
}
async function remove(url) {
    axios({
        method: 'delete',
        url: url,
        responseType: 'json'
    })
}
export default {post,get,put,remove}