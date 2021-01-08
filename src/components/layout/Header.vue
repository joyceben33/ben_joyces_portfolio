<template>
  <v-app-bar class="pt-0" absolute flat color="transparent" height="85" dark>
    <div>
      <v-img
        class="rounded-circle"
        contain
        :src="require('../../assets/profile_pic001.jpeg')"
        transition="scale-transition"
        width="55"
      />
    </div>
    <h1 id="profile-name" class="mb-0 ml-2 mt-2">Ben Joyce</h1>

    <v-spacer></v-spacer>
    <div id="desktopMenu" class="hidden-md-and-down">
      <v-btn class="rounded-pill" @click="scrollTo('#about')" text>
        <v-icon>mdi-face</v-icon>
        <h3>About</h3>
      </v-btn>
      <v-btn class="rounded-pill" @click="scrollTo('#portfolio')" text>
        <v-icon>mdi-laptop</v-icon>
        <h3>Portfolio</h3>
      </v-btn>
      <v-btn class="rounded-pill" @click="scrollTo('#contact')" text>
        <v-icon>mdi-cellphone-iphone</v-icon>
        <h3>Contact</h3>
      </v-btn>
    </div>
    <!-- mobile menu below -->
    <div class="hidden-lg-and-up">
      <v-app-bar-nav-icon default="mdiMenu" @click.stop="toggleMobileDrawer()"></v-app-bar-nav-icon>
      <v-overlay @click.native="toggleMobileDrawer()" :value="mobileDrawer"></v-overlay>
      <v-navigation-drawer light v-model="mobileDrawer" app fixed hide-overlay right temporary>
        <v-list>
          <v-list-item @click="mobileScrollTo('#about')">
            <v-list-item-icon>
              <v-icon>mdi-face</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="mobileScrollTo('#portfolio')">
            <v-list-item-icon>
              <v-icon>mdi-laptop</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Portfolio</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="mobileScrollTo('#contact')">
            <v-list-item-icon>
              <v-icon>mdi-cellphone-iphone</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </v-app-bar>
</template>
<style lang="scss">
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

.v-overlay {
  height: 100vh;
}

.v-app-bar {
  padding-top: 0.5rem;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mdiMenu } from '@mdi/js';

@Component({
  components: {},
})
export default class Header extends Vue {
  mdiMenu = mdiMenu;

  mobileDrawer: boolean | null = null;

  scrollTo(id: string) {
    this.$vuetify.goTo(id, { duration: 1000, offset: -25, easing: 'easeInOutCubic' });
  }

  mobileScrollTo(id: string) {
    this.toggleMobileDrawer();
    this.$vuetify.goTo(id, { duration: 1000, offset: -25, easing: 'easeInOutCubic' });
  }

  toggleMobileDrawer() {
    this.mobileDrawer = !this.mobileDrawer;
    const bodyTag = document.getElementsByTagName('body')[0];
    if (this.mobileDrawer) {
      bodyTag.style.overflow = 'hidden';
      bodyTag.style.height = '100vh';
    } else {
      bodyTag.style.removeProperty('overflow');
      bodyTag.style.removeProperty('height');
    }
  }
}
</script>
