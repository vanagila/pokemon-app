import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://pokeapi.co/api/v2";

export const getCharacters = createAsyncThunk("get", async () => {
  try {
    const res = await axios.get(URL + "/pokemon");
    return res.data.results;
  } catch {
    return null;
  }
});
