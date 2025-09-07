import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-folders-add-dialog',
  imports: [CommonModule],
  templateUrl: './folders-add-dialog.component.html',
  styleUrl: './folders-add-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersAddDialogComponent {}
