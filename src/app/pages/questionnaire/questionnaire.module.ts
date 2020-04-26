import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { QuestionnairePageRoutingModule } from './questionnaire-routing.module';

import { SharedModule } from '../../shared.module';
import { IntroComponent } from './intro/intro.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    QuestionnairePageRoutingModule
  ],
  declarations: [IntroComponent, QuestionsComponent]
})
export class QuestionnairePageModule {}
