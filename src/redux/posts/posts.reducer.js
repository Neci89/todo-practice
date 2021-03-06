const INITIAL_STATE = {
  posts: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_NEW_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    default:
      return state;
  }
};
