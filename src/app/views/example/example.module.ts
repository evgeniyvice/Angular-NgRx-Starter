import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StoreModule } from '@ngrx/store'

import { ExamplePageComponent } from './pages/index'
import * as fromExample from './reducers/index'

const ROUTES: Routes = [
  {
    path: '',
    component: ExamplePageComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [ExamplePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('example', fromExample.reducers, { metaReducers: fromExample.metaReducers}),
  ]
})
export class ExampleModule { }
