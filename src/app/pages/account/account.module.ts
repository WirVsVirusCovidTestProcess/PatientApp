import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.page';
import { SharedModule } from '../../shared.module';
import { SignupComponent } from './signup/signup.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { StatusinfoComponent } from './statusinfo/statusinfo.component';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    AccountPageRoutingModule
  ],
  declarations: [AccountPage, SignupComponent, UserinfoComponent, StatusinfoComponent]
})
export class AccountPageModule {}
