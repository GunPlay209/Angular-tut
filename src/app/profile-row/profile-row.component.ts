import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-row',
  standalone: true,
  imports: [],
  templateUrl: './profile-row.component.html',
  styleUrl: './profile-row.component.scss',
})
export class ProfileRowComponent implements OnInit {
  @Input() name = 'Leon';
  @Input() img = '/assets/img/hamster/Hamster1.jpg';
  @Input() description = '3 Jahre alt';
  constructor() {}

  ngOnInit(): void {}
}
