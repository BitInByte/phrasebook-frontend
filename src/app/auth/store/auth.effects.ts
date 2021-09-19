import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { MessageModalService } from 'src/app/shared/message-modal/message-modal.service';
import { User } from 'src/app/user/user.model';
import { AuthService } from '../auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginStart),
      mergeMap((loginAction) =>
        this.authService.login(loginAction.email, loginAction.password).pipe(
          map((authRes) =>
            AuthActions.authSuccess({
              userInitials: authRes.userInitials,
              expiresAt: authRes.tokenExpiresAt,
            })
          ),
          catchError(() => of(AuthActions.authError()))
        )
      )
    )
  );

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registrationStart),
      mergeMap((signupAction) =>
        this.authService.signup(signupAction).pipe(
          map((authRes) =>
            AuthActions.authSuccess({
              userInitials: authRes.userInitials,
              expiresAt: authRes.tokenExpiresAt,
            })
          ),
          catchError(() => of(AuthActions.authError()))
        )
      )
    )
  );

  autoLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.autoLogin),
      map(() => {
        const userData: {
          userInitials: string;
          tokenExpiresAt: number;
        } = JSON.parse(localStorage.getItem('user')!);
        if (!userData) return { type: 'DUMMY' };
        console.log('Time now: ', Date.now() * 1000);
        console.log('TokenExpiresAt: ', userData.tokenExpiresAt);
        console.log('Is valid? ', Date.now() < userData.tokenExpiresAt);
        const timeNow = Date.now();
        if (timeNow > userData.tokenExpiresAt) {
          this.messageModalService.setMessage(
            'Session invalid! Please, login again.',
            true
          );
          localStorage.removeItem('user');
          return { type: 'DUMMY' };
        }
        const remainingExpirationTime = userData.tokenExpiresAt - timeNow;
        this.authService.setLogoutTimer(remainingExpirationTime);
        return AuthActions.authSuccess({
          userInitials: userData.userInitials,
          expiresAt: userData.tokenExpiresAt,
        });
      })
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.removeItem('user');
          this.authService.clearLogoutTimer();
          this.router.navigate(['/auth']);
        })
      ),
    {
      dispatch: false,
    }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService,
    private readonly messageModalService: MessageModalService,
    private readonly router: Router
  ) {}
}
