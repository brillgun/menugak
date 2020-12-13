<template>
  <div class="mt-4">
      <h1 class="title">결제정보</h1>
    <b-form>
      <b-form-group label="이름" label-for="name">
        <b-form-input
          id="name"
          v-model="name"
          required
          placeholder="이름을 입력하세요"
          :state="nameState"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="연락처" label-for="tel">
        <b-form-input
          id="tel"
          v-model="tel"
          required
          placeholder="연락처를 입력하세요"
          :state="telState"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="주소" label-for="addr">
        <b-form-input
          id="addr"
          v-model="addr"
          required
          placeholder="상세 주소를 입력하세요"
          :state="addrState"
        ></b-form-input>
      </b-form-group>

    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Order',
  data () {
    return {
      name: '',
      tel: '',
      addr: '',
      nameState: null,
      telState: null,
      addrState: null
    }
  },
  computed: {
  },
  watch: {
    name () {
      this.nameState = false
      if (this.name.length > 2) {
        this.nameState = true
      }
    },
    tel () {
      this.tel = this.tel.replace(/[^0-9]/g, '')
      this.telState = false
      if (this.tel.length > 11) {
        this.telState = true
      }
    },
    addr () {
      this.addrState = false
      this.addrState = true
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .title{
    font-weight: bold;
    text-align: center;
  }
  input{
    margin: 5px 0;
  }
</style>
