import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFolder } from '@users/data-access';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { FolderCardDeleteDialogComponent } from '../folder-card-delete-dialog/folder-card-delete-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'users-folders-card',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './folders-card.component.html',
  styleUrl: './folders-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersCardComponent {
private router = inject(Router);
private destroyRef = inject(DestroyRef);
private readonly dialog = inject(MatDialog);

  @Input() folder!: IFolder;

  @Output()
  deleteFolder = new EventEmitter<void>();

  showDelete = false;

  onDeleteFolder() {
    this.deleteFolder.emit();
  }

  openMaterial(folderId: number) {
    this.router.navigate(['/materials', folderId]);
  }
}
