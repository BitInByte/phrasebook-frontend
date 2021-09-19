import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, concatMap, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private readonly subject = new BehaviorSubject<boolean>(false);

  readonly isLoading$: Observable<boolean> = this.subject.asObservable();

  constructor() {}

  get isLoading(): boolean {
    return this.subject.getValue();
  }

  showLoadingUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    return of(null).pipe(
      tap(() => this.loadingOn()),
      concatMap(() => obs$),
      finalize(() => this.loadingOff())
    );
  }

  loadingOn(): void {
    this.subject.next(true);
  }

  loadingOff(): void {
    this.subject.next(false);
  }
}
