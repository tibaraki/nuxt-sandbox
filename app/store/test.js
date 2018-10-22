export const state = () => ({
  sampleModuleState: 100
});

export const mutations = {
  setCounter(state, counter) {
    state.sampleModuleState = counter;
  }
};

export const actions = {
  setCounter({ commit }, counter) {
    console.log([100, 200].includes(100)); // polyfill test
    console.log(
      (() => {
        return "transpile test";
      })()
    );
    commit("setCounter", counter);
  }
};
