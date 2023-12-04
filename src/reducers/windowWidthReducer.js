const windowWidthReducer = (state = window.innerWidth, action) => {
  switch (action.type) {
    case 'SET_WINDOW_WIDTH':
      return action.payload;
    default:
      return state;
  }
};

export default windowWidthReducer;8
