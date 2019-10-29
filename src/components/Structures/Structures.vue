<template>
  <div>
    <div :key="ix" v-for="(item,ix) in getList()">
      <span v-html="item"></span>
    </div>
  </div>
</template>
<script>
import { filterList } from "../functions.js";
import list from "../json/structures.json";
export default {
  methods: {
    getList() {
      return null;
    }
  }
};
</script>
<style scoped>
</style>