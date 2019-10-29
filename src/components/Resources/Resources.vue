<template>
  <div>
    <div :key="ix" v-for="(item,ix) in getList()">
      <Resource :item="item" />
    </div>
  </div>
</template>
<script>
import { filterList } from "../functions.js";
import list from "../json/resources.json";
import Resource from "./Resource.vue";

export default {
  components: {
    Resource
  },
  methods: {
    getList() {
      return filterList(list, this.$parent.player.unlocked.resources);
    }
  }
};
</script>
<style scoped>
</style>