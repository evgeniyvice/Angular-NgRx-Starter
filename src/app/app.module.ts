import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EffectsModule } from '@ngrx/effects'
import { MinimalRouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StorageModule } from '@ngx-pwa/local-storage'

import { environment } from '../environments/environment'
import { AppRouting } from './app.routing'
import { MaterialModule } from './material/material.module'
import { RootEffects } from './root-store/effects/index'
import { metaReducers, reducers } from './root-store/reducers/index'

import { AppComponent } from './app.component'
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRouting,
    // Connects RouterModule with StoreModule
    EffectsModule.forRoot([RootEffects]),
    StoreRouterConnectingModule.forRoot({ serializer: MinimalRouterStateSerializer }),
    MaterialModule,
    StorageModule.forRoot({ IDBNoWrap: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
