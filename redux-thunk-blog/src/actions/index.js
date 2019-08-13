import jsonPlaceholder from "../apis/jsonPlaceholder";

// Fetch posts action creator
export const fetchPosts = () => {

  console.log('Fetch posts action triggered');

  // redux thunk allows us to return function, even more - async function
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
  }
}