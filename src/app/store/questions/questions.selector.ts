import { createSelector } from '@ngrx/store';
import { State as AppState } from '../';
import { State as QuestionsState, featureKey } from './questions.reducer';

const getQuestionsState = (state: AppState) => state[featureKey];

export const selectComplete = createSelector(getQuestionsState, (state: QuestionsState) => state.complete);
export const selectRiskGroup = createSelector(getQuestionsState, (state: QuestionsState) => state.riskGroup);
