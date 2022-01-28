<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// 将本地数据引入
import localData from './store/data.js'
import {mapActions} from 'vuex'
export default {
  name: 'App',
  methods:{
    ...mapActions(['getUserinfo','getTableData','getApplyInfo']),
    // 将接口数据(异步)或本地数据在本地vuex中引用
    getData(inLocal){
      if (!inLocal) {
        this.getUserinfo()
        this.getTableData()
        this.getApplyInfo()
      }
      else{
        this.$store.state.tableData = localData.tableData
        this.$store.state.userinfo = localData.userinfo
        this.$store.state.applyInfo = localData.applyInfo
      }
    },
    // 登陆提示
    loginTip(){
      this.mySuccess('账号密码请按 F12 查看控制台')
      console.table(this.$store.state.userinfo);
      for(let i = 0;i<this.$store.state.userinfo.length;i++){
        console.group(`账号${i+1}`);
        console.log(
        `账号: `,
        this.$store.state.userinfo[i].username,
        `  密码: `,
        this.$store.state.userinfo[i].password,
        `  权限等级: `,
        this.$store.state.userinfo[i].power
        );
        console.groupEnd();
      }
    }
  },
  mounted(){
    this.$router.push({path:"/login"})
    this.getData(this.globalVariable.inLocal)
    this.loginTip()
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  height: 942px;
  width: 1920px;
  background-color: rgb(243, 244, 246);
}
</style>
