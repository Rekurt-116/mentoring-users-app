import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '@core/data-access-api';
import * as FoldersActions from './folders-actions';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { IFolder } from '../../interfaces/folders-interfaces/get.interface';
import { CreateFolder } from '../../interfaces/folders-interfaces/post.interface';
import { Store } from '@ngrx/store';
import { selectRouteParams } from '@shared/util-store';

export const folderEffects = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);
    return actions$.pipe(
      ofType(FoldersActions.addFolder),
      switchMap(({ folderData }) =>
        apiService.post<IFolder, CreateFolder>('/folders', folderData).pipe(
          map((folderEntity) => FoldersActions.addFolderSuccess({ folderData: folderEntity })),
          catchError((error) => {
            console.error('Error', error);
            return of(FoldersActions.addFolderFailed({ error }));
          }),
        ),
      ),
    );
  },
  { functional: true },
);

export const loadFolder = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);
    const store = inject(Store);
    return actions$.pipe(
      ofType(FoldersActions.loadFolders),
      withLatestFrom(store.select(selectRouteParams)),
      switchMap(([, params]) => {
        if (params['id']) {
          return apiService.get<IFolder>(`/folders/${params['id']}`).pipe(
            map((folderEntity) => FoldersActions.loadFoldersSuccess({ folders: [folderEntity] })),
            catchError((error) => {
              console.error('Error', error);
              return of(FoldersActions.loadFoldersFailed({ error }));
            }),
          );
        }
        return of(FoldersActions.updateFolderStatus({ status: 'loading' }));
      }),
    );
  },
  { functional: true },
);
export const deleteFolder = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiSevice = inject(ApiService);
    return actions$.pipe(
      ofType(FoldersActions.deleteFolder),
      switchMap(({ id }) => 
        apiSevice.delete<void>(`/folders/${id}`).pipe(
          map(() => FoldersActions.deleteFolderSuccess({ id })),
          catchError((error) => {
            console.error('Error', error);
            return of(FoldersActions.deleteFolderFailed({ error }));
          })
        )
      )
    )
  },
  { functional: true },
);
