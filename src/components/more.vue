<template>
<div id="more">
  <p v-html="msg"></p>
  <transition name="btnFade" mode="out-in" enter-active-class="target-fade-in" leave-active-class="target-fade-out" enter-class="btnHide" leave-to-class="btnHide">
    <button v-if="!(showlink&&showintro)" @click="showlink=true" key="show">显示链接</button>
    <button v-else @click="showlink=false" key="hide">隐藏链接(不过这功能似乎没什么必要？)</button>
  </transition>

  <transition name="mylink" v-on:after-enter="linkon" v-on:after-leave="linkon" enter-active-class="target-fade-in" leave-active-class="target-fade-out" enter-class="hide" leave-to-class="hide">
    <p v-show="showlink">https://github.com/whatwherewho/dnfweb</p>
  </transition>
  <transition name="linkintro" enter-active-class="target-fade-in" leave-active-class="target-fade-out" enter-class="hide" leave-to-class="hide">
    <p v-show="showintro">这个链接里的工程使用nodejs+express+mysql完成</p>
  </transition>
</div>
</template>

<script>
    export default {
        name: "more",
      data(){
          return{
            showlink:false,
            showintro:false,
            msg:"这是我用我所学的一部分知识所搭建的一个简单介绍页面。但我还掌握了其他的知识。<br />若您还想看更多的话，可以<a href='https://github.com/whatwherewho/dnfweb'>访问查看</a>我上传到github的其他工程。<br />"
          }
      },
      methods:{
          linkon:function () {
            this.showintro = !this.showintro;
          }
      }
    }
</script>

<style scoped lang="scss">
#more p{
  margin-top:20px;
  color:#22acff;
  line-height: 2em;
  font-family: 微软雅黑;
  font-weight: bold;
}
  .target-fade-in{
    transition:all 0.5s;
  }
  .target-fade-out{
    transition:all 0.5s;
  }
  .hide{
    transform:translateX(20px);
    opacity:0;
  }
  .btnHide{
    opacity:0;
  }

</style>
