import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { RoutesModule } from './auth.routes';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AuthComponent, AuthFormComponent],
  imports: [
    RoutesModule, // order matters
    CommonModule,
    // RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
    HttpClientModule,
  ],
  exports: [AuthFormComponent],
})
export class AuthModule {}
