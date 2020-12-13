<template>
  <div>
    <Header/>

    <p>메인화면</p>
    <SideBarLeft/>
  </div>
</template>

<script>
import SideBarLeft from './layout/SideBar-Left'
import Header from './layout/Header'
export default {
  name: 'Main',
  components: {SideBarLeft, Header},
  data () {
    return {
      SideBarLeft,
      Header
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
