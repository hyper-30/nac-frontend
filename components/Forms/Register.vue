<template>
  <AuthFrame
    :title="$t('common.register_subtitle')"
    :subtitle="$t('common.auth_desc')"
  >
    <v-progress-linear :value="($store.state.signup.step / $store.state.signup.totalSteps) * 100" height="15" rounded>
      {{ $store.state.signup.step }} / {{ $store.state.signup.totalSteps }}
    </v-progress-linear>
    <br>
    <div v-if="$store.state.signup.step === 1">
      <div class="head">
        <h3 class="use-text-subtitle">
          Let's start with your email or phone number
        </h3>
      </div>
      <!-- <social-auth /> -->
      <p class="text-center">
        We will use this to ensure that you are a real person, and to send you verification code.
      </p>
      <br>
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-row class="spacing3">
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field
              v-model="email"
              label="Email or Phone"
              :rules="emailRules"
              color="secondary"
              name="email"
              required
            />
          </v-col>
        </v-row>
        <div class="btn-area">
          <div class="form-helper">
            <div class="form-control-label">
              <v-checkbox
                v-model="checkbox"
                :label="$t('common.form_terms')"
                :rules="requiredRules"
                color="secondary"
                required
              />
              <span>
                <a href="#" class="link">
                  {{ $t('common.form_privacy') }}
                </a>
              </span>
            </div>
          </div>
          <v-btn
            size="large"
            color="secondary"
            @click="handleContinue"
          >
            {{ $t('common.continue') }}
          </v-btn>
        </div>
      </v-form>
    </div>
    <div v-if="$store.state.signup.step === 2">
      <div class="head">
        <h3 class="use-text-subtitle">
          Verify that that was you.
        </h3>
      </div>
      <!-- <social-auth /> -->
      <p class="text-center">
        Please enter the verification code we sent to your email or phone number.
      </p>
      <br>
      <v-row class="spacing3">
        <v-col cols="12" sm="12" class="px-3">
          <OTP :length="6" />
        </v-col>
      </v-row>
      <div class="btn-area">
        <div class="form-helper">
          <v-btn
            size="large"
            color="secondary"
            text
            outlined
            @click="handleBack"
          >
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </div>
        <v-btn
          size="large"
          color="primary"
          @click="handleContinue"
        >
          Verify
        </v-btn>
      </div>
    </div>
  </AuthFrame>
</template>

<style lang="scss" scoped>
@import './form-style';
</style>

<script>
// import SocialAuth from './SocialAuth';
import AuthFrame from './AuthFrame';
import OTP from '../OTP/index.vue';

export default {
  components: {
    // SocialAuth,
    OTP,
    AuthFrame,
  },
  data() {
    return {
      valid: true,
      email: '',
      name: '',
      emailRules: [
        v => !!v || 'E-mail or Phone is required',
        v => /.+@.+\..+/.test(v) || 'E-mail or Phone must be valid',
      ],
      password: '',
      confirmPassword: '',
      requiredRules: [v => !!v || 'This field is required'],
      passwordRules: [
        v => !!v || 'This field is required',
        v => v === this.password || 'Passwords do not match',
      ],
      checkbox: false,
    };
  },
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
  methods: {
    handleContinue() {
      this.$store.commit('signup/increaseStep');
    },
    handleBack() {
      this.$store.commit('signup/decreaseStep');
    },
  },
};
</script>
