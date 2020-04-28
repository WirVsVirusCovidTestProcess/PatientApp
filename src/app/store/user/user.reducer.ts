import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from '../../types/user';

export const featureKey = 'user';

export interface State {
  user?: User;
}

export const initialState: State = {
  user: undefined
};


const userReducer = createReducer(initialState,
  on(UserActions.setUser, (state, { user }) => {
    return {
      ...state,
      user
    };
  }),
  on(UserActions.clearState, () => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
