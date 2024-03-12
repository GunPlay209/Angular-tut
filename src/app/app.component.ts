import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HamsterCardComponent } from './hamster-card/hamster-card.component';
import { HeaderComponent } from './header/header.component';
import { ProporsalComponent } from './proporsal/proporsal.component';
import { FriendboxComponent } from './friendbox/friendbox.component';
import { FriendService } from './friend.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HamsterCardComponent,
    ProporsalComponent,
    FriendboxComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  postTexts = [
    'Hallo, mein Name ist Leon! Ich bin hier um neue Freunde zu treffen!',
    'Hallo zusammen. Freut mich das ihr hier seid!',
    'Hi ich bin der Patrick ich bin ein Hamsterrad-Freak.',
    'Ich esse gerne Kekse',
  ];

  postImages = [
    'assets/img/hamster/Hamster1.jpg',
    'assets/img/hamster/Hamster2.jpg',
    'assets/img/hamster/Hamster3.jpg',
    'assets/img/hamster/Hamster7.jpg',
  ];
}
