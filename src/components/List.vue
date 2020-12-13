<template>
  <div>
    <Carousel/>
  <b-container class="list-view" fluid="">
    <b-row>
      <b-col class="col-3" v-for="i in 16" v-bind:key="i">
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
            <b-button href="#" variant="primary" class="float-right d-inline-block align-top mr-1">담기</b-button>
          </b-card-title>

        </b-card>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
import Carousel from './Carousel'
export default {
  name: 'Main',
  components: {Carousel},
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
  .list-view {
    margin: 2% 1%;
  }
</style>
