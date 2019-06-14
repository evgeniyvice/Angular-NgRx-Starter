import { Action, createReducer, on } from '@ngrx/store'
import { destroyRoots, initRoots, writeToken } from '../actions/index'


export interface State {
  access_token: string
  isInit: boolean
}

export const initialState: State = {
  access_token: null,
  isInit: false
}

const rootReducer = createReducer(
  initialState,
  on(writeToken, (state, { access_token }) => {
    return {
      ...state,
      access_token
    }
  }),
  on(initRoots, state => ({ ...state, isInit: true })),
  on(destroyRoots, () => initialState)
)

export function reducer(state: State = initialState, action: Action): State {
  return rootReducer(state, action)
}
