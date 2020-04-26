import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    LandingPageRoutingModule
  ],
  declarations: [LandingPage]
})
export class LandingPageModule {}
