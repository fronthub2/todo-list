import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { INote } from '../../interface/notes.interface';
import { DataService } from '../../services/todo-list.service';
import { ModalComponent } from "../../share/modal/modal.component";
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
    ModalComponent
],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  noteData!: INote[];
  valueInput!: string;
  valueTextarea!: string;
  isDisableAdd = true;
  btnTitle = 'Add';

  isShowModal = false;

  constructor(private DataService: DataService) {
    this.noteData = this.DataService.getData();
    console.log(this.noteData);
  }

  onAddData() {
    this.DataService.addData({
      id: this.noteData.length + 1,
      title: this.valueInput,
      description: this.valueTextarea,
      time: new Date().toLocaleTimeString(),
    });

    this.clearValue();
    this.isDisableAdd = true;
  }

  onDelete(index: number) {
    this.DataService.deleteData(index);
  }

  onEdit(index: number) {
    this.DataService.getDataByIndex(index);
    console.log(this.DataService.getDataByIndex(index));
  }

  onDescription(index: number) {
    this.DataService.getDataByIndex(index);
    console.log(this.DataService.getDataByIndex(index).description);
  }

  onChangeInput(event: HTMLInputElement) {
    if (!event.value.trim().length) return (this.isDisableAdd = true);

    return (this.isDisableAdd = false);
  }

  clearValue() {
    this.valueInput = '';
    this.valueTextarea = '';
  }
}
