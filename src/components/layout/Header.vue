<template>
  <v-app-bar absolute flat color="transparent" dark>
    <div>
      <v-img
        id="profile-pic"
        alt="Vuetify Logo"
        contain
        :src="require('../../assets/profile_pic001.jpeg')"
        transition="scale-transition"
        width="54"
      />
    </div>
    <h1 id="profile-name">Ben Joyce</h1>

    <v-spacer></v-spacer>

    <v-btn text>
      <v-icon>mdi-face</v-icon>
      <h3>About</h3>
    </v-btn>
    <v-btn text>
      <v-icon>mdi-laptop</v-icon>
      <h3>Projects</h3>
    </v-btn>
    <v-btn text>
      <v-icon>mdi-cellphone-iphone</v-icon>
      <h3>Contact</h3>
    </v-btn>
  </v-app-bar>
</template>
<style lang="scss">
#profile-pic {
  border-radius: 50%;
}

#profile-name {
  padding-left: 10px;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Header extends Vue {}
</script>
