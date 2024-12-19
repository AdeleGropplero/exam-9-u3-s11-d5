import { SELECTED_SONGS, SHOW_SONGS } from "../action";

const initialState = {
  //Qui metto il risultato della fetch delle canzoni
  content: {},
  selected: null
};

const MyMainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SONGS:
      return {
        ...state,
        content: {
          ...state.content,
          [action.query]: action.payload
        }
      };

    case SELECTED_SONGS:
      return {
        ...state,
        selected: action.payload
      };

    default:
      return state;
  }
};

export default MyMainReducer;
