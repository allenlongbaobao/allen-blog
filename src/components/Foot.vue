<template>
  <div class="foot">
    <p>{{msg}}</p>

  </div>
</template>


<script>
  export default{
    data () {
      return {
        msg: 'Copyright (c) 2017 Copyright Holder All Rights Reserved.'
      }
    }
  }
</script>

<style>
.foot {
  width: 100%;
  height: 50px;
  background-color: black;
  position: fixed;
  bottom: 0px;
}
</style>
