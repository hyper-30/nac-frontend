<template>
  <div class="main-wrap">
    <main-header />
    <banner />
    <div class="space-top-short">
      <v-container fluid>
        <v-card outlined class="text-center" color="transparent">
          <v-card-title class="mb-2">
            <v-icon class="mr-2" size="24">
              mdi-battery-charging
            </v-icon>
            You probably wonder... are batteries included?
            <v-icon class="ml-2" size="24">
              mdi-battery-charging
            </v-icon>
          </v-card-title>
          <v-card-subtitle class="mb-2">
            Yes they are. We are even providing a charger! <v-icon>mdi-charger</v-icon>
          </v-card-subtitle>
          <v-card-subtitle class="mb-2">
            Please see a list of already supported Network Controlers!
          </v-card-subtitle>
          <company-logo />
          <v-card-subtitle class="mb-2">
            <i>If you don't see your Network Controler in the list, please contact us and we will add it for you!</i>
          </v-card-subtitle>
        </v-card>
      </v-container>
    </div>
    <counter />
    <div class="space-top-short">
      <v-container>
        <v-row>
          <v-col md="6" cols="12" class="px-md-12">
            <about-video />
          </v-col>
          <v-col md="6" cols="12" class="px-md-12">
            <about-progress />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="space-bottom-short">
      <team-slider />
    </div>
    <div class="space-bottom-short">
      <photo-slider />
    </div>
    <call-action />
    <div class="space-top-short">
      <contact-map full />
    </div>
    <div id="footer">
      <main-footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/pages';
</style>

<script>
import brand from '@/assets/text/brand';
import Header from '@/components/Header';
import Banner from '@/components/Technology/Banner';
import CompanyLogo from '@/components/CompanyLogo';
import Counter from '@/components/Counter';
import Video from '@/components/Technology/Video';
import Progress from '@/components/Technology/Progress';
import TeamSlider from '@/components/Technology/TeamSlider';
import PhotoSlider from '@/components/Technology/PhotoSlider';
import CallAction from '@/components/CallAction';
import ContactMap from '@/components/Forms/ContactMap';
import Footer from '@/components/Footer';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Banner,
    CompanyLogo,
    Counter,
    'about-progress': Progress,
    'about-video': Video,
    TeamSlider,
    PhotoSlider,
    CallAction,
    ContactMap,
  },
  head() {
    return {
      title: brand.starter.name + ' - About',
    };
  },
});
</script>
