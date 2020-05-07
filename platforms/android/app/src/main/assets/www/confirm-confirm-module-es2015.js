(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confirm-confirm-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirm/confirm.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirm/confirm.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-tab-button tab=\"back\" (click)=\"BackBtn()\">\n            <!-- <ion-label>Back</ion-label> -->\n            <ion-icon name=\"arrow-back-outline\"></ion-icon>\n        </ion-tab-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n        <ion-menu-button auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>Checkout</ion-title>\n</ion-toolbar>\n\n<ion-menu side=\"end\" menuId=\"first\" contentId=\"main\">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Start Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <ion-menu-toggle>\n                <ion-item (click)=\"Profile()\">Profile Details</ion-item>\n                <ion-item (click)=\"ViewCart()\">Orders</ion-item>\n                <ion-item (click)=\"Help()\">Help Center</ion-item>\n                <ion-item (click)=\"logout()\">Logout</ion-item>\n            </ion-menu-toggle>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-router-outlet id=\"main\"></ion-router-outlet>\n\n\n<ion-content>\n    <form [formGroup]=\"ConfirmForm\">\n        <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n            <ion-item>\n                <ion-label position=\"stacked\">First Name\n                    <ion-text color=\"danger\">*</ion-text>\n                </ion-label>\n                <ion-input required type=\"text\" name=\"firstName\" placeholder=\"First Name\" formControlName=\"firstName\">\n                </ion-input>\n                <!-- <ion-input required type=\"text\" name=\"firstName\" placeholder=\"First Name\" formControlName=\"firstName\" oninput=\"handleFirstNameValue(event)\"></ion-input> -->\n                <span class=\"error\" *ngIf=\"ConfirmForm.get('firstName').hasError('required') && ConfirmForm.get('firstName').touched\">\n          Please input your firstName\n        </span>\n                <span class=\"error\" *ngIf=\"ConfirmForm.get('firstName').hasError('minlength') && ConfirmForm.get('firstName').touched\">\n          Minimum 4 characters\n        </span>\n                <span class=\"error\" *ngIf=\"ConfirmForm.get('firstName').hasError('maxlength') && ConfirmForm.get('firstName').touched\">\n          Maximum 30 characters\n        </span>\n                <span class=\"error\" *ngIf=\"ConfirmForm.get('firstName').hasError('pattern') && ConfirmForm.get('firstName').touched\">\n          Just use alphabet character\n        </span>\n\n            </ion-item>\n\n            <ion-item>\n                <ion-label position=\"stacked\">Last Name\n                    <ion-text color=\"danger\">*</ion-text>\n                </ion-label>\n                <ion-input required type=\"text\" name=\"lastName\" placeholder=\"Last Name\" formControlName=\"lastName\"></ion-input>\n                <!-- <ion-input required type=\"text\" oninput=\"handleLastNameValue(event)\"></ion-input> -->\n                <span class=\"error\" *ngIf=\"ConfirmForm.get('firstName').hasError('required') && ConfirmForm.get('firstName').touched\">\n          Please input your firstName\n        </span>\n                <span class=\"error\" *ngIf=\"ConfirmForm.get('firstName').hasError('minlength') && ConfirmForm.get('firstName').touched\">\n          Minimum 4 characters\n        </span>\n                <span class=\"error\" *ngIf=\"ConfirmForm.get('firstName').hasError('maxlength') && ConfirmForm.get('firstName').touched\">\n          Maximum 30 characters\n        </span>\n                <span class=\"error\" *ngIf=\"ConfirmForm.get('firstName').hasError('pattern') && ConfirmForm.get('firstName').touched\">\n          Just use alphabet character\n        </span>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Phone Number\n                    <ion-text color=\"danger\">*</ion-text>\n                </ion-label>\n                <ion-input type=\"number\" name=\"phoneNumber\" placeholder=\"phoneNumber\" formControlName=\"phoneNumber\"></ion-input>\n                <span class=\"error\" *ngIf=\"ConfirmForm.get('phoneNumber').hasError('required') && ConfirmForm.get('phoneNumber').touched\">\n          Please input your phoneNumber\n        </span>\n            </ion-item>\n\n            <ion-item>\n                <ion-label position=\"stacked\">Address\n                    <ion-text color=\"danger\">*</ion-text>\n                </ion-label>\n                <ion-input placeholder=\"Address Line 1\" name=\"address1\" formControlName=\"address1\"></ion-input>\n                <span class=\"error\" *ngIf=\"ConfirmForm.get('address1').hasError('required') && ConfirmForm.get('address1').touched\">\n          Please input your first address\n        </span>\n                <ion-input placeholder=\"Address Line 2\" name=\"address2\" formControlName=\"address2\"></ion-input>\n                <!-- <span class=\"error\" *ngIf=\"ConfirmForm.get('address2').hasError('required') && ConfirmForm.get('address2').touched\">\n          Please input your second address\n        </span> -->\n                <ion-input placeholder=\"City\" name=\"city\" formControlName=\"city\"></ion-input>\n                <span class=\"error\" *ngIf=\"ConfirmForm.get('city').hasError('required') && ConfirmForm.get('city').touched\">\n          Please input your city\n        </span>\n                <ion-input placeholder=\"State\" name=\"State\" formControlName=\"State\"></ion-input>\n                <span class=\"error\" *ngIf=\"ConfirmForm.get('State').hasError('required') && ConfirmForm.get('State').touched\">\n          Please input your State\n        </span>\n                <ion-input type=\"number\" placeholder=\"Street\" name=\"street\" formControlName=\"street\"></ion-input>\n                <span class=\"error\" *ngIf=\"ConfirmForm.get('street').hasError('required') && ConfirmForm.get('street').touched\">\n          Please input your street\n        </span>\n                <ion-input type=\"number\" placeholder=\"Zip Code\" name=\"zipCode\" formControlName=\"zipCode\"></ion-input>\n                <span class=\"error\" *ngIf=\"ConfirmForm.get('zipCode').hasError('required') && ConfirmForm.get('zipCode').touched\">\n          Please input your zipCode\n        </span>\n            </ion-item>\n\n            <ion-item>\n                <ion-label position=\"stacked\">Notes</ion-label>\n                <ion-textarea></ion-textarea>\n            </ion-item>\n        </ion-list>\n\n        <!-- <div class=\"ion-padding\">\n            <ion-button expand=\"block\" color=\"success\" type=\"submit\" class=\"ion-no-margin\"> Next</ion-button>\n        </div> -->\n    </form>\n</ion-content>\n\n<ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"next\" (click)=\"Next()\">\n        <ion-label>Next</ion-label>\n        <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-tab-button>\n</ion-tab-bar>");

/***/ }),

/***/ "./src/app/confirm/confirm-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/confirm/confirm-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ConfirmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageRoutingModule", function() { return ConfirmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm.page */ "./src/app/confirm/confirm.page.ts");




const routes = [
    {
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPage"]
    }
];
let ConfirmPageRoutingModule = class ConfirmPageRoutingModule {
};
ConfirmPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmPageRoutingModule);



/***/ }),

/***/ "./src/app/confirm/confirm.module.ts":
/*!*******************************************!*\
  !*** ./src/app/confirm/confirm.module.ts ***!
  \*******************************************/
/*! exports provided: ConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function() { return ConfirmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirm-routing.module */ "./src/app/confirm/confirm-routing.module.ts");
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm.page */ "./src/app/confirm/confirm.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let ConfirmPageModule = class ConfirmPageModule {
};
ConfirmPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _confirm_routing_module__WEBPACK_IMPORTED_MODULE_4__["ConfirmPageRoutingModule"]
        ],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_5__["ConfirmPage"]]
    })
], ConfirmPageModule);



/***/ }),

/***/ "./src/app/confirm/confirm.page.scss":
/*!*******************************************!*\
  !*** ./src/app/confirm/confirm.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #a47dc7;\n  color: white;\n}\nion-toolbar ion-buttons ion-button ion-icon {\n  font-size: 30px;\n}\nion-toolbar ion-buttons ion-button ion-badge {\n  background-color: white;\n  color: #a47dc7;\n}\nion-toolbar ion-buttons ion-menu-button {\n  font-size: 30px;\n}\nion-toolbar ion-title {\n  text-align: center;\n}\nion-menu ion-header ion-toolbar ion-title {\n  text-align: center;\n}\nion-menu ion-content ion-list ion-item {\n  color: #a47dc7;\n}\nion-tab-bar {\n  --background: #a47dc7;\n}\nion-tab-bar ion-tab-button {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybS9DOlxcVXNlcnNcXHRhYmFyYWtcXERvd25sb2Fkc1xcU2hvcHBpbmdBcHAvc3JjXFxhcHBcXGNvbmZpcm1cXGNvbmZpcm0ucGFnZS5zY3NzIiwic3JjL2FwcC9jb25maXJtL2NvbmZpcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURFWTtFQUNJLGVBQUE7QUNBaEI7QURFWTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtBQ0FoQjtBRElRO0VBQ0ksZUFBQTtBQ0ZaO0FES0k7RUFDSSxrQkFBQTtBQ0hSO0FEVVk7RUFDSSxrQkFBQTtBQ1BoQjtBRGFZO0VBQ0ksY0FBQTtBQ1hoQjtBRGlCQTtFQUNJLHFCQUFBO0FDZEo7QURlSTtFQUNJLFlBQUE7QUNiUiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm0vY29uZmlybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNhNDdkYzc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tYmFkZ2Uge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2E0N2RjNztcclxuICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbWVudS1idXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLXRpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1tZW51IHtcclxuICAgIGlvbi1oZWFkZXIge1xyXG4gICAgICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYTQ3ZGM3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tdGFiLWJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNhNDdkYzc7XHJcbiAgICBpb24tdGFiLWJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59IiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNhNDdkYzc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5pb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIGlvbi1iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogI2E0N2RjNztcbn1cbmlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1tZW51LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbmlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLW1lbnUgaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tbWVudSBpb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSB7XG4gIGNvbG9yOiAjYTQ3ZGM3O1xufVxuXG5pb24tdGFiLWJhciB7XG4gIC0tYmFja2dyb3VuZDogI2E0N2RjNztcbn1cbmlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/confirm/confirm.page.ts":
/*!*****************************************!*\
  !*** ./src/app/confirm/confirm.page.ts ***!
  \*****************************************/
/*! exports provided: ConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPage", function() { return ConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let ConfirmPage = class ConfirmPage {
    constructor(location, route, menu) {
        this.location = location;
        this.route = route;
        this.menu = menu;
        this.ConfirmForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            address1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            State: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
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
};
ConfirmPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
];
ConfirmPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirm/confirm.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm.page.scss */ "./src/app/confirm/confirm.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]])
], ConfirmPage);



/***/ })

}]);
//# sourceMappingURL=confirm-confirm-module-es2015.js.map