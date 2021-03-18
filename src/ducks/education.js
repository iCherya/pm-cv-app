const SAVE = 'redux/education/saveData';

const save = (data) => ({
  type: SAVE,
  payload: data
});

export const saveData = (data) => (dispatch) => {
  dispatch(save(data));
};

const initialState = [];

const educationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      console.log(action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
};

export default educationReducer;
