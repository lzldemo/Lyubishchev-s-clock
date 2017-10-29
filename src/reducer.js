const initialState = {
  info:{
    name:"walk",
    time:0
  }
}

export default (state = initialState, action ) => {
  switch (action) {
    case "add":
      return Object.assign({}, state, {
        name:action.text
      });
      break;
    default:
      return state;
      break;
  }
}