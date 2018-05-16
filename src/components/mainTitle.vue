<template>
    <div class="mainTitle">
      <h1>{{mainTitle}}</h1>
    </div>
</template>

<script>
    export default {
        name: "main-title",
      data(){
          return{
            mainTitle:"欢迎来到这里！我会在此介绍我自己。"
          }
      },
      mounted:function () {
        this.$nextTick(function () {
            // this.titleFadeIn();
        })
      },
      methods:{

/*          titleFadeIn:function () {
            var title = document.getElementsByClassName("mainTitle")[0];
            setTimeout(function () {
              title.style.opacity = 1;
              title.style.top = 0;
            },300);
          }*/

      }
    }
</script>

<style scoped lang="scss">
  .mainTitle{
    width:1000px;
    margin:0 auto;
    min-width: 560px;
    text-align: center;
    height:50px;
    line-height: 50px;
    color:#fff;
    background:#5788ef;
    position: relative;

/*    放弃使用的淡入
    top:-50px;
    opacity: 0;
    -webkit-transition: all 0.8s;
    -moz-transition: all 0.8s;
    -ms-transition: all 0.8s;
    -o-transition: all 0.8s;
    transition: all 0.8s;*/
  }
  .mainTitle:before{
    content: '';
    display: block;
    position: absolute;
    left:-50px;
    top:0;
    width:0;
    height:0;
    border-left: 50px solid transparent;
    border-bottom: 50px solid #5788ef;
  }
  .mainTitle:after{
    content: '';
    display: block;
    position: absolute;
    right:-50px;
    top:0;
    width:0;
    height:0;
    border-right: 50px solid transparent;
    border-top: 50px solid #5788ef;
  }
</style>
