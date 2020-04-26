
import { createAction, props } from '@ngrx/store';
import { Language } from '../../types/languages';

export const setDarkMode = createAction('[Settings] Set Dark Mode', props<{ value: boolean }>());
export const setLanguage = createAction('[Settings] Set Language', props<{ language: Language }>());
