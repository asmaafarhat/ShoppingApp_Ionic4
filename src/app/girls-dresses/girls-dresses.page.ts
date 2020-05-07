import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-girls-dresses',
  templateUrl: './girls-dresses.page.html',
  styleUrls: ['./girls-dresses.page.scss'],
})
export class GirlsDressesPage implements OnInit {
  titel = 'Girls Dresses';
  constructor(public global: GlobalService , private route: Router) { }

  cards = [
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: true,
      img: '../../assets/girls_dresses/1.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: true,
      img: '../../assets/girls_dresses/2.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/girls_dresses/3.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/girls_dresses/4.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/girls_dresses/5.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/girls_dresses/6.jpeg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: true,
      img: '../../assets/girls_dresses/7.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/girls_dresses/8.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/girls_dresses/9.jpg'
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
    this.route.navigate(['/elem-data' , {itemData: JSON.stringify(ele)}]);
  }
}
