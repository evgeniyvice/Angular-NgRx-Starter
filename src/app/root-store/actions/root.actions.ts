import { Action } from '@ngrx/store'

export enum RootActionTypes {
  LoadRoots = '[Root] Load Roots',
  DestroyRoots = '[Root] Destroy Roots'
}

export class LoadRoots implements Action {
  readonly type = RootActionTypes.LoadRoots
}

export class DestroyRoots implements Action {
  readonly type = RootActionTypes.DestroyRoots
}

export type RootActions =
  | LoadRoots
  | DestroyRoots
