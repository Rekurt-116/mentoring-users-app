import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IFolder } from '@users/data-access';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'users-folder-card-delete-dialog',
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './folder-card-delete-dialog.component.html',
  styleUrl: './folder-card-delete-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolderCardDeleteDialogComponent {
  public readonly data = inject<{ folderId: number; title: string }>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<FolderCardDeleteDialogComponent>);
}
