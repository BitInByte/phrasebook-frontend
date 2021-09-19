import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideDrawerService {
  private theSubject = new BehaviorSubject<boolean>(false);

  readonly isShown$: Observable<boolean> = this.theSubject.asObservable();

  public get isShown(): boolean {
    return this.theSubject.getValue();
  }

  constructor() {}

  toggleDrawer(): void {
    this.theSubject.next(!this.theSubject.getValue());
  }
}
