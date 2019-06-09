import { Action } from '@ngrx/store'

export enum ExampleActionTypes {
  LoadExamples = '[Example] Load Examples',
}

export class LoadExamples implements Action {
  readonly type = ExampleActionTypes.LoadExamples
  constructor(public payload: unknown) { }
}


export type ExampleActions = LoadExamples
