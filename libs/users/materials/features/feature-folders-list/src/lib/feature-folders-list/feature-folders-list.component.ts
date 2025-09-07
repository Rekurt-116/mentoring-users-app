import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-feature-folders-list',
  imports: [CommonModule],
  templateUrl: './feature-folders-list.component.html',
  styleUrl: './feature-folders-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureFoldersListComponent {}
