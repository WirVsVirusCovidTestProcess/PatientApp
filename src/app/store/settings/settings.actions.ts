
import { createAction, props } from '@ngrx/store';

export const setDarkMode = createAction('[Settings] Set Dark Mode', props<{ value: boolean }>());
