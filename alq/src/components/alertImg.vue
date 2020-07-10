<template >
  <div class="alertImg" v-if="flag">
    <a
      href="https://qiyukf.com/client?k=412a8b55538f5f0c7dd43cfd575a9e9c&u=&d=4vs4ukww30pndv7nlfj2&uuid=mfle8eekpy0nm0s0qfps&gid=0&sid=0&qtype=0&welcomeTemplateId=0&dvctimer=0&robotShuntSwitch=0&hc=0&robotId=0&pageId=1594259539293SDFLs9zIRr&t=%25E5%2585%25A8%25E5%259B%25BD%25E4%25B8%25AD%25E5%25BF%2583%25E6%25B4%25BB%25E5%258A%25A8%2520-%2520%25E7%2588%25B1%25E4%25B9%2590%25E7%25A5%25BA%25E6%2589%2598%25E8%2582%25B2%25E6%2597%25A9%25E6%2595%2599%25E4%25B8%25AD%25E5%25BF%2583_%25E5%25B9%25BC%25E5%2584%25BF%25E6%2589%2598%25E8%2582%25B2_%25E4%25BA%25B2%25E5%25AD%2590%25E6%2597%25A9%25E6%2595%2599_%25E5%259B%25BD%25E9%2599%2585%25E6%2597%25A9%25E6%2595%2599%25E5%2593%2581%25E7%2589%258C%25E5%258A%25A0%25E7%259B%259F"
    >
      <img src="../assets/alert.png" alt />
    </a>

    <div class="btn" @click="close">
      <el-button icon="el-icon-close" circle size="small"></el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: true
    };
  },
  methods: {
    close() {
      this.flag = false;
     setTimeout(() => {
        this.flag = true;
      }, 6000);

    }
  }
};
</script>
<style lang="scss" scoped>
.alertImg {
  width: 500px;
  position: fixed;

  top: 300px;
  left: 50%;
  margin-left: -250px;
  z-index: 1000;
  img {
    width: 500px;
  }
}
.btn {
  position: absolute;
  top: -15px;
  right: -10px;
}
</style>
