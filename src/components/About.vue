<template>
  <section id="about">
    <v-container>
      <v-row>
        <v-col class="text-center" cols="12" md="12" lg="12" xl="12">
          <h2>About Me</h2>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col align-self="center" cols="12" sm="12" md="12" lg="4" xl="2">
          <v-img id="about-profile-img" :src="require('../assets/bnw_profile.jpeg')" max-width="350px"></v-img>
        </v-col>
        <v-col align-self="center" cols="12" sm="12" md="12" lg="6" xl="6">
          <p>
            I have always been fascinated by technology and became a huge Apple fan-boy exemplified by jailbreaking my
            iPhone when I was 12. My two older brothers created a technology-focused startup that only furthered my
            desire to learn more about technology. This led me to focus my studies at NC State in Information
            Technology. While in college, I realized that software engineering was my true passion. Upon graduation, I
            decided to sharpen my software engineering skillset at Project Shift, a 13 week-long immersive full-stack
            fellowship.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="scss">
#about-profile-img {
  border-radius: 50%;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class About extends Vue {}
</script>
