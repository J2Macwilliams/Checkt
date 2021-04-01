<template>

  <div class=" grid md:grid-cols-3 grid-flow-row border-2 rounded-lg w-5/6 ">
    <div :key="item.id" v-for="item in allItems" class="text-xl flex items-center justify-between p-2 m-2 border-2 bg-green-600 rounded-lg text-white">
      <h1 >
        {{ item.name }}
      </h1>
      <h2>{{item.store}}</h2>
      <i class="fas fa-times"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";


export default defineComponent({
  name: "ListItems",
  
  methods: {
    ...mapActions(["fetchItems"]),
  },
  computed: mapGetters(["allItems"]),
  created() {
    this.fetchItems();
    
  },
});
</script>

