import { inject, Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ToastsComponent } from '../share/toasts/toasts.component';

@Injectable({
  providedIn: 'root',
})
export class ToastsService {
  private _snackBar = inject(MatSnackBar);
  title!: string;

  durationInSeconds = 2;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  set(title: string) {
    this.title = title;
  }

  get() {
    return this.title;
  }

  openSnackBar() {
    this._snackBar.openFromComponent(ToastsComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
