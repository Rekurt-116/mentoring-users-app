import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-materials-add-dialog',
  imports: [CommonModule],
  templateUrl: './materials-add-dialog.component.html',
  styleUrl: './materials-add-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialsAddDialogComponent {}
