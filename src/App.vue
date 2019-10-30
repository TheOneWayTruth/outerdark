<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from "./components/Index.vue";

export default {
  name: "app",
  components: {
    Index
  }
};
</script>

<style>
#app {
  font-family: "Source Code Pro", monospace;
  user-select: none;
}
body {
  color: white;
  background: black;
}
</style>
