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

    <v-btn @click="scrollTo('#about')" text>
      <v-icon>mdi-face</v-icon>
      <h3>About</h3>
    </v-btn>
    <v-btn @click="scrollTo('#portfolio')" text>
      <v-icon>mdi-laptop</v-icon>
      <h3>Portfolio</h3>
    </v-btn>
    <v-btn @click="scrollTo('#contact')" text>
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
  padding-top: 20px;
}

.v-app-bar {
  a,
  button {
    opacity: 0.7;
    will-change: opacity;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 1;
      color: #ffffff !important;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {},
})
export default class Header extends Vue {
  scrollTo(id: string) {
    this.$vuetify.goTo(id, { duration: 1000, offset: -25, easing: 'easeInOutCubic' });
  }
}
</script>
