import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map, shareReplay, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MessageModalService } from '../shared/message-modal/message-modal.service';
import * as fromAuth from './store/auth.reducer';
import * as AuthActions from './store/auth.actions';
import { User } from '../user/user.model';

interface AuthBody {
  data: {
    userInitials: string;
    issuedAt: number;
    expiresAt: number;
    token: string;
  };
}

interface AuthPayload {
  userInitials: string;
  tokenExpiresAt: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private tokenExpirationTimer?: NodeJS.Timeout;
  private tokenExpirationTimer?: any;
  private readonly LOGIN_ENDPOINT: string = 'login';
  private readonly REGISTRATION_ENDPOINT: string = 'signup';
  private readonly login_url: string = `${environment.apiPath}/${this.LOGIN_ENDPOINT}`;
  private readonly registration_url: string = `${environment.apiPath}/${this.REGISTRATION_ENDPOINT}`;

  constructor(
    private readonly http: HttpClient,
    private readonly messageModalService: MessageModalService,
    private readonly router: Router,
    private readonly store: Store
  ) {}

  // public login(email: string, password: string): Observable<fromAuth.State> {
  public login(email: string, password: string): Observable<AuthPayload> {
    console.log('Email: ', email);
    // const params = new HttpParams();
    // params.set('email', email);
    // params.set('password', password);
    // return this.http.get<loginBody>(this.login_url, { params }).pipe(
    return this.http
      .post<AuthBody>(
        this.login_url,
        { email, password },
        { withCredentials: true }
      )
      .pipe(
        take(1),
        shareReplay(),
        map((resData) => ({
          userInitials: resData.data.userInitials,
          tokenExpiresAt: resData.data.expiresAt,
        })),
        tap(
          () => this.router.navigate(['/timeline']),
          (error) =>
            this.messageModalService.setMessage(error['error']['errors'], true)
        )
      );
  }

  public signup(user: User): Observable<AuthPayload> {
    return this.http.post<AuthBody>(this.registration_url, user).pipe(
      take(1),
      shareReplay(),
      map((resData) => ({
        userInitials: resData.data.userInitials,
        tokenExpiresAt: resData.data.expiresAt,
      })),
      tap(
        () => this.router.navigate(['/timeline']),
        (error) =>
          this.messageModalService.setMessage(error['error']['errors'], true)
      )
    );
  }

  public setLogoutTimer(expirationDuration: number): void {
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(AuthActions.logout());
    }, expirationDuration);
  }

  public clearLogoutTimer(): void {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = undefined;
    }
  }
}
