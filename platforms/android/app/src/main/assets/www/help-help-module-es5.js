function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-help-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHelpHelpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <!-- <ion-tab-button tab=\"back\" (click)=\"BackBtn()\"> -->\n        <!-- <ion-label>Back</ion-label> -->\n        <!-- <ion-icon name=\"arrow-back-outline\"></ion-icon> -->\n        <!-- </ion-tab-button> -->\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n        <ion-menu-button auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>Help Center</ion-title>\n</ion-toolbar>\n\n<ion-menu side=\"end\" menuId=\"first\" contentId=\"main\">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Start Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <ion-menu-toggle>\n                <ion-item (click)=\"Profile()\">Profile Details</ion-item>\n                <ion-item (click)=\"ViewCart()\">Orders</ion-item>\n                <ion-item (click)=\"Help()\">Help Center</ion-item>\n                <ion-item (click)=\"logout()\">Logout</ion-item>\n            </ion-menu-toggle>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-router-outlet id=\"main\"></ion-router-outlet>\n\n\n<ion-content>\n    <div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\n        </p>\n    </div>\n    <div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\n        </p>\n    </div>\n    <div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\n        </p>\n    </div>\n\n</ion-content>\n\n<ion-tab-bar slot=\"bottom\">\n    <!-- edit it to last page -->\n    <ion-tab-button tab=\"back\" (click)=\"BackBtn()\">\n        <ion-label>Back</ion-label>\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"profile\" (click)=\"ProfileBtn()\">\n        <ion-label>Profile</ion-label>\n        <ion-icon name=\"person-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"categories\" (click)=\"CategoryBtn()\">\n        <ion-label>Categories</ion-label>\n        <ion-icon name=\"apps-outline\"></ion-icon>\n    </ion-tab-button>\n</ion-tab-bar>";
    /***/
  },

  /***/
  "./src/app/help/help-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/help/help-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HelpPageRoutingModule */

  /***/
  function srcAppHelpHelpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpPageRoutingModule", function () {
      return HelpPageRoutingModule;
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


    var _help_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./help.page */
    "./src/app/help/help.page.ts");

    var routes = [{
      path: '',
      component: _help_page__WEBPACK_IMPORTED_MODULE_3__["HelpPage"]
    }];

    var HelpPageRoutingModule = function HelpPageRoutingModule() {
      _classCallCheck(this, HelpPageRoutingModule);
    };

    HelpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HelpPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/help/help.module.ts":
  /*!*************************************!*\
    !*** ./src/app/help/help.module.ts ***!
    \*************************************/

  /*! exports provided: HelpPageModule */

  /***/
  function srcAppHelpHelpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpPageModule", function () {
      return HelpPageModule;
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


    var _help_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./help-routing.module */
    "./src/app/help/help-routing.module.ts");
    /* harmony import */


    var _help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./help.page */
    "./src/app/help/help.page.ts");

    var HelpPageModule = function HelpPageModule() {
      _classCallCheck(this, HelpPageModule);
    };

    HelpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _help_routing_module__WEBPACK_IMPORTED_MODULE_5__["HelpPageRoutingModule"]],
      declarations: [_help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]]
    })], HelpPageModule);
    /***/
  },

  /***/
  "./src/app/help/help.page.scss":
  /*!*************************************!*\
    !*** ./src/app/help/help.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHelpHelpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --background: #a47dc7;\n  color: white;\n}\nion-toolbar ion-buttons ion-button ion-icon {\n  font-size: 30px;\n}\nion-toolbar ion-buttons ion-button ion-badge {\n  background-color: white;\n  color: #a47dc7;\n}\nion-toolbar ion-buttons ion-menu-button {\n  font-size: 30px;\n}\nion-toolbar ion-title {\n  text-align: center;\n}\nion-menu ion-header ion-toolbar ion-title {\n  text-align: center;\n}\nion-menu ion-content ion-list ion-item {\n  color: #a47dc7;\n}\nion-content div {\n  position: relative;\n  top: 2%;\n  left: 2%;\n}\nion-content div p {\n  width: 99%;\n}\nion-tab-bar {\n  --background: #a47dc7;\n}\nion-tab-bar ion-tab-button {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9DOlxcVXNlcnNcXHRhYmFyYWtcXERvd25sb2Fkc1xcU2hvcHBpbmdBcHAvc3JjXFxhcHBcXGhlbHBcXGhlbHAucGFnZS5zY3NzIiwic3JjL2FwcC9oZWxwL2hlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURFWTtFQUNJLGVBQUE7QUNBaEI7QURFWTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtBQ0FoQjtBRElRO0VBQ0ksZUFBQTtBQ0ZaO0FES0k7RUFDSSxrQkFBQTtBQ0hSO0FEVVk7RUFDSSxrQkFBQTtBQ1BoQjtBRGFZO0VBQ0ksY0FBQTtBQ1hoQjtBRGtCSTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNmUjtBRGdCUTtFQUNJLFVBQUE7QUNkWjtBRG1CQTtFQUNJLHFCQUFBO0FDaEJKO0FEaUJJO0VBQ0ksWUFBQTtBQ2ZSIiwiZmlsZSI6InNyYy9hcHAvaGVscC9oZWxwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2E0N2RjNztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGlvbi1idXR0b25zIHtcclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1iYWRnZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYTQ3ZGM3O1xyXG4gICAgICAgICAgICAgICAgLy8gZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLW1lbnUge1xyXG4gICAgaW9uLWhlYWRlciB7XHJcbiAgICAgICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgICAgICBpb24tdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAgIGlvbi1saXN0IHtcclxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNhNDdkYzc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIGRpdiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogMiU7XHJcbiAgICAgICAgbGVmdDogMiU7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5OSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tdGFiLWJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNhNDdkYzc7XHJcbiAgICBpb24tdGFiLWJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59IiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNhNDdkYzc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5pb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIGlvbi1iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogI2E0N2RjNztcbn1cbmlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1tZW51LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbmlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLW1lbnUgaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tbWVudSBpb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSB7XG4gIGNvbG9yOiAjYTQ3ZGM3O1xufVxuXG5pb24tY29udGVudCBkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMiU7XG4gIGxlZnQ6IDIlO1xufVxuaW9uLWNvbnRlbnQgZGl2IHAge1xuICB3aWR0aDogOTklO1xufVxuXG5pb24tdGFiLWJhciB7XG4gIC0tYmFja2dyb3VuZDogI2E0N2RjNztcbn1cbmlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/help/help.page.ts":
  /*!***********************************!*\
    !*** ./src/app/help/help.page.ts ***!
    \***********************************/

  /*! exports provided: HelpPage */

  /***/
  function srcAppHelpHelpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpPage", function () {
      return HelpPage;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var HelpPage =
    /*#__PURE__*/
    function () {
      function HelpPage(route, location, menu) {
        _classCallCheck(this, HelpPage);

        this.route = route;
        this.location = location;
        this.menu = menu;
      }

      _createClass(HelpPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // ionViewWillLeave() {
        //   this.menu.close();
        // }

      }, {
        key: "Profile",
        value: function Profile() {
          this.route.navigateByUrl('/profile');
        }
      }, {
        key: "ViewCart",
        value: function ViewCart() {
          this.route.navigateByUrl('/view-cart');
        }
      }, {
        key: "Help",
        value: function Help() {
          this.route.navigateByUrl('/help');
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
          this.route.navigate(['/home']);
        }
      }, {
        key: "BackBtn",
        value: function BackBtn() {
          this.location.back();
        }
      }, {
        key: "ProfileBtn",
        value: function ProfileBtn() {
          this.route.navigateByUrl('/profile');
        }
      }, {
        key: "CategoryBtn",
        value: function CategoryBtn() {
          this.route.navigateByUrl('/categories');
        }
      }]);

      return HelpPage;
    }();

    HelpPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }];
    };

    HelpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-help',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./help.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./help.page.scss */
      "./src/app/help/help.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])], HelpPage);
    /***/
  }
}]);
//# sourceMappingURL=help-help-module-es5.js.map