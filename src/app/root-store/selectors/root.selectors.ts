import { createSelector } from '@ngrx/store'

import { RootState } from '../reducers/index'

export const getRouter = (state: RootState) => state.router
export const getRoot = (state: RootState) => state.root
export const getToken = createSelector(getRoot, options => options.access_token)
export const isInit = createSelector(getRoot, options => options.isInit)
