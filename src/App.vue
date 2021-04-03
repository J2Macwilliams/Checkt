<template>
  <div id="app">
    <TheHeader />
    <amplify-authenticator>
      <router-view />
    </amplify-authenticator>
  </div>
</template>

<script >
import { defineComponent } from "vue";
import TheHeader from "./components/TheHeader";
import { mapMutations } from "vuex";

export default defineComponent({
  name: "App",
  components: {
    TheHeader,
  },
  methods: {
    ...mapMutations(["setAuth", "clearAuth"]),
  },
  created() {
    this.setAuth();
  },
  beforeUnmount() {
    this.clearAuth();
  },
});
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #dffaea;
  max-width: 100%;
  height: 100vh;
  max-height: 100vh;
  font-size: 62.5%;
}

:root {
  --amplify-primary-color: #42b983;
  --amplify-primary-tint: #afafaf;
  --amplify-primary-shade: #2c3e50;
}
</style>
