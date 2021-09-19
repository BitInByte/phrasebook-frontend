import {
  animate,
  // animateChild,
  query,
  // state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { SideDrawerService } from './side-drawer.service';

@Component({
  selector: 'app-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.scss'],
  animations: [
    // trigger('item', [
    // state(
    // 'open',
    // style({
    // opacity: 1,
    // transform: 'translateX(-0)',
    // })
    // ),
    // state(
    // 'close',
    // style({
    // opacity: 0,
    // transform: 'translateX(-300px)',
    // })
    // ),
    // transition('open <=> close', [animate(300)]),
    // ]),
    trigger('item', [
      // transition(':enter, :leave', [
      // query('@*', animateChild(), { optional: true }),
      // ]),
      transition(':enter', [
        query('aside', [
          style({
            opacity: 0,
            transform: 'translateX(-300px)',
          }),
          animate(
            300,
            style({
              opacity: 1,
              transform: 'translateX(-0)',
            })
          ),
        ]),
      ]),
      transition(':leave', [
        // Since it doesn't trigger the leave when we target
        // the @item inside of the *ngIf, we need to use
        // the query to target the element we want to animate
        query('aside', [
          // animateChild(),
          animate(
            300,
            style({
              transform: 'translateX(-300px)',
              opacity: 0,
            })
          ),
        ]),
      ]),
    ]),
  ],
})
export class SideDrawerComponent implements OnInit {
  constructor(public readonly sideDrawerService: SideDrawerService) {}

  ngOnInit(): void {}

  onClick(): void {
    this.sideDrawerService.toggleDrawer();
  }
}
