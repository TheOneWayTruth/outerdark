<template>
  <div>
    <div>
      <div class="top">
        <div>
          <img :src="require(`../images/Resources/${item.id}.png`)" />
          <span class="text">{{item.name}}</span>
          <br />
          <span class="text">{{item.value}} / {{item.max}}</span>
        </div>
        <span class="bar" :style="{ width: item.procent + '%', backgroundColor:item.color }"></span>
      </div>
    </div>
    <Tooltip :name="item.name" :desc="item.desc" :tick="item.tick" />
  </div>
</template>

<script>
import Tooltip from "../extra/Tooltip.vue";

export default {
  components: {
    Tooltip
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
img {
  width: 32px;
  height: 32px;
  margin: 10px 10px;
  float: left;
  border-radius: 3px;
}
.top {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 150px;
  height: auto;
  z-index: 1;
  position: relative;
  background-color: grey;
  justify-content: center;
  border-radius: 4px;
}
.bar {
  background-color: #00000080;
  height: 100%;
  left: 0;
  width: 0;
  position: absolute;
  z-index: -1;
  transition: width 0.1s;
  border-radius: 4px;
}
.text {
  margin: 2px 0px;
  position: relative;
  line-height: 1em;
  z-index: 1;
  color: white;
  text-align: center;
}
.cant {
  color: grey;
}
</style>