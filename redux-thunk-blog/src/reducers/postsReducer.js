
// Reducer must be a pure function
// It shouldn't make any requests and mutate state
export default (state = [], action) => {

  if (action.type === 'FETCH_POSTS') {
    return action.payload;
  }

  return state;
}