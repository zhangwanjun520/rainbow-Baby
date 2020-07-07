// 和推荐相关的接口处理
import  axios from  '../utils/axios.js'
// let base='/api'
// 获取省份
export const getProvince = params => { return axios.post('/website/province/list' ,  params ) }
//获取所有城市
export const getCity = params => { return axios.post('/website/city/list' ,  params ) }
//获取具体爱乐祺地址
export const getDetailAlq = params => { return axios.post('/website/alqCore/list' ,  params ) }



