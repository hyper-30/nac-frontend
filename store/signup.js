/* eslint-disable no-shadow */
export const state = () => ({
  step: 2,
  totalSteps: 3,
  accepted_terms: false,
  email: '',

});

export const mutations = {
  setAcceptedTerms(state, value) {
    console.log('setAcceptedTerms', value);
    state.accepted_terms = value;
  },
  setEmail(state, value) {
    console.log('setEmail', value);
    state.email = value;
  },
  increaseStep(state) {
    state.step += 1;
  },
  decreaseStep(state) {
    state.step -= 1;
  },
};
export const getters = {
  getAcceptedTerms: state => state.accepted_terms,
  getEmail: state => state.email,
  isEmailValid: state => /.+@.+\..+/.test(state.email),
  isFormValid: (state, getters) => getters.getAcceptedTerms && getters.isEmailValid,
  stepCount: state => state.step,
};

export const actions = {
  // eslint-disable-next-line no-shadow
  setAcceptedTerms({ commit }, value) {
    commit('setAcceptedTerms', value);
  },
};
