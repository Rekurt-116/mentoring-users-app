import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { IFolder } from '../../interfaces/folders-interfaces/get.interface';
import { CreateFolder } from '../../interfaces/folders-interfaces/post.interface';
import { LoadingStatus } from '@shared/util-store';

export const loadFolders = createAction('[Folders Page] Load Folders');
export const loadFoldersSuccess = createAction('[Folders Api] Load Folders Success', props<{ folders: IFolder[] }>());
export const loadFoldersFailed = createAction('[Folders/Api] Load Folders Failed', props<{ error: HttpErrorResponse }>());

export const updateFolderStatus = createAction('[Folders Detail] Update Folder Status', props<{ status: LoadingStatus }>());

export const addFolder = createAction('[Folders Page] Add Folder', props<{ folderData: CreateFolder }>());
export const addFolderSuccess = createAction('[Folders/Api] Add Folder Success', props<{ folderData: IFolder }>());
export const addFolderFailed = createAction('[Folders/Api] AddFolder Failed', props<{ error: HttpErrorResponse }>());

export const deleteFolder = createAction('[Folders Page] Delete Folder', props<{ id: number }>());
export const deleteFolderSuccess = createAction('[Folders/Api] Delete Folder Success', props<{ id: number }>());
export const deleteFolderFailed = createAction('[Folders/Api] Delete Folder Failed', props<{ error: HttpErrorResponse }>());