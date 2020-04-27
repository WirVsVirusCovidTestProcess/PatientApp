import { Action, createReducer, on } from '@ngrx/store';
import * as QuestionsActions from './questions.actions';
import { RiskGroup } from '../../types/riskgroups';

export const featureKey = 'questions';

export interface State {
  complete: boolean;
  riskGroup?: RiskGroup;
}

export const initialState: State = {
  complete: false,
  riskGroup: undefined
};


const questionsReducer = createReducer(initialState,
  on(QuestionsActions.setComplete, (state) => {
    return {
      ...state,
      complete: true
    };
  }),
  on(QuestionsActions.setRiskGroup, (state, { riskGroup }) => {
    return {
      ...state,
      riskGroup
    };
  }),
  on(QuestionsActions.clearState, () => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return questionsReducer(state, action);
}
