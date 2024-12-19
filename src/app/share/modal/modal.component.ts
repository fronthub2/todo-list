import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { ButtonHoverDirective } from '../../directives/button-hover.directive';
import { DataService } from '../../services/todo-list.service';

@Component({
  selector: 'app-modal',
  imports: [ButtonHoverDirective, MatDialogModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  title!: string;
  index!: number;

  constructor(
    @Inject(MatDialogRef)
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    private data: { title: string; index: number; editFn(): void },
    private dataService: DataService
  ) {
    this.title = this.data.title;
    this.index = this.data.index;
  }

  confirm() {
    if (this.title === 'удалить') {
      this.dataService.deleteData(this.index);
      this.dataService.saveInLocalStorage();
    } else {
      const note = this.dataService.getDataByIndex(this.index);
      console.log(note.title);
      this.data.editFn();
    }
    this.close();
  }

  close() {
    this.dialogRef.close();
  }
}
