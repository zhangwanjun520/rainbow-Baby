<template>
  <div class="right">
    <ul>
      <li  @click="go">
        <img src="../assets/rain/erji.png" />
        <div>预约试听</div>
      </li>
      <li  @click="jump">
        <img src="../assets/rain/woshou.png" />
        <div>加盟合作</div>
      </li>
      <li>
        <el-tooltip class="item" content="400-6677-870" placement="left-start">
          <span style="display:inline-block;width:55px">
            <img src="../assets/rain/dianhua.png" />
          </span>
        </el-tooltip>
        <div>联系我们</div>
      </li>
      <li>
        <el-tooltip class="item" content placement="left-end">
          <div slot="content">
            <img src="../assets/rain/erweima.png" style="width:120px" />
          </div>
          <span style="display:inline-block;width:55px">
            <img src="../assets/rain/dianhua.png" />
          </span>
        </el-tooltip>
        <div>关注微信</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    go() {
      this.$router.push("/booking");
    },
    jump() {
      this.$router.push("/joinUs");
    },
  },
};
</script>
<style lang="scss" scoped>
.right {
  position: fixed;
  right: 0;
  top: 40%;
  z-index: 1000;
  ul {
    li {
      width: 55px;
      height: 55px;
      // background-color: #31bb7d;
      background-color: #31bb7d;

      font-size: 10px;
      text-align: center;
      margin-bottom: 10px;
      border-radius: 3px;
      color: white;
      cursor: pointer;

      img {
        width: 30px;
        padding-top: 5px;
      }
    }
  }
}
</style>
<style lang="">
</style>
