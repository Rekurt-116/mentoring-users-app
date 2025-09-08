import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'users-folders-add-dialog',
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatDialogModule, MatFormFieldModule],
  templateUrl: './folders-add-dialog.component.html',
  styleUrl: './folders-add-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersAddDialogComponent {
  public dialogRef = inject(MatDialogRef);
  // public formControl: FormControl;

  // constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string }) {
  //   this.formControl = new FormControl(this.data.title);
  // }

  cancel(): void {
    this.dialogRef.close();
  }

  // save(): void {
  //   if (this.formControl.valid) {
  //     const controlData = {
  //       title: this.formControl.value.trim(),
  //     };
  //     this.dialogRef.close(controlData);
  //   }
  // }
}
