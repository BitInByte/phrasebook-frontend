import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RouteModule } from './route/route.module';
import { SideDrawerComponent } from './route/layout/main-nav/side-drawer/side-drawer.component';
import { HomeComponent } from './home/home.component';
import { AuthModule } from './auth/auth.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessageModalComponent } from './shared/message-modal/message-modal.component';
import * as fromAuth from './auth/store/auth.reducer';
import { AuthEffects } from './auth/store/auth.effects';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    RouteModule,
    BrowserModule,
    // AppRoutingModule,
    StoreModule.forRoot({
      // [fromAuth.AUTH_FEATURE_KEY]: fromAuth.reducer,
    }),
    // EffectsModule.forRoot([AuthEffects]),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    AuthModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent, SideDrawerComponent, MessageModalComponent],
})
export class AppModule {}
