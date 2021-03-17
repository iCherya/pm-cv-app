const REQUESTED = 'redux/photos_list/requested';
const RECEIVED = 'redux/photos_list/received';
const CLEAR_STORAGE = 'redux/photos_list/clear_storage';

const requested = () => ({
  type: REQUESTED
});

const received = (data, albumId) => ({
  type: RECEIVED,
  payload: {
    data,
    albumId
  }
});

const clearStorage = () => ({
  type: CLEAR_STORAGE
});

export const deletePhotos = () => (dispatch) => {
  dispatch(clearStorage());
};

export const addPhotos = (albumId, start, limit = 6) => (dispatch) => {
  dispatch(requested());

  let fetchUrl = `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`;
  if (albumId) fetchUrl += `&albumId=${albumId}`;

  fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => {
      const usefulData = data.map(({ id, thumbnailUrl, title }) => ({
        id,
        thumbnailUrl,
        title
      }));

      dispatch(received(usefulData, albumId));
    });
};

const initialState = {
  albumId: null,
  isLoading: false,
  data: []
};

const photosListReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED:
      return { ...state, isLoading: true };
    case RECEIVED:
      return {
        isLoading: false,
        albumId: action.payload.albumId,
        data: [...state.data, ...action.payload.data]
      };
    case CLEAR_STORAGE: {
      return { ...state, data: [], albumId: null };
    }
    default:
      return state;
  }
};

export default photosListReducer;
