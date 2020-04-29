import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { QuestionsComponent } from './questions/questions.component';
import { HotlineComponent } from './hotline/hotline.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  }, {
    path: 'intro',
    component: IntroComponent
  }, {
    path: 'questions',
    component: QuestionsComponent
  }, {
    path: 'hotline',
    component: HotlineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionnairePageRoutingModule {}
