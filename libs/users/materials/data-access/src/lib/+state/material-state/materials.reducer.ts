import { HttpErrorResponse } from '@angular/common/http';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';

import { LoadingStatus } from '@shared/util-store';

import * as MaterialsActions from './materials.actions';
import { IMaterial } from '../../interfaces/materials-interfaces/get.interface';
import { MATERIALS_FEATURE_KEY } from '../constans/materials-feature.key';



export interface MaterialState extends EntityState<IMaterial> {
  materials: IMaterial[];
  status: LoadingStatus;
  error: HttpErrorResponse | null;
}

export const materialsAdapter: EntityAdapter<IMaterial> = createEntityAdapter<IMaterial>();

const initialState: MaterialState = materialsAdapter.getInitialState({
  materials: [],
  status: 'init',
  error: null,
});

export const materialFeature = createFeature({
  name: MATERIALS_FEATURE_KEY,
  reducer: createReducer(
    initialState,
    on(MaterialsActions.loadMaterialsSuccess, (state, { materials }) => ({
      ...state,
      materials: materials,
      status: 'loaded' as const,
    })),
    on(MaterialsActions.addMaterialSuccess, (state, { materialData }) => ({
      ...state,
      material: [...state.materials, materialData],
    })),
    on(MaterialsActions.deleteMaterialSuccess, (state, { id }) => materialsAdapter.removeOne(id, { ...state })),
    on(MaterialsActions.loadMaterialsFailed, (state, { error }) => ({
      ...state,
      status: 'error' as const,
      materialError: error,
    })),
  ),
});
