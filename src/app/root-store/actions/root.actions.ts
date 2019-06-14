import { createAction, props } from '@ngrx/store'

export const checkToken = createAction(
  '[Root] Check Token'
)

export const writeToken = createAction(
  '[Root] Write Token',
  props<{ access_token: string }>()
)

export const initRoots = createAction(
  '[Root] Init Roots',
)

export const destroyRoots = createAction(
  '[Root] Destroy Roots'
)
