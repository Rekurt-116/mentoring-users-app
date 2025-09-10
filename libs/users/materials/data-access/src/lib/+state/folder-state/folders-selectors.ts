import { createFeatureSelector, createSelector } from "@ngrx/store";
import { foldersAdapter, FoldersState } from "./folders-reducer";
import { FOLDERS_FEATURE_KEY } from "../constans/folders-feature-key.constant";

export const selectFolderState = createFeatureSelector<FoldersState>(FOLDERS_FEATURE_KEY);

const { selectAll } = foldersAdapter.getSelectors();

export const selectFodlersStatus = createSelector(selectFolderState, (state: FoldersState) => state.status);

export const selectAllFolders = createSelector(selectFolderState, (state: FoldersState) => selectAll(state));