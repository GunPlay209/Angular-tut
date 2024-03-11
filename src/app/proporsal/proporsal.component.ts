import { Component, OnInit } from '@angular/core';
import { ProfileRowComponent } from '../profile-row/profile-row.component';

@Component({
  selector: 'app-proporsal',
  standalone: true,
  imports: [ProfileRowComponent],
  templateUrl: './proporsal.component.html',
  styleUrl: './proporsal.component.scss',
})
export class ProporsalComponent implements OnInit {
  names = ['Marius', 'Franziska', 'Josephine', 'Patrick'];
  texts = [
    '2 Jahre alt',
    'Gräbt gerne Löcher',
    'Spielt gerne',
    'Hamsterrad-Freak',
  ];
  images = [
    'asset/img/hamster/Hamster4.jpg',
    'asset/img/hamster/Hamster5.jpg',
    'asset/img/hamster/Hamster6.jpg',
    'asset/img/hamster/Hamster3.jpg',
  ];
  constructor() {}

  ngOnInit(): void {}
}
