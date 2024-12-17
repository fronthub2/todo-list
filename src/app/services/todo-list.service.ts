import { Injectable } from '@angular/core';
import { INote } from '../interface/notes.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private noteData: INote[];

  private key: string = 'note';

  constructor(private LocalStorageService: LocalStorageService) {
    this.noteData = this.LocalStorageService.get(this.key);
  }

  getData() {
    return this.noteData;
  }

  addData(note: INote) {
    this.noteData.push(note);
    this.LocalStorageService.set(this.key, this.noteData);
  }

  deleteData(index: number) {
    this.noteData.splice(index, 1);
    this.LocalStorageService.set(this.key, this.noteData);
  }

  getDataByIndex(index: number) {
    return this.noteData[index];
  }
}
