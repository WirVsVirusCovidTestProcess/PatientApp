import { Action, createReducer, on } from '@ngrx/store';
import * as SettingsActions from './settings.actions';
import { Language } from '../../types/languages';

export const featureKey = 'settings';

export interface State {
  darkMode?: boolean;
  language?: Language;
}

export const initialState: State = {
  darkMode: undefined,
  language: undefined
};


const settingsReducer = createReducer(initialState,
  on(SettingsActions.setDarkMode, (state, { value }) => {
    return {
      ...state,
      darkMode: value
    };
  }),
  on(SettingsActions.setLanguage, (state, { language }) => {
    return {
      ...state,
      language
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return settingsReducer(state, action);
}
