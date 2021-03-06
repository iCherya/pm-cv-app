const SAVE = 'redux/education/saveData';

const save = (data) => ({
  type: SAVE,
  payload: data
});

export const saveData = (data) => (dispatch) => {
  dispatch(save(data));
};

const initialState = [
  {
    title: '',
    specialization: '',
    startDate: null,
    endDate: null
  }
];

const educationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return [...action.payload];
    default:
      return state;
  }
};

export default educationReducer;
