<template>
  <div>
    <div @click="StartAction()" class="top">
      <span :class="{cant : cantAfford()}" class="text">{{item.name}}</span>
      <span class="bar" :style="{ width: item.percent + '%', backgroundColor:item.color }"></span>
    </div>
  </div>
</template>

<script>
import { isIdInArray, getItemById } from "../functions";
export default {
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
    cantAfford() {
      for (let i = 0; i < this.item.cost.length; i++) {
        let e = getItemById(
          this.$parent.$parent.player.lists.resources,
          this.item.cost[i].target
        );

        if (e.value < this.item.cost[i].rate) {
          return true;
        }
      }
      return false;
    },
    addValue() {
      for (let i = 0; i < this.item.get.length; i++) {
        let e = getItemById(
          this.$parent.$parent.player.lists.resources,
          this.item.get[i].target
        );
        if (e.value + this.item.get[i].rate > e.max) {
          e.value = e.max;
        } else {
          e.value += this.item.get[i].rate;
        }
        e.procent = (e.value / e.max) * 100;
      }
    },
    removeValue() {
      for (let i = 0; i < this.item.cost.length; i++) {
        let e = getItemById(
          this.$parent.$parent.player.lists.resources,
          this.item.cost[i].target
        );
        e.value -= this.item.cost[i].rate;
        e.procent = (e.value / e.max) * 100;
      }
    },
    CallAction() {
      if (!this.item.paused) {
        this.item.percent += 5;
        if (this.item.percent >= 100) {
          this.item.percent = 0;
          this.addValue(this.item);
          this.removeValue(this.item);
        }
        if (this.cantAfford(this.item)) {
          this.$parent.$parent.player.tasks[0] = "rest";
          this.item.paused = true;
        }
      }
    },
    isActive() {
      return isIdInArray(this.$parent.$parent.player.tasks, this.item.id);
    },
    StartAction() {
      if (!this.cantAfford()) {
        if (!this.isActive()) {
          if (this.$parent.$parent.player.tasks.length > 0) {
            this.$parent.$parent.player.tasks.pop();
          }
          this.$parent.$parent.player.tasks.push(this.item.id);
        } else {
          this.$parent.$parent.player.tasks.pop();
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