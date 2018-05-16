<template>
  <div id="about">
    <h1>关于该页面</h1>
    <p v-html="msg"></p>
  </div>
</template>

<script>
    export default {
        name: "about",
      data(){
          return{
            msg:"关于该介绍自己的页面，有一部分知识的来源是基于一些网站上的教程，有一部分则靠着对vuejs官方文档的阅读，参考官方文档的示例做出来的。<br />目前也还在继续学习中……"
          }
      }
    }
</script>

<style scoped lang="scss">
#about{
  color:blue;
  p{
    line-height: 2em;
    color:#22acff;
    font-size: 17px;
    font-weight: bold;
  }
}
</style>
