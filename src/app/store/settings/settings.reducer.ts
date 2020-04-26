import { Action, createReducer, on } from '@ngrx/store';
import * as SettingsActions from './settings.actions';

export const featureKey = 'settings';

export interface State {
  darkMode?: boolean;
}

export const initialState: State = {
  darkMode: undefined
};


const settingsReducer = createReducer(initialState,
  on(SettingsActions.setDarkMode, (state, { value }) => {
    document.body.classList.toggle('dark', value);
    return {
      ...state,
      darkMode: value
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return settingsReducer(state, action);
}
