import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastsService } from '../../services/toasts.service';

@Component({
  selector: 'app-toasts',
  imports: [CommonModule, MatSnackBarModule],
  templateUrl: './toasts.component.html',
  styleUrl: './toasts.component.scss',
})
export class ToastsComponent {
  title!: string;

  constructor(private toastsService: ToastsService) {
    this.title = toastsService.get();
  }
}
