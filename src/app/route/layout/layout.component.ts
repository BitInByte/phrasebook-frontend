import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../auth/store/auth.reducer';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public readonly userInitials$ = this.store.select(
    fromAuth.selectFeatureUserInitials
  );

  constructor(private readonly store: Store<fromAuth.AuthState>) {}

  ngOnInit(): void {}
}
