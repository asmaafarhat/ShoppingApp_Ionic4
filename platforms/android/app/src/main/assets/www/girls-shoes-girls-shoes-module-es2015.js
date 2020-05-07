(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["girls-shoes-girls-shoes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/girls-shoes/girls-shoes.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/girls-shoes/girls-shoes.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-share [pageName]=\"titel\"></app-share>\n\n<ion-content>\n    <div class=\"content\">\n        <ion-card *ngFor=\"let card of cards ; index as i ;\">\n            <img [src]=\"card.img\" />\n            <ion-card-header>\n                <!-- <ion-card-subtitle>Destination</ion-card-subtitle> -->\n                <ion-card-title>{{card.title}} <span *ngIf=\"card.new\" class=\"badge badge-danger\">New</span>\n                </ion-card-title>\n            </ion-card-header>\n            <!-- <ion-card-content>\n            {{card.description}}\n        </ion-card-content> -->\n            <ion-item>\n                <!-- <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n              <ion-label>ion-item in a card, icon left, button right</ion-label> -->\n                <button class=\"btnAdd\" slot=\"start\" (click)=\"addToCard(i)\">Add to card</button>\n                <button class=\"btnView\" slot=\"end\" (click)=\"viewElem(card)\">View</button>\n            </ion-item>\n        </ion-card>\n    </div>\n</ion-content>\n\n<shared-footer></shared-footer>");

/***/ }),

/***/ "./src/app/girls-shoes/girls-shoes-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/girls-shoes/girls-shoes-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: GirlsShoesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GirlsShoesPageRoutingModule", function() { return GirlsShoesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _girls_shoes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./girls-shoes.page */ "./src/app/girls-shoes/girls-shoes.page.ts");




const routes = [
    {
        path: '',
        component: _girls_shoes_page__WEBPACK_IMPORTED_MODULE_3__["GirlsShoesPage"]
    }
];
let GirlsShoesPageRoutingModule = class GirlsShoesPageRoutingModule {
};
GirlsShoesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GirlsShoesPageRoutingModule);



/***/ }),

/***/ "./src/app/girls-shoes/girls-shoes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/girls-shoes/girls-shoes.module.ts ***!
  \***************************************************/
/*! exports provided: GirlsShoesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GirlsShoesPageModule", function() { return GirlsShoesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _girls_shoes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./girls-shoes-routing.module */ "./src/app/girls-shoes/girls-shoes-routing.module.ts");
/* harmony import */ var _girls_shoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./girls-shoes.page */ "./src/app/girls-shoes/girls-shoes.page.ts");
/* harmony import */ var _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share-module/share-module.module */ "./src/app/share-module/share-module.module.ts");








let GirlsShoesPageModule = class GirlsShoesPageModule {
};
GirlsShoesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__["ShareModuleModule"],
            _girls_shoes_routing_module__WEBPACK_IMPORTED_MODULE_5__["GirlsShoesPageRoutingModule"]
        ],
        declarations: [_girls_shoes_page__WEBPACK_IMPORTED_MODULE_6__["GirlsShoesPage"]]
    })
], GirlsShoesPageModule);



/***/ }),

/***/ "./src/app/girls-shoes/girls-shoes.page.scss":
/*!***************************************************!*\
  !*** ./src/app/girls-shoes/girls-shoes.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content .content ion-card {\n  text-align: center;\n  width: 70%;\n}\nion-content .content ion-card ion-item button {\n  padding: 2%;\n  border: none;\n  background: #a47dc7;\n  position: relative;\n  outline: none;\n  border-radius: 5px;\n  color: white;\n  font-size: 18px;\n}\nion-content .content ion-card ion-item .btnAdd {\n  width: 40%;\n}\nion-content .content ion-card ion-item .btnView {\n  width: 60%;\n  padding: 3.5%;\n}\nion-content .content ion-card ion-item span {\n  color: #212529;\n  background-color: #a47dc7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2lybHMtc2hvZXMvQzpcXFVzZXJzXFx0YWJhcmFrXFxEb3dubG9hZHNcXFNob3BwaW5nQXBwL3NyY1xcYXBwXFxnaXJscy1zaG9lc1xcZ2lybHMtc2hvZXMucGFnZS5zY3NzIiwic3JjL2FwcC9naXJscy1zaG9lcy9naXJscy1zaG9lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQVI7QURDUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0NaO0FEQ2dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDcEI7QURDZ0I7RUFDSSxVQUFBO0FDQ3BCO0FEQ2dCO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUNDcEI7QURDZ0I7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUNDcEIiLCJmaWxlIjoic3JjL2FwcC9naXJscy1zaG9lcy9naXJscy1zaG9lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaW9uLWNhcmQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhNDdkYzc7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnRuQWRkIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJ0blZpZXcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMy41JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhNDdkYzc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24tY29udGVudCAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuY29udGVudCBpb24tY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDcwJTtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDIlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNhNDdkYzc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIC5idG5BZGQge1xuICB3aWR0aDogNDAlO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgaW9uLWNhcmQgaW9uLWl0ZW0gLmJ0blZpZXcge1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nOiAzLjUlO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgaW9uLWNhcmQgaW9uLWl0ZW0gc3BhbiB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTQ3ZGM3O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/girls-shoes/girls-shoes.page.ts":
/*!*************************************************!*\
  !*** ./src/app/girls-shoes/girls-shoes.page.ts ***!
  \*************************************************/
/*! exports provided: GirlsShoesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GirlsShoesPage", function() { return GirlsShoesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let GirlsShoesPage = class GirlsShoesPage {
    constructor(global, route) {
        this.global = global;
        this.route = route;
        this.titel = 'Girls shoes';
        this.cards = [
            {
                title: 'Price 150 EL',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                buttonText: 'Button',
                new: true,
                img: '../../assets/girls_shoes/1.jpg'
            },
            {
                title: 'Price 150 EL',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                buttonText: 'Button',
                new: true,
                img: '../../assets/girls_shoes/2.jpg'
            },
            {
                title: 'Price 150 EL',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                buttonText: 'Button',
                new: false,
                img: '../../assets/girls_shoes/3.jpg'
            },
            {
                title: 'Price 150 EL',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                buttonText: 'Button',
                new: false,
                img: '../../assets/girls_shoes/4.jpg'
            },
            {
                title: 'Price 150 EL',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                buttonText: 'Button',
                new: false,
                img: '../../assets/girls_shoes/5.jpg'
            },
            {
                title: 'Price 150 EL',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                buttonText: 'Button',
                new: false,
                img: '../../assets/girls_shoes/6.jpg'
            },
            {
                title: 'Price 150 EL',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                buttonText: 'Button',
                new: true,
                img: '../../assets/girls_shoes/7.jpeg'
            },
            {
                title: 'Price 150 EL',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                buttonText: 'Button',
                new: false,
                img: '../../assets/girls_shoes/8.jpg'
            },
            {
                title: 'Price 150 EL',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                buttonText: 'Button',
                new: false,
                img: '../../assets/girls_shoes/9.jpg'
            },
        ];
    }
    ngOnInit() {
    }
    addToCard(i) {
        this.global.counter += 1;
        localStorage.setItem(`item${this.global.counter}`, JSON.stringify(this.cards[i]));
        localStorage.setItem('cart', `${this.global.counter}`);
    }
    viewElem(ele) {
        this.route.navigate(['/elem-data', { itemData: JSON.stringify(ele) }]);
    }
};
GirlsShoesPage.ctorParameters = () => [
    { type: _global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GirlsShoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-girls-shoes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./girls-shoes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/girls-shoes/girls-shoes.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./girls-shoes.page.scss */ "./src/app/girls-shoes/girls-shoes.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], GirlsShoesPage);



/***/ })

}]);
//# sourceMappingURL=girls-shoes-girls-shoes-module-es2015.js.map