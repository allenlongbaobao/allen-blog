<template>
  <div class="foot-container">
    <div class="foot">
      <p>{{msg}}</p>
    </div>
  </div>
</template>


<script>
  export default{
    data () {
      return {
        msg: 'Copyright (c) 2018 All Rights Reserved. 浙ICP备18024661号-1'
      }
    }
  }
</script>

<style>
.foot-container {
  height: 55px;
}
.foot {
  width: 100%;
  height: 55px;
  background-color: black;
  bottom: 0px;
  position: fixed;
  display: block;
  text-align: center;
}
.foot>p {
  color: #FFF;
  margin-left: 0px;
  margin-right: 0px;
} 
</style>
