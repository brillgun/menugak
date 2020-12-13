<template>
  <div id="app">
    <Header/>
    <SideBarLeft/>
    <router-view/>
  </div>
</template>

<script>
import SideBarLeft from './components/layout/SideBar-Left'
import Header from './components/layout/Header'

export default {
  name: 'App',
  components: {SideBarLeft, Header}
}
</script>

<style>
#app {
}
</style>
