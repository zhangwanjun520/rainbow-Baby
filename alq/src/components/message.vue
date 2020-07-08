<template>
  <footer>
    <div class="footer-content">
      <div class="name">
        姓名：
        <input type="text" v-model="name" name id />
      </div>
      <div class="iphone">
        联系电话：
        <input type="text" v-model="phoneNumber" name id />
      </div>
      <div class="city">
        意向城市：
        <input type="text" v-model="city" name id />
      </div>
      <div class="submit" @click="submit">提交</div>
    </div>
  </footer>
</template>
<script>
import { submitMsg } from "../api/request";
export default {
  data() {
    return {
      name: "",
      city: "",
      phoneNumber: ""
    };
  },
  methods: {
    submit() {
      let info = {
        name: this.name,
        phone: this.phoneNumber,
        city: this.city
      };
      if (this.name == "" && this.phoneNumber == "" && this.city == "") {
        this.$message("请填写信息");
      } else {
        submitMsg(info).then(res => {
          if (res.msg == "操作成功") {
            this.$message({
              showClose: true,
              message: "您已提交成功",
              type: "success",
              customClass: "mess"
            });
          }
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #565656;
  height: 80px;
  line-height: 50px;
  font-size: 18px;
  color: white;
  z-index: 1000;
  .footer-content {
    width: 1200px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      input {
        width: 200px;
        border: none;
        height: 35px;
      }
    }
  }

  .submit {
    width: 100px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: #ffaa18;
  }
}
</style>
<style lang="scss">
.el-message__content{
   font-size: 20px;
}
</style>
