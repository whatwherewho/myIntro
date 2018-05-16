<template>
    <div>
      <canvas id="clockCanvas" width="150" height="50"></canvas>
    </div>
</template>

<script>
    export default {
        name: "clock"
    }
    window.onload=function () {
      var canvas = document.getElementById("clockCanvas");
      var ctx = canvas.getContext('2d');
      var date;
      var time;
      setInterval(function () {
        date = new Date();
        time = date.toLocaleTimeString();
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "orange";
        ctx.font = "italic bold 20px Aria";
        ctx.fillText(time,20,40,100);
      },200);

    };

</script>

<style scoped>
#clockCanvas{
  /*box-shadow: 1px 1px 1px #ddd;*/
  position:absolute;
  left:60px;
  bottom:20px;
}
</style>
