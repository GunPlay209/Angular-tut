import { Component, OnInit } from '@angular/core';
import { ProfileRowComponent } from '../profile-row/profile-row.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proporsal',
  standalone: true,
  imports: [ProfileRowComponent, CommonModule],
  templateUrl: './proporsal.component.html',
  styleUrl: './proporsal.component.scss',
})
export class ProporsalComponent implements OnInit {
  names = ['Marius', 'Franziska', 'Josephine', 'Patrick'];
  texts = [
    'Vielfresser',
    'Gräbt gerne Löcher',
    'Spielt gerne',
    'Hamsterrad-Freak',
  ];
  images = [
    'assets/img/hamster/Hamster4.jpg',
    'assets/img/hamster/Hamster5.jpg',
    'assets/img/hamster/Hamster6.jpg',
    'assets/img/hamster/Hamster3.jpg',
  ];
  constructor() {}

  ngOnInit(): void {}
}
