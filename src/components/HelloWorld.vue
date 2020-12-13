<template>
  <div class="content">
    <a>
    <b-button variant="outline-light" to="/home" class="mt-4 button">메뉴각 입장</b-button>
    </a>
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zFXIZtLGeSA?controls=0" allowfullscreen allow="autoplay"></iframe>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      mainProps: { blank: true, class: '' }
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    position: relative;
  }
  a{
    display: block;
    position: relative;
    width: 300px;
    margin: 300px auto;
  }
  .button{
    font-size: 24px;
    position: absolute;
    right: 0;
    left: 0;
    text-align: center;
    line-height: 60px;
    z-index: 1;
  }
  iframe {
    position: fixed;
    top: 0;
    left: 0;

    /* Preserve aspet ratio */
    min-width: 100%;
    min-height: 100%;
  }
</style>
