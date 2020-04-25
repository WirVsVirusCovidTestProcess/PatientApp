import { Action, createReducer, on, createAction } from '@ngrx/store';
import { StorageSyncActions } from 'ngrx-store-ionic-storage';

const HydrateAction = createAction(StorageSyncActions.HYDRATED);
const hydratedReducer = createReducer(false,
  on(HydrateAction, () => true)
);

export function reducer(state: boolean | undefined, action: Action) {
  return hydratedReducer(state, action);
}
