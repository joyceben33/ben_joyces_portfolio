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
          href="https://www.google.com/maps/place/Charleston,+SC/@32.8212559,-80.1105616,11z/data=!3m1!4b1!4m5!3m4!1s0x88fe7a42dca82477:0x35faf7e0aee1ec6b!8m2!3d32.7764749!4d-79.9310512"
          target="_blank"
          elevation="2"
          dark
          rounded
          large
        >
          <v-icon class="pr-2">{{ mdiMapMarker }}</v-icon>
          Raleigh, NC
        </v-btn>
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
