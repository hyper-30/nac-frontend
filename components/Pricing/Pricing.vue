<template>
  <v-container>
    <h3 class="use-text-title text-center mb-4">
      Pricing and Plan
    </h3>
    <p class="use-text-subtitle2 text-center mb-4">
      We are going to talk about this. <br>
      Schedule a demo with us, instead of bitting the story.
    </p>
    <div class="pricing-wrap">
      <v-row align="center" class="blur">
        <v-col
          v-for="(tier, index) in tiers"
          :key="index"
          md="3"
          sm="6"
          cols="12"
          class="px-5"
        >
          ß
          <pricing-card
            :title="tier.title"
            :subheader="tier.subheader"
            :price="tier.price"
            :description="tier.description"
            :button-text="tier.buttonText"
            :button-variant="tier.buttonVariant"
          />
        </v-col>
      </v-row>
      <div class="schedule-call">
        <v-btn color="primary" large class="mt-10" @click="scheduleDemo">
          Schedule a call
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
@import './pricing-style';

.pricing-wrap {
  position: relative;
}

.schedule-call {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>

<script>
import PricingCard from '../Cards/PricingCard';

export default {
  components: {
    PricingCard,
  },
  data() {
    return {
      tiers: [
        {
          title: 'Free',
          price: '0',
          description: ['10 users included', '2 GB of storage'],
          buttonText: 'Sign up for free',
          buttonVariant: 'outlined',
        },
        {
          title: 'Personal',
          price: '15',
          description: [
            '15 users included',
            '10 GB of storage',
            'Help center access',
          ],
          buttonText: 'Get started',
          buttonVariant: 'outlined',
        },
        {
          title: 'Pro',
          subheader: 'Most popular',
          price: '500',
          description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
          ],
          buttonText: 'Get started',
          buttonVariant: 'contained',
        },
        {
          title: 'Enterprise',
          price: '599999',
          description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
          ],
          buttonText: 'Contact us',
          buttonVariant: 'outlined',
        },
      ],
    };
  },
  methods: {
    scheduleDemo() {
      // Add your code to schedule a demo here
    },
  },
};
</script>

<style>
  .blur {
    filter: blur(5px);
  }
</style>
