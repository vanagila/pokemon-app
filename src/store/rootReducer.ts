import { combineReducers } from "@reduxjs/toolkit";
import charactersSlice from "./modules/characters/charactersSlice";

export const rootReducer = combineReducers({
  characters: charactersSlice,
});
