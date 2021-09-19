import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageModalService {
  public isError: boolean | null = null;
  private readonly subject = new BehaviorSubject<string | null>(null);

  readonly hasMessage$: Observable<string | null> = this.subject.asObservable();

  constructor() {}

  get message(): string | null {
    return this.subject.getValue();
  }

  public setMessage(message: any, isError: boolean): void {
    if (Array.isArray(message)) {
      message = message.join('./n');
    }
    this.isError = isError;
    this.subject.next(message);
    setTimeout(() => {
      this.clearMessage();
    }, 5000);
  }

  private clearMessage(): void {
    this.isError = null;
    this.subject.next(null);
  }
}
