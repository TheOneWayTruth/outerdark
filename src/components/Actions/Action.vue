<template>
  <div>
    <div @click="StartAction()" class="top">
      <span :class="{cant : callAfford()}" class="text">{{item.name}}</span>
      <span class="bar" :style="{ width: item.percent + '%', backgroundColor:item.color }"></span>
    </div>
    <Tooltip :name="item.name" :desc="item.desc" :cost="item.cost" :effect="item.get" />
  </div>
</template>

<script>
import Tooltip from "../extra/Tooltip.vue";
import {
  isIdInArray,
  getItemById,
  removeValue,
  addValue,
  cantAfford
} from "../functions";
export default {
  components: {
    Tooltip
  },
  mounted() {
    let el = this;
    this.timer = setInterval(function() {
      el.CallAction();
    }, 100);
  },
  data() {
    return {
      timer: null
    };
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    callAfford() {
      return cantAfford(this.item, this.$parent.$parent.player);
    },
    CallAction() {
      let player = this.$parent.$parent.player;
      if (!this.item.paused) {
        this.item.percent += 5;
        if (this.item.percent >= 100) {
          this.item.percent = 0;
          addValue(this.item, player);
          removeValue(this.item, player);
        }
        if (cantAfford(this.item, player)) {
          player.tasks[0] = "rest";
          this.item.paused = true;
        }
      }
    },
    isActive() {
      return isIdInArray(this.$parent.$parent.player.tasks, this.item.id);
    },
    StartAction() {
      let tasks = this.$parent.$parent.player.tasks;
      if (!cantAfford(this.item, this.$parent.$parent.player)) {
        if (!this.isActive()) {
          if (tasks.length > 0) {
            tasks.pop();
          }
          tasks.push(this.item.id);
        } else {
          tasks.pop();
        }
      }
    }
  }
};
</script>
<style scoped>
.top {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 150px;
  height: 50px;
  z-index: 1;
  position: relative;
  background-color: #b8860b;
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