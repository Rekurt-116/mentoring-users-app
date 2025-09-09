import { LoadingStatus } from '@shared/util-store';
import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import * as FoldersActions from './folders-actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IFolder } from '@users/data-access';

export interface FolderState extends EntityState<IFolder>{
  status: LoadingStatus;
  error: HttpErrorResponse | null;
}

export const foldersAdapter: EntityAdapter<IFolder> = createEntityAdapter<IFolder>()

const initialState: FolderState = foldersAdapter.getInitialState({
  status: 'init',
  error: null,
});

const reducer = createReducer(
  initialState,
  on(FoldersActions.loadFoldersSucces, (state, { folders }) =>
    foldersAdapter.setAll(folders, { ...state, status: 'loaded' as const}
  ),
  on(FoldersActions.addFolderSuccess, (state, { folderData }) =>
    foldersAdapter.addOne(folderData, {...state})),
)
