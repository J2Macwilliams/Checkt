<template>
  <select
    v-if="allStores.length > 0"
    v-model="store"
    class="m-1 text-lg border-2 border-green-800 rounded-lg p-2"
  >
    <option
      :key="store.id"
      v-bind:value="{ store: store.name }"
      v-for="store in allStores"
    >
      {{ store.name }}
    </option>
  </select>
  <div
    class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row w-5/6"
  >
    <div :key="item.id" v-for="item in allItems">
      <Item :item="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
// import {Product} from '../store/interfaces'
import Item from "./Item.vue";

export default defineComponent({
  name: "ListItems",
  components: { Item },
  data() {
    return {
      store: "",
    };
  },
  methods: {
    ...mapActions(["fetchItems"]),
  },
  computed: {
    ...mapGetters(["allItems", "allStores"]),
    // filteredItems() {

    //   return this.allItems.filter((item: Product) => {
    //     return item.store.name.match(this.store);
    //   });
    // },
  },
  created() {
    this.fetchItems();
  },
});
</script>

