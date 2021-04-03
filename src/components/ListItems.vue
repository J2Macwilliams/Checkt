<template>
  <select
    v-if="allStores.length > 0"
    v-model="store"
    @change="search"
    class="m-6 text-lg border-2 border-green-800 rounded-lg p-2"
  >
  <option value="">all stores</option>
    <option
      :key="store.id"
      v-bind:value="{ name: store.name }"
      v-for="store in allStores"
    >
      {{ store.name }}
    </option>
  </select>
  <div
    class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row w-5/6"
  >
    <div :key="item.id" v-for="item in filteredItems">
      <Item :item="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

import Item from "./Item.vue";

export default defineComponent({
  name: "ListItems",
  components: { Item },
  data() {
    return {
      store: {name: String},
    };
  },
  methods: {
    ...mapActions(["fetchItems", "searchItems"]),
    search() {
      this.searchItems(this.store.name)
    }
  },
  computed: {
    ...mapGetters(["allItems", "allStores", "filteredItems"]),

  },
  created() {
    this.fetchItems();
  },
});
</script>

