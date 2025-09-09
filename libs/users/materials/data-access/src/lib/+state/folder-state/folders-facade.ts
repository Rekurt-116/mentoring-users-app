import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import * as FoldersActions from './folders-actions';
import { CreateFolder } from '../../interfaces/folders-interfaces/post.interface';

@Injectable({ providedIn: 'root' })
export class FoldersFacade {
  private readonly store = inject(Store);

  addFolder(folderData: CreateFolder) {
    this.store.dispatch(FoldersActions.addFolder({ folderData }));
  }
}
