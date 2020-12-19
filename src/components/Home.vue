<template>
  <div>
    <Banner/>
    <List v-if="category != null"/>
    <Category v-else/>
  </div>
</template>

<script>
import Banner from './Banner'
import List from './List'
import Category from './Category'

export default {
  name: 'Home',
  components: {Banner, List, Category},
  props: ['category'],
  data () {
    return {
      show: false
    }
  },
  mounted () {
  },
  methods: {}
}
</script>

<style scoped>
</style>
