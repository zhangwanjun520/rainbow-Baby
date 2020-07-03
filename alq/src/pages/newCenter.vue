<template>
  <div class="news">
    <div class="banner1"></div>
     <section class="hokids-section">
      <div></div>
      <div></div>
      <div></div>
    </section>

  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.banner1{
 width: 100%;
  height: 564px;
  background: url("../assets/news-banner1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hokids-section div:nth-child(1) {
  background: #8dc63f;
  flex: 1;
}
.hokids-section div:nth-child(2) {
  background: #ffb943;
  flex: 1;
}
.hokids-section div:nth-child(3) {
  background: #f07855;
  flex: 1;
}
</style>
