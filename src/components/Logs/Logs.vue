<template>
  <div>
    <h4>Log:</h4>
    <div :key="item.id" v-for="item in items.slice().reverse()">
      <div class="log" v-html="item"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
.log {
  margin: 10px 0px;
}
</style>