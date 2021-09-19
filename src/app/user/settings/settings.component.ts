import { Component, OnInit } from '@angular/core';
import { MessageModalService } from 'src/app/shared/message-modal/message-modal.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(private messageModalService: MessageModalService) {}

  ngOnInit(): void {}

  public onTestModalClickHandler(): void {
    console.log('TEST');
    this.messageModalService.setMessage('TEST ERROR', false);
  }
}
