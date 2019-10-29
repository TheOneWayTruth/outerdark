<template>
  <div>
    <div :key="item.id" v-for="item in getList()">
      <Action :ref="item.id" :item="item" />
    </div>
  </div>
</template>
<script>
import { filterList } from "../functions.js";
import Action from "./Action.vue";

export default {
  components: {
    Action
  },
  methods: {
    getList() {
      return filterList(
        this.$parent.player.lists.actions,
        this.$parent.player.unlocked.actions
      );
    }
  }
};
</script>
<style scoped>
</style>