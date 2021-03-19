const SAVE = 'redux/personal/saveData';

const save = (data) => ({
  type: SAVE,
  payload: data
});

export const saveData = (data) => (dispatch) => {
  dispatch(save(data));
};

const initialState = {
  data: {
    firstName: '',
    lastName: '',
    jobTitle: '',
    phone: '',
    email: ''
  },
  isFilled: false
};

const personalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return { data: { ...action.payload.values }, isFilled: true };
    default:
      return state;
  }
};

export default personalReducer;
