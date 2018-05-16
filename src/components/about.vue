<template>
  <div id="about">
    <h1>about</h1>
    <p>{{msg}}</p>
  </div>
</template>

<script>
    export default {
        name: "about",
      data(){
          return{
            msg:"关于我自己……"
          }
      }
    }
</script>

<style scoped>
#about{
  color:blue;
}
</style>
