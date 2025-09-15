import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FoldersState } from './folders-reducer';
import { FOLDERS_FEATURE_KEY } from '../constans/folders-feature-key.constant';

export const selectFolderState = createFeatureSelector<FoldersState>(FOLDERS_FEATURE_KEY);

export const selectFoldersStatus = createSelector(selectFolderState, (state: FoldersState) => state.status);

export const selectAllFolders = createSelector(selectFolderState, (state: FoldersState) => state.folder);
