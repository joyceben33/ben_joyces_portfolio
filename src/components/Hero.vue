<template>
  <div id="hero" dark>
    <v-img :src="require('../assets/golden_gate_0002.jpeg')" height="500px">
      <div id="hero-gradient">
        <v-container>
          <!-- <vue-typer text="HelloWorld"></vue-typer> -->
          <v-row class="text-center">
            <v-col>
              <h1>I'm</h1>
              <vue-typer
                :text="['Software Developer', 'NC State Alumnus', 'Tennis Enthusiast', 'Traveler', 'Outdoorsman']"
                :repeat="Infinity"
                :shuffle="false"
                initial-action="typing"
                :pre-type-delay="70"
                :type-delay="70"
                :pre-erase-delay="2000"
                :erase-delay="250"
                erase-style="backspace"
                :erase-on-complete="false"
                caret-animation="blink"
              />
            </v-col>
          </v-row>
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

h1 {
  color: #ffffff;
}

.vue-typer .custom.char.typed {
  color: #ffffff;
  font-size: 2em;
  font-weight: bolder;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Hero extends Vue {}
</script>
