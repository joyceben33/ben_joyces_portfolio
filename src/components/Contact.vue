<template>
  <section id="contact">
    <address>
      <v-container>
        <v-row class="d-flex align-start">
          <v-col class="text-center" cols="12" md="12" lg="12" xl="12">
            <h2>Contact</h2>
          </v-col>
        </v-row>

        <div class="d-flex justify-center flex-wrap mx-n2">
          <v-btn class="text-decoration-none ma-2" href="tel:3364550205" elevation="2" rounded large>
            <v-icon large>{{ mdiPhone }}</v-icon>
            336&centerdot;455&centerdot;0205
          </v-btn>
          <v-btn class="text-decoration-none ma-2" href="mailto:joyceben33@gmail.com" elevation="2" rounded large>
            <v-icon large>{{ mdiEmail }}</v-icon>
            joyceben33@gmail.com
          </v-btn>
        </div>
      </v-container>
    </address>
  </section>
</template>

<style lang="scss"></style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mdiPhone, mdiEmail } from '@mdi/js';

@Component({})
export default class Contact extends Vue {
  mdiPhone = mdiPhone;

  mdiEmail = mdiEmail;
}
</script>
