import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '@core/data-access-api';
import * as FoldersActions from './folders-actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { IFolder } from '../../interfaces/folders-interfaces/get.interface';
import { CreateFolder } from '../../interfaces/folders-interfaces/post.interface';

@Injectable()
export class FoldersEffects {
  private actions$ = inject(Actions);
  private apiService = inject(ApiService);

  loadFolders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FoldersActions.loadFolders),
      switchMap(() =>
        this.apiService.get<IFolder[]>('/folder').pipe(
          map((folders) => FoldersActions.loadFoldersSuccess({ folders })),
          catchError((error) => of(FoldersActions.loadFoldersFailed({ error }))),
        ),
      ),
    ),
  );

  addFolder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FoldersActions.addFolder),
      switchMap(({ folderData }) =>
        this.apiService.post<IFolder, CreateFolder>('/folder', folderData).pipe(
          map((folderEntity) => FoldersActions.addFolderSuccess({ folderData: folderEntity })),
          catchError((error) => {
            console.error('Error', error);
            return of(FoldersActions.addFolderFailed({ error }));
          }),
        ),
      ),
    ),
  );

  deleteFolder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FoldersActions.deleteFolder),
      switchMap(({ id }) =>
        this.apiService.delete<void>(`/folder/${id}`).pipe(
          map(() => FoldersActions.deleteFolderSuccess({ id })),
          catchError((error) => of(FoldersActions.deleteFolderFailed({ error }))),
        ),
      ),
    ),
  );
}
