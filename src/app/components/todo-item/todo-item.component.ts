import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { INote } from '../../interface/notes.interface';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@Component({
  selector: 'app-todo-item',
  imports: [MatTooltipModule, CommonModule, CdkAccordionModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() noteData!: INote[];
  @Input() isDisableButton!: boolean;

  @Output() DeleteEvent = new EventEmitter<number>();
  @Output() EditEvent = new EventEmitter<number>();
  @Output() DescriptionEvent = new EventEmitter<number>();

  isLoading = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  onDelete(index: number) {
    this.DeleteEvent.emit(index);
  }

  onEdit(index: number) {
    this.EditEvent.emit(index);
  }

  onDescription(index: number) {
    this.DescriptionEvent.emit(index);
  }
}
