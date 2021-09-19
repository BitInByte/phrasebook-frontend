import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../../../auth/store/auth.actions';
import * as fromAuth from '../../../../auth/store/auth.reducer';

@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.scss'],
})
export class NavItemsComponent implements OnInit {
  public readonly isAuthenticated$ = this.store.select(
    fromAuth.selectFeatureIsAuthenticated
  );

  constructor(private readonly store: Store<fromAuth.AuthState>) {}

  ngOnInit(): void {}

  onLogoutClick(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
