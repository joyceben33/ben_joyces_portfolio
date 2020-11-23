<template>
  <section id="contact">
    <address>
      <v-container>
        <v-row class="d-flex align-start">
          <v-col class="text-center" cols="12" md="12" lg="12" xl="12">
            <h2>Contact</h2>
          </v-col>
          <v-col class="text-center" cols="12">
            <p>
              <a class="text-decoration-none" href="tel:3364550205">
                <v-icon x-large>{{ mdiPhone }}</v-icon>
                <span class="text-decoration-underline">336&centerdot;455&centerdot;0205</span>
              </a>
            </p>
            <p>
              <a class="text-decoration-none" href="mailto:joyceben33@gmail.com">
                <v-icon large>{{ mdiEmail }}</v-icon>
                <span class="text-decoration-underline">joyceben33@gmail.com</span>
              </a>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </address>
  </section>
</template>

<style lang="scss">
a {
  text-decoration: none;
  &:hover {
    color: #303030 !important;
  }
}
</style>

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
