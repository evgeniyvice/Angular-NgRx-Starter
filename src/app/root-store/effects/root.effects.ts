import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { LocalStorage } from '@ngx-pwa/local-storage'
import { Observable } from 'rxjs/internal/Observable'
import { defer } from 'rxjs/internal/observable/defer'
import { mergeMap } from 'rxjs/internal/operators/mergeMap'
import { tap } from 'rxjs/internal/operators/tap'
import { checkToken, writeToken } from '../actions'
import { RootState } from '../reducers'



@Injectable()
export class RootEffects {

  public checkToken$ = createEffect(() => this.actions$.pipe(
    ofType('[Root] Check Token'),
    mergeMap(() => <Observable<string>>this.localStorage.getItem('oauth')),
    tap(access_token => {
      if (access_token) {
        this.store.dispatch(writeToken({ access_token }))
      }
    })
  ), { dispatch: false })

  public init$ = createEffect(() => defer(() => this.store.dispatch(checkToken())))

  constructor(
    private actions$: Actions,
    private localStorage: LocalStorage,
    private store: Store<RootState>
  ) { }

}
