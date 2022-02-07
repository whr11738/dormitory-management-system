<template>
  <div class="main">
    <backGround></backGround>
    <myMenu></myMenu>
    <top></top>
  </div>
</template>

<script>
import myMenu from './components/myMenu.vue'
import top from '../home/components/top.vue'
import backGround from '../home/components/backGround.vue'
export default {
  name: "home",
  components: {
    myMenu,
    top,
    backGround,
  },
};
</script>

<style scoped>
.main{
  position: absolute;
  height: 942px;
  width: 1920px;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%,-50%,0) scale(125%,125%);
}
</style>