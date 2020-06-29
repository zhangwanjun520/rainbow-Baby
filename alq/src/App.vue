<template>
  <div id="app">
    <headList></headList>
   <router-view></router-view>
   <foot></foot>
  </div>
</template>
<script>
import headList from './components/headList'
import foot from './components/foot'
export default {
  components: {headList,foot},
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
</style>
