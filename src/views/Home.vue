<template>
  <div class="home">
    <ListItems />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ListItems from '@/components/ListItems.vue';

export default defineComponent({
  name: "Home",
  components: {
    ListItems,
  },
});
</script>
