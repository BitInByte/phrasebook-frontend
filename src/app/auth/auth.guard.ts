import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as fromAuth from './store/auth.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private readonly isAuthenticated$ = this.store.select(
    fromAuth.selectFeatureTokenExpiresAt
  );
  constructor(
    private readonly store: Store<fromAuth.AuthState>,
    private readonly router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('Triggered');
    return this.isAuthenticated$.pipe(
      take(1),
      map((isAuth) => {
        if (state.url === '/auth' && isAuth)
          return this.router.createUrlTree(['/timeline']);
        if (state.url === '/auth' && !isAuth) return true;
        if (state.url === '/home' && isAuth)
          return this.router.createUrlTree(['/timeline']);
        if (state.url === '/home' && !isAuth) return true;
        if (isAuth) return true;
        return this.router.createUrlTree(['/auth']);
      })
    );
  }
}
