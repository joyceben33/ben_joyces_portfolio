<template>
  <div id="hero" dark>
    <v-img :src="require('../assets/golden_gate_0002.jpeg')" height="500px">
      <div id="hero-gradient" class="d-flex align-center">
        <v-container>
          <v-row class="text-center">
            <v-col>
              <!-- Who Are You? -->
              <span id="typer-constant">Describe Yourself?</span>
              <h1>
                <vue-typer
                  class="d-block d-sm-inline"
                  :text="vueTypeOptions"
                  :repeat="Infinity"
                  :shuffle="false"
                  initial-action="typing"
                  :pre-type-delay="1000"
                  :type-delay="100"
                  :pre-erase-delay="2000"
                  :erase-delay="40"
                  erase-style="backspace"
                  :erase-on-complete="false"
                  caret-animation="smooth"
                />
              </h1>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-img>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Hero extends Vue {
  vueTypeOptions = [
    'Software Engineer',
    'NC State Alum',
    'Tennis & Pickleball Player',
    'Nutrition Enthusiast',
    'Golfer',
    'Gym Advocate',
  ];
}
</script>

<style lang="scss">
#hero-gradient {
  background-image: linear-gradient(to right top, rgba(36, 36, 36, 0.9), rgba(25, 32, 72, 0.9));
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  padding-top: 64px;
}

#typer-constant {
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  color: #ffffff;
}

.vue-typer {
  line-height: 1;
  padding-top: 10px;
}

.vue-typer .custom.char.typed {
  color: #8c9eff;
}

.vue-typer .custom.caret {
  height: 2rem;
  background-color: #8c9eff;
  width: 6px;
  border-radius: 5px;
  margin-left: 5px;
}

@media screen and (min-width: 960px) {
  .vue-typer .custom.caret {
    height: 2.75rem;
  }
}
</style>
