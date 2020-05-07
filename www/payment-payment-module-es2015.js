(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-tab-button tab=\"back\" (click)=\"BackBtn()\">\n            <!-- <ion-label>Back</ion-label> -->\n            <ion-icon name=\"arrow-back-outline\"></ion-icon>\n        </ion-tab-button>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-menu-button auto-hide=\"false\"></ion-menu-button>\n  </ion-buttons> -->\n\n    <ion-title>Checkout</ion-title>\n</ion-toolbar>\n\n<ion-content>\n    <ion-radio-group value=\"Cash\" #group>\n        <ion-list-header>\n            <ion-label>Payment method</ion-label>\n        </ion-list-header>\n\n        <ion-item>\n            <ion-icon name=\"cash-outline\"></ion-icon>\n            <ion-label> Cash</ion-label>\n            <ion-radio slot=\"start\" value=\"Cash\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n            <ion-icon name=\"card-outline\"></ion-icon>\n            <ion-label> Credit</ion-label>\n            <ion-radio slot=\"start\" value=\"Credit\"></ion-radio>\n        </ion-item>\n\n        <!-- <ion-item>\n      <ion-label>Buford</ion-label>\n      <ion-radio slot=\"start\" value=\"buford\"></ion-radio>\n    </ion-item> -->\n    </ion-radio-group>\n</ion-content>\n\n<ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"next\" (click)=\"openModal(template,credit,group.value)\">\n        <ion-label>Next</ion-label>\n        <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-tab-button>\n</ion-tab-bar>\n\n\n\n<ng-template #template>\n    <div class=\"modal-body\">\n        Will arrive in 4 days\n    </div>\n</ng-template>\n\n<ng-template #credit>\n    <div class=\"modal-body\" class=\"creditModal\">\n        <form class=\"credit-card\" [formGroup]=\"ConfirmForm\">\n            <div class=\"form-header\">\n                <h4>Credit card detail</h4>\n            </div>\n\n            <div class=\"form-body\">\n                <!-- Card Number -->\n                <input type=\"text\" class=\"card-number\" placeholder=\"Card Number\" name=\"cardNumber\" formControlName=\"cardNumber\">\n                <span class=\"error\" *ngIf=\"ConfirmForm.get('cardNumber').hasError('required') && ConfirmForm.get('cardNumber').touched\">\n                    Please input your cardNumber\n                  </span>\n                <!-- Date Field -->\n                <div class=\"date-field\">\n                    <div class=\"month\">\n                        <select name=\"Month\" formControlName=\"Month\">\n                <option value=\"january\">January</option>\n                <option value=\"february\">February</option>\n                <option value=\"march\">March</option>\n                <option value=\"april\">April</option>\n                <option value=\"may\">May</option>\n                <option value=\"june\">June</option>\n                <option value=\"july\">July</option>\n                <option value=\"august\">August</option>\n                <option value=\"september\">September</option>\n                <option value=\"october\">October</option>\n                <option value=\"november\">November</option>\n                <option value=\"december\">December</option>\n              </select>\n\n                    </div>\n                    <div class=\"year\">\n                        <select name=\"Year\" formControlName=\"Year\">\n                <option value=\"2016\">2016</option>\n                <option value=\"2017\">2017</option>\n                <option value=\"2018\">2018</option>\n                <option value=\"2019\">2019</option>\n                <option value=\"2020\">2020</option>\n                <option value=\"2021\">2021</option>\n                <option value=\"2022\">2022</option>\n                <option value=\"2023\">2023</option>\n                <option value=\"2024\">2024</option>\n              </select>\n\n                    </div>\n                    <span class=\"error\" *ngIf=\"ConfirmForm.get('Month').hasError('required') && ConfirmForm.get('Month').touched\">\n                        Please input your Month\n                      </span>\n                    <span class=\"error\" *ngIf=\"ConfirmForm.get('Year').hasError('required') && ConfirmForm.get('Year').touched\">\n                        Please input your Year\n                      </span>\n                </div>\n\n                <!-- Card Verification Field -->\n                <div class=\"card-verification\">\n                    <div class=\"cvv-input\">\n                        <input type=\"text\" placeholder=\"CVV\" name=\"CVV\" formControlName=\"CVV\">\n                    </div>\n                    <div class=\"cvv-details\">\n                        <p>3 or 4 digits usually found <br> on the signature strip</p>\n                    </div>\n                    <span class=\"error\" *ngIf=\"ConfirmForm.get('CVV').hasError('required') && ConfirmForm.get('CVV').touched\">\n                        Please input your CVV\n                      </span>\n                </div>\n\n                <!-- Buttons -->\n                <!-- <button type=\"submit\" class=\"proceed-btn\"><a href=\"#\">Proceed</a></button> -->\n                <button type=\"submit\" class=\"paypal-btn\" (click)=\"Pay()\"><a>Pay</a></button>\n            </div>\n        </form>\n    </div>\n</ng-template>");

/***/ }),

/***/ "./src/app/payment/payment-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/payment/payment-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function() { return PaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.page */ "./src/app/payment/payment.page.ts");




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ "./src/app/payment/payment.module.ts":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/payment/payment-routing.module.ts");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/payment/payment.page.ts");







let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"]
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })
], PaymentPageModule);



/***/ }),

/***/ "./src/app/payment/payment.page.scss":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #a47dc7;\n  color: white;\n}\nion-toolbar ion-buttons ion-button ion-icon {\n  font-size: 30px;\n}\nion-toolbar ion-buttons ion-button ion-badge {\n  background-color: white;\n  color: #a47dc7;\n}\nion-toolbar ion-buttons ion-menu-button {\n  font-size: 30px;\n}\nion-toolbar ion-title {\n  text-align: center;\n}\nion-tab-bar {\n  --background: #a47dc7;\n}\nion-tab-bar ion-tab-button {\n  color: white;\n}\nion-content ion-radio-group ion-list-header {\n  text-align: center;\n  font-size: x-large;\n  color: #a47dc7;\n}\n.credit-card {\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  background-color: #fff;\n  box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.form-header {\n  padding: 0px 30px 0;\n  border-bottom: 1px solid #e1e8ee;\n  color: #a47dc7;\n}\n.form-body {\n  padding: 30px 30px 20px;\n}\n.month select,\n.year select {\n  width: 145px;\n  margin-bottom: 20px;\n  padding-left: 20px;\n  border-radius: 6px;\n  background-position: 85% 50%;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n.month select {\n  float: left;\n}\n.year select {\n  float: right;\n}\n.card-number {\n  width: 100%;\n  margin-bottom: 20px;\n  padding-left: 20px;\n  border-radius: 6px;\n}\n.cvv-input input {\n  float: left;\n  width: 145px;\n  padding-left: 20px;\n  border-radius: 6px;\n}\n.cvv-details {\n  font-size: 70%;\n  line-height: 16px;\n  float: right;\n  margin-bottom: 20px;\n}\n.cvv-details p {\n  margin-top: 6px;\n}\n.paypal-btn {\n  cursor: pointer;\n  font-size: 2rem;\n  width: 100%;\n  border-color: transparent;\n  border-radius: 6px;\n  background: #a47dc7;\n}\n.paypal-btn a {\n  text-decoration: none;\n}\n.paypal-btn a {\n  color: rgba(242, 242, 242, 0.7);\n}\nmodal-container div {\n  position: relative !important;\n  top: 23% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9DOlxcVXNlcnNcXHRhYmFyYWtcXERvd25sb2Fkc1xcU2hvcHBpbmdBcHAvc3JjXFxhcHBcXHBheW1lbnRcXHBheW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURFWTtFQUNJLGVBQUE7QUNBaEI7QURFWTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtBQ0FoQjtBRElRO0VBQ0ksZUFBQTtBQ0ZaO0FES0k7RUFDSSxrQkFBQTtBQ0hSO0FET0E7RUFDSSxxQkFBQTtBQ0pKO0FES0k7RUFDSSxZQUFBO0FDSFI7QURTUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDTlo7QURXQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRDQUFBO0FDUko7QURXQTtFQUNJLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FDUko7QURXQTtFQUNJLHVCQUFBO0FDUko7QURXQTs7RUFFSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBRUEsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FDVko7QURhQTtFQUNJLFdBQUE7QUNWSjtBRGFBO0VBQ0ksWUFBQTtBQ1ZKO0FEYUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0FDWEo7QURjQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtBQ1pKO0FEZ0JBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDYko7QURnQkE7RUFDSSxlQUFBO0FDYko7QURnQkE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNiSjtBRGdCQTtFQUNJLHFCQUFBO0FDYko7QURnQkE7RUFDSSwrQkFBQTtBQ2JKO0FEaUJJO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtBQ2RSIiwiZmlsZSI6InNyYy9hcHAvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2E0N2RjNztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGlvbi1idXR0b25zIHtcclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1iYWRnZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYTQ3ZGM3O1xyXG4gICAgICAgICAgICAgICAgLy8gZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLXRhYi1iYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYTQ3ZGM3O1xyXG4gICAgaW9uLXRhYi1idXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgaW9uLXJhZGlvLWdyb3VwIHtcclxuICAgICAgICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgICAgICAgY29sb3I6ICNhNDdkYzc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY3JlZGl0LWNhcmQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAwIHJnYmEoMCwgMCwgMCwgLjEwKTtcclxufVxyXG5cclxuLmZvcm0taGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDBweCAzMHB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZThlZTtcclxuICAgIGNvbG9yOiAjYTQ3ZGM3O1xyXG59XHJcblxyXG4uZm9ybS1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDMwcHggMzBweCAyMHB4O1xyXG59XHJcblxyXG4ubW9udGggc2VsZWN0LFxyXG4ueWVhciBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDE0NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICNlMWU4ZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoJ2NhcmV0LnBuZycpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDg1JSA1MCU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi5tb250aCBzZWxlY3Qge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi55ZWFyIHNlbGVjdCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jYXJkLW51bWJlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAjZTFlOGVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uY3Z2LWlucHV0IGlucHV0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDE0NXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgLy8gYm9yZGVyOiAycHggc29saWQgI2UxZThlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5jdnYtZGV0YWlscyB7XHJcbiAgICBmb250LXNpemU6IDcwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmN2di1kZXRhaWxzIHAge1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG4ucGF5cGFsLWJ0biB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTQ3ZGM3O1xyXG59XHJcblxyXG4ucGF5cGFsLWJ0biBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnBheXBhbC1idG4gYSB7XHJcbiAgICBjb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAuNyk7XHJcbn1cclxuXHJcbm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogMjMlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2E0N2RjNztcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbmlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24gaW9uLWJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjYTQ3ZGM3O1xufVxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLW1lbnUtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tdGFiLWJhciB7XG4gIC0tYmFja2dyb3VuZDogI2E0N2RjNztcbn1cbmlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCBpb24tcmFkaW8tZ3JvdXAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGNvbG9yOiAjYTQ3ZGM3O1xufVxuXG4uY3JlZGl0LWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uZm9ybS1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggMzBweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZThlZTtcbiAgY29sb3I6ICNhNDdkYzc7XG59XG5cbi5mb3JtLWJvZHkge1xuICBwYWRkaW5nOiAzMHB4IDMwcHggMjBweDtcbn1cblxuLm1vbnRoIHNlbGVjdCxcbi55ZWFyIHNlbGVjdCB7XG4gIHdpZHRoOiAxNDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDg1JSA1MCU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4ubW9udGggc2VsZWN0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi55ZWFyIHNlbGVjdCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNhcmQtbnVtYmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uY3Z2LWlucHV0IGlucHV0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxNDVweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5jdnYtZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogNzAlO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY3Z2LWRldGFpbHMgcCB7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLnBheXBhbC1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogI2E0N2RjNztcbn1cblxuLnBheXBhbC1idG4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnBheXBhbC1idG4gYSB7XG4gIGNvbG9yOiByZ2JhKDI0MiwgMjQyLCAyNDIsIDAuNyk7XG59XG5cbm1vZGFsLWNvbnRhaW5lciBkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgdG9wOiAyMyUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/payment/payment.page.ts":
/*!*****************************************!*\
  !*** ./src/app/payment/payment.page.ts ***!
  \*****************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let PaymentPage = class PaymentPage {
    constructor(location, modalService, route) {
        this.location = location;
        this.modalService = modalService;
        this.route = route;
        this.ConfirmForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            cardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            Month: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            Year: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            CVV: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
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
    openModal(template, credit, val) {
        if (val == 'Cash') {
            setTimeout(() => {
                this.modalRef = this.modalService.show(template);
            }, 1000);
            setTimeout(() => {
                this.modalRef.hide();
                this.route.navigateByUrl('/categories');
            }, 6000);
        }
        else {
            setTimeout(() => {
                this.modalRef = this.modalService.show(credit);
            }, 1000);
        }
    }
};
PaymentPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('template', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PaymentPage.prototype, "temp", void 0);
PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment.page.scss */ "./src/app/payment/payment.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], PaymentPage);



/***/ })

}]);
//# sourceMappingURL=payment-payment-module-es2015.js.map