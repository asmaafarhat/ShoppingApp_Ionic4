function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["girls-dresses-girls-dresses-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/girls-dresses/girls-dresses.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/girls-dresses/girls-dresses.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGirlsDressesGirlsDressesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-share [pageName]=\"titel\"></app-share>\n\n<ion-content>\n    <div class=\"content\">\n        <ion-card *ngFor=\"let card of cards ; index as i ;\">\n            <img [src]=\"card.img\" />\n            <ion-card-header>\n                <!-- <ion-card-subtitle>Destination</ion-card-subtitle> -->\n                <ion-card-title>{{card.title}} <span *ngIf=\"card.new\" class=\"badge badge-danger\">New</span>\n                </ion-card-title>\n            </ion-card-header>\n            <!-- <ion-card-content>\n            {{card.description}}\n        </ion-card-content> -->\n            <ion-item>\n                <!-- <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n              <ion-label>ion-item in a card, icon left, button right</ion-label> -->\n                <button class=\"btnAdd\" slot=\"start\" (click)=\"addToCard(i)\">Add to card</button>\n                <button class=\"btnView\" slot=\"end\" (click)=\"viewElem(card)\">View</button>\n            </ion-item>\n        </ion-card>\n    </div>\n</ion-content>\n\n<shared-footer></shared-footer>";
    /***/
  },

  /***/
  "./src/app/girls-dresses/girls-dresses-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/girls-dresses/girls-dresses-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: GirlsDressesPageRoutingModule */

  /***/
  function srcAppGirlsDressesGirlsDressesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GirlsDressesPageRoutingModule", function () {
      return GirlsDressesPageRoutingModule;
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


    var _girls_dresses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./girls-dresses.page */
    "./src/app/girls-dresses/girls-dresses.page.ts");

    var routes = [{
      path: '',
      component: _girls_dresses_page__WEBPACK_IMPORTED_MODULE_3__["GirlsDressesPage"]
    }];

    var GirlsDressesPageRoutingModule = function GirlsDressesPageRoutingModule() {
      _classCallCheck(this, GirlsDressesPageRoutingModule);
    };

    GirlsDressesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GirlsDressesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/girls-dresses/girls-dresses.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/girls-dresses/girls-dresses.module.ts ***!
    \*******************************************************/

  /*! exports provided: GirlsDressesPageModule */

  /***/
  function srcAppGirlsDressesGirlsDressesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GirlsDressesPageModule", function () {
      return GirlsDressesPageModule;
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


    var _girls_dresses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./girls-dresses-routing.module */
    "./src/app/girls-dresses/girls-dresses-routing.module.ts");
    /* harmony import */


    var _girls_dresses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./girls-dresses.page */
    "./src/app/girls-dresses/girls-dresses.page.ts");
    /* harmony import */


    var _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../share-module/share-module.module */
    "./src/app/share-module/share-module.module.ts");

    var GirlsDressesPageModule = function GirlsDressesPageModule() {
      _classCallCheck(this, GirlsDressesPageModule);
    };

    GirlsDressesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _girls_dresses_routing_module__WEBPACK_IMPORTED_MODULE_5__["GirlsDressesPageRoutingModule"], _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__["ShareModuleModule"]],
      declarations: [_girls_dresses_page__WEBPACK_IMPORTED_MODULE_6__["GirlsDressesPage"]]
    })], GirlsDressesPageModule);
    /***/
  },

  /***/
  "./src/app/girls-dresses/girls-dresses.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/girls-dresses/girls-dresses.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGirlsDressesGirlsDressesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content .content ion-card {\n  text-align: center;\n  width: 70%;\n}\nion-content .content ion-card ion-item button {\n  padding: 2%;\n  border: none;\n  background: #a47dc7;\n  position: relative;\n  outline: none;\n  border-radius: 5px;\n  color: white;\n  font-size: 18px;\n}\nion-content .content ion-card ion-item .btnAdd {\n  width: 40%;\n}\nion-content .content ion-card ion-item .btnView {\n  width: 60%;\n  padding: 3.5%;\n}\nion-content .content ion-card ion-item span {\n  color: #212529;\n  background-color: #a47dc7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2lybHMtZHJlc3Nlcy9DOlxcVXNlcnNcXHRhYmFyYWtcXERvd25sb2Fkc1xcU2hvcHBpbmdBcHAvc3JjXFxhcHBcXGdpcmxzLWRyZXNzZXNcXGdpcmxzLWRyZXNzZXMucGFnZS5zY3NzIiwic3JjL2FwcC9naXJscy1kcmVzc2VzL2dpcmxzLWRyZXNzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FSO0FEQ1E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNDWjtBRENnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ3BCO0FEQ2dCO0VBQ0ksVUFBQTtBQ0NwQjtBRENnQjtFQUNJLFVBQUE7RUFDQSxhQUFBO0FDQ3BCO0FEQ2dCO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDQ3BCIiwiZmlsZSI6InNyYy9hcHAvZ2lybHMtZHJlc3Nlcy9naXJscy1kcmVzc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2E0N2RjNztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5idG5BZGQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnRuVmlldyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzLjUlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E0N2RjNztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1jb250ZW50IC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IGlvbi1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNzAlO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgaW9uLWNhcmQgaW9uLWl0ZW0gYnV0dG9uIHtcbiAgcGFkZGluZzogMiU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2E0N2RjNztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgaW9uLWNhcmQgaW9uLWl0ZW0gLmJ0bkFkZCB7XG4gIHdpZHRoOiA0MCU7XG59XG5pb24tY29udGVudCAuY29udGVudCBpb24tY2FyZCBpb24taXRlbSAuYnRuVmlldyB7XG4gIHdpZHRoOiA2MCU7XG4gIHBhZGRpbmc6IDMuNSU7XG59XG5pb24tY29udGVudCAuY29udGVudCBpb24tY2FyZCBpb24taXRlbSBzcGFuIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNDdkYzc7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/girls-dresses/girls-dresses.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/girls-dresses/girls-dresses.page.ts ***!
    \*****************************************************/

  /*! exports provided: GirlsDressesPage */

  /***/
  function srcAppGirlsDressesGirlsDressesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GirlsDressesPage", function () {
      return GirlsDressesPage;
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

    var GirlsDressesPage =
    /*#__PURE__*/
    function () {
      function GirlsDressesPage(global, route) {
        _classCallCheck(this, GirlsDressesPage);

        this.global = global;
        this.route = route;
        this.titel = 'Girls Dresses';
        this.cards = [{
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: true,
          img: '../../assets/girls_dresses/1.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: true,
          img: '../../assets/girls_dresses/2.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/girls_dresses/3.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/girls_dresses/4.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/girls_dresses/5.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/girls_dresses/6.jpeg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: true,
          img: '../../assets/girls_dresses/7.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/girls_dresses/8.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/girls_dresses/9.jpg'
        }];
      }

      _createClass(GirlsDressesPage, [{
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

      return GirlsDressesPage;
    }();

    GirlsDressesPage.ctorParameters = function () {
      return [{
        type: _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    GirlsDressesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-girls-dresses',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./girls-dresses.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/girls-dresses/girls-dresses.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./girls-dresses.page.scss */
      "./src/app/girls-dresses/girls-dresses.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], GirlsDressesPage);
    /***/
  }
}]);
//# sourceMappingURL=girls-dresses-girls-dresses-module-es5.js.map