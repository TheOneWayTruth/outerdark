<template>
  <div>
    <h4>Resources:</h4>
    <div :key="item.id" v-for="item in getList()">
      <Resource :item="item" />
    </div>
  </div>
</template>
<script>
import { filterList } from "../functions.js";

import Resource from "./Resource.vue";

export default {
  components: {
    Resource
  },
  methods: {
    getList() {
      return filterList(
        this.$parent.player.lists.resources,
        this.$parent.player.unlocked.resources
      );
    }
  }
};
</script>
<style scoped>
</style>