<template>
  <div>
    <b-overlay :show="show" rounded="sm">
      <b-container class="p-4" fluid="sm">
        <b-row class="justify-content-between">
          <b-col v-for="i in 14" v-bind:key="i" md="true" align-self="start">
            <b-card
              :img-src="'https://picsum.photos/400/400/?seed=food&id='+ i"
              img-alt="Image"
              tag="article"
              style="max-width: 20rem;"
              class="mb-4"
              img-height="300"
            >
              <b-card-title>
                <span>카테고리</span>
                <b-button href="#" variant="success" class="float-right d-inline-block align-top mr-1">+담기</b-button>
              </b-card-title>

            </b-card>
          </b-col>
        </b-row>
      </b-container>
      <Paging />
    </b-overlay>
  </div>
</template>

<script>
import Paging from './Paging'

export default {
  name: 'List',
  components: {Paging},
  data () {
    return {
      show: false
    }
  },
  methods: {}
}
</script>

<style scoped>
</style>
