<template>
  <div id="hero" dark>
    <v-img :src="require('../assets/golden_gate_0002.jpeg')" height="500px">
      <div id="hero-gradient" class="d-flex align-center">
        <v-container>
          <v-row class="text-center">
            <v-col>
              <h1 class="d-md-inline-block">I'm</h1>
              &nbsp;
              <vue-typer
                :text="[
                  'a Software Developer',
                  'an NC State Alumnus',
                  'a Tennis Enthusiast',
                  'a Traveler',
                  'an Outdoorsman',
                ]"
                :repeat="Infinity"
                :shuffle="false"
                initial-action="typing"
                :pre-type-delay="1000"
                :type-delay="100"
                :pre-erase-delay="3000"
                :erase-delay="150"
                erase-style="backspace"
                :erase-on-complete="false"
                caret-animation="smooth"
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

.vue-typer .custom.caret {
  height: 3rem;
  background-color: #ffffff;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Hero extends Vue {}
</script>
