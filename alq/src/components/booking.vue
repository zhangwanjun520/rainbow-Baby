<template>
      <!-- 免费体验课，预约体验 -->
   <div class="hokids-appointment">
        <div class="hokids-appointment-content">
            <p>营业时间 &nbsp;&nbsp; 9：00 - 18：00</p>

            <div @click="goBooking">
                <a  >立即预约</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    goBooking(){
      this.$router.push('/booking')
    }
  }

}
</script>
<style lang="scss" scope>
.hokids-appointment {
    width: 100%;
    height: 150px;
  background: url("../assets/appointment.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
.hokids-appointment-content {
    width: 900px;
    margin: 0 auto;
    padding: 30px 40px 0 0;
    text-align: right;
    color: #f76930;
    font-size: 18px;
    font-weight: bold;
    }
    .hokids-appointment a {
      text-decoration: none;
    display: inline-block;
    height: 40px;
    width: 100px;
    background: #f76930;
    line-height: 40px;
    color: #fff;
    border-radius: 8px;
    text-align: center;
    font-size: 14px;
}
</style>
