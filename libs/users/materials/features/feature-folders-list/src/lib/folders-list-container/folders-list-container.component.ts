import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-folders-list-container',
  imports: [CommonModule],
  templateUrl: './folders-list-container.component.html',
  styleUrl: './folders-list-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersListContainerComponent {}
