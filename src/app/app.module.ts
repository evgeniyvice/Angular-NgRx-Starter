import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EffectsModule } from '@ngrx/effects'
import {  StoreRouterConnectingModule } from '@ngrx/router-store'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'

import { AppRouting } from './app.routing'
import { MaterialModule } from './material/material.module'
import * as fromRoot from './root-store/reducers/index'

import { AppComponent } from './app.component'
import { HomeComponent } from './views/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(fromRoot.reducers, { metaReducers: fromRoot.metaReducers }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRouting,
    // Connects RouterModule with StoreModule
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
