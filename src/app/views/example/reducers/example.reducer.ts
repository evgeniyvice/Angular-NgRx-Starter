import { Action } from '@ngrx/store'


export interface State {
  example: unknown
}

export const initialState: State = {
  example: undefined
}

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state
  }
}
