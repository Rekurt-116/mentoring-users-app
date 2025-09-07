import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-folders-list',
  imports: [CommonModule],
  templateUrl: './folders-list.component.html',
  styleUrl: './folders-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersListComponent {}
