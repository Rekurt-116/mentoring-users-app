import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-materials-content',
  imports: [CommonModule],
  templateUrl: './materials-content.component.html',
  styleUrl: './materials-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialsContentComponent {}
