// 和推荐相关的接口处理
import axios from '../utils/axios.js'

let base2='http://39.105.44.41:80/webchbb'
//获取新闻。。。

// ----------------------------
// 关于我们
export const getAboutUs = params => { return axios.post(`${base2}/about/getAbout`, params) }
//荣誉资质
// http://192.168.40.123:9999/webchbb
export const getHonour = params => { return axios.post(`${base2}/ryzz/list`, params) }

// 首页banner
// http://192.168.40.123:9999/webchbb/banner/list
export const getBanner = params => { return axios.post(`${base2}/banner/list`, params) }
//获取课程体系
// http://192.168.40.123:9999/webchbb
export const getLesson = params => { return axios.post(`${base2}/classType/list`, params) }

//彩虹贝贝新闻动态
// http://192.168.40.123:9999/webchbb
export const getNews = params => { return axios.post(`${base2}/news/chbbdt`, params) }

export const getNews2 = params => { return axios.post(`${base2}/news/hdyg`, params) }
export const getNews3 = params => { return axios.post(`${base2}/news/hdhg`, params) }
// 课程体系
export const getLesson2 = params => { return axios.post(`${base2}/promotionclass/list`, params) }
// 首页新闻
// http://192.168.40.123:9999/webchbb

export const getEntrepreneurs = params => { return axios.post(`${base2}/news/syxwdt`, params) }

//获取具体新闻详情..
export const getDetailNews = params => { return axios.get(`${base2}/news/details/${params}`, params) }
//获取省份
// http://192.168.40.123:9999/webchbb
export const getProvince = params => { return axios.post(`${base2}/province/list`, params) }
//获取城市
// http://192.168.40.123:9999/webchbb
export const getCity = params => { return axios.post(`${base2}/city/list`, params) }

//获取中心
// http://192.168.40.123:9999/webchbb/shopaddress/query
export const getCenter = params => { return axios.post(`${base2}/shopaddress/query`, params) }
// 加盟我们
// http://192.168.40.123:9999/webchbb/cooperation/add/
//提交加盟申请
export const submitJoiner = params => { return axios.post(`${base2}/cooperation/add`,params ) }
//课程体系得一张图
//http://192.168.40.123:9999/webchbb/classcard/getCard
export const getImg = params => { return axios.post(`${base2}/classcard/getCard`,params ) }
// 首页logo
// http://192.168.40.123:9999/webchbb/logo/getlogo
export const getLogo = params => { return axios.post(`${base2}/logo/getlogo`,params ) }
// 加盟我们 下的介绍
// http://192.168.40.123:9999/webchbb/advantage/list
export const getIntro = params => { return axios.post(`${base2}/advantage/list`, params) }

//提交报名体验课程信息
// http://192.168.40.123:9999/webchbb/applyaudition/add
export const submitBabyInfo = params => { return axios.post(`${base2}/applyaudition/add`,params ) }
//获取所有中心
// http://192.168.40.123:9999/webchbb/shopaddress/query
export const getAllCenterActivities = params => { return axios.post(`${base2}/shopaddress/list`, params) }
//品牌介绍下得
//http://192.168.40.123:9999/webchbb/brandintroduction/list
export const getPPJS = params => { return axios.post(`${base2}/brandintroduction/list`, params) }
