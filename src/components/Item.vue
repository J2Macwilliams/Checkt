<template>
  <div
    class="flex items-center justify-between m-1 p-2 border-2 border-gray-600  rounded-lg text-xl hover:transform scale-50"
    :style="{ background: item.store.color }"
  >
    <p >{{ item.qty }}</p>
    <p >
      {{ item.name }}
    </p>
    <i class="fas fa-times" @click.prevent="deleteItem(item.id)"></i>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Item",
  props: ["item"],
  methods: {
    ...mapActions(["deleteItem"]),
  },
};
</script>
