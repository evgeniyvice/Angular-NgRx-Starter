import { Component } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs/internal/Observable'

import { RootState } from '../../root-store/reducers/index'
import { isInit } from '../../root-store/selectors/index'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public title = 'angular-ngrx-starter'
  public isInit$: Observable<boolean> = this.store.pipe(select(isInit))
  constructor(
    private store: Store<RootState>
  ) { }

}
