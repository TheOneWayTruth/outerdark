<template>
  <div class="kiste">
    <Resources />
    <Actions ref="actions" />
    <Upgrades />
    <Logs :items="player.logs" />
    <div class="footer"></div>
  </div>
</template>

<script>
import Resources from "./Resources/Resources.vue";
import Actions from "./Actions/Actions.vue";
import Upgrades from "./Upgrades/Upgrades.vue";
import Logs from "./Logs/Logs.vue";
import p from "./player.js";
import {
  filterList,
  getItemById,
  isIdInArray,
  addValue,
  removeValue,
  cantAfford
} from "./functions";

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
        for (let r in e.lists.resources) {
          e.lists.resources[r].value =
            Math.round(e.lists.resources[r].value * 10) / 10;
        }
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
      player: p,
      timer: null,
      timer2: null
    };
  },
  methods: {
    StartTimer() {
      this.timer = setInterval(() => {
        this.saveGame();
      }, 10000);
      this.timer2 = setInterval(() => {
        this.updateValues();
      }, 1000);
    },
    saveGame() {
      if (this.loaded) {
        window.localStorage.setItem("savegame", JSON.stringify(this.player));
      }
    },
    updateValues() {
      for (let res in this.player.lists.resources) {
        let e = this.player.lists.resources[res];
        if (e.tick > 0 && e.value < e.max) {
          e.value += e.tick;
          e.procent = (e.value / e.max) * 100;
        }

        if (this.player.lists.resources[res].action != undefined) {
          let a = getItemById(
            this.player.lists.actions,
            this.player.lists.resources[res].action
          );
          let rate =
            this.player.lists.resources[res].rate *
            this.player.lists.resources[res].value;
          if (!cantAfford(a, this.player, "stamnia", rate)) {
            addValue(a, this.player, rate);
            removeValue(a, this.player, "stamnia", rate);
          }
        }
      }
    },
    LoadGame() {
      let data = window.localStorage.getItem("savegame");
      if (data != null) {
        var pdata = JSON.parse(data);
        if (pdata.build != undefined && pdata.build > p.build) {
          this.player = pdata;
        } else {
          this.player = p;
        }
      }
      this.loaded = true;
    },
    CheckStory() {
      if (this.player.progress < this.player.lists.story.length) {
        if (
          this.player.lists.story[this.player.progress].req.type == "resources"
        ) {
          let l = getItemById(
            this.player.lists[
              this.player.lists.story[this.player.progress].req.type
            ],
            this.player.lists.story[this.player.progress].req.target
          );

          if (
            l.value >= this.player.lists.story[this.player.progress].req.value
          ) {
            for (let u in this.player.lists.story[this.player.progress]
              .unlock) {
              let i = this.player.lists.story[this.player.progress].unlock[u];
              this.player.unlocked[i.type].push(i.target);
            }
            this.player.logs.push(
              this.player.lists.story[this.player.progress].desc
            );
            this.player.progress++;
          }
        } else if (
          this.player.lists.story[this.player.progress].req.type == "bought"
        ) {
          if (
            isIdInArray(
              this.player.bought,
              this.player.lists.story[this.player.progress].req.target
            )
          ) {
            for (let u in this.player.lists.story[this.player.progress]
              .unlock) {
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
  }
};
</script>

<style scoped>
.kiste {
  display: flex;
}
</style>
