<template>
  <!-- <div class="w-2/3  ml-2 flex flex-wrap justify-around">
      <div :key="store.id" v-for="store in allStores">
        <button
          class="text-md text-white p-2 border-2 rounded-lg bg-white whitespace-nowrap"
          :style="{ background: store.color }"
        >
          <p>{{ store.name }}</p>
        </button>
      </div>
    </div> -->
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

  <div
    class="w-5/6 mb-2 box-border border-2 border-gray-600 rounded-lg text-xl p-1"
    v-if="isStoreFormOpen"
  >
    <form @submit.prevent="createStore">
      <div class="flex justify-center mb-2">
        <input
          class="border-2 border-gray-600 rounded-lg p-2"
          type="text"
          placeholder="create new store"
          v-model="newStore"
          required
        />
        <span class="flex flex-col mx-2">
          <label for="color">Color</label>
          <input class="m-2" type="color" name="color" v-model="color" />
        </span>
      </div>
      <input
        type="submit"
        class="w-full md:w-1/3 p-2 bg-gray-600 rounded-lg text-white"
        value="submit"
      />
    </form>
    <div class="max-w-5/6 mt-1 flex flex-wrap">
      <div :key="store.id" v-for="store in allStores">
        <button
          class="p-2 border-2 rounded-lg bg-white whitespace-nowrap"
          :style="{ background: store.color }"
          @click.prevent="deleteStore(store.id)"
        >
          {{ store.name }}
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
  <form
    v-if="isShoppingFormOpen"
    @submit.prevent="onSubmitItem"
    class="md:flex justify-between border-2 border-green-600 rounded-lg text-xl m-2 p-1"
  >
    <div>
      <input
        class="w-1/6 m-1 border-2 border-green-800 rounded-lg p-2"
        type="number"
        placeholder="qty"
        v-model="qty"
      />
      <input
        class="w-3/6 m-1 border-2 border-green-800 rounded-lg p-2"
        type="text"
        placeholder="item"
        v-model="name"
      />
      <select
        v-model="store"
        class="m-1 border-2 border-green-800 rounded-lg p-2"
      >
        <option
          :key="store.id"
          v-bind:value="{ id: store.id, name: store.name, color: store.color }"
          v-for="store in allStores"
        >
          {{ store.name }}
        </option>
      </select>
    </div>
    <input
      type="submit"
      class=" w-full md:w-1/2 lg:w-1/4 p-2 bg-green-400 border-2 border-green-600 rounded-lg text-green-800"
      value="submit"
    />
  </form>
</template>

<script>
import { v4 } from "uuid";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AddItem",
  computed: mapGetters(["allStores"]),
  data() {
    return {
      qty: Number,
      name: "",
      store: {
        id: Number,
        name: String,
        color: String,
      },
      newStore: "",
      color: "",
      isStoreFormOpen: false,
      isShoppingFormOpen: false,
    };
  },
  methods: {
    ...mapActions(["fetchStores", "addItem", "addStore", "deleteStore"]),
    onSubmitItem() {
      const data = {
        id: v4(),
        name: this.name,
        qty: this.qty,
        store: this.store,
        bought: false,
      };

      this.addItem(data);
      this.name= "";
      this.qty = Number;
    },
    createStore() {
      const data = {
        id: v4(),
        name: this.newStore,
        color: this.color,
      };
      // console.log(data)
      this.addStore(data);
      this.newStore = "";
      this.color = "";
    },
    toggleStoreForm() {
      return (this.isStoreFormOpen = !this.isStoreFormOpen);
    },
    toggleShoppingForm() {
      return (this.isShoppingFormOpen = !this.isShoppingFormOpen);
    },
  },
  created(){
    this.fetchStores();
  }
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
#add-shopping-icon {
  transform: rotate(0deg);
}
#add-shopping-icon.active {
  transform: rotate(-12deg);
}
</style>
