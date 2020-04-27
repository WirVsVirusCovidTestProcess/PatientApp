
import { createAction, props } from '@ngrx/store';
import { RiskGroup } from '../../types/riskgroups';

export const setComplete = createAction('[Questions] Set Complete');
export const setRiskGroup = createAction('[Questions] Set RiskGroup', props<{ riskGroup: RiskGroup }>());
