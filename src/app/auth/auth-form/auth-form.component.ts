import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { SpinnerService } from 'src/app/shared/spinner/spinner.service';
import { User } from 'src/app/user/user.model';
import * as AuthActions from '../store/auth.actions';
import * as fromAuth from '../store/auth.reducer';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  animations: [
    trigger('item', [
      // transition(':enter', [
      // style({
      // opacity: 0,
      // }),
      // animate(
      // 300,
      // style({
      // opacity: 1,
      // })
      // ),
      // ]),
      transition('* => *', [
        style({
          opacity: 0,
        }),
        animate(
          400,
          style({
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
  providers: [SpinnerService],
})
export class AuthFormComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) authForm!: NgForm;
  @Input() public isLogin = true;
  @Input() public isMain = false;
  @Input() public isSettings = false;
  private readonly destroyed$ = new Subject<boolean>();
  constructor(
    private readonly store: Store,
    public readonly spinnerService: SpinnerService,
    private readonly actions$: Actions
  ) {}

  get isFormValid(): boolean {
    // console.log(this.authForm);
    if (
      !this.isLogin &&
      this.authForm &&
      this.authForm.valid &&
      this.authForm.value['password'] === this.authForm.value['repeatPassword']
    ) {
      return true;
    } else if (this.isLogin && this.authForm && this.authForm.valid) {
      return true;
    }
    return false;
  }

  get isFormFull(): boolean {
    if (!this.isLogin || this.isSettings) {
      return true;
    }
    return false;
  }

  get title(): string {
    if (!this.isLogin && !this.isSettings) {
      return 'Registration';
    }
    if (this.isSettings) {
      return 'User Settings';
    }
    return 'Login';
  }

  ngOnInit(): void {
    const values = {
      isLogin: this.isLogin,
      isMain: this.isMain,
      isRegistration: !this.isLogin,
      isSettings: this.isSettings,
    };
    console.table(values);
    this.actions$
      .pipe(
        ofType(AuthActions.loginStart),
        takeUntil(this.destroyed$),
        tap(() => this.spinnerService.loadingOn())
      )
      .subscribe();
    this.actions$
      .pipe(
        ofType(AuthActions.registrationStart),
        takeUntil(this.destroyed$),
        tap(() => this.spinnerService.loadingOn())
      )
      .subscribe();
    this.actions$
      .pipe(
        ofType(AuthActions.authSuccess),
        takeUntil(this.destroyed$),
        tap(() => this.spinnerService.loadingOff())
      )
      .subscribe();
    this.actions$
      .pipe(
        ofType(AuthActions.authError),
        takeUntil(this.destroyed$),
        tap(() => this.spinnerService.loadingOff())
      )
      .subscribe();
  }

  onSubmit(form: NgForm): void {
    console.log('Form: ', form);
    console.log(form.controls['email'].value);
    const email = form.controls['email'].value;
    const password = form.controls['password'].value;
    if (this.isLogin) {
      this.store.dispatch(AuthActions.loginStart({ email, password }));
    } else if (!this.isLogin && !this.isSettings) {
      const firstName = form.controls['firstName'].value;
      const lastName = form.controls['lastName'].value;
      this.store.dispatch(
        AuthActions.registrationStart(
          new User(firstName, lastName, email, password)
        )
      );
    }
  }

  onClick(): void {
    this.isLogin = !this.isLogin;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
