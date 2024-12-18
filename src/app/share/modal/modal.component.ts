import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonHoverDirective } from '../../directives/button-hover.directive';

@Component({
  selector: 'app-modal',
  imports: [ButtonHoverDirective],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() modalTitle!: string;
  @Input() description!: string;
  @Output() closeModalEvent = new EventEmitter<boolean>();
  @Output() actionEvent = new EventEmitter<string>();

  onAction(event:string) {
    this.actionEvent.emit(event);
  }

  closeModal(event: boolean) {
    this.closeModalEvent.emit(event);
  }
}
