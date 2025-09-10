import { LoadingStatus } from '@shared/util-store';
import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import * as FoldersActions from './folders-actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IFolder } from '@users/data-access';

export interface FoldersState extends EntityState<IFolder> {
  status: LoadingStatus;
  error: HttpErrorResponse | null;
}

export const foldersAdapter: EntityAdapter<IFolder> = createEntityAdapter<IFolder>();

const initialState: FoldersState = foldersAdapter.getInitialState({
  status: 'init',
  error: null,
});

const reducer = createReducer(
  initialState,
  on(FoldersActions.loadFoldersSuccess, (state, { folders }) =>
    foldersAdapter.setAll(folders, { ...state, status: 'loaded' as const }),
  ),
  on(FoldersActions.loadFoldersFailed, (state, { error }) => ({
    ...state,
    status: 'error' as const,
    error,
  })),
  on(FoldersActions.addFolderSuccess, (state, { folderData }) => foldersAdapter.addOne(folderData, { ...state })),
  on(FoldersActions.updateFolderStatus, (state, { status }) => ({
    ...state,
    status,
  })),
  on(FoldersActions.deleteFolderSuccess, (state, { id }) => foldersAdapter.removeOne(id, { ...state })),
);
