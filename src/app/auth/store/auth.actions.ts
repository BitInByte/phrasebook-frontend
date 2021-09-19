import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/user/user.model';

interface loginPayload {
  email: string;
  password: string;
}

// interface registrationPayload {
// firstName: string;
// lastName: string;
// email: string;
// password: string;
// }

interface authBody {
  userInitials: string;
  expiresAt: number;
}

// interface registerBody {

// }
export const loginStart = createAction(
  '[Login Page] Login Start',
  props<loginPayload>()
);

export const registrationStart = createAction(
  '[Register Page] Registration Start',
  props<User>()
);

export const authSuccess = createAction(
  '[Auth API] Auth Success',
  props<authBody>()
);

export const authError = createAction('[Auth API] Auth Error');

export const autoLogin = createAction('[Login AUTO] Auto Login');

export const logout = createAction('[Logout ACTION] Logout');
