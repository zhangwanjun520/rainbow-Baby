<template>
  <div class="right">
    <ul>
      <li>
          <img src="http://www.52alq.com/statics/images/kflogo.png" />
      </li>
       <li>
        <el-tooltip class="item"  content="在线咨询" placement="left-start">
         <img src="http://www.52alq.com/statics/images/kf1.png">
        </el-tooltip>
      </li>
      <li>
        <img src="http://www.52alq.com/statics/images/kf2.png">
      </li>
      <li>
        <el-tooltip class="item"  content="预约试听" placement="left-start">
        <router-link to='/booking' tag='span'>
           <img src="http://www.52alq.com/statics/images/kf3.png">
          </router-link>
        </el-tooltip>
      </li>
      <li>
        <el-tooltip class="item"  content="加盟合作" placement="left-start">
          <router-link to='/joinUs' tag='span'>
           <img src="http://www.52alq.com/statics/images/kf4.png">
          </router-link>

        </el-tooltip>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
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
  .item {
      margin: 4px;
      background-color: white;
    }
</style>
