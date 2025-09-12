import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FoldersListContainerComponent} from "@users/feature-folders-list";

@Component({
  selector: 'users-materials',
  imports: [CommonModule, FoldersListContainerComponent],
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialsComponent {}
