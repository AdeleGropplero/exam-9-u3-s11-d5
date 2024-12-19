import { LIKED_SONGS, LIKED_SONGS_TO_REMOVE } from "../action";

const initialState = {
  //Potevo fare tutto in un unico reducer ma volevo provare il combine
  liked: []
};

const PlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKED_SONGS:
      return {
        ...state,
        liked: [...state.liked, action.payload]
      };

    case LIKED_SONGS_TO_REMOVE:
      return {
        ...state,
        liked: state.liked.filter((song) => song.id !== action.payload.id)
      };

    default:
      return state;
  }
};

export default PlayerReducer;
