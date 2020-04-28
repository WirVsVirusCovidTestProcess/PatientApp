import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';
import { SharedModule } from '../../shared.module';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { AccountComponent } from './account/account.component';
import { ResultsComponent } from './results/results.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    LandingPageRoutingModule
  ],
  declarations: [LandingPage, QuestionnaireComponent, AccountComponent, ResultsComponent, InfoComponent]
})
export class LandingPageModule {}
