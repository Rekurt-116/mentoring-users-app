import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-materials-list',
  imports: [CommonModule],
  templateUrl: './materials-list.component.html',
  styleUrl: './materials-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialsListComponent {}
