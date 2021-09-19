import { Component, OnInit } from '@angular/core';
import { SideDrawerService } from '../side-drawer/side-drawer.service';

@Component({
  selector: 'app-burger-button',
  templateUrl: './burger-button.component.html',
  styleUrls: ['./burger-button.component.scss'],
})
export class BurgerButtonComponent implements OnInit {
  constructor(private readonly sideDrawerService: SideDrawerService) {}

  ngOnInit(): void {}

  onClick(): void {
    this.sideDrawerService.toggleDrawer();
  }
}
