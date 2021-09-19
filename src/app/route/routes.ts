import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Lazy Loading
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    loadChildren: () => import('../user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
    // loadChildren: '../auth/auth.module#AuthModule',
  },
  {
    path: 'timeline',
    loadChildren: () =>
      import('../phrases/phrases.module').then((m) => m.PhrasesModule),
  },
  {
    path: '**',
    redirectTo: '/auth',
  },
];
