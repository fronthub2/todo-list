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
  index!:number;

  constructor(
    @Inject(MatDialogRef)
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    private data: { title: string; index: number },
    private dataService: DataService
  ) {
    this.title = this.data.title;
    this.index = this.data.index;
  }

  confirm() {
    if (this.data.title === 'удалить') {
      this.dataService.deleteData(this.index);
      this.dataService.saveInLocalStorage()
      console.log(this.data.index);
      console.log('удаляем');
    } else {
      console.log(this.data.index);
      console.log('изменяем');
    }
    this.close();
  }

  close() {
    this.dialogRef.close();
  }
}
