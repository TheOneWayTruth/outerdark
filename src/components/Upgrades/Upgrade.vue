<template>
  <div>
    <div @click="BuyUpgrade()">
      <div :class="{cant : cantAfford()}" class="top">
        <span class="text">{{item.name}}</span>
      </div>
    </div>
    <Tooltip :name="item.name" :desc="item.desc" :cost="item.cost" :effect="item.get" />
  </div>
</template>

<script>
import Tooltip from "../extra/Tooltip.vue";
import { getItemById } from "../functions";
export default {
  components: {
    Tooltip
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    BuyUpgrade() {
      if (!this.cantAfford()) {
        this.removeValue();
        this.addValue();

        this.$parent.$parent.player.bought.push(this.item.id);
        var index = this.$parent.$parent.player.unlocked.upgrades.indexOf(
          this.item.id
        );

        if (this.item.time <= 1) {
          this.$parent.$parent.player.unlocked.upgrades.splice(index, 1);
        } else {
          this.item.time--;
        }
      }
    },
    removeValue() {
      for (let i = 0; i < this.item.cost.length; i++) {
        let e = getItemById(
          this.$parent.$parent.player.lists.resources,
          this.item.cost[i].target
        );
        e.value -= this.item.cost[i].value;
        e.procent = (e.value / e.max) * 100;
      }
    },
    addValue() {
      for (let i = 0; i < this.item.get.length; i++) {
        if (this.item.get[i].type == "resources") {
          let e = getItemById(
            this.$parent.$parent.player.lists.resources,
            this.item.get[i].target
          );
          e[this.item.get[i].key] += this.item.get[i].value;
          e.procent = (e.value / e.max) * 100;
        } else if (this.item.get[i].type == "actions") {
          let e = getItemById(
            this.$parent.$parent.player.lists.actions,
            this.item.get[i].target
          );
          e.get.push(this.item.get[i].get);
        }
      }
    },
    cantAfford() {
      for (let i = 0; i < this.item.cost.length; i++) {
        let e = getItemById(
          this.$parent.$parent.player.lists.resources,
          this.item.cost[i].target
        );
        if (e.value < this.item.cost[i].value) {
          return true;
        }
      }
      return false;
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
  z-index: -1;
  position: relative;
  background-color: #804610;
  justify-content: center;
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
.cant {
  background-color: grey;
}
</style>
