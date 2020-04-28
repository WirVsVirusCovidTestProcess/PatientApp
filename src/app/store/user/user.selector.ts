import { createSelector } from '@ngrx/store';
import { State as AppState } from '../';
import { State as UserState, featureKey } from './user.reducer';

const getUserState = (state: AppState) => state[featureKey];

export const selectUser = createSelector(getUserState, (state: UserState) => state.user);
export const selectHasUser = createSelector(getUserState, (state: UserState) => !!state.user);
