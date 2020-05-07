function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kids-dresses-kids-dresses-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/kids-dresses/kids-dresses.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kids-dresses/kids-dresses.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppKidsDressesKidsDressesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-share [pageName]=\"titel\"></app-share>\n\n<ion-content>\n    <div class=\"content\">\n        <ion-card *ngFor=\"let card of cards ; index as i ;\">\n            <img [src]=\"card.img\" />\n            <ion-card-header>\n                <!-- <ion-card-subtitle>Destination</ion-card-subtitle> -->\n                <ion-card-title>{{card.title}} <span *ngIf=\"card.new\" class=\"badge badge-danger\">New</span>\n                </ion-card-title>\n            </ion-card-header>\n            <!-- <ion-card-content>\n            {{card.description}}\n        </ion-card-content> -->\n            <ion-item>\n                <!-- <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n              <ion-label>ion-item in a card, icon left, button right</ion-label> -->\n                <button class=\"btnAdd\" slot=\"start\" (click)=\"addToCard(i)\">Add to card</button>\n                <button class=\"btnView\" slot=\"end\" (click)=\"viewElem(card)\">View</button>\n            </ion-item>\n        </ion-card>\n    </div>\n</ion-content>\n\n<shared-footer></shared-footer>";
    /***/
  },

  /***/
  "./src/app/kids-dresses/kids-dresses-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/kids-dresses/kids-dresses-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: KidsDressesPageRoutingModule */

  /***/
  function srcAppKidsDressesKidsDressesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KidsDressesPageRoutingModule", function () {
      return KidsDressesPageRoutingModule;
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


    var _kids_dresses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./kids-dresses.page */
    "./src/app/kids-dresses/kids-dresses.page.ts");

    var routes = [{
      path: '',
      component: _kids_dresses_page__WEBPACK_IMPORTED_MODULE_3__["KidsDressesPage"]
    }];

    var KidsDressesPageRoutingModule = function KidsDressesPageRoutingModule() {
      _classCallCheck(this, KidsDressesPageRoutingModule);
    };

    KidsDressesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], KidsDressesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/kids-dresses/kids-dresses.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/kids-dresses/kids-dresses.module.ts ***!
    \*****************************************************/

  /*! exports provided: KidsDressesPageModule */

  /***/
  function srcAppKidsDressesKidsDressesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KidsDressesPageModule", function () {
      return KidsDressesPageModule;
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


    var _kids_dresses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./kids-dresses-routing.module */
    "./src/app/kids-dresses/kids-dresses-routing.module.ts");
    /* harmony import */


    var _kids_dresses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./kids-dresses.page */
    "./src/app/kids-dresses/kids-dresses.page.ts");
    /* harmony import */


    var _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../share-module/share-module.module */
    "./src/app/share-module/share-module.module.ts");

    var KidsDressesPageModule = function KidsDressesPageModule() {
      _classCallCheck(this, KidsDressesPageModule);
    };

    KidsDressesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _kids_dresses_routing_module__WEBPACK_IMPORTED_MODULE_5__["KidsDressesPageRoutingModule"], _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__["ShareModuleModule"]],
      declarations: [_kids_dresses_page__WEBPACK_IMPORTED_MODULE_6__["KidsDressesPage"]]
    })], KidsDressesPageModule);
    /***/
  },

  /***/
  "./src/app/kids-dresses/kids-dresses.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/kids-dresses/kids-dresses.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKidsDressesKidsDressesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  color: #a47dc7;\n  text-align: center;\n}\nion-header ion-toolbar .start {\n  -webkit-transform: rotatey(180deg);\n          transform: rotatey(180deg);\n}\nion-header ion-toolbar ion-icon {\n  font-size: 250%;\n  color: #a47dc7;\n}\nion-header ion-toolbar span {\n  position: relative;\n  top: -10px;\n  left: -7px;\n  color: white;\n  background-color: #a47dc7;\n}\nion-content .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content .content ion-card {\n  text-align: center;\n  width: 70%;\n}\nion-content .content ion-card ion-item button {\n  padding: 2%;\n  border: none;\n  background: #a47dc7;\n  position: relative;\n  outline: none;\n  border-radius: 5px;\n  color: white;\n  font-size: 18px;\n}\nion-content .content ion-card ion-item .btnAdd {\n  width: 40%;\n}\nion-content .content ion-card ion-item .btnView {\n  width: 60%;\n  padding: 3.5%;\n}\nion-content .content ion-card ion-item span {\n  color: #212529;\n  background-color: #a47dc7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2lkcy1kcmVzc2VzL0M6XFxVc2Vyc1xcdGFiYXJha1xcRG93bmxvYWRzXFxTaG9wcGluZ0FwcC9zcmNcXGFwcFxca2lkcy1kcmVzc2VzXFxraWRzLWRyZXNzZXMucGFnZS5zY3NzIiwic3JjL2FwcC9raWRzLWRyZXNzZXMva2lkcy1kcmVzc2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0RaO0FER1E7RUFDSSxrQ0FBQTtVQUFBLDBCQUFBO0FDRFo7QURHUTtFQUVJLGVBQUE7RUFDQSxjQUFBO0FDRlo7QURJUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNGWjtBRFFJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0xSO0FETVE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNKWjtBRE1nQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSnBCO0FETWdCO0VBQ0ksVUFBQTtBQ0pwQjtBRE1nQjtFQUNJLFVBQUE7RUFDQSxhQUFBO0FDSnBCO0FETWdCO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDSnBCIiwiZmlsZSI6InNyYy9hcHAva2lkcy1kcmVzc2VzL2tpZHMtZHJlc3Nlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICBpb24tdGl0bGUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2E0N2RjNztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RhcnQge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZXkoMTgwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1MCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYTQ3ZGM3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtN3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhNDdkYzc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaW9uLWNhcmQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhNDdkYzc7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnRuQWRkIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJ0blZpZXcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMy41JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhNDdkYzc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGNvbG9yOiAjYTQ3ZGM3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC5zdGFydCB7XG4gIHRyYW5zZm9ybTogcm90YXRleSgxODBkZWcpO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjUwJTtcbiAgY29sb3I6ICNhNDdkYzc7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwcHg7XG4gIGxlZnQ6IC03cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E0N2RjNztcbn1cblxuaW9uLWNvbnRlbnQgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgaW9uLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA3MCU7XG59XG5pb24tY29udGVudCAuY29udGVudCBpb24tY2FyZCBpb24taXRlbSBidXR0b24ge1xuICBwYWRkaW5nOiAyJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjYTQ3ZGM3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5pb24tY29udGVudCAuY29udGVudCBpb24tY2FyZCBpb24taXRlbSAuYnRuQWRkIHtcbiAgd2lkdGg6IDQwJTtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIC5idG5WaWV3IHtcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZzogMy41JTtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIHNwYW4ge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E0N2RjNztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/kids-dresses/kids-dresses.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/kids-dresses/kids-dresses.page.ts ***!
    \***************************************************/

  /*! exports provided: KidsDressesPage */

  /***/
  function srcAppKidsDressesKidsDressesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KidsDressesPage", function () {
      return KidsDressesPage;
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


    var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../global.service */
    "./src/app/global.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var KidsDressesPage =
    /*#__PURE__*/
    function () {
      function KidsDressesPage(global, route) {
        _classCallCheck(this, KidsDressesPage);

        this.global = global;
        this.route = route;
        this.titel = 'Kids Dresses'; // size & color

        this.cards = [{
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: true,
          img: '../../assets/Kids_dresses/1.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: true,
          img: '../../assets/Kids_dresses/2.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/Kids_dresses/3.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/Kids_dresses/4.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/Kids_dresses/5.png'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/Kids_dresses/6.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: true,
          img: '../../assets/Kids_dresses/7.png'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/Kids_dresses/8.jpg'
        }, {
          title: 'Price 150 EL',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content',
          buttonText: 'Button',
          new: false,
          img: '../../assets/Kids_dresses/9.jpg'
        }];
      }

      _createClass(KidsDressesPage, [{
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

      return KidsDressesPage;
    }();

    KidsDressesPage.ctorParameters = function () {
      return [{
        type: _global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    KidsDressesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-kids-dresses',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./kids-dresses.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/kids-dresses/kids-dresses.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./kids-dresses.page.scss */
      "./src/app/kids-dresses/kids-dresses.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], KidsDressesPage);
    /***/
  }
}]);
//# sourceMappingURL=kids-dresses-kids-dresses-module-es5.js.map