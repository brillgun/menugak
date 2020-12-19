<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand to="/home">
        <img src="./../../assets/logo.svg" alt="logo" width="32" height="32" class="d-inline-block align-top mr-1"/>
<!--        <img src="src/assets/logo.svg" class="d-inline-block align-top mr-1" alt="Kitten">-->
        <span>메뉴각</span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-nav-text>메뉴명은 여기에 표기{{$route.params.category}}</b-nav-text>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button variant="light" class="mr-2" v-b-toggle.sidebar-no-header>
            <b-icon icon="list" aria-hidden="true"></b-icon>
            전체메뉴
          </b-button>

          <b-nav-form form-class="w-100">
            <b-form-input class="mr-sm-2" placeholder="Search..."></b-form-input>
          </b-nav-form>

          <b-button pill variant="warning" to="/order">
            <b-icon icon="cart-check-fill" variant="" aria-hidden="true"></b-icon>
            주문내역 <b-badge variant="primary" pill>4</b-badge>
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['category'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
