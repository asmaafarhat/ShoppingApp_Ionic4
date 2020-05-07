import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss', 'home.page.css'],
})
export class HomePage implements OnInit {
  loginForm: any;
  signForm: any;

  validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required.' },
      { type: 'minlength', message: 'Username must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
      { type: 'validUsername', message: 'Your username has already been taken.' }
    ],
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
  };

  constructor(private route: Router) {

    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    this.signForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'),
        Validators.minLength(3), Validators.maxLength(10)]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'),
        Validators.minLength(3), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      phoneNumber: new FormControl('', Validators.required),
      // city: new FormControl('', Validators.required),
      // country: new FormControl('', Validators.required),
      // street: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required,  Validators.minLength(6), Validators.maxLength(12),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])
      // this is for the letters (both uppercase and lowercase) and numbers validation)
    });
    // let authInfo = localStorage.getItem('email');

    // if (authInfo != undefined) {
    //   this.route.navigate(['categories']);
    // }
  }


  ngOnInit() {
    let login = document.getElementById('login');
    let forgotten = document.getElementById('forgotten');
    let signin = document.getElementById('signin');
    login.style.display = 'none';
    forgotten.style.display = 'none';
    signin.style.display = 'none';
  }

  signinModule() {
    let loginBtn = document.getElementById('login-button');
    let login = document.getElementById('login');
    let forgotten = document.getElementById('forgotten');
    let signin = document.getElementById('signin');
    setTimeout(() => {
      loginBtn.style.display = 'none';
      login.style.display = 'none';
      forgotten.style.display = 'none';
      signin.style.display = 'flex';
    }, 500);
  }

  loginModule() {
    let loginBtn = document.getElementById('login-button');
    let login = document.getElementById('login');
    let forgotten = document.getElementById('forgotten');
    let signin = document.getElementById('signin');
    setTimeout(() => {
      loginBtn.style.display = 'none';
      login.style.display = 'flex';
      forgotten.style.display = 'none';
      signin.style.display = 'none';
    }, 500);
  }

  forgottenModule() {
    let loginBtn = document.getElementById('login-button');
    let login = document.getElementById('login');
    let forgotten = document.getElementById('forgotten');
    let signin = document.getElementById('signin');
    setTimeout(() => {
      loginBtn.style.display = 'none';
      login.style.display = 'none';
      forgotten.style.display = 'flex';
      signin.style.display = 'none';
    }, 500);
  }

  signIn() {
    // console.log(this.signForm);
    if (this.signForm.valid) {
      localStorage.setItem('firstName', `${this.signForm.value.firstName}`);
      localStorage.setItem('lastName', `${this.signForm.value.lastName}`);
      localStorage.setItem('email', `${this.signForm.value.email}`);
      localStorage.setItem('phoneNumber', `${this.signForm.value.phoneNumber}`);
      localStorage.setItem('city', `${this.signForm.value.city}`);
      localStorage.setItem('country', `${this.signForm.value.country}`);
      localStorage.setItem('street', `${this.signForm.value.street}`);
      localStorage.setItem('password', `${this.signForm.value.password}`);
      localStorage.setItem('cart', '0');
      this.route.navigateByUrl('/categories');
    }
  }

  login() {
    // console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      localStorage.setItem('email', `${this.signForm.value.email}`);
      localStorage.setItem('password', `${this.signForm.value.password}`);
      localStorage.setItem('cart', '0');
      this.route.navigateByUrl('/categories');
    }
    localStorage.setItem('cart', '0');
  }

  close() {
    let loginBtn = document.getElementById('login-button');
    let login = document.getElementById('login');
    let forgotten = document.getElementById('forgotten');
    let signin = document.getElementById('signin');

    setTimeout(() => {
      loginBtn.style.display = 'flex';
      login.style.display = 'none';
      forgotten.style.display = 'none';
      signin.style.display = 'none';
    }, 500);
  }
}
