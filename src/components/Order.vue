<template>
  <div class="p-4">
      <h1 class="title">주문내역</h1>
      <b-list-group v-for="item in 10" v-bind:key="item" class="mb-1">
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <span class="menu-name">메뉴이름</span>
          <span class="menu-price mr-4">3,000 원</span>
          <b-form-input type="number" value="13" readonly class="mr-2"></b-form-input>
          <b-button-group class="btn-group">
            <b-button href="#" variant="success" class="m-1" pill>+</b-button>
            <b-button href="#" variant="warning" class="m-1" pill>-</b-button>
          </b-button-group>
        </b-list-group-item>
      </b-list-group>
    <Pay />
      <h1 class="total-calc">총 30,000원</h1>
      <div class="btn-area">
          <b-button class="big-btn" to="/home">뒤로가기</b-button>
          <b-button class="big-btn ml-2" variant="success" to="/pay">결 제</b-button>
      </div>
  </div>
</template>

<script>
import Pay from './Pay'
export default {
  name: 'Order',
  components: { Pay },
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style scoped>
  h1{
    font-weight: bold;
  }
  .title{
    text-align: center;
  }
  .total-calc{
    margin-top: 20px;
    text-align: right;
  }
  .menu-name{
    width: 80%;
  }
  .menu-price{
    min-width: 100px;
    text-align: right;
  }
  input{
    width: 5%;
    min-width: 60px;
  }
  a{
    width: 38px;
  }
  .btn-area{
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
  .big-btn{
    width: 50%;
    line-height: 50px;
    font-weight: bold;
    font-size: 24px;
  }
</style>
