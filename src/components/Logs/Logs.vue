<template>
  <div>
    <div :key="ix" v-for="(item,ix) in items">
      <span v-html="item"></span>
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
</style>