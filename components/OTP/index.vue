<template>
  <div class="otp-container">
    <div class="otp-input-container">
      <input
        v-for="(digit, index) in otp"
        :key="index"
        ref="otpInput"
        v-model="otp[index]"
        :maxlength="1"
        :length="length"
        class="otp-input"
        @input="focusNextInput(index)"
        @keydown.backspace="focusPreviousInput(index)"
        @keydown.delete="deleteDigit(index)"
        @keydown.esc="$event.target.blur()"
        @keydown.enter="$event.target.blur()"
      >
    </div>
    <v-button v-if="otp.some(digit => digit !== '')" class="clear-button" text @click="clearOtp">
      <v-icon>mdi-close</v-icon>
    </v-button>
  </div>
</template>

<script>
export default {
  props: {
    length: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      otp: Array(this.length).fill(''),
    };
  },
  methods: {
    focusPreviousInput(index) {
      if (index > 0) {
        this.$refs.otpInput[index - 1].focus();
      }
    },
    focusNextInput(index) {
      console.log('focusNextInput', index);
      if (index < this.length - 1) {
        this.$refs.otpInput[index + 1].focus();
      }
    },
    deleteDigit(index) {
      console.log('deleteDigit', index);
      // delete the digit at the current index
      this.otp.splice(index, 1, '');

      // focus on the current input after deleting the digit
      this.$refs.otpInput[index].focus();
    },
    clearOtp() {
      this.otp = Array(this.length).fill('');
      this.$refs.otpInput[0].focus();
    },
  },
};
</script>

<style scoped>
.otp-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.otp-input-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.otp-input {
    width: 40px;
    height: 40px;
    margin: 0 10px;
    text-align: center;
    font-size: 24px;
    border: none;
    border-bottom: 2px solid #ccc;
    outline: none;
}

.otp-input:focus {
    border-bottom: 2px solid #000;
}

.clear-button {
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #ccc;
    color: #fff;
    cursor: pointer;
}

.clear-button:hover {
    background-color: #000;
}
</style>
