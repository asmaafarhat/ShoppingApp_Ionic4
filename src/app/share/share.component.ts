import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {

  @Input() pageName: string;

  constructor(private menu: MenuController,
              public global: GlobalService,
              private route: Router) { }

  ngOnInit() {
    console.log('init');
    this.global.counter = Number(localStorage.getItem('cart'));
  }
  ionViewWillEnter() {
    console.log('enter');
    // this.global.counter = Number(localStorage.getItem('cart'));
  }

  // ionViewWillLeave() {
  //   this.menu.close();
  // }

  cartEle() {
    this.route.navigateByUrl('/view-cart');
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
    this.route.navigate(['/home']);
  }
}
