import * as fromRouter from '@ngrx/router-store'
import { ActionReducerMap, MetaReducer } from '@ngrx/store'
import { storeFreeze } from 'ngrx-store-freeze'

import { environment } from '../../../environments/environment'
import * as fromRoot from './root.reducer'

export interface RootState {
  router: fromRouter.RouterReducerState
  root: fromRoot.State
}

export const reducers: ActionReducerMap<RootState> = {
  router: fromRouter.routerReducer,
  root: fromRoot.reducer
}

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [storeFreeze] : []
