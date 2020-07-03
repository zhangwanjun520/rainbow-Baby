<template>
  <div>
    <section>
      <!-- 第一张banner图 -->
      <div class="banner1"></div>
      <div class="titleImg"> <img src="../assets/tsbt.jpg" alt=""></div>
      <div class="banner2"></div>
      <div class="banner3"></div>
      <div class="banner4"></div>
      <div class="banner5"></div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.banner1{
 width: 100%;
  height: 564px;
  background: url("../assets/banner1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.titleImg{
  width: 450px;
  margin:80px auto;
  img{
    width: 450px;
  }
}
.banner2{
   width: 100%;
  height: 593px;
    background: url("../assets/ts2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;


}
.banner3{
   width: 100%;
  height: 593px;
  background: url("../assets/ts3.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

}
.banner4{
   width: 100%;
  height: 593px;
  background: url("../assets/ts4.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

}
.banner5{
   width: 100%;
  height: 593px;
  background: url("../assets/ts5.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

}

</style>
