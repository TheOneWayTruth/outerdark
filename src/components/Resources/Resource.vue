<template>
  <div>
    <div class="top">
      <span class="text">{{item.name}}</span>
      <span class="text">{{item.value}} / {{item.max}}</span>
      <span class="bar" :style="{ width: item.procent + '%', backgroundColor:item.color }"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
.top {
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  width: 150px;
  height: 50px;
  z-index: -1;
  position: relative;
  background-color: #777777;
  justify-content: center;
  border-radius: 4px;
}
.bar {
  background-color: #39304b;
  height: 100%;
  left: 0;
  width: 0;
  position: absolute;
  z-index: 1;
  transition: width 0.05s;
  border-radius: 4px;
}
.text {
  margin: 2px 0px;
  position: relative;
  line-height: 1em;
  z-index: 2;
  color: white;
  text-align: center;
}
</style>