import { createAction, props } from "@ngrx/store";

export const aggiungi = createAction(
  '[Rooster] Aggiungi',
  props<{value: number}>()
)
