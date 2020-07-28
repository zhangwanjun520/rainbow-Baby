// 和推荐相关的接口处理
import axios from '../utils/axios.js'
let base = 'http://52chbaby.com'

//获取新闻。。。
export const getEntrepreneurs = params => { return axios.get(`${base}/api/nslist/1/3`, params) }
//获取全国所有中心活动
export const getAllCenterActivities = params => { return axios.post(`${base}/website/news/qgzxhd`, params) }
//获取具体新闻详情..
export const getDetailNews = params => { return axios.get(`${base}/api//ns/view/${params}`, params) }
// 获取banner。。
export const getBanner = params => { return axios.get(`${base}/api//fblist/idx/1/4`, params) }
// 获取师资专家团队。。
export const getTeacher = params => { return axios.get(`${base}/api//text/article/list?${params}`, params) }
//获取荣誉资质。。
export const getHonour = params => { return axios.get(`${base}/api//honor/certificate/list?${params}`, params) }

export const getLesson = params => { return axios.get(`${base}/api//picture/article/list?${params}`, params) }

// 奇幻民族之旅。。
export const getTravel = params => { return axios.get(`${base}/api//age/course/list?${params}`, params) }

//彩虹贝贝新闻动态
export const getNews = params => { return axios.get(`${base}/api//nsmorelist/1/9?${params}`, params) }

//获取省份
export const getProvince = params => { return axios.get(`${base}/api//store/prolist`, params) }
//获取城市

export const getCity = params => { return axios.get(`${base}/api//store/citylist?${params}`, params) }

//获取中心

export const getCenter = params => { return axios.get(`${base}/api//store/addressList?${params}`, params) }


//提交报名体验课程信息
export const submitBabyInfo = params => { return axios.post(`${base}/api//fapply`,params ) }
// 加盟我们 下的介绍
export const getIntro = params => { return axios.get(`${base}/api//picture/article/list?${params}`, params) }
//提交加盟申请
export const submitJoiner = params => { return axios.post(`${base}/api//cooperation/add`,params ) }

//获取全国城市中心








