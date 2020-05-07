import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'shared-footer',
  templateUrl: './shared-footer.component.html',
  styleUrls: ['./shared-footer.component.scss'],
})
export class SharedFooterComponent implements OnInit {

  constructor(private route: Router, private location: Location) { }

  ngOnInit() { }

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
