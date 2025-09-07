import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-folders-card',
  imports: [CommonModule],
  templateUrl: './folders-card.component.html',
  styleUrl: './folders-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersCardComponent {}
