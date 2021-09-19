import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './routes';
import { LayoutComponent } from './layout/layout.component';
import { MainNavComponent } from './layout/main-nav/main-nav.component';
import { SideDrawerComponent } from './layout/main-nav/side-drawer/side-drawer.component';
import { BurgerButtonComponent } from './layout/main-nav/burger-button/burger-button.component';
import { NavItemsComponent } from './layout/main-nav/nav-items/nav-items.component';
import { SearchBarComponent } from './layout/search-bar/search-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  exports: [RouterModule, LayoutComponent, SideDrawerComponent],
  declarations: [
    LayoutComponent,
    MainNavComponent,
    SideDrawerComponent,
    BurgerButtonComponent,
    NavItemsComponent,
    SearchBarComponent,
  ],
  // bootstrap: [SideDrawerComponent],
})
export class RouteModule {}
