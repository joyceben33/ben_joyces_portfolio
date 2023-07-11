<template>
  <section id="portfolio">
    <v-container fluid>
      <v-row>
        <v-col class="text-center" cols="12" md="12" lg="12" xl="12">
          <h2>Portfolio</h2>
        </v-col>
      </v-row>
      <div class="portfolio-container">
        <v-row>
          <v-col
            v-for="project in projects"
            :key="project.name"
            cols="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
            class="py-lg-12 py-xl-12 py-6"
          >
            <v-card
              :id="project.scrollTag"
              :href="project.deployLink"
              target="_blank"
              tile
              hover
              outlined
              height="100%"
            >
              <v-img :src="project.image ? require(`../assets/${project.image}`) : ''" height="250px"></v-img>
              <v-container>
                <div class="my-2">
                  <v-card-title>{{ project.name }}</v-card-title>
                </div>
                <v-card-subtitle class="font-weight-medium">Description:</v-card-subtitle>
                <v-card-text>{{ project.description }}</v-card-text>
                <v-divider class="mx-4"></v-divider>
                <!-- Technologies Used -->
                <v-card-subtitle class="font-weight-medium">Technologies Used:</v-card-subtitle>
                <v-card-actions class="flex-wrap">
                  <v-btn
                    v-for="tech in project.technologies"
                    :key="tech.name"
                    :href="tech.docsLink"
                    target="_blank"
                    :title="tech.name"
                    large
                    icon
                  >
                    <v-icon>{{ tech.icon }}</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-divider class="mx-4"></v-divider>
                <!-- Code Repository -->
                <v-card-subtitle class="font-weight-medium">{{
                  project.isOrg ? `Organization's Repository:` : 'Code Repository:'
                }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn icon :href="project.repoLink" target="_blank">
                    <v-icon>{{ siGithub.path }}</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<style lang="scss">
@import '~vuetify/src/styles/settings/_variables';

// xl
@media screen and (min-width: 1904px) {
  .portfolio-container {
    padding-left: 352px;
    padding-right: 352px;
  }
}
// lg-xl
@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .portfolio-container {
    padding-left: 128px;
    padding-right: 128px;
  }
}
// md-lg
@media screen and (min-width: 960px) and (max-width: 1264px) {
  .portfolio-container {
    padding-left: 64px;
    padding-right: 64px;
  }
}
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
import {
  siNuxtdotjs,
  siTypescript,
  siJavascript,
  siNodedotjs,
  siVuetify,
  siAmazons3,
  siAwslambda,
  siServerless,
  siJest,
  siGithub,
  siPostgresql,
  siAmazonec2,
  siDocker,
  siVuedotjs,
  siQuasar,
  siBootstrap,
  siSequelize,
  siMysql,
  siAmazonrds,
  siAmazoneks,
  siAmazonapigateway,
  siCypress,
} from 'simple-icons';
/* @ts-ignore no-unused-vars */
import type { IProject } from '@/types/project';
/* Docs for Simple-icons https://simpleicons.org/ */
@Component
export default class Portfolio extends Vue {
  projects: IProject[] = [
    {
      name: 'LASSO',
      isOrg: true,
      scrollTag: 'lasso',
      description: `LASSO is a SaaS company, that sells software to companies in the live event industry. In my role here I worked with four other engineers, one UI/UX designer and one Product Owner. I played a role in the development of two different products from the ground up, which involved constant communication between the Product Owner and the engineering team. My responsibilities as a Software Engineer III were database development, api development, and front end development. Some of the individual contributions include creating a private component library utilizing GitHub’s Private NPM Registry, developing a real-time collaborative note editing tool with TalkJs, CRUD api routes that leveraged Zod Schema pattern matching, Casbin for permissions, and Sequelize as our ORM.`,
      image: 'lasso_screenshot.png',
      deployLink: 'https://www.lasso.io/',
      repoLink: 'https://github.com/lassoworkforce',
      technologies: [
        {
          name: 'Typescript',
          icon: siTypescript.path,
          docsLink: 'https://www.typescriptlang.org/',
        },
        {
          name: 'Javascript',
          icon: siJavascript.path,
          docsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: 'Vue.js',
          icon: siVuedotjs.path,
          docsLink: 'https://vuejs.org/',
        },
        {
          name: 'Bootstrap',
          icon: siBootstrap.path,
          docsLink: 'https://getbootstrap.com/',
        },
        {
          name: 'Cypress',
          icon: siCypress.path,
          docsLink: 'https://www.cypress.io/',
        },
        {
          name: 'Node.js',
          icon: siNodedotjs.path,
          docsLink: 'https://nodejs.org/en/',
        },
        {
          name: 'Sequelize',
          icon: siSequelize.path,
          docsLink: 'https://sequelize.org/',
        },
        {
          name: 'MySQL',
          icon: siMysql.path,
          docsLink: 'https://www.mysql.com/',
        },
        {
          name: 'AWS RDS',
          icon: siAmazonrds.path,
          docsLink: 'https://aws.amazon.com/rds/',
        },
        {
          name: 'AWS Lambda',
          icon: siAwslambda.path,
          docsLink: 'https://aws.amazon.com/lambda/',
        },
        {
          name: 'AWS S3',
          icon: siAmazons3.path,
          docsLink: 'https://aws.amazon.com/s3/',
        },
        {
          name: 'AWS EC2',
          icon: siAmazonec2.path,
          docsLink: 'https://aws.amazon.com/ec2/',
        },
        {
          name: 'AWS EKS',
          icon: siAmazoneks.path,
          docsLink: 'https://aws.amazon.com/eks/',
        },
        {
          name: 'Docker',
          icon: siDocker.path,
          docsLink: 'https://www.docker.com/',
        },
      ],
    },
    {
      name: 'Pacific Arc, Inc.',
      isOrg: true,
      scrollTag: 'pacific-arc',
      description:
        'Pacific Arc, Inc. is an architectural design tool wholesaler. In my role here I helped build an internal web application that provided tools to help with different workflows within the business. Some of the workflows / features I developed were order fulfillment, order analytics, order logistics, & inventory management. In addition to being an engineer on the product team, I also held responsibilities in their dev-ops department. Some of the dev-ops contributions include AWS Cognito & IAM User Management, setting up a CI/CD pipeline, & migrating Docker Image from Linux to Linux 2.',
      image: 'pacific_arc_screenshot.png',
      deployLink: 'https://www.pacificarc.us/',
      repoLink: 'https://github.com/Pacific-Arc',
      technologies: [
        {
          name: 'Typescript',
          icon: siTypescript.path,
          docsLink: 'https://www.typescriptlang.org/',
        },
        {
          name: 'Javascript',
          icon: siJavascript.path,
          docsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: 'Vue.js',
          icon: siVuedotjs.path,
          docsLink: 'https://vuejs.org/',
        },
        {
          name: 'Quasar',
          icon: siQuasar.path,
          docsLink: 'https://quasar.dev/',
        },
        {
          name: 'Node.js',
          icon: siNodedotjs.path,
          docsLink: 'https://nodejs.org/en/',
        },
        {
          name: 'PostgreSQL',
          icon: siPostgresql.path,
          docsLink: 'https://www.postgresql.org/',
        },
        {
          name: 'AWS RDS',
          icon: siAmazonrds.path,
          docsLink: 'https://aws.amazon.com/rds/',
        },
        {
          name: 'AWS Lambda',
          icon: siAwslambda.path,
          docsLink: 'https://aws.amazon.com/lambda/',
        },
        {
          name: 'AWS API Gateway',
          icon: siAmazonapigateway.path,
          docsLink: 'https://aws.amazon.com/api-gateway/',
        },
        {
          name: 'AWS S3',
          icon: siAmazons3.path,
          docsLink: 'https://aws.amazon.com/s3/',
        },
        {
          name: 'AWS EC2',
          icon: siAmazonec2.path,
          docsLink: 'https://aws.amazon.com/ec2/',
        },
        {
          name: 'AWS EKS',
          icon: siAmazoneks.path,
          docsLink: 'https://aws.amazon.com/eks/',
        },
        {
          name: 'Docker',
          icon: siDocker.path,
          docsLink: 'https://www.docker.com/',
        },
      ],
    },
    {
      name: 'Pomona Pipe Products',
      isOrg: true,
      scrollTag: 'pomona-pipe-products',
      description: `Pomona Pipe Products, Inc. is a civil engineering firm specializing in bridges and environmental construction. The company services a wide range of private businesses, municipalities, and state Departments of Transportation. In my role as a full-stack developer, I helped engineer the company's public-facing web application for marketing their products and services. The stack consists of a NuxtJs(SSR) Web Application, a Serverless Node API, AWS S3 Buckets, AWS CloudFront CDN, a Headless CMS (Prismic.io), Algolia Search Engine, and a server-side rendering web application. In addition I have also worked to improve the company's search engine rankings by optimizing meta data and forming a link-building strategy through social media.`,
      image: 'pomona_screenshot.png',
      deployLink: 'https://pomonapipeproducts.com/',
      repoLink: 'https://github.com/pomona-pipe/',
      technologies: [
        {
          name: 'Typescript',
          icon: siTypescript.path,
          docsLink: 'https://www.typescriptlang.org/',
        },
        {
          name: 'Javascript',
          icon: siJavascript.path,
          docsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: 'Nuxt.js',
          icon: siNuxtdotjs.path,
          docsLink: 'https://nuxtjs.org/',
        },
        {
          name: 'Vuetify.js',
          icon: siVuetify.path,
          docsLink: 'https://vuetifyjs.com/en/',
        },
        {
          name: 'Jest',
          icon: siJest.path,
          docsLink: 'https://jestjs.io/',
        },
        {
          name: 'Node.js',
          icon: siNodedotjs.path,
          docsLink: 'https://nodejs.org/en/',
        },
        {
          name: 'Serverless',
          icon: siServerless.path,
          docsLink: 'https://www.serverless.com/cloud/docs',
        },
        {
          name: 'AWS Lambda',
          icon: siAwslambda.path,
          docsLink: 'https://aws.amazon.com/lambda/',
        },
        {
          name: 'AWS API Gateway',
          icon: siAmazonapigateway.path,
          docsLink: 'https://aws.amazon.com/api-gateway/',
        },
        {
          name: 'AWS S3',
          icon: siAmazons3.path,
          docsLink: 'https://aws.amazon.com/s3/',
        },
        {
          name: 'AWS EC2',
          icon: siAmazonec2.path,
          docsLink: 'https://aws.amazon.com/ec2/',
        },
        {
          name: 'AWS EKS',
          icon: siAmazoneks.path,
          docsLink: 'https://aws.amazon.com/eks/',
        },
        {
          name: 'Docker',
          icon: siDocker.path,
          docsLink: 'https://www.docker.com/',
        },
      ],
    },
  ];

  siGithub = siGithub;
}
</script>
