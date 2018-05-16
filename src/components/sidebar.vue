<template>
    <div class="sidebar" v-bind:class="{'showing':showSideBar}">
      <div id="closeBtn" @click="$emit('close')"><<</div>
      <h2>介绍列表</h2>
      <div class="searchPart">
        <input type="number" v-model="passage" min="1" max="6"/>
        <button type="button" id="searchBtn" @click="searchPassage">点击这里查看第<span>{{passage}}</span>篇介绍</button>
      </div>
      <div class="allIntroList">
        <ul>
          <li v-for="intro in arr" @click="$emit('visiting',intro.id)" v-bind:class="{'active':intro.id===nowVisiting}" v-bind:key="intro.id">
            <router-link :to="{name:'myIntro',params:{ page:intro.id }}">{{intro.id}}.&nbsp;&nbsp;{{intro.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "sidebar",
      data(){
          return{
            passage:'',
          }
      },
      props:['showSideBar','arr','nowVisiting'],
      mounted:function () {
        this.$nextTick(function () {
          this.adjustNum();
        })
      },
      methods:{
        searchPassage:function () {
          // var host = location.host;
          // console.log(host+"/#/myIntro/"+ this.passage);
          if(this.passage<=0){
            this.passage=1;
            this.$emit('visiting',this.passage);
            alert("篇数不能小于1");
          }
          else if(this.passage>6){
            this.passage=6;
            this.$emit('visiting',this.passage);
            alert("篇数不能超出上限");
          }
          location.href = "/#/myIntro/"+ this.passage;
        },
        adjustNum:function () {
          if(this.passage<=0){
            this.passage=1;
          }
          else if(this.passage>6){
            this.passage=6;
          }
        }
      }
    }
</script>

<style scoped lang="scss">
  .sidebar{
    width:250px;
    min-height:100%;
    background:#aaa;
    position:fixed;
    left:-250px;
    top:0;
    transition:all 0.5s;
    z-index: 20;
    box-shadow:2px 0 2px #777;
  }
  .showing{
    left:0;
  }
  .searchPart{
    margin-top:20px;
    display: block;
    input{
      width:180px;
    }
  }
  #searchBtn{
    display: block;
    margin:20px 0 0 20px;
    width:200px;
    height:30px;
    border:2px solid #6854f4;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    background-color: #6854f4;
    color:#eee;
    outline: none;
    cursor: pointer;
    transition: all 0.6s;
    span{
      font-size: 20px;
      color:#3ae6fc;
    }
  }
  .allIntroList{
    ul{
      margin:20px 0 0 20px;
      padding:0;
      list-style-type: circle;
      li{
        width:190px;
        text-align: left;
        background:#fff;
        height:30px;
        line-height: 30px;
        margin-top:5px;
        padding-left:10px;
        font-size: 18px;
        font-weight:bold;
        list-style-type: none;
        transition:all 0.5s;
        box-shadow: 2px 2px 2px #888;
        a{
          display: block;
          width:190px;
          line-height: 30px;
          text-decoration: none;
          color:deepskyblue;
          transition:all 0.5s;
        }
        &:hover{
          background:deepskyblue;
          >a{
            color:#fff;
          }
        }
      }
      .active{
        height:50px;
        line-height: 50px;
        background:#ff694b;
        a{
          line-height:50px;
        }
      }
    }
  }
  #closeBtn{
    position:absolute;
    width:30px;
    height:20px;
    line-height: 20px;
    right:0;
    top:0;
    font-weight:bold;
    color:#fff;
    cursor:pointer;
  }
</style>
