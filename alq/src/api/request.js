// 和推荐相关的接口处理
import  axios from  '../utils/axios.js'
let base='http://52alq.com:9999'
//底部留言
export const submitMsg = params => { return axios.post(`${base}/website/leavingmessage/add`,  params ) }
// 获取省份
export const getProvince = params => { return axios.post(`${base}/website/province/list`,  params ) }
//获取所有城市
export const getCity = params => { return axios.post(`${base}/website/city/list`,  params ) }
//获取具体爱乐祺地址
export const getDetailAlq = params => { return axios.post(`${base}/website/alqCore/query`,  params ) }
//提交报名体验课程信息
export const submitBabyInfo = params => { return axios.post(`${base}/website/vipExperience/add`,params ) }
//提交加盟者表单信息
export const submitJoinerInfo = params => { return axios.post(`${base}/website/partnerRecruit/add`,params ) }
//获取新闻中心下得创业者说
export const getEntrepreneurs = params => { return axios.post(`${base}/website/news/qyzs`,params ) }
//获取全国所有中心活动
export const getAllCenterActivities = params => { return axios.post(`${base}/website/news/qgzxhd`,params ) }
//获取具体新闻详情
export const getDetailNews = params => { return axios.get(`${base}/website/news/details/${params}`,params ) }










