import { Action } from '@ngrx/store'
import { RootActionTypes } from '../actions/index'


export interface State {
  isInit: boolean
}

export const initialState: State = {
  isInit: false
}

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    case RootActionTypes.LoadRoots:
      return {
        isInit: true
      }

    case RootActionTypes.DestroyRoots:
      return initialState

    default:
      return state
  }
}
