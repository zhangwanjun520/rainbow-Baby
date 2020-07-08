<template>
  <div class="right">
    <ul>
      <li>
        <img src="../assets/rlogo.png" />
      </li>
      <li>
        <a href="https://qiyukf.com/client?k=412a8b55538f5f0c7dd43cfd575a9e9c&u=&d=4vs4ukww30pndv7nlfj2&uuid=mfle8eekpy0nm0s0qfps&gid=0&sid=0&qtype=0&welcomeTemplateId=0&dvctimer=0&robotShuntSwitch=0&hc=0&robotId=0&pageId=1594174806686GEiGI61E1c&t=%25E7%2588%25B1%25E4%25B9%2590%25E7%25A5%25BA%25E6%2589%2598%25E8%2582%25B2%25E6%2597%25A9%25E6%2595%2599%25E4%25B8%25AD%25E5%25BF%2583_%25E5%25B9%25BC%25E5%2584%25BF%25E6%2589%2598%25E8%2582%25B2_%25E4%25BA%25B2%25E5%25AD%2590%25E6%2597%25A9%25E6%2595%2599_%25E5%259B%25BD%25E9%2599%2585%25E6%2597%25A9%25E6%2595%2599%25E5%2593%2581%25E7%2589%258C%25E5%258A%25A0%25E7%259B%259F">
              <el-tooltip class="item" content="在线咨询" placement="left-start">
          <img src="../assets/rlogo2.png" />
        </el-tooltip>
        </a>

      </li>
      <li>
        <el-tooltip class="item" content="4001000161" placement="left-start">

            <img src="../assets/rlogo3.png" />

        </el-tooltip>
      </li>
      <li>
        <el-tooltip class="item" content="预约试听" placement="left-start">
          <img src="../assets/rlogo4.png" @click="go" />
        </el-tooltip>
      </li>
      <li>
        <el-tooltip class="item" content="加盟合作" placement="left-start">
            <img src="../assets/rlogo5.png" @click="jump"/>
        </el-tooltip>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods:{
      go(){
      this.$router.push("/booking")
    },
    jump(){
      this.$router.push("/joinUs")
    }
  }
};
</script>
<style lang="scss" scoped>
.right {
  position: fixed;
  right: 0;
  top: 40%;
  z-index: 1000;
  img {
    width: 60px;
  }
}
</style>
<style lang="">

</style>
