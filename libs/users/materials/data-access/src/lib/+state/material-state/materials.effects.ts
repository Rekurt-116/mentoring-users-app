import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { ApiService } from '@core/data-access-api';

import * as MaterialsActions from './materials.actions';
import { IMaterial } from '../../interfaces/materials-interfaces/get.interface';
import { CreateMaterial } from '../../interfaces/materials-interfaces/post.interface';

@Injectable()
export class MaterialsEffects {
  private actions$ = inject(Actions);
  private apiService$ = inject(ApiService);

  loadMaterials$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MaterialsActions.loadMaterials),
      switchMap(() =>
        this.apiService$.get<IMaterial[]>('/material').pipe(
          map((materials) => MaterialsActions.loadMaterialsSuccess({ materials })),
          catchError((error) => of(MaterialsActions.loadMaterialsFailed({ error }))),
        ),
      ),
    ),
  );

  addMaterial$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MaterialsActions.addMaterial),
      switchMap(({ materialData }) =>
        this.apiService$.post<IMaterial, CreateMaterial>('/material', materialData).pipe(
          map((materialEntity) => MaterialsActions.addMaterialSuccess({ materialData: materialEntity })),
          catchError((error) => of(MaterialsActions.addMaterialFailed({ error }))),
        ),
      ),
    ),
  );

  deleteMAterial$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MaterialsActions.deleteMaterial),
      switchMap(({ id }) =>
        this.apiService$.delete<void>(`.folder/${id}`).pipe(
          map(() => MaterialsActions.deleteMaterialSuccess({ id })),
          catchError((error) => of(MaterialsActions.deleteMaterialFailed({ error }))),
        ),
      ),
    ),
  );
}
