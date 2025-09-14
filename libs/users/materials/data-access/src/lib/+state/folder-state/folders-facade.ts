import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as FoldersActions from './folders-actions';
import * as FoldersSelectors from './folders-selectors';
import { CreateFolder } from '../../interfaces/folders-interfaces/post.interface';
import { Observable } from 'rxjs';
import { IFolder } from '../../interfaces/folders-interfaces/get.interface';

@Injectable({ providedIn: 'root' })
export class FoldersFacade {
  private readonly store = inject(Store);

  public readonly allFolders$: Observable<IFolder[]> = this.store.select(FoldersSelectors.selectAllFolders);
  public readonly status$ = this.store.pipe(select(FoldersSelectors.selectFodlersStatus));

  addFolder(folderData: CreateFolder) {
    this.store.dispatch(FoldersActions.addFolder({ folderData }));
  }
  loadFolders() {
    this.store.dispatch(FoldersActions.loadFolders());
  }
  deleteFolder(id: number) {
    this.store.dispatch(FoldersActions.deleteFolder({ id }));
  }
}
