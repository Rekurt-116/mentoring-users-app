import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as MaterialsActions from './materials.actions';
import * as MaterialsSelector from './materials.selectors';
import { IMaterial } from '../../interfaces/materials-interfaces/get.interface';
import { CreateMaterial } from '../../interfaces/materials-interfaces/post.interface';

@Injectable({ providedIn: 'root' })
export class MaterialsFacade {
  private readonly store: Store = inject(Store);

  public readonly allMaterials$: Observable<IMaterial[]> = this.store.select(MaterialsSelector.selectAllMaterials);
  public readonly materialStatus$ = this.store.pipe(select(MaterialsSelector.selectMaterialStatus));

  loadMaterials() {
    this.store.dispatch(MaterialsActions.loadMaterials());
  }

  addMaterial(materialData: CreateMaterial) {
    this.store.dispatch(MaterialsActions.addMaterial({ materialData }));
  }

  deleteMaterial(id: number) {
    this.store.dispatch(MaterialsActions.deleteMaterial({ id }));
  }
}
