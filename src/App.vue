<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <New></New>
  <List></List>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import New from './components/New.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  New,
  List
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
