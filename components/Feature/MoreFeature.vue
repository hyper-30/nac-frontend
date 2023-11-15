<template>
  <div class="feature-more">
    <v-container>
      <v-row id="feature1" class="feature-item">
        <v-col
          md="6"
          class="px-6"
          cols="12"
        >
          <div
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <h3 class="text-center text-md-start use-text-title mb-6">
              Tired of configuring your equipment?
            </h3>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            <p class="text-center text-md-start">
              With our solution, you can configure your equipment once and never have to touch it again.
              We will take care of the rest, so you can focus on what matters. Not just that,
              we will also provide you support for your equipment.
            </p>
          </div>
        </v-col>
        <v-col
          md="6"
          class="px-6"
          cols="12"
        >
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            <div class="deco1" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="600"
          >
            <figure class="img">
              <img
                :src="imgAPI.photo[5]"
                alt="img"
              >
            </figure>
          </div>
        </v-col>
      </v-row>
      <v-row class="feature-item">
        <v-col
          :order="isTablet ? 'last' : 'first'"
          md="6"
          class="px-6"
          cols="12"
        >
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            <div class="deco1" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="600"
          >
            <figure class="img">
              <img
                :src="imgAPI.photo[0]"
                alt="img"
              >
            </figure>
          </div>
        </v-col>
        <v-col
          :order="isTablet ? 'first' : 'last'"
          md="6"
          class="px-6"
          cols="12"
        >
          <div
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <h3 class="text-center text-md-start use-text-title mb-7 display-3">
              You already have a network-solution? No problem.
            </h3>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="600"
          >
            <p class="text-center text-md-start text">
              Let's say you already have a network-solution, but you are not satisfied with it.
              We can help you with that. We can integrate our solution with your existing network.
              We can also help you with the migration process.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          md="12"
          class="px-6"
          cols="12"
        >
          <div class="last text-center">
            <div
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h3 class="use-text-title mb-6 display-2">
                Awesome Network Controll with - My Clouddle
              </h3>
            </div>
            <div
              data-aos="fade-up"
              duration="0.6s"
              delay="0.3s"
            >
              <p class="text">
                ClouddleNAC Provides dashboards for everyone. <br>
                Whether you are a guest, manager or an admin, <br>
                you can take a set of actions to make your life easier.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              <div class="deco2" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="500"
            >
              <figure class="img-full">
                <img
                  :src="imgAPI.photo[1]"
                  alt="img"
                >
              </figure>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import './feature-styles';
</style>

<script>
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';

export default {
  data() {
    return {
      imgAPI,
    };
  },
  computed: {
    isTablet() {
      const mdDown = this.$vuetify.display.smAndDown;
      return mdDown;
    },
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
