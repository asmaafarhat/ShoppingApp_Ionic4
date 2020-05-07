import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.page.html',
  styleUrls: ['./view-cart.page.scss'],
})
export class ViewCartPage implements OnInit {
  cards: Array<any> = [];
  count: number = Number(localStorage.getItem('cart'));
  total = 0;
  constructor(private route: Router, private location: Location, private menu: MenuController) { }

  ngOnInit() {
  }
  // openFirst() {
  //   this.menu.enable(true, 'first');
  //   this.menu.open('first');
  // }

  // ionViewWillLeave() {
  //   this.menu.close();
  // }
  ionViewWillEnter() {
    // console.log(this.count);
    this.allCategories();
  }

  allCategories() {
    this.cards = [];
    for (let index = 1; index < this.count + 1; index++) {
      let item = JSON.parse(localStorage.getItem(`item${index}`));
      if (item || item != null) {
        this.cards.push(item);
      }
    }
    // console.log(this.cards)
    this.totalPrice();
  }

  totalPrice() {
    this.total = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < this.cards.length; index++) {
      let item = this.cards[index].title;
      let price = item.split('Price ')[1].split(' EL')[0];
      // console.log(price);
      this.total += Number(price);
    }
    // console.log(this.total)
  }

  removeFromCard(i) {
    // console.log(i);
    // console.log(this.count);
    let item = localStorage.getItem(`item${this.count}`);
    localStorage.removeItem(`item${i + 1}`);
    localStorage.setItem(`item${i + 1}`, item);
    localStorage.removeItem(`item${this.count}`);
    this.count -= 1;
    localStorage.setItem('cart', `${this.count}`);
    this.allCategories();
  }

  cancel() {
    for (let index = 1; index < this.count + 1; index++) {
      localStorage.removeItem(`item${index}`);
    }
    localStorage.setItem('cart', '0');
    this.allCategories();
  }

  Profile() {
    this.route.navigateByUrl('/profile');
  }

  ViewCart() {
    this.route.navigateByUrl('/view-cart');
  }

  Help() {
    this.route.navigateByUrl('/help');
  }

  logout() {
    localStorage.clear();
    this.route.navigateByUrl('/home');
  }

  CategoryBtn() {
    this.route.navigateByUrl('/categories');
  }

  Confirm() {
    this.route.navigateByUrl('/confirm');
  }
  viewElem(ele) {
    this.route.navigate(['/elem-data', { itemData: JSON.stringify(ele) }]);
  }
}
