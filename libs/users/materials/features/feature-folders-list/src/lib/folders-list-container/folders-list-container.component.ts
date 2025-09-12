import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoldersListComponent } from '../folders-list/folders-list.component';
import { FoldersAddButtonComponent } from '@users/feature-folders-create';
import { FoldersFacade, IFolder } from '@users/data-access';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { FolderCardDeleteDialogComponent } from '../folder-card-delete-dialog/folder-card-delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'users-folders-list-container',
  imports: [CommonModule, FoldersListComponent, FoldersAddButtonComponent, MatProgressBarModule, LetDirective],
  templateUrl: './folders-list-container.component.html',
  styleUrl: './folders-list-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersListContainerComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly foldersFacade = inject(FoldersFacade);
  private readonly dialog = inject(MatDialog);

  public readonly allFolders$ = this.foldersFacade.allFolders$;
  public readonly status$ = this.foldersFacade.status$;

  ngOnInit() {
    this.foldersFacade.loadFolders();
  }

  public openFolder(folderId: number): void {
    this.router.navigate(['materials', folderId]);
  }

  public deleteFolder(folder: IFolder): void {
    const dialogRef = this.dialog.open(FolderCardDeleteDialogComponent, {
      data: { folderId: folder.id, title: folder.title },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.foldersFacade.deleteFolder(folder.id);
        this.foldersFacade.loadFolders();
      }
    });
  }
}
