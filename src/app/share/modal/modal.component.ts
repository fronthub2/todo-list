import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Output() yesOrNoEvent = new EventEmitter<boolean>();
  @Output() isShow = new EventEmitter<boolean>();
}
