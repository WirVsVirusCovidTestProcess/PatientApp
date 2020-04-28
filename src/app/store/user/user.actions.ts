
import { createAction, props } from '@ngrx/store';
import { User } from '../../types/user';

export const setUser = createAction('[User] Set User', props<{ user: User }>());
