import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pop-message',
  imports: [],
  templateUrl: './pop-message.component.html',
  styleUrl: './pop-message.component.scss'
})
export class PopMessageComponent implements OnInit {

  // primary, success, warning or danger.
  messageType = "";

  // #info-fill, #check-circle-fill or #exclamation-triangle-fill.
  messageTypeIcons = "";

  message = "";

  constructor() {}

  ngOnInit() {}

  showMessage(messageType: string, messageTypeIcons: string, message: string) {
    if (message) {
      this.messageType = messageType;
      this.messageTypeIcons = messageTypeIcons;
      this.message = message;

      setTimeout(() => {
        this.message = '';
      }, 5000);
    }
  }

}
