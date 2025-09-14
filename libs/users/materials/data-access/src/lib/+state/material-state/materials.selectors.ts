import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MaterialState } from './materials.reducer';
import { MATERIALS_FEATURE_KEY } from '../constans/materials-feature.key';

export const selectMaterialsState = createFeatureSelector<MaterialState>(MATERIALS_FEATURE_KEY);

export const selectAllMaterials = createSelector(selectMaterialsState, (state: MaterialState) => state.materials);

export const selectMaterialStatus = createSelector(selectMaterialsState, (state: MaterialState) => state.status);
