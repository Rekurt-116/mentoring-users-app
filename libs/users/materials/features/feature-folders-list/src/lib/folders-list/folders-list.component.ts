import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { IFolder } from '@users/data-access';

import { FoldersCardComponent } from '../folders-card/folders-card.component';

@Component({
  selector: 'users-folders-list',
  imports: [CommonModule, FoldersCardComponent],
  templateUrl: './folders-list.component.html',
  styleUrl: './folders-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersListComponent {
  @Input({ required: true })
  folders!: IFolder[];

  @Output() deleteFolder = new EventEmitter();
  @Output() openFolder = new EventEmitter<number>();

  public onDeleteFolder(folder: IFolder) {
    this.deleteFolder.emit(folder);
  }

  public onOpenFolder(folderId: number) {
    this.openFolder.emit(folderId);
  }
}
