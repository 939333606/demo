import req from '../utils/request'
import Vue from 'vue'

// 获取资源详情
export function get(data){
    return req({
        url:"http://localhost:1015/getJobs",
        method:"POST",
        data
    })
}

// 获取瓜子二手車車輛名字以及車主名字和首付钱数
export function getGz(data){
    return req({
        url:"http://localhost:1015/getGz",
        method:"POST",
        data
    })
}