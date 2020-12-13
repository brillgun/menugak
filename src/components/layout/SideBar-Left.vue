<template>
  <div>
    <b-sidebar id="sidebar-left" title="전체 메뉴" shadow backdrop>
      <b-list-group>
        <b-list-group-item class="d-flex justify-content-between align-items-center" button>
          김밥
          <b-badge variant="primary" pill>14</b-badge>
        </b-list-group-item>

        <b-list-group-item class="d-flex justify-content-between align-items-center" button>
          만두
          <b-badge variant="primary" pill>2</b-badge>
        </b-list-group-item>

        <b-list-group-item class="d-flex justify-content-between align-items-center" button>
          떡류
          <b-badge variant="primary" pill>1</b-badge>
        </b-list-group-item>
      </b-list-group>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'SideBar-Left',
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
