import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as questions from './questions.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(questions.featureKey, questions.reducer)
  ]
})
export class QuestionsStateModule {
}

export const featureKey = questions.featureKey;
