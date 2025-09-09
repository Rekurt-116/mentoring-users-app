import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { IFolder } from '../../interfaces/folders-interfaces/get.interface';
import { CreateFolder } from '../../interfaces/folders-interfaces/post.interface';

export const loadFolders = createAction('[Folders Page] Load Folders');
export const loadFoldersSucces = createAction('[Folders Api] Load Folders Success', props<{ folders: IFolder[] }>());
export const loadFoldersFailed = createAction('[Folders/Api] Load Folders Failed', props<{ error: HttpErrorResponse }>());

export const addFolder = createAction('[Folders Page] Add Folder', props<{ folderData: CreateFolder }>());
export const addFolderSuccess = createAction('[Folders/Api] Add Folder Success', props<{ folderData: IFolder }>());
export const addFolderFailed = createAction('[Folders/Api] AddFolder Failed', props<{ error: HttpErrorResponse }>());
