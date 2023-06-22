<template>
  <v-app-bar class="pt-0" absolute flat color="transparent" height="85" dark>
    <div>
      <v-app-bar-nav-icon default="mdiMenu" @click.stop="toggleMobileDrawer()"></v-app-bar-nav-icon>
      <v-overlay @click.native="toggleMobileDrawer()" :value="mobileDrawer"></v-overlay>
      <v-navigation-drawer light v-model="mobileDrawer" app fixed hide-overlay temporary>
        <v-list>
          <v-list-item @click="scrollTo('#about')">
            <v-list-item-icon>
              <v-icon>{{ 'mdi-account' }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>About Me</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="scrollTo('#portfolio')">
            <v-list-item-icon>
              <v-icon>{{ 'mdi-folder' }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Portfolio</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="scrollTo('#footer-social')">
            <v-list-item-icon>
              <v-icon>{{ 'mdi-account-group' }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Social</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>

    <v-spacer></v-spacer>

    <div>
      <h1 id="profile-name" class="mb-0">Ben Joyce</h1>
    </div>

    <v-spacer></v-spacer>
    <div>
      <v-img
        class="rounded-circle"
        contain
        :src="require('../../assets/profile_pic_square.jpeg')"
        transition="scale-transition"
        width="50px"
      />
    </div>
  </v-app-bar>
</template>

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

<style lang="scss">
//MY Name
#profile-name {
  font-family: 'Mr De Haviland', 'Poppins', sans-serif;
  font-size: 3rem;
  line-height: 1.25;
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

.v-overlay {
  height: 100vh;
}

.v-app-bar {
  padding-top: 0.5rem;
}

.nav-menu-item {
  font-size: 20px;
  margin: 0px 4px 0px 0px;
}
</style>
