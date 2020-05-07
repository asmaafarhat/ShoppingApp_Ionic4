import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-kids-shoes',
  templateUrl: './kids-shoes.page.html',
  styleUrls: ['./kids-shoes.page.scss'],
})
export class KidsShoesPage implements OnInit {
  titel = 'Kids Shoes';

  constructor(private route: Router, public global: GlobalService) { }

  cards = [
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: true,
      img: '../../assets/kids_shoes/1.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: true,
      img: '../../assets/kids_shoes/2.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/kids_shoes/3.gif'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/kids_shoes/4.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/kids_shoes/5.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/kids_shoes/6.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: true,
      img: '../../assets/kids_shoes/7.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/kids_shoes/8.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/kids_shoes/9.jpg'
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
