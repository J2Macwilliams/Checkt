<template>
  <form
    @submit="onSubmit"
    class="w-5/6 flex justify-between border-2 border-green-600 rounded-lg text-xl m-8 p-2"
  >
    <input type="number" placeholder="qty" v-model="qty" />
    <input type="text" placeholder="name" v-model="name" />
    <input type="text" placeholder="store" v-model="store" />
    <input
      type="submit"
      class="p-2 bg-green-400 border-2 border-green-600 rounded-lg text-green-800"
      value="submit"
    />
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { v4 } from "uuid";

export default {
  name: "AddItem",
  data() {
    return {
      qty: Number,
      name: "",
      store: "",
    };
  },
  methods: {
    ...mapActions(["addItem"]),
    onSubmit(e) {
      e.preventDefault();
      const data = {
        id: v4(),
        name: this.name,
        qty: this.qty,
        store: this.store,
        bought: false,
      };

      this.addItem(data);
    },
  },
};
</script>

