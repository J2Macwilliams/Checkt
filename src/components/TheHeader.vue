<template>
  <header id="navbar">
    <h1
      class="absolute left-4 p-2 text-2xl bg-green-400 border-4 border-white-400 rounded-xl text-green-800"
    >
      {{ getUser.username }}
    </h1>
    <h1 class="title">Check't</h1>
    <nav id="nav">
      <router-link class="nav-item" to="/">Home</router-link> |
      <router-link class="nav-item" to="/about">About</router-link>
     
    </nav>
  </header>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "TheHeader",
  computed: mapGetters(["getUser"]),
  methods: {
    ...mapActions(["fetchUser"]),
  },
  created() {
    this.fetchUser();
  },
});
</script>

<style scoped>
#navbar {
  background: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 3.4rem;
  color: #fdfdfd;
}

.title::first-letter {
  color: #42b983;
}

#nav {
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

#nav a {
  font-weight: bold;
  font-size: 1.5rem;
  color: #fdfdfd;
  text-decoration: none;
}

.nav-item {
  margin: 0 5px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* .sign-out {
  color: #42b983;
} */
</style>