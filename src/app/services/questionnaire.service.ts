import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State as AppState } from '../store';
import * as QuestionsSelectors from '../store/questions/questions.selector';
import * as QuestionsActions from '../store/questions/questions.actions';
import { RiskGroup } from '../types/riskgroups';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  constructor(private store: Store<AppState>) { }

  public setComplete(): void {
    this.store.dispatch(QuestionsActions.setComplete());
  }

  public getComplete(): Observable<boolean> {
    return this.store.select(QuestionsSelectors.selectComplete);
  }

  public setRiskGroup(riskGroup: RiskGroup): void {
    this.store.dispatch(QuestionsActions.setRiskGroup({ riskGroup }));
  }

  public getRiskGroup(): Observable<RiskGroup | undefined> {
    return this.store.select(QuestionsSelectors.selectRiskGroup);
  }

  public clearData(): void {
    this.store.dispatch(QuestionsActions.clearState());
  }
}
