<template>
  <footer>
    <div class="footer-content">
      <div class="name">
        姓名：
        <input type="text" name id />
      </div>
      <div class="iphone">
        联系电话：
        <input type="text" name id />
      </div>
      <div class="city">
        意向城市：
        <input type="text" name id />
      </div>
      <div class="submit">提交</div>
    </div>
  </footer>
</template>
<script>
export default {};
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
     div{
       input{
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
