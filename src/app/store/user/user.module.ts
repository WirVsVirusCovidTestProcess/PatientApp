import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as user from './user.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(user.featureKey, user.reducer)
  ]
})
export class UserStateModule {
}

export const featureKey = user.featureKey;
