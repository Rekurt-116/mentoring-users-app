import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-folders-add-button',
  imports: [CommonModule],
  templateUrl: './folders-add-button.component.html',
  styleUrl: './folders-add-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersAddButtonComponent {}
