<template>
    <div id="navbar">
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><a href="javascript:;" @click="$emit('toggle')">MyIntro</a></li>
        <li><router-link to="/More">More</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
<!--      <div class="searchPart">
        <input type="number" v-model="passage" />
        <button type="button" id="searchBtn" @click="searchPassage">点击这里查看第<span>{{passage}}</span>篇介绍</button>
      </div>-->
    </div>
</template>

<script>
    export default {
        name: "navbar",
      data(){
          return{
            passage:''
          }
      },
      mounted:function () {
        this.$nextTick(function () {
            // this.navBarFadeIn();
        })
      },
      methods:{
/*          navBarFadeIn:function () {
            var navBar = document.getElementById("navbar");
            setTimeout(function () {
                navBar.style.opacity = 1;
                navBar.style.top = 0;
            },600);
          }*/
      }
    }
</script>

<style scoped lang="scss">
#navbar{
  width:1000px;
  height:56px;
  margin:30px auto;
  position:relative;

/*  top:-50px;
  opacity: 0;
  transition: all 0.8s;*/

  border-bottom:1px solid #ccc;
}
#navbar ul{
  display:block;
  min-width:400px;
  margin:0 200px;
  li{
    display:inline-block;
    width:80px;
    height:40px;
    line-height: 40px;
    margin-left:30px;
    border-radius:40px/20px;
    position: relative;
    &:after{
      content: '';
      width:0;
      height:0;
      border-left:16px solid transparent;
      border-right:16px solid transparent;
      border-top:20px solid #ff6600;
      position:absolute;
      bottom:-12px;
      left:24px;
      opacity:0;
    }
    &:hover{
      background:#ff6600;
      &:after{
        opacity:1;
      }
      >a{
        color:#ffff00;
      }
    }

  }
}

#navbar a,#navbar a:link,#navbar a:visited{
  text-decoration: none;
  color:#2ccab5;
  font-size:20px;
  font-weight: bold;
}

</style>
