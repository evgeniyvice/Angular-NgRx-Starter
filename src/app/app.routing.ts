import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './views/home/home.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'example',
    loadChildren: () => import('./views/example/example.module').then(m => m.ExampleModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // https://github.com/angular/angular/issues/15716#issuecomment-291025332
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRouting { }
