function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kids-shoes-kids-shoes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/kids-shoes/kids-shoes.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kids-shoes/kids-shoes.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppKidsShoesKidsShoesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-share [pageName]=\"titel\"></app-share>\n\n<ion-content>\n    <div class=\"content\">\n        <ion-card *ngFor=\"let card of cards ; index as i ;\">\n            <img [src]=\"card.img\" />\n            <ion-card-header>\n                <!-- <ion-card-subtitle>Destination</ion-card-subtitle> -->\n                <ion-card-title>{{card.title}} <span *ngIf=\"card.new\" class=\"badge badge-danger\">New</span>\n                </ion-card-title>\n            </ion-card-header>\n            <!-- <ion-card-content>\n            {{card.description}}\n        </ion-card-content> -->\n            <ion-item>\n                <!-- <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n              <ion-label>ion-item in a card, icon left, button right</ion-label> -->\n                <button class=\"btnAdd\" slot=\"start\" (click)=\"addToCard(i)\">Add to card</button>\n                <button class=\"btnView\" slot=\"end\" (click)=\"viewElem(card)\">View</button>\n            </ion-item>\n        </ion-card>\n    </div>\n</ion-content>\n\n<shared-footer></shared-footer>";
    /***/
  },

  /***/
  "./src/app/kids-shoes/kids-shoes-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/kids-shoes/kids-shoes-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: KidsShoesPageRoutingModule */

  /***/
  function srcAppKidsShoesKidsShoesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KidsShoesPageRoutingModule", function () {
      return KidsShoesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _kids_shoes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./kids-shoes.page */
    "./src/app/kids-shoes/kids-shoes.page.ts");

    var routes = [{
      path: '',
      component: _kids_shoes_page__WEBPACK_IMPORTED_MODULE_3__["KidsShoesPage"]
    }];

    var KidsShoesPageRoutingModule = function KidsShoesPageRoutingModule() {
      _classCallCheck(this, KidsShoesPageRoutingModule);
    };

    KidsShoesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], KidsShoesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/kids-shoes/kids-shoes.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/kids-shoes/kids-shoes.module.ts ***!
    \*************************************************/

  /*! exports provided: KidsShoesPageModule */

  /***/
  function srcAppKidsShoesKidsShoesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KidsShoesPageModule", function () {
      return KidsShoesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _kids_shoes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./kids-shoes-routing.module */
    "./src/app/kids-shoes/kids-shoes-routing.module.ts");
    /* harmony import */


    var _kids_shoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./kids-shoes.page */
    "./src/app/kids-shoes/kids-shoes.page.ts");
    /* harmony import */


    var _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../share-module/share-module.module */
    "./src/app/share-module/share-module.module.ts");

    var KidsShoesPageModule = function KidsShoesPageModule() {
      _classCallCheck(this, KidsShoesPageModule);
    };

    KidsShoesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _kids_shoes_routing_module__WEBPACK_IMPORTED_MODULE_5__["KidsShoesPageRoutingModule"], _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__["ShareModuleModule"]],
      declarations: [_kids_shoes_page__WEBPACK_IMPORTED_MODULE_6__["KidsShoesPage"]]
    })], KidsShoesPageModule);
    /***/
  },

  /***/
  "./src/app/kids-shoes/kids-shoes.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/kids-shoes/kids-shoes.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKidsShoesKidsShoesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  color: #a47dc7;\n  text-align: center;\n}\nion-header ion-toolbar .start {\n  -webkit-transform: rotatey(180deg);\n          transform: rotatey(180deg);\n}\nion-header ion-toolbar ion-icon {\n  font-size: 250%;\n  color: #a47dc7;\n}\nion-header ion-toolbar span {\n  position: relative;\n  top: -10px;\n  left: -7px;\n  color: white;\n  background-color: #a47dc7;\n}\nion-content .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content .content ion-card {\n  text-align: center;\n  width: 70%;\n}\nion-content .content ion-card ion-item button {\n  padding: 2%;\n  border: none;\n  background: #a47dc7;\n  position: relative;\n  outline: none;\n  border-radius: 5px;\n  color: white;\n  font-size: 18px;\n}\nion-content .content ion-card ion-item .btnAdd {\n  width: 40%;\n}\nion-content .content ion-card ion-item .btnView {\n  width: 60%;\n  padding: 3.5%;\n}\nion-content .content ion-card ion-item span {\n  color: #212529;\n  background-color: #a47dc7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2lkcy1zaG9lcy9DOlxcVXNlcnNcXHRhYmFyYWtcXERvd25sb2Fkc1xcU2hvcHBpbmdBcHAvc3JjXFxhcHBcXGtpZHMtc2hvZXNcXGtpZHMtc2hvZXMucGFnZS5zY3NzIiwic3JjL2FwcC9raWRzLXNob2VzL2tpZHMtc2hvZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDRGhCO0FER1k7RUFDSSxrQ0FBQTtVQUFBLDBCQUFBO0FDRGhCO0FER1k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0RoQjtBREdZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0RoQjtBRE9RO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0paO0FES1k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNIaEI7QURLb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0h4QjtBREtvQjtFQUNJLFVBQUE7QUNIeEI7QURLb0I7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQ0h4QjtBREtvQjtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQ0h4QiIsImZpbGUiOiJzcmMvYXBwL2tpZHMtc2hvZXMva2lkcy1zaG9lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgaW9uLWhlYWRlciB7XHJcbiAgICAgICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgICAgICBpb24tdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNhNDdkYzc7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN0YXJ0IHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRleSgxODBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjUwJTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYTQ3ZGM3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC03cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTQ3ZGM3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhNDdkYzc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bkFkZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5idG5WaWV3IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMy41JTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTQ3ZGM3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGNvbG9yOiAjYTQ3ZGM3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC5zdGFydCB7XG4gIHRyYW5zZm9ybTogcm90YXRleSgxODBkZWcpO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjUwJTtcbiAgY29sb3I6ICNhNDdkYzc7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwcHg7XG4gIGxlZnQ6IC03cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E0N2RjNztcbn1cblxuaW9uLWNvbnRlbnQgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgaW9uLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA3MCU7XG59XG5pb24tY29udGVudCAuY29udGVudCBpb24tY2FyZCBpb24taXRlbSBidXR0b24ge1xuICBwYWRkaW5nOiAyJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjYTQ3ZGM3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5pb24tY29udGVudCAuY29udGVudCBpb24tY2FyZCBpb24taXRlbSAuYnRuQWRkIHtcbiAgd2lkdGg6IDQwJTtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIC5idG5WaWV3IHtcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZzogMy41JTtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIHNwYW4ge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E0N2RjNztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/kids-shoes/kids-shoes.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/kids-shoes/kids-shoes.page.ts ***!
    \***********************************************/

  /*! exports provided: KidsShoesPage */

  /***/
  function srcAppKidsShoesKidsShoesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KidsShoesPage", function () {
      return KidsShoesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../global.service */
    "./src/app/global.service.ts");

    var KidsShoesPage =
    /*#__PURE__*/
    function () {
      function KidsShoesPage(route, global) {
        _classCallCheck(this, KidsShoesPage);

        this.route = route;
        this.global = global;
        this.titel = 'Kids Shoes';
        this.cards = [{
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: true,
          img: '../../assets/kids_shoes/1.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: true,
          img: '../../assets/kids_shoes/2.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/kids_shoes/3.gif'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/kids_shoes/4.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/kids_shoes/5.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/kids_shoes/6.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: true,
          img: '../../assets/kids_shoes/7.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/kids_shoes/8.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/kids_shoes/9.jpg'
        }];
      }

      _createClass(KidsShoesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addToCard",
        value: function addToCard(i) {
          this.global.counter += 1;
          localStorage.setItem("item".concat(this.global.counter), JSON.stringify(this.cards[i]));
          localStorage.setItem('cart', "".concat(this.global.counter));
        }
      }, {
        key: "viewElem",
        value: function viewElem(ele) {
          this.route.navigate(['/elem-data', {
            itemData: JSON.stringify(ele)
          }]);
        }
      }]);

      return KidsShoesPage;
    }();

    KidsShoesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
      }];
    };

    KidsShoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-kids-shoes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./kids-shoes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/kids-shoes/kids-shoes.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./kids-shoes.page.scss */
      "./src/app/kids-shoes/kids-shoes.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])], KidsShoesPage);
    /***/
  }
}]);
//# sourceMappingURL=kids-shoes-kids-shoes-module-es5.js.map