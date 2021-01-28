<template>
  <section id="contact">
    <v-container>
      <v-row class="d-flex align-start">
        <v-col class="text-center" cols="12" md="12" lg="12" xl="12">
          <h2>Contact</h2>
        </v-col>
      </v-row>

      <div class="d-flex justify-center flex-wrap mx-n2">
        <v-btn
          class="text-decoration-none ma-2"
          href="https://www.google.com/maps/place/Greensboro,+NC/@36.1001779,-79.9734642,11z/data=!3m1!4b1!4m5!3m4!1s0x8853193f38c77b79:0x93b9c49478be12c8!8m2!3d36.0726354!4d-79.7919754"
          target="_blank"
          elevation="2"
          dark
          rounded
          large
        >
          <v-icon class="pr-2">{{ mdiMapMarker }}</v-icon>
          Greensboro, NC
        </v-btn>
        <!-- commented out phone # for privacy -->
        <!-- <v-btn class="text-decoration-none ma-2" href="tel:3364550205" elevation="2" dark rounded large>
          <v-icon class="pr-2">{{ mdiPhone }}</v-icon>
          336&centerdot;455&centerdot;0205
        </v-btn> -->
        <v-btn class="text-decoration-none ma-2" href="mailto:joyceben33@gmail.com" elevation="2" dark rounded large>
          <v-icon class="pr-2">{{ mdiEmail }}</v-icon>
          joyceben33@gmail.com
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<style lang="scss"></style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mdiPhone, mdiEmail, mdiMapMarker } from '@mdi/js';

@Component({})
export default class Contact extends Vue {
  mdiPhone = mdiPhone;

  mdiEmail = mdiEmail;

  mdiMapMarker = mdiMapMarker;
}
</script>
