import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// 引入接口
import request from'@/api/request'

//响应组件中的动作
const actions={
  // 从接口获得登录账号密码数据
  async  getUserinfo(context){
    let thePromise = await request.getUserinfo()
    context.commit('GETUSERINFO',thePromise.data)
  },
  async  getTableData(context){
    let thePromise = await request.getTableData()
    context.commit('GETTABLEDATA',thePromise.data)
  },
  async  getApplyInfo(context){
    let thePromise = await request.getApplyInfo()
    context.commit('GETAPPLYINFO',thePromise.data)
  },
}
//操作数据
const mutations={
  //将接口得到的登录账号密码数据在本地引用
  GETUSERINFO(state,value){
    state.userinfo = value
  },
  //将接口得到的学生入住信息数据在本地引用
  GETTABLEDATA(state,value){
    state.tableData = value
  },
  //将接口得到的入住登记申请数据在本地引用
  GETAPPLYINFO(state,value){
    state.applyInfo = value
  },
}
//存储数据
const state={
  now:'',// 现在页面位置
  tableData: [],// 学生入住信息
  userinfo:[],// 登录账号密码
  applyInfo:[],// 入住登记申请
}
//加工state的数据
const getters={
}
//创建storm
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})