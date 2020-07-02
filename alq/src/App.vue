<template>
  <div id="app">
    <headList></headList>
   <router-view></router-view>
   <booking></booking>
   <foot></foot>
   <message></message>
   <rightContent></rightContent>
  </div>
</template>
<script>
import headList from './components/headList'
import booking from './components/booking'
import foot from './components/foot'
import message from './components/message'
import rightContent from './components/rightSide'
export default {
  components: {headList,booking,foot,message,rightContent},
  data() {
    return {
      left: 0
    };
  },
  methods: {

  }
};
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app{
  display: flex;
  flex-direction: column;
}
*{
  box-sizing: border-box;
}
ul,li{
  list-style: none;
}
</style>
