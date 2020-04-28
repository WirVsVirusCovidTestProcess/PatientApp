import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';
import { SharedModule } from '../../shared.module';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { AccountComponent } from './account/account.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    LandingPageRoutingModule
  ],
  declarations: [LandingPage, QuestionnaireComponent, AccountComponent, ResultsComponent]
})
export class LandingPageModule {}
