import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-materials-card',
  imports: [CommonModule],
  templateUrl: './materials-card.component.html',
  styleUrl: './materials-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialsCardComponent {}
