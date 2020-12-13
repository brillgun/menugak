<template>
  <div>
    <b-sidebar id="sidebar-no-header" title="전체메뉴" shadow backdrop>
      <template #default="{ hide }">
        <div class="p-3">
            <b-list-group v-for="item in categoryList" v-bind:key="item.viewOrder" class="mb-1">
              <b-list-group-item class="d-flex justify-content-between align-items-center" @click="hide" button>
                {{item.categoryNm}}
                <b-badge variant="primary" pill>{{item.menuCount}}</b-badge>
              </b-list-group-item>
            </b-list-group>
<!--          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>-->
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'SideBar-Left',
  data () {
    return {
      categoryList: [
        { viewOrder: 0, categoryNm: '김밥류', menuCount: 3 },
        { viewOrder: 0, categoryNm: '분식류', menuCount: 5 }

      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
