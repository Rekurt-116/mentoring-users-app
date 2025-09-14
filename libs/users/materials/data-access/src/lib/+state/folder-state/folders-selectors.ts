import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FoldersState } from './folders-reducer';
import { FOLDERS_FEATURE_KEY } from '../constans/folders-feature-key.constant';

export const selectFoldersState = createFeatureSelector<FoldersState>(FOLDERS_FEATURE_KEY);

export const selectFodlersStatus = createSelector(selectFoldersState, (state: FoldersState) => state.status);

export const selectAllFolders = createSelector(selectFoldersState, (state: FoldersState) => state.folders);
