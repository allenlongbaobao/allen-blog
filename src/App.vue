<template>
  <div id="app">
    <router-view name='Head'/>
    <router-view name='Body'/>
    <router-view name='Foot'/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
    }
  }
}
</script>

<style>
html,body{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*
    text-align: center;
  */
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
}

</style>
