<template>
  <div>
    <div class="banner1"></div>
    <p class="deta">详情:</p>
    <div v-html="content" class="detail"></div>
  </div>
</template>
<script>
import { getDetailNews } from "../api/request";
export default {
  data() {
    return {
      content: ""
    };
  },
  methods: {
    getDetail() {
      let newId = this.$route.params.id;
      getDetailNews(newId).then(res => {
        this.html_decode(res.data.newsContent);
      });
    },
    // 转义标签
    html_decode(str) {
      var s = "";
      if (str.length == 0) return "";
      s = str.replace(/&amp;/g, "&");
      s = s.replace(/&lt;/g, "<");
      s = s.replace(/&gt;/g, ">");
      s = s.replace(/&nbsp;/g, " ");
      s = s.replace(/&#39;/g, "'");
      s = s.replace(/&quot;/g, '"');
      s = s.replace(/<br\/>/g, "\n");
      this.content = s;
    }
  },
  created() {
    this.getDetail();
  }
};
</script>
<style lang="scss" scoped>
.banner1 {
  width: 100%;
  height: 564px;
  background: url("../assets/news-banner1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.deta {
  width: 1200px;
  margin: 80px auto;
  font-size: 36px;
  font-weight: bold;
}
.detail {
  border: 1px dashed gainsboro;
  width: 1400px;
  margin: auto;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 80px;
  line-height: 36px;
}
</style>
