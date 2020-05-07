(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-cart-view-cart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-cart/view-cart.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-cart/view-cart.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"cancel()\">\r\n            Cancel All\r\n            <!-- <ion-icon name=\"cart-outline\"></ion-icon> -->\r\n        </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-menu-button auto-hide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Cart</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-menu side=\"end\" menuId=\"first\" contentId=\"main\">\r\n    <ion-header>\r\n        <ion-toolbar>\r\n            <ion-title>Start Menu</ion-title>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n        <ion-list>\r\n            <ion-menu-toggle>\r\n                <ion-item (click)=\"Profile()\">Profile Details</ion-item>\r\n                <ion-item (click)=\"ViewCart()\">Orders</ion-item>\r\n                <ion-item (click)=\"Help()\">Help Center</ion-item>\r\n                <ion-item (click)=\"logout()\">Logout</ion-item>\r\n            </ion-menu-toggle>\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet id=\"main\"></ion-router-outlet>\r\n<ion-content>\r\n    <ion-card *ngFor=\"let card of cards ; index as i ;\">\r\n        <img [src]=\"card.img\" />\r\n        <ion-card-header>\r\n            <ion-card-title>{{card.title}} <span *ngIf=\"card.new\" class=\"badge badge-danger\">New</span></ion-card-title>\r\n\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n            {{card.description}}\r\n        </ion-card-content>\r\n        <ion-item>\r\n            <button class=\"btnAdd\" slot=\"start\" (click)=\"removeFromCard(i)\">Remove from card</button>\r\n            <button class=\"btnView\" slot=\"end\" (click)=\"viewElem(card)\">View</button>\r\n        </ion-item>\r\n    </ion-card>\r\n</ion-content>\r\n\r\n\r\n<ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"categories\" (click)=\"CategoryBtn()\">\r\n        <ion-label>Categories</ion-label>\r\n        <ion-icon name=\"apps-outline\"></ion-icon>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"confirm\" (click)=\"Confirm()\">\r\n        <ion-label>Confirm total price {{total}}</ion-label>\r\n        <ion-icon name=\"cart-outline\"></ion-icon>\r\n    </ion-tab-button>\r\n</ion-tab-bar>\r\n<!-- <shared-footer></shared-footer> -->");

/***/ }),

/***/ "./src/app/view-cart/view-cart-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/view-cart/view-cart-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ViewCartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCartPageRoutingModule", function() { return ViewCartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-cart.page */ "./src/app/view-cart/view-cart.page.ts");




const routes = [
    {
        path: '',
        component: _view_cart_page__WEBPACK_IMPORTED_MODULE_3__["ViewCartPage"]
    }
];
let ViewCartPageRoutingModule = class ViewCartPageRoutingModule {
};
ViewCartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewCartPageRoutingModule);



/***/ }),

/***/ "./src/app/view-cart/view-cart.module.ts":
/*!***********************************************!*\
  !*** ./src/app/view-cart/view-cart.module.ts ***!
  \***********************************************/
/*! exports provided: ViewCartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCartPageModule", function() { return ViewCartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _view_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-cart-routing.module */ "./src/app/view-cart/view-cart-routing.module.ts");
/* harmony import */ var _view_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-cart.page */ "./src/app/view-cart/view-cart.page.ts");
/* harmony import */ var _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share-module/share-module.module */ "./src/app/share-module/share-module.module.ts");








let ViewCartPageModule = class ViewCartPageModule {
};
ViewCartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewCartPageRoutingModule"],
            _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__["ShareModuleModule"]
        ],
        declarations: [_view_cart_page__WEBPACK_IMPORTED_MODULE_6__["ViewCartPage"]]
    })
], ViewCartPageModule);



/***/ }),

/***/ "./src/app/view-cart/view-cart.page.scss":
/*!***********************************************!*\
  !*** ./src/app/view-cart/view-cart.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-card ion-item button {\n  padding: 2%;\n  border: none;\n  background: #a47dc7;\n  position: relative;\n  outline: none;\n  border-radius: 5px;\n  color: white;\n  font-size: 18px;\n}\nion-content ion-card ion-item .btnAdd {\n  width: 50%;\n}\nion-content ion-card ion-item .btnView {\n  width: 60%;\n  padding: 3.5%;\n}\nion-content ion-card ion-item span {\n  color: #212529;\n  background-color: #a47dc7;\n}\nion-toolbar {\n  --background: #a47dc7;\n  color: white;\n}\nion-toolbar ion-buttons ion-button ion-icon {\n  font-size: 30px;\n}\nion-toolbar ion-buttons ion-button ion-badge {\n  background-color: white;\n  color: #a47dc7;\n}\nion-toolbar ion-buttons ion-menu-button {\n  font-size: 30px;\n}\nion-toolbar ion-title {\n  text-align: center;\n}\nion-menu ion-header ion-toolbar ion-title {\n  text-align: center;\n}\nion-menu ion-content ion-list ion-item {\n  color: #a47dc7;\n}\nion-tab-bar {\n  --background: #a47dc7;\n}\nion-tab-bar ion-tab-button {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1jYXJ0L0M6XFxVc2Vyc1xcdGFiYXJha1xcRG93bmxvYWRzXFxTaG9wcGluZ0FwcC9zcmNcXGFwcFxcdmlldy1jYXJ0XFx2aWV3LWNhcnQucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3LWNhcnQvdmlldy1jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSGhCO0FES1k7RUFDSSxVQUFBO0FDSGhCO0FES1k7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQ0hoQjtBREtZO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDSGhCO0FEU0E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUNOSjtBRFNZO0VBQ0ksZUFBQTtBQ1BoQjtBRFNZO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0FDUGhCO0FEV1E7RUFDSSxlQUFBO0FDVFo7QURZSTtFQUNJLGtCQUFBO0FDVlI7QURpQlk7RUFDSSxrQkFBQTtBQ2RoQjtBRG9CWTtFQUNJLGNBQUE7QUNsQmhCO0FEd0JBO0VBQ0kscUJBQUE7QUNyQko7QURzQkk7RUFDSSxZQUFBO0FDcEJSIiwiZmlsZSI6InNyYy9hcHAvdmlldy1jYXJ0L3ZpZXctY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2E0N2RjNztcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhNDdkYzc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG5BZGQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuVmlldyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMy41JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E0N2RjNztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYTQ3ZGM3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaW9uLWJ1dHRvbnMge1xyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWJhZGdlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNhNDdkYzc7XHJcbiAgICAgICAgICAgICAgICAvLyBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbWVudSB7XHJcbiAgICBpb24taGVhZGVyIHtcclxuICAgICAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgaW9uLWxpc3Qge1xyXG4gICAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2E0N2RjNztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLXRhYi1iYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYTQ3ZGM3O1xyXG4gICAgaW9uLXRhYi1idXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufSIsImlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDIlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNhNDdkYzc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIC5idG5BZGQge1xuICB3aWR0aDogNTAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWl0ZW0gLmJ0blZpZXcge1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nOiAzLjUlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWl0ZW0gc3BhbiB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTQ3ZGM3O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2E0N2RjNztcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbmlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24gaW9uLWJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjYTQ3ZGM3O1xufVxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLW1lbnUtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tbWVudSBpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1tZW51IGlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgY29sb3I6ICNhNDdkYzc7XG59XG5cbmlvbi10YWItYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjYTQ3ZGM3O1xufVxuaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/view-cart/view-cart.page.ts":
/*!*********************************************!*\
  !*** ./src/app/view-cart/view-cart.page.ts ***!
  \*********************************************/
/*! exports provided: ViewCartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCartPage", function() { return ViewCartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let ViewCartPage = class ViewCartPage {
    constructor(route, location, menu) {
        this.route = route;
        this.location = location;
        this.menu = menu;
        this.cards = [];
        this.count = Number(localStorage.getItem('cart'));
        this.total = 0;
    }
    ngOnInit() {
    }
    // openFirst() {
    //   this.menu.enable(true, 'first');
    //   this.menu.open('first');
    // }
    // ionViewWillLeave() {
    //   this.menu.close();
    // }
    ionViewWillEnter() {
        // console.log(this.count);
        this.allCategories();
    }
    allCategories() {
        this.cards = [];
        for (let index = 1; index < this.count + 1; index++) {
            let item = JSON.parse(localStorage.getItem(`item${index}`));
            if (item || item != null) {
                this.cards.push(item);
            }
        }
        // console.log(this.cards)
        this.totalPrice();
    }
    totalPrice() {
        this.total = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let index = 0; index < this.cards.length; index++) {
            let item = this.cards[index].title;
            let price = item.split('Price ')[1].split(' EL')[0];
            // console.log(price);
            this.total += Number(price);
        }
        // console.log(this.total)
    }
    removeFromCard(i) {
        // console.log(i);
        // console.log(this.count);
        let item = localStorage.getItem(`item${this.count}`);
        localStorage.removeItem(`item${i + 1}`);
        localStorage.setItem(`item${i + 1}`, item);
        localStorage.removeItem(`item${this.count}`);
        this.count -= 1;
        localStorage.setItem('cart', `${this.count}`);
        this.allCategories();
    }
    cancel() {
        for (let index = 1; index < this.count + 1; index++) {
            localStorage.removeItem(`item${index}`);
        }
        localStorage.setItem('cart', '0');
        this.allCategories();
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
        this.route.navigateByUrl('/home');
    }
    CategoryBtn() {
        this.route.navigateByUrl('/categories');
    }
    Confirm() {
        this.route.navigateByUrl('/confirm');
    }
    viewElem(ele) {
        this.route.navigate(['/elem-data', { itemData: JSON.stringify(ele) }]);
    }
};
ViewCartPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
ViewCartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-cart.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-cart/view-cart.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-cart.page.scss */ "./src/app/view-cart/view-cart.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
], ViewCartPage);



/***/ })

}]);
//# sourceMappingURL=view-cart-view-cart-module-es2015.js.map