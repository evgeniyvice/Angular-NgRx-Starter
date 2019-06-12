import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { ExampleService } from '../../services/example.service'
import { ExampleEffects } from './effects/index'
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
    EffectsModule.forFeature([ExampleEffects])
  ],
  providers: [ExampleService]
})
export class ExampleModule { }
