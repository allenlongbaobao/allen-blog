<template>
  <div>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'this is an article page'
    }
  },
  components: {

  }
}
</script>

<style>
component-left:{
  border: 1px solid;
  height: 850px;
  width: 30%;
}
component-right:{
  border: 1px solid;
  height: 850px;
  width: 70%;
}
</style>
