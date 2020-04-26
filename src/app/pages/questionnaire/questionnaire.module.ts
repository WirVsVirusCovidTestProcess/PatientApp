import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { QuestionnairePageRoutingModule } from './questionnaire-routing.module';

import { QuestionnairePage } from './questionnaire.page';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    QuestionnairePageRoutingModule
  ],
  declarations: [QuestionnairePage]
})
export class QuestionnairePageModule {}
