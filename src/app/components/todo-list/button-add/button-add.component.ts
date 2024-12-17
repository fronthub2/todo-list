import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-button-add',
  imports: [MatTooltipModule],
  templateUrl: './button-add.component.html',
  styleUrl: './button-add.component.scss',
})
export class ButtonAddComponent {
  @Input() btnTitle!: string;
  @Input() isDisableAdd!: boolean;

  onChangeTooltip() {
    if (this.isDisableAdd) return;

    return this.btnTitle === 'Add' ? 'Добавить' : 'Изменить';
  }
}
