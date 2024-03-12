import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  names = [];
  images = [
  ];

  constructor() { }

  // addfirend('Peter', '/assets/img/hamster/Hamster7.jpg')
  addFriend(name, image){
    this.names.push(name);
    this.images.push(image);
  }
}
