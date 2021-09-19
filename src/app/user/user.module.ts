import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule } from '@angular/router';
import { RoutesModule } from './user.routes';
import { AuthModule } from '../auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [SettingsComponent],
  // imports: [CommonModule, RouterModule.forChild(routes)],
  imports: [
    RoutesModule, // Order matters
    CommonModule,
    AuthModule,
  ],
})
export class UserModule {}
