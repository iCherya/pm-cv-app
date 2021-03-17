const REQUESTED = 'redux/album_info/requested';
const RECEIVED = 'redux/album_info/received';

const requested = () => ({
  type: REQUESTED
});

const received = (data) => ({
  type: RECEIVED,
  payload: {
    data
  }
});

export const loadAlbum = (albumId) => (dispatch) => {
  dispatch(requested());

  fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}?_expand=user`)
    .then((response) => response.json())
    .then((data) => {
      const { title: albumTitle, user } = data;
      const { name: userName, email: userEmail } = user;
      const usefulData = { albumTitle, userName, userEmail };

      dispatch(received(usefulData));
    });
};

const initialState = {
  isLoading: true,
  data: []
};

const albumInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED:
      return state;
    case RECEIVED:
      return {
        isLoading: false,
        data: action.payload.data
      };
    default:
      return state;
  }
};

export default albumInfoReducer;
