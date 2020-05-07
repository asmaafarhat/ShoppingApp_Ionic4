import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-t-shirt',
  templateUrl: './t-shirt.page.html',
  styleUrls: ['./t-shirt.page.scss'],
})
export class TShirtPage implements OnInit {

  titel = 'T-Shirt';

  constructor(private route: Router, public global: GlobalService) { }

  cards = [
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: true,
      img: '../../assets/t_shirt/1.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: true,
      img: '../../assets/t_shirt/2.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/t_shirt/3.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/t_shirt/4.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/t_shirt/5.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/t_shirt/6.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: true,
      img: '../../assets/t_shirt/7.jpeg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/t_shirt/8.jpg'
    },
    {
      title: 'Price 150 EL',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      new: false,
      img: '../../assets/t_shirt/9.jpg'
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
