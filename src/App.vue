<template>
  <div id="app">
    <sidebar v-bind:show-side-bar=showsidebar v-bind:arr="arr" v-on:visiting="setVisiting" v-bind:now-visiting="nowVisiting" v-on:close="showsidebar=false"></sidebar>

    <!--标题、导航栏、routerView，按顺序淡入-->
    <transition name="title-trans" v-on:before-enter="reset" v-on:after-enter="loadNavBar" enter-active-class="componentFadeIn" enter-class="beforeStart">
      <main-title v-show="showTitle"></main-title>
    </transition>
    <transition name="navbar-trans" v-on:after-enter="loadRouterView" enter-active-class="componentFadeIn" enter-class="beforeStart">
      <navbar v-show="showNavBar" v-on:toggle="toggleSideBar"></navbar>
    </transition>
    <transition name="router-trans" enter-active-class="componentFadeIn" enter-class="beforeStart">
      <router-view v-show="showRouter" v-bind:arr="arr" v-on:visiting="setVisiting"/>
    </transition>

    <div class="rollingCircle">
      <div class="circle-sm circle"></div>
      <div class="circle-md circle"></div>
      <div class="circle-lg circle"></div>
    </div>
    <clock></clock>
  </div>
</template>

<script>
  import mainTitle from './components/mainTitle'
  import navbar from './components/navbar'
  import sidebar from './components/sidebar'
  import clock from './components/clock'

export default {
  name: 'App',
  data(){
    return{
      pageNow:'',
      showsidebar:false,
      showTitle:false,
      showNavBar:false,
      showRouter:false,
      nowVisiting:'',
      arr:[{
        id:1,
        title:'爱好性格综述',
        next:true,
        prev:false,
        content:["喜欢听音乐，玩游戏，看动画。","性格较为开朗，在独自想东西的时候经常会不由自主因为自己想的东西而轻轻笑起来。从小被形容为爱笑的人。","有时会在一些奇怪的地方有奇怪的记忆力。"]
      },{
        id:2,
        title:'爱听音乐',
        next:true,
        prev:true,
        content:["在音乐方面并没有什么特别的偏好或者厌恶的种类，经常会去搜索自己在不经意间所听到的音乐，只要自己觉得好听，适合我自己，就会去找，所以我接收音乐的来源众多但非常不确定，例如。虽然大多时候不会主动去刻意搜索某种种类的音乐，因此在某种程度上是“被动”地听音乐，但也会进行一些比较范围较大的搜索，例如“欢乐的音乐”。","我所接收并会去搜索的音乐的来源大概但不限于这么几种（当我觉得挺好听的时候）：1、走在路上（或者逛街）时听到的别人店铺里放的音乐。2、在网上看视频时视频里面的音乐，这个视频不仅仅指的是音乐视频，而是任何使用了音乐的视频。因此有时在别人制作的游戏视频里，尽管有视频制作者所进行的解说的干扰，但我还是会尝试用各种音乐软件的听歌识曲功能去识别。","另外，我也经常收藏自己玩游戏的时候，那些游戏里面的背景乐，例如DNF的音乐文件夹从高中开始就常驻在了我的手机里。","出门在外的时候，若不是严肃场合，大部分时间我都会把耳机带上听音乐。在确定不影响别人的时候，轻轻哼歌或者小声唱出来的事情也是常有的。"]
      },{
        id:3,
        title:'爱玩游戏',
        next:true,
        prev:true,
        content:["虽说爱玩游戏，但是要说我是否专精于某个游戏，答案还是否定的。接触的游戏主要还是PC端的比较多，网游和单机都有接触，在steam上也买不少游戏了。若要问我是否有游戏上的偏好的话，那就是射击游戏，以及一些有趣的独立游戏。但相比于各种游戏发烧友来说，我也并没有玩过特别多的大作。只能说在我所接触的游戏之中，或许更偏好这类而已。","若是在非竞技游戏中的话，通常还是独自行动得比较多。因此我不太擅长玩各种RPG游戏里的团队PVE模式。即便是我玩的相当久的DNF，实际上我也并不算是那种会第一时间去找朋友挑战最新高难团队副本的人。","但在竞技类游戏中，我会很乐意跟队友配合，不过在不同游戏里是不同的表现，在射击游戏里，我会表现得比较莽撞，但在MOBA游戏里，我会更加乐意去配合队友，一般会去选能够为队友提供保护的角色。不会去争抢让自己成为那个打输出、收割战场的人。"]
      },
        {
          id:4,
          title:'爱看动画',
          next:true,
          prev:true,
          content:["动画方面通常来说是看日本动画，毕竟经常浏览的网站是哔哩哔哩，但总体而言，跟音乐一样，若是接触到了，觉得不错就会去看，并没有特别的喜好和厌恶。","以前会非常痴迷，但现在相对而言会比较普通，也并没有达到那种可以同时看十几部尚未完结的动画作品的发烧友级别。"]
        },
        {
          id:5,
          title:'性格开朗',
          next:true,
          prev:true,
          content:["我是一个比较爱笑的人，不过这个爱笑并不是说我笑点很低，因为我在心中思考自己的事情的时候，很容易不由自主地展示出笑容（除非我去思考很悲伤的事情，但通常我不会去思考这类事情，而且在那种情况下，有时还会苦笑）。从小就被别人说我是一个很乐观的人。不过，虽不是真的比普通人乐观很多，但我或许是一个更加容易在平时展示出来的人。"]
        },
        {
          id:6,
          title:'奇怪的记忆力',
          next:false,
          prev:true,
          content:["在小时候，我很为自己的记忆力感到自豪。小学语文课本上有一长段有关中华上下五千年历史的诗，我在一个晚上就可以背下来。而且印象中在我七八岁的时候我似乎有办法在脑海中把一集唐老鸭动画里的所有声音在脑海中过一遍的技巧。长大之后，虽然记忆力似乎没以前那么“厉害”了。但是在某些方面上我还是保留着一定“奇怪”的记忆力。例如在网上的Q群里跟人聊天之后，我经常能把一件小事情记得很清楚，然后在之后遇到相关事情的时候说出来。","在网络上的时候经常会不经意间记住一些东西，就算那些东西跟自己几乎完全不相关，我也并没有去刻意关注，但不知不觉就会记住了。在百度贴吧里曾经看到过一个日本动画的声优（配音演员）因一种名为“主动脉夹层”的病去世的消息，但我并没有怎么看那部动画所以也没有特别关注，但我却奇怪地记下了这个病的名字。有一次在Q群里聊天的时候，有一个医生群友提到了他有次下班之前来了这么一个病的急诊，当我说我之前在贴吧看到过这个病的事情并搜索出结果展示给他们看的时候。那个群友惊讶地说“为什么你会记得这种东西啊？”","为什么呢？我也不太清楚，但在一些琐事上面，我的确似乎会有着奇怪的记忆力。"]
        }]
    }
  },
  components:{
    mainTitle,
    navbar,
    sidebar,
    clock
  },
  mounted:function () {
    this.$nextTick(function () {
      this.showTitle=true;
    })
  },
  methods:{
    toggleSideBar:function () {
      this.showsidebar = !this.showsidebar;
    },
    setVisiting:function (id) {
      this.nowVisiting = id;
      console.log(this.nowVisiting);
    },
    loadNavBar:function () {
      console.log(this.showNavBar);
      this.showNavBar=true;
    },
    loadRouterView:function () {
      this.showRouter=true;
    },
    reset:function () {
      this.showNavBar=false;
      this.showRouter=false;
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/style/reset.css";

  $rollingContainer:60px;
  $circleSM:16px;
  $circleMD:30px;
  $circleLG:44px;
  $borderWidth:4px;

#app {
  width:1200px;
  min-height:900px;
  margin:0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background:-webkit-linear-gradient(white,#a9dbfa);
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  box-shadow:0 0 5px blue;
  position:relative;
}

  /*title navbar routerview 淡入效果*/
  .componentFadeIn{
    transition:all 0.5s;
  }
  .beforeStart{
    transform:translateY(-50px);
    opacity:0;
  }


  .rollingCircle{
    position:absolute;
    width: $rollingContainer;
    height: $rollingContainer;
    float:left;
    margin-top:10px;
    left:20px;
    bottom:20px;
  }
  .circle{
    position:absolute;
    top: $rollingContainer / 2;
    left: $rollingContainer / 2;
    border: $borderWidth solid transparent;
  }
  .circle-sm{
    width:$circleSM;
    height:$circleSM;
    margin-left: -($circleSM+$borderWidth * 2) / 2;
    margin-top: -($circleSM+$borderWidth * 2) / 2;
    background:transparent;
    border-radius: ($circleSM+$borderWidth * 2) / 2;
    border-left:$borderWidth solid #e9e92d;
    border-top:$borderWidth solid #e9e92d;
    border-bottom:$borderWidth solid #e9e92d;
    animation:load 3s linear infinite;
  }
  .circle-md{
    width: $circleMD;
    height:$circleMD;
    margin-left: -($circleMD+$borderWidth * 2) / 2;
    margin-top: -($circleMD+$borderWidth * 2) / 2;
    background:transparent;
    border-radius: ($circleMD+$borderWidth * 2) / 2;
    border-top:$borderWidth solid orange;
    border-right:$borderWidth solid orange;
    animation:load2 2.5s linear infinite;
  }
  .circle-lg{
    width:$circleLG;
    height:$circleLG;
    margin-left: -($circleLG+$borderWidth * 2) / 2;
    margin-top: -($circleLG+$borderWidth * 2) / 2;
    background:transparent;
    border-radius: ($circleLG+$borderWidth * 2) / 2;
    border-bottom:$borderWidth solid orange;
    border-top:$borderWidth solid orange;
    animation:load 3.5s linear infinite;
  }
  @keyframes load{
    from{ transform:rotate(0deg); }
    to{ transform: rotate(360deg); }
  }
  @keyframes load2{
    from{ transform:rotate(0deg); }
    to{ transform: rotate(-360deg); }
  }
</style>
