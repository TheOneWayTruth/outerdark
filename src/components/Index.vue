<template>
  <div class="kiste">
    <Resources />
    <Actions ref="actions" />
    <Structures />
    <Upgrades />
    <Logs :items="player.logs" />
  </div>
</template>

<script>
import Structures from "./Structures/Structures.vue";
import Resources from "./Resources/Resources.vue";
import Actions from "./Actions/Actions.vue";
import Upgrades from "./Upgrades/Upgrades.vue";
import Logs from "./Logs/Logs.vue";
import p from "./player.js";
import { filterList, getItemById } from "./functions";

import actionslist from "./json/actions.json";
import reslist from "./json/resources.json";

p.lists.actions = actionslist;
p.lists.resources = reslist;

export default {
  watch: {
    player: {
      deep: true,
      handler(e) {
        for (let t in e.lists.actions) {
          if (e.tasks.indexOf(e.lists.actions[t].id) != -1) {
            e.lists.actions[t].paused = false;
          } else {
            e.lists.actions[t].paused = true;
          }
        }
      }
    }
  },
  components: {
    Structures,
    Resources,
    Actions,
    Upgrades,
    Logs
  },
  data() {
    return {
      player: p
    };
  }
};
</script>

<style scoped>
.kiste {
  display: flex;
}
</style>
