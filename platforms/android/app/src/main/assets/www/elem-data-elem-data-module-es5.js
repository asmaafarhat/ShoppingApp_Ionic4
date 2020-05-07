function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["elem-data-elem-data-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/elem-data/elem-data.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elem-data/elem-data.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppElemDataElemDataPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-share [pageName]='title'>\n</app-share>\n<ion-content>\n    <ion-card>\n        <img [src]=\"card.img\" />\n        <ion-card-header>\n            <!-- <ion-card-subtitle>Destination</ion-card-subtitle> -->\n            <ion-card-title>{{card.title}} <span *ngIf=\"card.new\" class=\"badge badge-danger\">New</span></ion-card-title>\n\n        </ion-card-header>\n        <ion-card-content>\n            {{card.description}}\n        </ion-card-content>\n        <ion-item>\n            <!-- <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n              <ion-label>ion-item in a card, icon left, button right</ion-label> -->\n            <!-- <button class=\"btnAdd\" slot=\"start\" (click)=\"addToCard()\">Add to card</button> -->\n            <button class=\"btnView\" slot=\"end\" (click)=\"viewElem(card)\">View</button>\n        </ion-item>\n    </ion-card>\n</ion-content>\n\n<shared-footer></shared-footer>";
    /***/
  },

  /***/
  "./src/app/elem-data/elem-data-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/elem-data/elem-data-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ElemDataPageRoutingModule */

  /***/
  function srcAppElemDataElemDataRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElemDataPageRoutingModule", function () {
      return ElemDataPageRoutingModule;
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


    var _elem_data_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./elem-data.page */
    "./src/app/elem-data/elem-data.page.ts");

    var routes = [{
      path: '',
      component: _elem_data_page__WEBPACK_IMPORTED_MODULE_3__["ElemDataPage"]
    }];

    var ElemDataPageRoutingModule = function ElemDataPageRoutingModule() {
      _classCallCheck(this, ElemDataPageRoutingModule);
    };

    ElemDataPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ElemDataPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/elem-data/elem-data.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/elem-data/elem-data.module.ts ***!
    \***********************************************/

  /*! exports provided: ElemDataPageModule */

  /***/
  function srcAppElemDataElemDataModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElemDataPageModule", function () {
      return ElemDataPageModule;
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


    var _elem_data_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./elem-data-routing.module */
    "./src/app/elem-data/elem-data-routing.module.ts");
    /* harmony import */


    var _elem_data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./elem-data.page */
    "./src/app/elem-data/elem-data.page.ts");
    /* harmony import */


    var _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../share-module/share-module.module */
    "./src/app/share-module/share-module.module.ts");

    var ElemDataPageModule = function ElemDataPageModule() {
      _classCallCheck(this, ElemDataPageModule);
    };

    ElemDataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _elem_data_routing_module__WEBPACK_IMPORTED_MODULE_5__["ElemDataPageRoutingModule"], _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__["ShareModuleModule"]],
      declarations: [_elem_data_page__WEBPACK_IMPORTED_MODULE_6__["ElemDataPage"]]
    })], ElemDataPageModule);
    /***/
  },

  /***/
  "./src/app/elem-data/elem-data.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/elem-data/elem-data.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppElemDataElemDataPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  color: #a47dc7;\n  text-align: center;\n}\nion-header ion-toolbar .start {\n  -webkit-transform: rotatey(180deg);\n          transform: rotatey(180deg);\n}\nion-header ion-toolbar ion-icon {\n  font-size: 250%;\n  color: #a47dc7;\n}\nion-header ion-toolbar span {\n  position: relative;\n  top: -10px;\n  left: -7px;\n  color: white;\n  background-color: #a47dc7;\n}\nion-content ion-card {\n  text-align: center;\n}\nion-content ion-card ion-item button {\n  padding: 2%;\n  border: none;\n  background: #a47dc7;\n  position: relative;\n  outline: none;\n  border-radius: 5px;\n  color: white;\n  font-size: 18px;\n}\nion-content ion-card ion-item .btnAdd {\n  width: 40%;\n}\nion-content ion-card ion-item .btnView {\n  width: 60%;\n  padding: 3.5%;\n}\nion-content ion-card ion-item span {\n  color: #212529;\n  background-color: #a47dc7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbS1kYXRhL0M6XFxVc2Vyc1xcdGFiYXJha1xcRG93bmxvYWRzXFxTaG9wcGluZ0FwcC9zcmNcXGFwcFxcZWxlbS1kYXRhXFxlbGVtLWRhdGEucGFnZS5zY3NzIiwic3JjL2FwcC9lbGVtLWRhdGEvZWxlbS1kYXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0RaO0FER1E7RUFDSSxrQ0FBQTtVQUFBLDBCQUFBO0FDRFo7QURHUTtFQUVJLGVBQUE7RUFDQSxjQUFBO0FDRlo7QURJUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNGWjtBRFFJO0VBRUksa0JBQUE7QUNOUjtBRFFZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNOaEI7QURRWTtFQUNJLFVBQUE7QUNOaEI7QURRWTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FDTmhCO0FEUVk7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUNOaEIiLCJmaWxlIjoic3JjL2FwcC9lbGVtLWRhdGEvZWxlbS1kYXRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYTQ3ZGM3O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdGFydCB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRleSgxODBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIC8vIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjUwJTtcclxuICAgICAgICAgICAgY29sb3I6ICNhNDdkYzc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC03cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E0N2RjNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjYTQ3ZGM3O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhNDdkYzc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG5BZGQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuVmlldyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMy41JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E0N2RjNztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNhNDdkYzc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLnN0YXJ0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGV5KDE4MGRlZyk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNTAlO1xuICBjb2xvcjogI2E0N2RjNztcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTBweDtcbiAgbGVmdDogLTdweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTQ3ZGM3O1xufVxuXG5pb24tY29udGVudCBpb24tY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDIlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNhNDdkYzc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIC5idG5BZGQge1xuICB3aWR0aDogNDAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWl0ZW0gLmJ0blZpZXcge1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nOiAzLjUlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWl0ZW0gc3BhbiB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTQ3ZGM3O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/elem-data/elem-data.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/elem-data/elem-data.page.ts ***!
    \*********************************************/

  /*! exports provided: ElemDataPage */

  /***/
  function srcAppElemDataElemDataPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElemDataPage", function () {
      return ElemDataPage;
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

    var ElemDataPage =
    /*#__PURE__*/
    function () {
      function ElemDataPage(router, route, global) {
        _classCallCheck(this, ElemDataPage);

        this.router = router;
        this.route = route;
        this.global = global;
      }

      _createClass(ElemDataPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.router.params.subscribe(function (params) {
            _this.getValue = params.itemData;
          });
          this.card = JSON.parse(this.getValue);
        }
      }, {
        key: "addToCard",
        value: function addToCard(i) {
          this.global.counter += 1;
          localStorage.setItem("item".concat(this.global.counter), JSON.stringify(this.card));
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

      return ElemDataPage;
    }();

    ElemDataPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
      }];
    };

    ElemDataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-elem-data',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./elem-data.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/elem-data/elem-data.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./elem-data.page.scss */
      "./src/app/elem-data/elem-data.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])], ElemDataPage);
    /***/
  }
}]);
//# sourceMappingURL=elem-data-elem-data-module-es5.js.map