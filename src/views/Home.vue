<template>
  <div class="flex flex-col pt-16 items-center h-full">
    <AddItem />
    <ListItems />
   
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ListItems from '@/components/ListItems.vue';
import AddItem from '@/components/AddItem.vue'

export default defineComponent({
  name: "Home",
  components: {
    ListItems,
    AddItem
  },
 
});
</script>

