import { Injectable } from '@angular/core';
import { INote } from '../interface/notes.interface';
import { LocalStorageService } from './local-storage.service';
import { ToastsService } from './toasts.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private noteData: INote[];

  private key: string = 'note';

  constructor(
    private LocalStorageService: LocalStorageService,
    private toastsService: ToastsService
  ) {
    this.noteData = this.LocalStorageService.get(this.key);
  }

  getData() {
    return this.noteData;
  }

  addData(note: INote) {
    this.noteData.push(note);
  }

  deleteData(index: number) {
    this.noteData.splice(index, 1);
  }

  saveInLocalStorage() {
    this.LocalStorageService.set(this.key, this.noteData);
  }

  getDataByIndex(index: number) {
    return this.noteData[index];
  }
}
