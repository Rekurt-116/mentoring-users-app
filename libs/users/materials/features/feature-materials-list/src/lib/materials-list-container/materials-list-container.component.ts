import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-materials-list-container',
  imports: [CommonModule],
  templateUrl: './materials-list-container.component.html',
  styleUrl: './materials-list-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialsListContainerComponent {}
