<template>
  <section id="portfolio">
    <v-container>
      <v-row>
        <v-col class="text-center" cols="12" md="12" lg="12" xl="12">
          <h2>Portfolio</h2>
        </v-col>
        <v-col v-for="project in portfolio.projects" :key="project.id" cols="12" sm="6" md="4" lg="3">
          <v-card :href="project.deploy_link" target="_blank" hover outlined height="100%">
            <v-img :src="require(`../assets/${project.preview_img}`)"></v-img>
            <v-card-title>{{ project.project_name }}</v-card-title>
            <v-card-text>{{ project.project_description }}</v-card-text>
            <v-divider class="mx-4"></v-divider>
            <!-- Technologies Used -->
            <v-card-title>Technologies Used:</v-card-title>
            <v-list-tile-action>
              <v-btn
                v-for="tech in project.technologies"
                :key="tech"
                :href="tech.docs_link"
                target="_blank"
                x-large
                icon
              >
                <v-icon large>{{ tech.icon }}</v-icon>
              </v-btn>
            </v-list-tile-action>
            <v-divider class="mx-4"></v-divider>
            <!-- Code Repository -->
            <v-card-title>Code Repository:</v-card-title>
            <v-list-tile-action>
              <v-btn x-large icon :href="project.repo_link" target="_blank">
                <v-icon large>{{ mdiGithub }}</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="scss"></style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mdiNuxt, mdiNodejs, mdiVuetify, mdiLanguageTypescript, mdiAws, mdiLambda, mdiGithub } from '@mdi/js';

@Component({})
export default class Portfolio extends Vue {
  portfolio: portfolio = {
    projects: [
      {
        project_name: 'Pomona Pipe Products',
        project_description: `In my postion as a contract full-stack developer, another developer and I architected and engineered a workflow for updating the company's website.`,
        preview_img: 'pomona_screenshot.png',
        deploy_link: 'https://www.pomonasupply.com/',
        repo_link: 'https://github.com/pomona-pipe/pomona-site-v2',
        technologies: [
          {
            name: 'Nuxt.js',
            icon: mdiNuxt,
            docs_link: 'https://nuxtjs.org/',
          },
          {
            name: 'Typescript',
            icon: mdiLanguageTypescript,
            docs_link: 'https://www.typescriptlang.org/',
          },
          {
            name: 'Node.js',
            icon: mdiNodejs,
            docs_link: 'https://nodejs.org/en/',
          },
          {
            name: 'Vuetify.js',
            icon: mdiVuetify,
            docs_link: 'https://vuetifyjs.com/en/',
          },
          {
            name: 'AWS',
            icon: mdiAws,
            docs_link: 'https://aws.amazon.com/',
          },
          {
            name: 'Lambda',
            icon: mdiLambda,
            docs_link: 'https://aws.amazon.com/lambda/',
          },
        ],
      },
    ],
  };

  mdiGithub = mdiGithub;
}
</script>
