<template>
  <v-footer class="d-block py-2" dark color="primary">
    <v-container>
      <!-- Social Media Icons -->
      <div class="d-flex justify-center mb-2">
        <v-btn large icon target="_blank" href="https://github.com/joyceben33" class="mx-1">
          <v-icon>{{ siGithub.path }}</v-icon>
        </v-btn>
        <v-btn large icon target="_blank" href="https://www.linkedin.com/in/ben-marlow-joyce/" class="mx-1">
          <v-icon>{{ siLinkedin.path }}</v-icon>
        </v-btn>
        <v-btn large icon target="_blank" href="https://www.facebook.com/ben.joyce.3363/" class="mx-1">
          <v-icon>{{ siFacebook.path }}</v-icon>
        </v-btn>
      </div>
      <v-divider></v-divider>
      <!-- legal info -->
      <v-row class="text-center">
        <v-col>&copy; {{ `${presentYear} Ben Joyce, All rights reserved` }} </v-col>
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
      color: #ffffff !important;
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
import { siFacebook, siGithub, siLinkedin } from 'simple-icons';

@Component({})
export default class Footer extends Vue {
  siFacebook = siFacebook;

  siGithub = siGithub;

  siLinkedin = siLinkedin;

  presentYear = new Date().getFullYear();
}
</script>
