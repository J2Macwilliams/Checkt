<template>
  <article class="w-full flex justify-end p-2">
    <span
      id="add-icon-box"
      :class="{ active: isStoreFormOpen }"
      class="text-3xl mx-2 text-green-600"
    >
      <i
        id="add-icon"
        class="fas fa-plus-circle"
        :class="{ active: isStoreFormOpen }"
        @click.prevent="toggleStoreForm"
      ></i>
    </span>
    <span
      id="add-shopping-box"
      class="text-3xl mx-2 text-gray-600"
      :class="{ active: isShoppingFormOpen }"
    >
      <i
        id="add-shopping-icon"
        class="fas fa-cart-plus"
        :class="{ active: isShoppingFormOpen }"
        @click.prevent="toggleShoppingForm"
      ></i>
    </span>
  </article>
  <form
    @submit.prevent="addStore"
    v-if="isStoreFormOpen"
    class="md:flex justify-between border-2 border-gray-600 rounded-lg text-xl m-2 p-1"
  >
    <input
      class="m-1 border-2 border-gray-600 rounded-lg p-2"
      type="text"
      placeholder="create new store"
      v-model="newStore"
      required
    />
    <span class="flex flex-col mx-2">
      <label for="color">Color</label>
      <input
        class="m-2    "
        type="color"
        name="color"
        v-model="color"
    />
    </span>
    <input
      type="submit"
      class="p-2 bg-gray-600 rounded-lg text-white"
      value="submit"
    />
  </form>
  <form
    v-if="isShoppingFormOpen"
    @submit.prevent="onSubmitItem"
    class="md:flex w-4/5 justify-between border-2 border-green-600 rounded-lg text-xl m-2 p-1"
  >
    <input
      class="m-1 w-1/6 border-2 border-green-800 rounded-lg p-2"
      type="number"
      placeholder="qty"
      v-model="qty"
    />
    <input
      class="m-1 border-2 border-green-800 rounded-lg p-2"
      type="text"
      placeholder="name"
      v-model="name"
    />
    <input
      class="m-1 border-2 border-green-800 rounded-lg p-2"
      type="text"
      placeholder="store"
      v-model="store"
    />
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
      newStore: "",
      color: "",
      isStoreFormOpen: false,
      isShoppingFormOpen: false,
    };
  },
  methods: {
    ...mapActions(["addItem"]),
    onSubmitItem() {
      const data = {
        id: v4(),
        name: this.name,
        qty: this.qty,
        store: this.store,
        bought: false,
      };

      this.addItem(data);
    },
    addStore() {
      const data = {
        id: v4(),
        store: this.newStore,
        color: this.color
      }
      console.log(data)
      
    },
    toggleStoreForm() {
      return (this.isStoreFormOpen = !this.isStoreFormOpen);
    },
    toggleShoppingForm() {
      return (this.isShoppingFormOpen = !this.isShoppingFormOpen);
    },
  },
};
</script>

<style scoped>
#add-icon-box.active {
  color: #a30101;
}

#add-icon.active {
  transform: rotate(45deg);
}

#add-shopping-box.active {
  color: #a30101;
}
/* #add-shopping-icon{
  transform: rotate(-12deg);
}
#add-shopping-icon.active {
  transform: rotate(0deg);
} */
</style>
