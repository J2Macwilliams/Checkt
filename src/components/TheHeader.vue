<template>
  <header id="navbar">
    <h1 class="title">Check't</h1>
    <div v-if="getAuthState === 'signedin'">
      <Burger class="lg:hidden flex justify-end" />

      <nav
        id="nav"
        class="lg:flex lg:visible hidden ease-in-out"
        :class="{ active: getNavStatus }"
      >
        <ul class="lg:flex items-center justify-between">
          <li @click.prevent="toggleNav">
            <router-link class="nav-item" to="/">Shopping</router-link>
          </li>
          <li>
            <router-link class="nav-item" to="/about">About</router-link>
          </li>
          <li><span @click="signOut" class="sign-out">SignOut</span></li>
        </ul>
      </nav>
    </div>
  </header>
 
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import { Auth } from "aws-amplify";
import Burger from "./menu/Burger";

export default defineComponent({
  name: "TheHeader",
  components: { Burger },
  computed: mapGetters(["getAuthState", "getNavStatus"]),
  methods: {
    ...mapMutations(["toggleNav"]),
    signOut() {
      Auth.signOut();
    },
  },
});
</script>

<style scoped>
#navbar {
  position: fixed;
  width: 100%;
  min-height: 50px;
  background: #2c3e50;
  display: flex;
  justify-content: flex-end;
  padding: 7px;
  z-index: 10;
}

.title {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: white;
}

.title::first-letter {
  color: #42b983;
}

#nav.active {
  display: block;
  visibility: visible;
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

.sign-out {
  font-weight: bold;
  font-size: 1.5rem;
  color: #afafaf;
  margin: 0 5px;
  text-decoration: none;
  cursor: pointer;
}

.overlay {
  z-index: 1;
}
.overlay.active {
  background-color: rgba(19, 15, 64, 0.4);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

li {
  text-decoration: none;
}
</style>