<template>
  <AuthFrame
    :title="$t('common.register_subtitle')"
    :subtitle="$t('common.auth_desc')"
  >
    <div>
      <div class="head">
        <h3 class="use-text-subtitle">
          {{ $t('common.login_create') }}
        </h3>
      </div>
      <!-- <social-auth /> -->
      <p class="text-center">
        We just need your email or phone number to get started.
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
            @click="handleSubmit"
          >
            {{ $t('common.continue') }}
          </v-btn>
        </div>
      </v-form>
    </div>
  </AuthFrame>
</template>

<style lang="scss" scoped>
@import './form-style';
</style>

<script>
// import SocialAuth from './SocialAuth';
import AuthFrame from './AuthFrame';

export default {
  components: {
    // SocialAuth,
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
    handleSubmit() {
      if (this.$refs.form.validate()) {
        console.log('data submited');
      }
    },
  },
};
</script>
