<template>
  <select
    v-if="allStores.length > 0"
    v-model="store"
    
    class="m-6 text-lg border-2 border-green-800 rounded-lg p-2"
  >
  <option value="">all stores</option>
    <option
      :key="store.id"
      v-bind:value="store.name"
      v-for="store in allStores"
    >
      {{ store.name }}
    </option>
  </select>
  <div
    class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row w-5/6"
  >
    <div :key="item.id" v-for="item in filteredItems(this.store)">
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
      store: '',
    };
  },
  methods: {
    ...mapActions(["fetchItems", ]),
    // search() {
    //   console.log(this.store)
    //  this.filteredItems(this.store);
    // }
  },
  computed: {
    ...mapGetters([ "allStores", "filteredItems"]),

  },
  created() {
    this.fetchItems();
  },
});
</script>

