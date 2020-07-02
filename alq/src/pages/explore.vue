<template>
<div>
 <div
    v-for="(item,index) in list"
    :key="index"
    v-html="item.info "
  >{{item.info}}</div>
</div>

</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          info:''

        }
      ]
    };
  }
};
</script>
