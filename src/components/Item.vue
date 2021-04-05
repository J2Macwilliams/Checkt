<template>
  <div
    class="flex items-center justify-between m-3 p-2 border-2 border-gray-600 rounded-lg text-xl transition transform shadow-lg"
    :style="{ background: item.store.color }"
    :class="{ 'scale-90 shadow-none border-dashed ': item.bought }"
    @dblclick="toggleBought(item.id)"
  >
    <p>{{ item.qty }}</p>
    <p :class="{ 'line-through': item.bought }">
      {{ item.name }}
    </p>
    <i
      class="fas fa-times transform transition hover:scale-125"
      @click.prevent="deleteItem(item.id)"
    ></i>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "Item",
  props: ["item"],
  methods: {
    ...mapActions(["deleteItem"]),
    ...mapMutations(["toggleBought"]),
  },
};
</script>
