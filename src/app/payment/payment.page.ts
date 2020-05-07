import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  modalRef: BsModalRef;
  template: TemplateRef<any>;
  @ViewChild('template', { static: true }) temp;
  ConfirmForm: any;

  constructor(private location: Location, private modalService: BsModalService, private route: Router) {
    this.ConfirmForm = new FormGroup({
      cardNumber: new FormControl('', Validators.required),
      Month: new FormControl('', Validators.required),
      Year: new FormControl('', Validators.required),
      CVV: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  BackBtn() {
    this.location.back();
  }

  Pay() {
    if (this.ConfirmForm.valid) {
      this.modalRef.hide();
      this.modalRef = this.modalService.show(this.temp);
      setTimeout(() => {
        this.modalRef.hide();
        this.route.navigateByUrl('/categories');
      }, 5000);
    }
  }

  openModal(template: TemplateRef<any>, credit: TemplateRef<any>, val) {
    if (val == 'Cash') {
      setTimeout(() => {
        this.modalRef = this.modalService.show(template);
      }, 1000);
      setTimeout(() => {
        this.modalRef.hide();
        this.route.navigateByUrl('/categories');
      }, 6000);
    } else {
      setTimeout(() => {
        this.modalRef = this.modalService.show(credit);
      }, 1000);
    }
  }


}
