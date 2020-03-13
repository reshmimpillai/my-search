import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SearchInputService {

  serachData: string;
  constructor() { }
  private isLoading: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public getSerachText() {
    return this.isLoading.asObservable();
  }

  public setSerachText(searchText: string) {
    this.isLoading.next(searchText);
  }
}
