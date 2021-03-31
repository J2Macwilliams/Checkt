<template>
  <div id="app">
    <TheHeader />
    <amplify-authenticator>
       <amplify-sign-out />
    </amplify-authenticator>
    <router-view />
  </div>
</template>

<script >
import { defineComponent } from "vue";
import TheHeader from "./components/TheHeader";
export default defineComponent({
  components: {
    TheHeader,
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
  color: #2c3e50;
  max-width: 100%;
  max-height: 100vh;
  font-size: 62.5%;
}


</style>
