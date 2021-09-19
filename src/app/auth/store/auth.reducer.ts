import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface State {
  userInitials?: string;
  tokenExpiresAt?: number;
}

export interface AuthState {
  [AUTH_FEATURE_KEY]: State;
}

// Expose the entire auth state
export const selectFeature =
  createFeatureSelector<AuthState, State>(AUTH_FEATURE_KEY);

export const selectFeatureIsAuthenticated = createSelector(
  selectFeature,
  (state) => !!state.tokenExpiresAt
);

export const selectFeatureTokenExpiresAt = createSelector(
  selectFeature,
  (state) => state.tokenExpiresAt
);

export const selectFeatureUserInitials = createSelector(
  selectFeature,
  (state) => state.userInitials
);

const initialState: State = {
  userInitials: undefined,
  tokenExpiresAt: undefined,
};

const _authReducer = createReducer(
  initialState,
  on(AuthActions.authSuccess, (state, payload) => {
    console.log('Payload: ', payload);
    const user = {
      userInitials: payload.userInitials,
      tokenExpiresAt: payload.expiresAt,
    };
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }),
  on(AuthActions.logout, () => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return _authReducer(state, action);
}
