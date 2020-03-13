import { action } from "easy-peasy";

const DefaultModel = {
  yourState: 'stateValue',
  setYourState: action((state, payload) => {
    state.yourState = payload;
  }),
};

export default DefaultModel;
