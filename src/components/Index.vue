<template>
  <div class="kiste">
    <Resources />
    <Actions ref="actions" />
    <Upgrades />
    <Logs :items="player.logs" />
  </div>
</template>

<script>
import Resources from "./Resources/Resources.vue";
import Actions from "./Actions/Actions.vue";
import Upgrades from "./Upgrades/Upgrades.vue";
import Logs from "./Logs/Logs.vue";
import p from "./player.js";
import { filterList, getItemById } from "./functions";

import actionslist from "./json/actions.json";
import reslist from "./json/resources.json";
import storylist from "./json/story.json";
import upglist from "./json/upgrades.json";

p.lists.actions = actionslist;
p.lists.resources = reslist;
p.lists.story = storylist;
p.lists.upgrades = upglist;

export default {
  watch: {
    player: {
      deep: true,
      handler(e) {
        this.CheckStory();
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
  beforeDestroy() {
    clearInterval(this.timer);
  },
  beforeMount() {
    this.LoadGame();
    this.StartTimer();
  },
  components: {
    Resources,
    Actions,
    Upgrades,
    Logs
  },
  data() {
    return {
      player: p
    };
  },
  methods: {
    StartTimer() {
      this.timer = setInterval(() => {
        this.saveGame();
      }, 10000);
    },
    saveGame() {
      if (this.loaded) {
        window.localStorage.setItem("savegame", JSON.stringify(this.player));
      }
    },
    LoadGame() {
      let data = window.localStorage.getItem("savegame");
      if (data != null) {
        this.player = JSON.parse(data);
      }
      this.loaded = true;
    },
    CheckStory() {
      if (this.player.progress < this.player.lists.story.length) {
        let l = getItemById(
          this.player.lists[
            this.player.lists.story[this.player.progress].req.type
          ],
          this.player.lists.story[this.player.progress].req.target
        );

        if (
          l.value >= this.player.lists.story[this.player.progress].req.value
        ) {
          for (let u in this.player.lists.story[this.player.progress].unlock) {
            let i = this.player.lists.story[this.player.progress].unlock[u];
            this.player.unlocked[i.type].push(i.target);
          }
          this.player.logs.push(
            this.player.lists.story[this.player.progress].desc
          );
          this.player.progress++;
        }
      }
    }
  }
};
</script>

<style scoped>
.kiste {
  display: flex;
}
</style>
