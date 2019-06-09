import { Component, OnDestroy } from '@angular/core'
import { Store } from '@ngrx/store'
import * as rootActions from './root-store/actions/index'
import { RootState } from './root-store/reducers/index'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  constructor(
    private store: Store<RootState>
  ) {
    this.store.dispatch(new rootActions.LoadRoots())
  }

  public ngOnDestroy(): void {
    this.store.dispatch(new rootActions.DestroyRoots())
  }
}
