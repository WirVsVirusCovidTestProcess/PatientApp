import { createSelector } from '@ngrx/store';
import { State as AppState } from '../';
import { State as SettingsState, featureKey } from './settings.reducer';

const getSettingsState = (state: AppState) => state[featureKey];

export const selectDarkMode = createSelector(getSettingsState, (state: SettingsState) => state.darkMode);
export const selectLanguage = createSelector(getSettingsState, (state: SettingsState) => state.language);
