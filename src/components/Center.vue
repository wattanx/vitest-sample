<template>
  <div class="center"><slot name="text" /></div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Center",
});
</script>
<style scoped>
.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
