<template>
  <div>
    <Carousel/>
    <b-overlay :show="show" rounded="sm">
      <b-container class="p-4" fluid>
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
                <span>김밥 3,000 원</span>
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
import Carousel from './Banner'
import Paging from './Paging'
export default {
  name: 'Main',
  components: {Paging, Carousel},
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
