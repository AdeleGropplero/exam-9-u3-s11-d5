import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MyMainReducer from "./reducer/MyMainReducer";
import PlayerReducer from "./reducer/PlayerReducer";

const rootReducer = combineReducers({
  songs: MyMainReducer,
  liked: PlayerReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
