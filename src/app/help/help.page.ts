import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor(private route: Router, private location: Location, private menu: MenuController) { }

  ngOnInit() {
  }

  // ionViewWillLeave() {
  //   this.menu.close();
  // }
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

  BackBtn() {
    this.location.back();
  }

  ProfileBtn() {
    this.route.navigateByUrl('/profile');
  }

  CategoryBtn() {
    this.route.navigateByUrl('/categories');
  }
}
