import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FoldersAddDialogComponent } from '../folders-add-dialog/folders-add-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CreateFolder, FoldersFacade } from '@users/data-access';

@Component({
  selector: 'users-folders-add-button',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './folders-add-button.component.html',
  styleUrl: './folders-add-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersAddButtonComponent {
  private readonly foldersFacade = inject(FoldersFacade)
  private readonly destroyRef = inject(DestroyRef);
  private title!: string;
  public dialog = inject(MatDialog);

  @Input()
  public folderData!: CreateFolder;

  @Output()
  createFolder = new EventEmitter<void>();

  public openAddFolderDialog(): void {
    const dialogRef: MatDialogRef<FoldersAddDialogComponent> = this.dialog.open(FoldersAddDialogComponent, {
      data: { title: this.title },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        if (result) {
          const newFolderData: CreateFolder = {
            title: result.title,
          };

          this.foldersFacade.addFolder(newFolderData);
        }
      });
  }
}
