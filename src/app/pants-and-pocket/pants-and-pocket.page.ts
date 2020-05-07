import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-pants-and-pocket',
  templateUrl: './pants-and-pocket.page.html',
  styleUrls: ['./pants-and-pocket.page.scss'],
})
export class PantsAndPocketPage implements OnInit {
  titel = 'Pants And Pocket';

  constructor(private route: Router, public global: GlobalService) { }

  cards = [
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: true,
      img: '../../assets/pants/1.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: true,
      img: '../../assets/pants/2.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/pants/3.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/pants/4.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/pants/5.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/pants/6.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: true,
      img: '../../assets/pants/7.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/pants/8.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/pants/9.jpg'
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
