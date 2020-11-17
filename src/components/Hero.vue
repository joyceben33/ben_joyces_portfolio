<template>
  <div id="hero" dark>
    <v-img :src="require('../assets/golden_gate_0002.jpeg')" height="500px">
      <div id="hero-gradient">
        <v-container>
          <div></div>
        </v-container>
      </div>
    </v-img>
  </div>
</template>

<style lang="scss">
#hero-gradient {
  background-image: linear-gradient(to right top, rgba(36, 36, 36, 0.9), rgba(25, 32, 72, 0.7));
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  padding-top: 64px;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Hero extends Vue {}
</script>
