<template>
  <div id="burger" :class="{'active': getNavStatus}" @click.prevent="toggleNav">
    <slot>
      <div class="burger-button" title="Menu">
        <span class="hidden">Toggle menu</span>
        <span class="burger-bar bar-1"></span>
        <span class="burger-bar bar-2"></span>
        <span class="burger-bar bar-3"></span>
      </div>
    </slot>
  </div>

</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations} from 'vuex'
export default defineComponent({
  name: "Burger",
 computed: mapGetters(['getNavStatus']),
 methods: mapMutations(['toggleNav'])
});
</script>

<style >
.hidden {
  visibility: hidden;
}

.burger-button {
   cursor: pointer;
  position: relative;
  height: 30px;
  width: 32px;
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: #42b983;
  position: absolute;
  top: 50%;
  right: 4px;
  left: 4px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.bar-1 {
  -webkit-transform: translateY(-8px);
  transform: translateY(-8px);
}

.bar-2 {
  transform-origin: 100% 50%;
  transform: scaleX(0.8);
}

.burger-button:hover .bar-2 {
  transform: scaleX(1);
}

.no-touchevents .bar-2:hover {
  transform: scaleX(1);
}

.bar-3 {
  transform: translateY(8px);
}

#burger.active .burger-button {
  transform: rotate(180deg);
}

#burger.active .burger-bar {
  background-color: #fff;
}

#burger.active .bar-1 {
  transform: rotate(45deg);
}

#burger.active .bar-2 {
  opacity: 0;
}

#burger.active .bar-3 {
  transform: rotate(-45deg);
}
</style>