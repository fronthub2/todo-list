import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { INote } from '../../interface/notes.interface';
import { DataService } from '../../services/todo-list.service';
import { ModalComponent } from '../../share/modal/modal.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { ButtonAddComponent } from './button-add/button-add.component';

@Component({
  selector: 'app-todo-list',
  imports: [
    MatInputModule,
    CommonModule,
    FormsModule,
    ButtonAddComponent,
    TodoItemComponent,
    ModalComponent,
    MatDialogModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  btnTitle = 'Add';
  noteData!: INote[];
  valueInput!: string;
  valueTextarea!: string;
  index!: number;
  modalTitle!: string;

  isDisableAdd = true;
  isDisableButton = false;
  isShowModal = false;

  constructor(private dataService: DataService, private dialog: MatDialog) {
    this.noteData = this.dataService.getData();
    console.log(this.noteData);
  }

  onAddData() {
    if (this.btnTitle === 'Edit') {
      this.dataService.getDataByIndex(this.index).title = this.valueInput;
      this.dataService.getDataByIndex(this.index).description =
        this.valueTextarea;
      this.btnTitle = 'Add';
      this.isDisableButton = false;
    } else {
      this.dataService.addData({
        id: this.noteData.length + 1,
        title: this.valueInput,
        description: this.valueTextarea,
        time: new Date().toLocaleTimeString(),
      });
    }

    this.isDisableAdd = true;
    this.clearValue();
    this.dataService.saveInLocalStorage();
  }

  onDelete(index: number) {
    this.index = index;
    this.openDialog('удалить');
  }

  onEdit(index: number) {
    this.index = index;
    this.openDialog('изменить');
  }

  edit() {
    const note = this.dataService.getDataByIndex(this.index);
    this.valueInput = note.title;
    this.valueTextarea = note.description;
    this.btnTitle = 'Edit';
    this.isDisableAdd = false;
    this.isDisableButton = true;
  }

  onDescription(index: number) {
    this.dataService.getDataByIndex(index);
  }

  onChangeInput(event: HTMLInputElement) {
    this.isDisableAdd = !event.value.trim().length;
  }

  openDialog(word: string) {
    this.dialog.open(ModalComponent, {
      data: {
        title: word,
        index: this.index,
        editFn: this.edit.bind(this),
      },
    });
  }

  clearValue() {
    this.valueInput = '';
    this.valueTextarea = '';
  }
}
