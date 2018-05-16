<template>
    <div class="passageMain">
      <h1>{{arr[introID].title}}</h1>
      <h3>这是我的第{{arr[introID].id}}个介绍</h3>
      <p v-for="p in arr[introID].content" v-html="p"></p>
      <div class="prev-next-btn clearfix">
        <button v-if="arr[introID].prev" class="prev" @click="getPrev">上一篇</button>
        <button v-if="arr[introID].next" class="next" @click="getNext">下一篇</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "my-intro",
      props:['arr'],
      data(){
         return {
           // introID:0,
         }
      },
      mounted:function () {
        this.$nextTick(function () {
          // this.introFadeIn();
        })
      },
      computed:{
          introID(){
            return this.$route.params.page-1;
          }
      },
      methods:{
          getPrev:function () {
            var pagePrev = this.introID;
            location.href="/#/myIntro/"+ pagePrev;
            this.$emit('visiting',pagePrev);
          },
          getNext:function () {
            var pageNext = this.introID+2;
            location.href="/#/myIntro/"+pageNext;
            this.$emit('visiting',pageNext);
          }
/*         introFadeIn:function () {
           var intro = document.getElementsByClassName("passageMain")[0];
           setTimeout(function () {
             intro.style.opacity=1;
             intro.style.top=0;
           })
         }*/
      },
        watch:{
          '$route'(to,from){
            // alert(to.params.page -1);
          }
      }
    }
</script>

<style scoped lang="scss">

  @import "../assets/style/reset.css";

.passageMain{
  width:1000px;
  margin:0 auto;
  margin-top:50px;
  position:relative;
/*  top:-50px;
  opacity:0;
  transition:all 0.8s;*/
  p{
    text-align: left;
    font-size: 18px;
    text-indent: 2em;
    line-height: 1.5em;
    font-family: "楷体",'Avenir', Helvetica, Arial, sans-serif;
  }
}
.prev-next-btn{
  margin-top:50px;
  .prev{
    float:left;
  }
  .next{
    float:right;
  }
}
</style>
