import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.html',
  styleUrl: './chat-bot.css'
})
export class ChatBot {
  constructor(private router: Router, private route: ActivatedRoute) {}

  closeChatbot() {
    this.router.navigate([{ outlets: { chat: null } }]);
  }
}
