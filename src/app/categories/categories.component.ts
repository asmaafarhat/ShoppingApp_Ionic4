import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    // localStorage.setItem('cart', '0');
  }
  childrenShoses() {
    setTimeout(() => {
      this.route.navigateByUrl('/kids-shoes');
    }, 1000);
  }

  girlsShoses() {
    setTimeout(() => {
      this.route.navigateByUrl('/girls-shoes');
    }, 1000);
  }

  childrenCloths() {
    setTimeout(() => {
      this.route.navigateByUrl('/kids-dresses');
    }, 1000);
  }

  pants() {
    setTimeout(() => {
      this.route.navigateByUrl('/pants-and-pocket');
    }, 1000);
  }

  t_shirt() {
    setTimeout(() => {
      this.route.navigateByUrl('/t-shirt');
    }, 1000);
  }

  girls_dresses() {
    setTimeout(() => {
      this.route.navigateByUrl('/girls-dresses');
    }, 1000);
  }
}
