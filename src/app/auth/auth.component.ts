import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from './store/auth.reducer';
import * as fromPhrase from '../phrases/store/phrase.reducer';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private readonly store: Store) {}

  ngOnInit(): void {}
}
