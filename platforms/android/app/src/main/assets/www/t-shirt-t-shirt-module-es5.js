function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["t-shirt-t-shirt-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/t-shirt/t-shirt.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/t-shirt/t-shirt.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTShirtTShirtPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-share [pageName]=\"titel\"></app-share>\n\n<ion-content>\n    <div class=\"content\">\n        <ion-card *ngFor=\"let card of cards ; index as i ;\">\n            <img [src]=\"card.img\" />\n            <ion-card-header>\n                <!-- <ion-card-subtitle>Destination</ion-card-subtitle> -->\n                <ion-card-title>{{card.title}} <span *ngIf=\"card.new\" class=\"badge badge-danger\">New</span>\n                </ion-card-title>\n            </ion-card-header>\n            <!-- <ion-card-content>\n            {{card.description}}\n        </ion-card-content> -->\n            <ion-item>\n                <!-- <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n              <ion-label>ion-item in a card, icon left, button right</ion-label> -->\n                <button class=\"btnAdd\" slot=\"start\" (click)=\"addToCard(i)\">Add to card</button>\n                <button class=\"btnView\" slot=\"end\" (click)=\"viewElem(card)\">View</button>\n            </ion-item>\n        </ion-card>\n    </div>\n</ion-content>\n\n<shared-footer></shared-footer>";
    /***/
  },

  /***/
  "./src/app/t-shirt/t-shirt-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/t-shirt/t-shirt-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: TShirtPageRoutingModule */

  /***/
  function srcAppTShirtTShirtRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TShirtPageRoutingModule", function () {
      return TShirtPageRoutingModule;
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


    var _t_shirt_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./t-shirt.page */
    "./src/app/t-shirt/t-shirt.page.ts");

    var routes = [{
      path: '',
      component: _t_shirt_page__WEBPACK_IMPORTED_MODULE_3__["TShirtPage"]
    }];

    var TShirtPageRoutingModule = function TShirtPageRoutingModule() {
      _classCallCheck(this, TShirtPageRoutingModule);
    };

    TShirtPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TShirtPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/t-shirt/t-shirt.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/t-shirt/t-shirt.module.ts ***!
    \*******************************************/

  /*! exports provided: TShirtPageModule */

  /***/
  function srcAppTShirtTShirtModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TShirtPageModule", function () {
      return TShirtPageModule;
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


    var _t_shirt_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./t-shirt-routing.module */
    "./src/app/t-shirt/t-shirt-routing.module.ts");
    /* harmony import */


    var _t_shirt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./t-shirt.page */
    "./src/app/t-shirt/t-shirt.page.ts");
    /* harmony import */


    var _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../share-module/share-module.module */
    "./src/app/share-module/share-module.module.ts");

    var TShirtPageModule = function TShirtPageModule() {
      _classCallCheck(this, TShirtPageModule);
    };

    TShirtPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__["ShareModuleModule"], _t_shirt_routing_module__WEBPACK_IMPORTED_MODULE_5__["TShirtPageRoutingModule"]],
      declarations: [_t_shirt_page__WEBPACK_IMPORTED_MODULE_6__["TShirtPage"]]
    })], TShirtPageModule);
    /***/
  },

  /***/
  "./src/app/t-shirt/t-shirt.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/t-shirt/t-shirt.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTShirtTShirtPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  color: #a47dc7;\n  text-align: center;\n}\nion-header ion-toolbar .start {\n  -webkit-transform: rotatey(180deg);\n          transform: rotatey(180deg);\n}\nion-header ion-toolbar ion-icon {\n  font-size: 250%;\n  color: #a47dc7;\n}\nion-header ion-toolbar span {\n  position: relative;\n  top: -10px;\n  left: -7px;\n  color: white;\n  background-color: #a47dc7;\n}\nion-content .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content .content ion-card {\n  text-align: center;\n  width: 70%;\n}\nion-content .content ion-card ion-item button {\n  padding: 2%;\n  border: none;\n  background: #a47dc7;\n  position: relative;\n  outline: none;\n  border-radius: 5px;\n  color: white;\n  font-size: 18px;\n}\nion-content .content ion-card ion-item .btnAdd {\n  width: 40%;\n}\nion-content .content ion-card ion-item .btnView {\n  width: 60%;\n  padding: 3.5%;\n}\nion-content .content ion-card ion-item span {\n  color: #212529;\n  background-color: #a47dc7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdC1zaGlydC9DOlxcVXNlcnNcXHRhYmFyYWtcXERvd25sb2Fkc1xcU2hvcHBpbmdBcHAvc3JjXFxhcHBcXHQtc2hpcnRcXHQtc2hpcnQucGFnZS5zY3NzIiwic3JjL2FwcC90LXNoaXJ0L3Qtc2hpcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDRFo7QURHUTtFQUNJLGtDQUFBO1VBQUEsMEJBQUE7QUNEWjtBREdRO0VBRUksZUFBQTtFQUNBLGNBQUE7QUNGWjtBRElRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0ZaO0FEUUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDTFI7QURNUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0paO0FETWdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNKcEI7QURNZ0I7RUFDSSxVQUFBO0FDSnBCO0FETWdCO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUNKcEI7QURNZ0I7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUNKcEIiLCJmaWxlIjoic3JjL2FwcC90LXNoaXJ0L3Qtc2hpcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNhNDdkYzc7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0YXJ0IHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGV5KDE4MGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNTAlO1xyXG4gICAgICAgICAgICBjb2xvcjogI2E0N2RjNztcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICAgICAgbGVmdDogLTdweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTQ3ZGM3O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYTQ3ZGM3O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJ0bkFkZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5idG5WaWV3IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMuNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTQ3ZGM3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBjb2xvcjogI2E0N2RjNztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAuc3RhcnQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZXkoMTgwZGVnKTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDI1MCU7XG4gIGNvbG9yOiAjYTQ3ZGM3O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xMHB4O1xuICBsZWZ0OiAtN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNDdkYzc7XG59XG5cbmlvbi1jb250ZW50IC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IGlvbi1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNzAlO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgaW9uLWNhcmQgaW9uLWl0ZW0gYnV0dG9uIHtcbiAgcGFkZGluZzogMiU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2E0N2RjNztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgaW9uLWNhcmQgaW9uLWl0ZW0gLmJ0bkFkZCB7XG4gIHdpZHRoOiA0MCU7XG59XG5pb24tY29udGVudCAuY29udGVudCBpb24tY2FyZCBpb24taXRlbSAuYnRuVmlldyB7XG4gIHdpZHRoOiA2MCU7XG4gIHBhZGRpbmc6IDMuNSU7XG59XG5pb24tY29udGVudCAuY29udGVudCBpb24tY2FyZCBpb24taXRlbSBzcGFuIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNDdkYzc7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/t-shirt/t-shirt.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/t-shirt/t-shirt.page.ts ***!
    \*****************************************/

  /*! exports provided: TShirtPage */

  /***/
  function srcAppTShirtTShirtPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TShirtPage", function () {
      return TShirtPage;
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

    var TShirtPage =
    /*#__PURE__*/
    function () {
      function TShirtPage(route, global) {
        _classCallCheck(this, TShirtPage);

        this.route = route;
        this.global = global;
        this.titel = 'T-Shirt';
        this.cards = [{
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: true,
          img: '../../assets/t_shirt/1.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: true,
          img: '../../assets/t_shirt/2.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/t_shirt/3.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/t_shirt/4.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/t_shirt/5.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/t_shirt/6.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: true,
          img: '../../assets/t_shirt/7.jpeg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/t_shirt/8.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/t_shirt/9.jpg'
        }];
      }

      _createClass(TShirtPage, [{
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

      return TShirtPage;
    }();

    TShirtPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
      }];
    };

    TShirtPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-t-shirt',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./t-shirt.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/t-shirt/t-shirt.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./t-shirt.page.scss */
      "./src/app/t-shirt/t-shirt.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])], TShirtPage);
    /***/
  }
}]);
//# sourceMappingURL=t-shirt-t-shirt-module-es5.js.map