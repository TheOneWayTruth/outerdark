<template>
  <div class="logs">
    <div :key="item.id" v-for="item in items">
      <div class="log" v-html="item"></div>
    </div>
    <span>></span>
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
.logs {
  color: greenyellow;
  position: fixed;
  bottom: 10px;
  height: 200px;
  overflow: auto;
  width: 100vw;
  box-sizing: content-box;
  padding-right: 17px;
}
</style>