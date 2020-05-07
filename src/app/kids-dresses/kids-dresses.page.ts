import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kids-dresses',
  templateUrl: './kids-dresses.page.html',
  styleUrls: ['./kids-dresses.page.scss'],
})
export class KidsDressesPage implements OnInit {

  titel = 'Kids Dresses';

  constructor(public global: GlobalService , private route: Router) { }

// size & color

  cards = [
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: true,
      img: '../../assets/Kids_dresses/1.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: true,
      img: '../../assets/Kids_dresses/2.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/Kids_dresses/3.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/Kids_dresses/4.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/Kids_dresses/5.png'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/Kids_dresses/6.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: true,
      img: '../../assets/Kids_dresses/7.png'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/Kids_dresses/8.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/Kids_dresses/9.jpg'
    },
  ];

  ngOnInit() {
  }

  addToCard(i) {
    this.global.counter += 1;
    localStorage.setItem(`item${this.global.counter}`, JSON.stringify(this.cards[i]));
    localStorage.setItem('cart', `${this.global.counter}`);
  }

  viewElem(ele) {
    this.route.navigate(['/elem-data', { itemData: JSON.stringify(ele) }]);
  }
}
