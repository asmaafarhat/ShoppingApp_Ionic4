import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-elem-data',
  templateUrl: './elem-data.page.html',
  styleUrls: ['./elem-data.page.scss'],
})
export class ElemDataPage implements OnInit {
  getValue: any;
  card: any;
  title: 'Description';
  constructor(private router: ActivatedRoute, private route: Router, public global: GlobalService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.getValue = params.itemData;
    });
    this.card = JSON.parse(this.getValue);
  }


  addToCard(i) {
    this.global.counter += 1;
    localStorage.setItem(`item${this.global.counter}`, JSON.stringify(this.card));
    localStorage.setItem('cart', `${this.global.counter}`);
  }

  viewElem(ele) {
    this.route.navigate(['/elem-data', { itemData: JSON.stringify(ele) }]);
  }
}
