import { Action, createReducer, on, createAction, createSelector } from '@ngrx/store';
import { StorageSyncActions } from 'ngrx-store-ionic-storage';
import { State as AppState } from './index';

const HydrateAction = createAction(StorageSyncActions.HYDRATED);
const hydrated = createReducer(false,
  on(HydrateAction, () => true)
);

export function reducer(state: boolean | undefined, action: Action) {
  return hydrated(state, action);
}

export const selectHydrated = createSelector((state: AppState) => state, (state: AppState) => state.hydrated);
