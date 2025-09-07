import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-materials',
  imports: [CommonModule],
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialsComponent {}
