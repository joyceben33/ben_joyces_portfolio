<template>
  <v-footer class="d-block py-2" dark color="primary">
    <v-container>
      <!-- Social Media Icons -->
      <v-row class="text-center">
        <v-col>
          <v-btn x-large icon target="_blank" href="https://www.linkedin.com/in/ben-marlow-joyce/">
            <v-icon>{{ mdiLinkedin }}</v-icon>
          </v-btn>

          <v-btn x-large icon target="_blank" href="https://github.com/joyceben33">
            <v-icon>{{ mdiGithub }}</v-icon>
          </v-btn>
          <v-btn x-large icon target="_blank" href="https://www.facebook.com/ben.joyce.3363/">
            <v-icon>{{ mdiFacebook }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <!-- legal info -->
      <v-row class="text-center">
        <v-col>&copy; {{ new Date().getFullYear() }} Ben Joyce, All rights reserved</v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style lang="scss">
.v-footer {
  a,
  button {
    opacity: 0.7;
    will-change: opacity;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 1;
    }
  }
}
footer {
  color: #bdbdbd !important;
}

.appBarContent {
  width: 100%;
  height: 100%;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mdiFacebook, mdiGithub, mdiLinkedin } from '@mdi/js';

@Component({})
export default class Footer extends Vue {
  mdiFacebook = mdiFacebook;

  mdiGithub = mdiGithub;

  mdiLinkedin = mdiLinkedin;
}
</script>
