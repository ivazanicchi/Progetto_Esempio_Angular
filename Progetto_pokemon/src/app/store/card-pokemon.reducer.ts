import { createReducer, on } from "@ngrx/store";
import { aggiungi } from "./card-pokemon.actions";

const initialState = 0;

export const aggiungiPokemon = createReducer(
  initialState,
  on (aggiungi, (state, action) => state + action.value)
);
