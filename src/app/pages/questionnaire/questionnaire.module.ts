import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { QuestionnairePageRoutingModule } from './questionnaire-routing.module';

import { SharedModule } from '../../shared.module';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    QuestionnairePageRoutingModule
  ],
  declarations: [IntroComponent]
})
export class QuestionnairePageModule {}
