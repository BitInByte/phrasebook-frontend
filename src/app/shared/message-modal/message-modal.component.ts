import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MessageModalService } from './message-modal.service';

const TRANSLATE_WIDE = '-6.25rem';
const ANIMATION_TIME = 300;

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss'],
  animations: [
    trigger('error', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: `translateY(${TRANSLATE_WIDE})`,
        }),
        animate(
          ANIMATION_TIME,
          style({
            opacity: 1,
            transform: 'translateY(0)',
          })
        ),
      ]),
      transition(':leave', [
        animate(
          ANIMATION_TIME,
          style({
            transform: `translateY(${TRANSLATE_WIDE})`,
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class MessageModalComponent implements OnInit {
  constructor(public messageModalService: MessageModalService) {}

  ngOnInit(): void {}
}
