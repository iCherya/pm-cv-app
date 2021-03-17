const REQUESTED = 'redux/photo_single/requested';
const RECEIVED = 'redux/photo_single/received';

const requested = () => ({
  type: REQUESTED
});

const received = (data) => ({
  type: RECEIVED,
  payload: {
    data
  }
});

export const loadPhoto = (photoId) => (dispatch) => {
  dispatch(requested());

  fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}?_expand=album`)
    .then((response) => response.json())
    .then((data) => {
      const { url: photoUrl, title: photoTitle, album } = data;
      const { id: albumId, title: albumTitle } = album;
      const usefulData = { photoUrl, photoTitle, albumId, albumTitle };

      dispatch(received(usefulData));
    });
};

const initialState = {
  isLoading: true,
  data: []
};

const photoSingleReducer = (state = initialState, action) => {
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

export default photoSingleReducer;
