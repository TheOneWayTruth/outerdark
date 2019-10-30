<template>
  <div>
    <h4 v-show="getList().length>0">Upgrades:</h4>
    <div :key="item.id" v-for="item in getList()">
      <Upgrade :item="item" />
    </div>
  </div>
</template>
<script>
import { filterList } from "../functions.js";
import Upgrade from "./Upgrade.vue";

export default {
  components: {
    Upgrade
  },
  methods: {
    getList() {
      return filterList(
        this.$parent.player.lists.upgrades,
        this.$parent.player.unlocked.upgrades
      );
    }
  }
};
</script>
<style scoped>
</style>