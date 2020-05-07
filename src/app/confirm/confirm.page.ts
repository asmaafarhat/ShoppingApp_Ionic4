import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {
  ConfirmForm: any;

  constructor(private location: Location, private route: Router, private menu: MenuController) {

    this.ConfirmForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'),
      Validators.minLength(3), Validators.maxLength(10)]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'),
      Validators.minLength(3), Validators.maxLength(10)]),
      phoneNumber: new FormControl('', Validators.required),
      address1: new FormControl('', Validators.required),
      address2: new FormControl(''),
      city: new FormControl('', Validators.required),
      State: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  // ionViewWillLeave() {
  //   this.menu.close();
  // }
  
  Next() {
    if (this.ConfirmForm.valid) {
      localStorage.setItem('firstName', `${this.ConfirmForm.value.firstName}`);
      localStorage.setItem('lastName', `${this.ConfirmForm.value.lastName}`);
      localStorage.setItem('phoneNumber', `${this.ConfirmForm.value.phoneNumber}`);
      localStorage.setItem('address1', `${this.ConfirmForm.value.address1}`);
      localStorage.setItem('address2', `${this.ConfirmForm.value.address2}`);
      localStorage.setItem('city', `${this.ConfirmForm.value.city}`);
      localStorage.setItem('State', `${this.ConfirmForm.value.State}`);
      localStorage.setItem('street', `${this.ConfirmForm.value.street}`);
      localStorage.setItem('zipCode', `${this.ConfirmForm.value.zipCode}`);
      this.route.navigateByUrl('/payment');
    }
  }
  BackBtn() {
    this.location.back();
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
