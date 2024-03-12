import { Component, Input, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-row.component.html',
  styleUrl: './profile-row.component.scss',
})
export class ProfileRowComponent implements OnInit {
  @Input() name = 'Leon';
  @Input() img = '/assets/img/hamster/Hamster1.jpg';
  @Input() description = '3 Jahre alt';
  @Input() canFollow = true;
  constructor(public fs: FriendService) {}

  ngOnInit(): void {}
}
