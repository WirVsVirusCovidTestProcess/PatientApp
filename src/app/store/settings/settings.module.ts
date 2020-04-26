import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as settings from './settings.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(settings.featureKey, settings.reducer)
  ]
})
export class SettingsStateModule {
}

export const featureKey = settings.featureKey;
