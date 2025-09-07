import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-materials-add-button',
  imports: [CommonModule],
  templateUrl: './materials-add-button.component.html',
  styleUrl: './materials-add-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialsAddButtonComponent {}
