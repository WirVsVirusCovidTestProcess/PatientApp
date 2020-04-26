import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer, StoreModule
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storageSync } from 'ngrx-store-ionic-storage';
import { StorageSyncEffects } from 'ngrx-store-ionic-storage';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as hydrated from './hydrated';
import * as Settings from './settings/settings.module';


export interface State {
  hydrated: boolean;
}

export const reducers: ActionReducerMap<State> = {
  hydrated: hydrated.reducer
};

export const storageSyncReducer = storageSync({
  keys: [Settings.featureKey],
  onSyncError: (err) => console.error(err)
});


export function storageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any, any> {
  return storageSyncReducer(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storageMetaReducer] : [storageMetaReducer];

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([StorageSyncEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    Settings.SettingsStateModule
  ]
})
export class RootStoreModule {
}

