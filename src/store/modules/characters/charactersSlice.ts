import { createSlice } from "@reduxjs/toolkit";
import { getCharacters } from "./actions";

export interface Pokemon {
  id: number;
  name: string;
  img: string;
  height: number;
  fav: boolean;
}

export interface PokemonList {
  pokemons: Pokemon[];
}

const initialState: PokemonList = {
  pokemons: [],
};

export const charactersSlice = createSlice({
  name: "chatacters",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, () => {})
      .addCase(getCharacters.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }
        state.pokemons = action.payload.pokemons;
      });
  },
});

export default charactersSlice.reducer;
