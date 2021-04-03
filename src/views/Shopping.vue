<template>
  <div class="flex pt-12 flex-col items-center h-full">
    <AddItem />
    <ListItems />
   
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ListItems from "@/components/ListItems.vue";
import AddItem from "@/components/AddItem.vue"

export default defineComponent({
  name: "Shopping",
  components: {
    ListItems,
    AddItem
  },
 
});
</script>

