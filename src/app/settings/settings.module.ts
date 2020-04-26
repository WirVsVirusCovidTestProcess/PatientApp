import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    SettingsPageRoutingModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
