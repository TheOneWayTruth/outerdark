<template>
  <transition name="fade">
    <div v-show="show" class="tooltip">
      <h4>{{name}}</h4>
      <div v-if="desc">
        <hr />
        <i>{{desc}}</i>
      </div>
      <div v-if="hasCost(cost)">
        <hr />
        <b>cost:</b>
        <div v-html="getList(cost)"></div>
      </div>
      <div v-if="hasCost(effect)">
        <hr />
        <b>effect:</b>
        <div v-html="getList(effect)"></div>
      </div>
      <div v-if="tick>0">
        <hr />
        <b>per tick:</b>
        <div v-html="tick"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import { isIdInArray } from "../functions";
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    tick: {
      type: Number,
      required: false
    },
    desc: {
      type: String,
      required: false
    },
    cost: {
      type: Array,
      required: false
    },
    effect: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    getList(arr) {
      let dict = {};
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].type != "actions") {
          if (arr[i].target in dict) {
            dict[arr[i].target] += arr[i].value;
          } else {
            dict[arr[i].target] = arr[i].value;
          }
        } else {
          dict[arr[i].target] =
            "+" + arr[i].get.value + " " + arr[i].get.target;
        }
      }
      let o = "";

      for (let i in dict) {
        if (typeof dict[i] == "string") {
          o += "<div>" + i + ": " + dict[i] + "</div>";
        } else {
          o += "<div>" + dict[i] + " " + i + "</div>";
        }
      }
      return o;
    },
    hasCost(arr) {
      if (arr != undefined) {
        if (arr.length > 0) {
          return true;
        }
      }
      return false;
    }
  },
  mounted() {
    let el = this;
    this.$el.parentElement.firstChild.addEventListener(
      "mouseenter",
      function() {
        el.show = true;
      }
    );
    this.$el.parentElement.firstChild.addEventListener(
      "mouseleave",
      function() {
        el.show = false;
      }
    );
  }
};
</script>

<style scoped>
.tooltip {
  min-width: 100px;
  position: fixed;
  background: #474747;
  padding: 10px;
  color: white;
  pointer-events: none;
  z-index: 10;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
