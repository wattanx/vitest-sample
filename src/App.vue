<template>
  <div class="text-center">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld />
    <Center>
      <template #text>
        <p>Test</p>
      </template>
    </Center>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import HelloWorld from "./components/HelloWorld.vue";
import Center from "./components/Center.vue";

export default defineComponent({
  components: {
    HelloWorld,
    Center,
  },
  setup() {
    return {};
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.text-center {
  text-align: center;
}
</style>
