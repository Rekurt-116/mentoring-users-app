import { createAction, props } from '@ngrx/store';
import { CreateMaterial, IMaterial } from '@users/data-access';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingStatus } from '@shared/util-store';

export const loadMaterials = createAction('[Materials Page] Load Materials');
export const loadMaterialsSuccess = createAction(
  '[Materilas/Api] Load Materials Success',
  props<{ materials: IMaterial[] }>(),
);
export const loadMaterialsFailed = createAction('[Materials/Api]', props<{ error: HttpErrorResponse }>());

export const updateMaterialStatus = createAction(
  '[Material Detail] Update Material Status',
  props<{ status: LoadingStatus }>(),
);

export const addMaterial = createAction('[Materials Page] Add Material', props<{ materialData: CreateMaterial }>());
export const addMaterialSuccess = createAction(
  '[Materials/Api] Add MAterial Success',
  props<{ materialData: IMaterial }>(),
);
export const addMaterialFailed = createAction(
  '[Materials/Api] Add Material Failed',
  props<{ error: HttpErrorResponse }>(),
);

export const deleteMaterial = createAction('[Materials Page] Delete Material', props<{ id: number }>());
export const deleteMaterialSuccess = createAction('[Materials/Api] Delete Material Success', props<{ id: number }>());
export const deleteMaterialFailed = createAction(
  '[Materials/Api] Delete Material Failed',
  props<{ error: HttpErrorResponse }>(),
);
