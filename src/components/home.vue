<template>
    <div id="home">
      <h1>首页</h1>
      <p v-html="msg"></p>
      <p v-html="msg2"></p>
    </div>
</template>

<script>
    export default {
        name: "home",
      mounted:function () {
        this.$nextTick(function () {
          // this.homeFadeIn();
        })
      },
      data(){
          return{
            msg:"欢迎来到我的自我介绍首页！<br />这是我使用vue-cli工具所搭建的工程，利用学习的vue知识所做的一个页面<br />不知道看完这些介绍的您是否会对我有兴趣？",
            msg2:"点击上面的MyIntro就可以看到我的自我介绍列表！<br />"
          }
      },
      methods:{

          // 放弃该淡入方法，改为了vue的过渡效果
/*          homeFadeIn:function () {
            var home=document.getElementById("home");
            setTimeout(function () {
              home.style.opacity=1;
              home.style.top=0;
            },1000);
          }*/


      }
    }
</script>

<style scoped lang="scss">
  #home{
    color:red;
    position:relative;

/*    放弃使用的淡入
    top:-50px;
    opacity:0;
    transition:all 0.8s;*/

  }
  p{
    margin-top:20px;
    color:#22acff;
    line-height: 2em;
    font-family: "Microsoft YaHei UI";
    font-size: 17px;
    font-weight: bold;
  }
  a:visited,a:link{
    text-decoration: none;
    color:#333;
  }
</style>
