import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-feature-materials-content',
  imports: [CommonModule],
  templateUrl: './feature-materials-content.component.html',
  styleUrl: './feature-materials-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureMaterialsContentComponent {}
