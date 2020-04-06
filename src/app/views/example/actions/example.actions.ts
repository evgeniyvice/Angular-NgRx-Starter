import { createAction, props } from '@ngrx/store'


export const LoadExamples = createAction(
  '[Example] Load Examples',
  props<{ payload: unknown }>()
)

