const SAVE = 'redux/personal/saveData';

const save = (data) => ({
  type: SAVE,
  payload: data
});

export const saveData = (data) => (dispatch) => {
  dispatch(save(data));
};

const initialState = {
  firstName: '',
  lastName: '',
  jobTitle: '',
  phone: '',
  email: ''
};

const personalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default personalReducer;
