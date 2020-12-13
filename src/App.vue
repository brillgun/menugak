<template>
  <div id="app">
    <Header/>
    <SideBarLeft/>
    <router-view/>
<!--    <Footer/>-->
  </div>
</template>

<script>
import SideBarLeft from './components/layout/SideBar-Left'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

export default {
  name: 'App',
  components: {SideBarLeft, Header, Footer}
}
</script>

<style>
#app {
}
</style>
