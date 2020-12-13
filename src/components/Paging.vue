<template>
  <div>
    <div class="mt-3">
      <b-pagination v-model="currentPage" :total-rows="rows" align="center"></b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Paging',
  data () {
    return {
      rows: 100,
      currentPage: 3
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
