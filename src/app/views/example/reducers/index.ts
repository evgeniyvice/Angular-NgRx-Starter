import { ActionReducerMap, MetaReducer } from '@ngrx/store'
import { environment } from '../../../../environments/environment'
import * as fromExample from './example.reducer'

export interface ExampleState {
  example: fromExample.State
}

export const reducers: ActionReducerMap<ExampleState> = {
  example: fromExample.reducer
}

export const metaReducers: MetaReducer<ExampleState>[] = !environment.production ? [] : []
