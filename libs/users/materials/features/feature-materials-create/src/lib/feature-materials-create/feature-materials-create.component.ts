import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-feature-materials-create',
  imports: [CommonModule],
  templateUrl: './feature-materials-create.component.html',
  styleUrl: './feature-materials-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureMaterialsCreateComponent {}
