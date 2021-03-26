<template>
  <div class="list-items">
    <div :key="item.id" v-for="item in items" class="item">
      <h1 class="item-name">{{ item.name }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListItems",
  data() {
    return {
      items: [{ id: 1, name: "avocado" }],
    };
  },
});
</script>

<style scoped>
.list-items {
  display: grid;
}
.item {
}

.item-name {
  font-size: 1.5rem;
}
</style>