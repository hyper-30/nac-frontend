<template>
  <div class="page-section">
    <v-row>
      <v-col
        class="px-6"
        sm="4"
        cols="12"
      >
        <div class="feature-list">
          <v-icon
            color="primary"
            class="icon"
          >
            mdi-account-lock-open-outline
          </v-icon>
          <h5 class="text-h5">
            Access Control
          </h5>
          <p class="text-body-1">
            You are in total control,
            it doesn't matter whether you are a guest,
            manager or an admin.
          </p>
        </div>
      </v-col>
      <v-col
        class="px-6"
        sm="4"
        cols="12"
      >
        <div class="feature-list">
          <v-icon
            color="primary"
            class="icon"
          >
            mdi-wifi
          </v-icon>
          <h5 class="text-h5">
            Community-Wide Network
          </h5>
          <p class="text-body-1">
            Enjoy the benefits of a community-wide network,
            with the ability to manage your own network.
          </p>
        </div>
      </v-col>
      <v-col
        class="px-6"
        sm="4"
        cols="12"
      >
        <div class="feature-list">
          <v-icon
            color="primary"
            class="icon"
          >
            mdi-home-automation
          </v-icon>
          <h5 class="text-h5">
            Just like home.
          </h5>
          <p class="text-body-1">
            No QoS, no throttling, no data caps.
            Just like home.
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
@import './feature-styles';
</style>
