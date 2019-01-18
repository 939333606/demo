import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'

// create an axios instance
const service = axios.create({
    // baseURL: process.env.BASE_API, // api的base_url
    timeout: 50000,// request timeout
    params: {

    }
})

// request interceptor
service.interceptors.request.use(config => {
    // config.headers['Content-Type']='multipart/form-data';
    // store.commit('SET_LOADING',true)
    // console.log(config)
    if (config.hasOwnProperty('data') && config.method === 'post') {
        if (config.data.hasOwnProperty('formData')) {
            config.data = config.data.formData
        } else {
            config.data = qs.stringify(config.data);
        }
    }
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
    response => {
        const res = response.data;
        return Promise.resolve(response.data);
        // if (res.errno !== 0) {
        //     // console.log("reject",response.data)
        //     return Promise.reject(res.errmsg);
        // } else {
        //     return Promise.resolve(response);
        // }
    },
    error => {
        // store.commit('SET_LOADING',false)
        console.log(error)
        return Promise.reject(error)
    })

export default service