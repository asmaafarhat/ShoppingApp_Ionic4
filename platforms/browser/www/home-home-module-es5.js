function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n    <div class=\"first\">\n        <div class=\"container\">\n            <div class=\"box\">\n                <div class=\"title\">\n                    <span class=\"block\"></span>\n                    <h1>Shopping <span></span></h1>\n                </div>\n\n                <div class=\"role\">\n                    <div class=\"block\"></div>\n                    <p>Girls & Womans</p>\n                </div>\n\n            </div>\n            <div class=\"second\">\n                <div id=\"login-button\" (click)='signinModule()'>\n                    <img src=\"https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png\" />\n                </div>\n\n                <div id=\"signin\">\n                    <span class=\"close-btn\" (click)=\"close()\">\n                        <img src=\"https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png\" />\n                    </span>\n\n                    <form [formGroup]=\"signForm\">\n\n                        <input type=\"text\" name=\"firstName\" placeholder=\"First Name\" formControlName=\"firstName\">\n                        <span class=\"error\" *ngIf=\"signForm.get('firstName').hasError('required') && signForm.get('firstName').touched\">\n                            Please input your firstName\n                        </span>\n                        <span class=\"error\" *ngIf=\"signForm.get('firstName').hasError('minlength') && signForm.get('firstName').touched\">\n                            Minimum 4 characters\n                        </span>\n                        <span class=\"error\" *ngIf=\"signForm.get('firstName').hasError('maxlength') && signForm.get('firstName').touched\">\n                            Maximum 30 characters\n                        </span>\n                        <span class=\"error\" *ngIf=\"signForm.get('firstName').hasError('pattern') && signForm.get('firstName').touched\">\n                            Just use alphabet character\n                        </span>\n\n                        <input type=\"text\" name=\"lastName\" placeholder=\"Last Name\" formControlName=\"lastName\">\n                        <span class=\"error\" *ngIf=\"signForm.get('firstName').hasError('required') && signForm.get('firstName').touched\">\n                            Please input your firstName\n                        </span>\n                        <span class=\"error\" *ngIf=\"signForm.get('firstName').hasError('minlength') && signForm.get('firstName').touched\">\n                            Minimum 4 characters\n                        </span>\n                        <span class=\"error\" *ngIf=\"signForm.get('firstName').hasError('maxlength') && signForm.get('firstName').touched\">\n                            Maximum 30 characters\n                        </span>\n                        <span class=\"error\" *ngIf=\"signForm.get('firstName').hasError('pattern') && signForm.get('firstName').touched\">\n                            Just use alphabet character\n                        </span>\n\n                        <input type=\"email\" name=\"email\" placeholder=\"E-mail\" formControlName=\"email\">\n                        <span class=\"error\" *ngIf=\"signForm.get('email').hasError('required') && signForm.get('email').touched\">\n                            Please input your email\n                        </span>\n                        <span class=\"error\" *ngIf=\"signForm.get('email').hasError('pattern') && signForm.get('email').touched\">\n                            invalid e-mail\n                        </span>\n\n                        <input type=\"number\" name=\"phoneNumber\" placeholder=\"phoneNumber\" formControlName=\"phoneNumber\">\n                        <!-- <input type=\"text\" name=\"city\" placeholder=\"City\" formControlName=\"city\">\n                        <input type=\"text\" name=\"country\" placeholder=\"Country\" formControlName=\"country\">\n                        <input type=\"number\" name=\"noStreet\" placeholder=\"No.Street\" formControlName=\"street\"> -->\n                        <input type=\"password\" name=\"pass\" placeholder=\"Password\" formControlName=\"password\">\n                        <span class=\"error\" *ngIf=\"signForm.get('password').hasError('required') && signForm.get('password').touched\">\n                            Please input your password\n                        </span>\n                        <span class=\"error\" *ngIf=\"signForm.get('password').hasError('minlength') && signForm.get('password').touched\">\n                            Minimum 6 characters\n                        </span>\n                        <span class=\"error\" *ngIf=\"signForm.get('password').hasError('maxlength') && signForm.get('password').touched\">\n                            Maximum 12 characters\n                        </span>\n                        <span class=\"error\" *ngIf=\"signForm.get('password').hasError('pattern') && signForm.get('password').touched\">\n                            Just use alphabet character and numbers\n                        </span>\n\n                        <a (click)=\"signIn()\">Sign in</a>\n                        <div id=\"have-account\">\n                            <span id=\"haveAcc\" (click)='loginModule()'>Have Account Exit</span>\n                        </div>\n                    </form>\n                </div>\n\n                <div id=\"login\">\n                    <span class=\"close-btn\" (click)=\"close()\">\n                        <img src=\"https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png\" />\n                    </span>\n                    <form [formGroup]=\"loginForm\">\n                        <input type=\"email\" formControlName=\"email\" name=\"email\" placeholder=\"E-mail\">\n                        <span class=\"error\" *ngIf=\"loginForm.get('email').hasError('required') && loginForm.get('email').touched\">\n                            Please input your email\n                        </span>\n                        <input type=\"password\" formControlName=\"password\" name=\"password\" placeholder=\"Password\">\n                        <span class=\"error\" *ngIf=\"loginForm.get('password').hasError('required') && loginForm.get('password').touched\">\n                            Please input your password\n                        </span>\n                        <a (click)=\"login()\">Log in</a>\n\n                        <div id=\"remember-container\">\n                            <input type=\"checkbox\" class=\"checkbox\" checked=\"checked\" />\n                            <span id=\"remember\">Remember me</span>\n                            <br>\n                            <span id=\"forgotten-pass\" (click)='forgottenModule()'>Forgotten password</span>\n                        </div>\n                    </form>\n                </div>\n\n                <!-- Forgotten Password Container -->\n                <div id=\"forgotten\">\n                    <!-- <h1>Forgotten</h1> -->\n                    <span class=\"close-btn\" (click)=\"close()\">\n                        <img src=\"https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png\" />\n                    </span>\n\n                    <form>\n                        <input type=\"email\" name=\"email\" placeholder=\"E-mail\">\n                        <a class=\"orange-btn\">Get new password</a>\n                    </form>\n                </div>\n\n\n            </div>\n\n        </div>\n    </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.css":
  /*!************************************!*\
    !*** ./src/app/home/home.page.css ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "html {\r\n    background: url(http://cdn.magdeleine.co/wp-content/uploads/2014/05/3jPYgeVCTWCMqjtb7Dqi_IMG_8251-1400x933.jpg) no-repeat center center fixed;\r\n    background-size: cover;\r\n    overflow: hidden;\r\n}\r\n\r\nimg {\r\n    display: block;\r\n    margin: auto;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n#login-button {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    /* top: 0;\r\n    left: -7%;\r\n    right: 0;\r\n    bottom: 0; */\r\n    padding: 30px;\r\n    margin: auto;\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    background: rgba(3, 3, 3, .8);\r\n    overflow: hidden;\r\n    opacity: 0.4;\r\n    box-shadow: 10px 10px 30px #000;\r\n}\r\n\r\n/* Login container */\r\n\r\n#login {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 30%;\r\n    margin: auto;\r\n    width: 60%;\r\n    height: 30%;\r\n    border-radius: 5px;\r\n    background: rgba(3, 3, 3, 0.25);\r\n    box-shadow: 1px 1px 50px #000;\r\n    display: none;\r\n}\r\n\r\n#signin {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 2%;\r\n    margin: auto;\r\n    width: 65%;\r\n    height: 60%;\r\n    border-radius: 5px;\r\n    background: rgba(3, 3, 3, 0.25);\r\n    box-shadow: 1px 1px 50px #000;\r\n}\r\n\r\n.second {\r\n    display: contents;\r\n}\r\n\r\n.close-btn {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    font-family: 'Open Sans Condensed', sans-serif;\r\n    line-height: 18px;\r\n    top: 3px;\r\n    right: 3px;\r\n    width: 20px;\r\n    height: 20px;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    opacity: .2;\r\n    -webkit-transition: all 2s ease-in-out;\r\n    -webkit-transition: all 0.2s ease-in-out;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.close-btn:hover {\r\n    opacity: .5;\r\n}\r\n\r\n/* Heading */\r\n\r\nh1 {\r\n    font-family: 'Open Sans Condensed', sans-serif;\r\n    position: relative;\r\n    margin-top: 0px;\r\n    text-align: center;\r\n    font-size: 40px;\r\n    color: #ddd;\r\n    text-shadow: 3px 3px 10px #000;\r\n}\r\n\r\n/* Inputs */\r\n\r\na,\r\ninput {\r\n    font-family: 'Open Sans Condensed', sans-serif;\r\n    text-decoration: none;\r\n    position: relative;\r\n    width: 90%;\r\n    display: block;\r\n    margin: 10px auto;\r\n    font-size: 17px;\r\n    color: #fff;\r\n    padding: 5px;\r\n    border-radius: 6px;\r\n    border: none;\r\n    background: rgba(3, 3, 3, .1);\r\n    -webkit-transition: all 2s ease-in-out;\r\n    -webkit-transition: all 0.2s ease-in-out;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\ninput:focus {\r\n    outline: none;\r\n    box-shadow: 3px 3px 10px #333;\r\n    background: rgba(3, 3, 3, .18);\r\n}\r\n\r\n.error {\r\n    padding-left: 5%;\r\n    color: red;\r\n}\r\n\r\n/* Placeholders */\r\n\r\n::-webkit-input-placeholder {\r\n    color: #ddd;\r\n}\r\n\r\n:-moz-placeholder {\r\n    /* Firefox 18- */\r\n    color: red;\r\n}\r\n\r\n::-moz-placeholder {\r\n    /* Firefox 19+ */\r\n    color: red;\r\n}\r\n\r\n:-ms-input-placeholder {\r\n    color: #333;\r\n}\r\n\r\n/* Link */\r\n\r\na {\r\n    font-family: 'Open Sans Condensed', sans-serif;\r\n    text-align: center;\r\n    padding: 4px 8px;\r\n    background: rgba(138, 11, 255, 0.3);\r\n}\r\n\r\n.btnA {\r\n    font-family: 'Open Sans Condensed', sans-serif;\r\n    text-align: center;\r\n    padding: 4px 8px;\r\n    width: 100%;\r\n    height: 20%;\r\n    /* background: rgba(138, 11, 255, 0.3); */\r\n}\r\n\r\na:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n#remember-container {\r\n    position: relative;\r\n    margin: -15px 15px;\r\n}\r\n\r\n#have-account {\r\n    position: relative;\r\n    /* margin: -15px 15px; */\r\n}\r\n\r\n.checkbox {\r\n    position: relative;\r\n    cursor: pointer;\r\n    -webkit-appearance: none;\r\n    padding: 5px;\r\n    border-radius: 4px;\r\n    background: rgba(3, 3, 3, .2);\r\n    display: inline-block;\r\n    width: 16px;\r\n    height: 15px;\r\n}\r\n\r\n.checkbox:checked:active {\r\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.checkbox:checked {\r\n    background: rgba(3, 3, 3, .4);\r\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05), inset 15px 10px -12px rgba(255, 255, 255, 0.5);\r\n    color: #fff;\r\n}\r\n\r\n.checkbox:checked:after {\r\n    content: '\\2714';\r\n    font-size: 10px;\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 4px;\r\n    color: #fff;\r\n}\r\n\r\n#remember {\r\n    position: absolute;\r\n    font-size: 13px;\r\n    font-family: 'Hind', sans-serif;\r\n    color: rgba(255, 255, 255, .5);\r\n    top: 7px;\r\n    /* margin-left: 1%; */\r\n    margin: 2px 1% 0px 2%;\r\n    /* left: 20px; */\r\n}\r\n\r\n#forgotten-pass {\r\n    position: absolute;\r\n    font-size: 12px;\r\n    font-family: 'Hind', sans-serif;\r\n    color: rgba(255, 255, 255, .2);\r\n    right: 0px;\r\n    /* top: 8px; */\r\n    cursor: pointer;\r\n    -webkit-transition: all 2s ease-in-out;\r\n    -webkit-transition: all 0.2s ease-in-out;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n#forgotten-pass:hover {\r\n    color: rgba(255, 255, 255, .6);\r\n}\r\n\r\n#haveAcc {\r\n    position: absolute;\r\n    font-size: 12px;\r\n    font-family: 'Hind', sans-serif;\r\n    color: rgba(255, 255, 255, .2);\r\n    right: 0px;\r\n    /* top: 8px; */\r\n    cursor: pointer;\r\n    -webkit-transition: all 2s ease-in-out;\r\n    -webkit-transition: all 0.2s ease-in-out;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n#haveAcc:hover {\r\n    color: rgba(255, 255, 255, .6);\r\n}\r\n\r\n#forgotten {\r\n    position: absolute;\r\n    /* top: 0; */\r\n    /* left: 0; */\r\n    /* right: 0; */\r\n    /* bottom: 0; */\r\n    margin: auto;\r\n    width: 60%;\r\n    height: 15%;\r\n    border-radius: 10px;\r\n    background: rgba(3, 3, 3, 0.25);\r\n    box-shadow: 1px 1px 50px #000;\r\n    display: none;\r\n}\r\n\r\n.orange-btn {\r\n    background: rgba(138, 11, 255, 0.3);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNklBQTZJO0lBSTdJLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQjs7O2dCQUdZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7O0FBR0Esb0JBQW9COztBQUVwQjtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw4Q0FBOEM7SUFDOUMsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxzQ0FBc0M7SUFHdEMsd0NBQWdDO0lBQWhDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFHQSxZQUFZOztBQUVaO0lBQ0ksOENBQThDO0lBQzlDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsOEJBQThCO0FBQ2xDOztBQUdBLFdBQVc7O0FBRVg7O0lBRUksOENBQThDO0lBQzlDLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isc0NBQXNDO0lBR3RDLHdDQUFnQztJQUFoQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBR0EsaUJBQWlCOztBQUVoQjtJQUNHLFdBQVc7QUFDZjs7QUFFQztJQUNHLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUM7SUFDRyxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVDO0lBQ0csV0FBVztBQUNmOztBQUdBLFNBQVM7O0FBRVQ7SUFDSSw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztJQUNYLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLCtFQUErRTtBQUNuRjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qix5SUFBeUk7SUFDekksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsUUFBUTtJQUNSLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLFVBQVU7SUFDVixjQUFjO0lBQ2QsZUFBZTtJQUNmLHNDQUFzQztJQUd0Qyx3Q0FBZ0M7SUFBaEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLFVBQVU7SUFDVixjQUFjO0lBQ2QsZUFBZTtJQUNmLHNDQUFzQztJQUd0Qyx3Q0FBZ0M7SUFBaEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cDovL2Nkbi5tYWdkZWxlaW5lLmNvL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzA1LzNqUFlnZVZDVFdDTXFqdGI3RHFpX0lNR184MjUxLTE0MDB4OTMzLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4jbG9naW4tYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8qIHRvcDogMDtcclxuICAgIGxlZnQ6IC03JTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwOyAqL1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDMsIDMsIC44KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMzBweCAjMDAwO1xyXG59XHJcblxyXG5cclxuLyogTG9naW4gY29udGFpbmVyICovXHJcblxyXG4jbG9naW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAzMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDMsIDMsIDAuMjUpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1MHB4ICMwMDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jc2lnbmluIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMiU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDMsIDMsIDAuMjUpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1MHB4ICMwMDA7XHJcbn1cclxuXHJcbi5zZWNvbmQge1xyXG4gICAgZGlzcGxheTogY29udGVudHM7XHJcbn1cclxuXHJcbi5jbG9zZS1idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICByaWdodDogM3B4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3BhY2l0eTogLjI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jbG9zZS1idG46aG92ZXIge1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbn1cclxuXHJcblxyXG4vKiBIZWFkaW5nICovXHJcblxyXG5oMSB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6ICNkZGQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAxMHB4ICMwMDA7XHJcbn1cclxuXHJcblxyXG4vKiBJbnB1dHMgKi9cclxuXHJcbmEsXHJcbmlucHV0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgzLCAzLCAzLCAuMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggIzMzMztcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMywgMywgMywgLjE4KTtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLyogUGxhY2Vob2xkZXJzICovXHJcblxyXG4gOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4gOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogRmlyZWZveCAxOC0gKi9cclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiA6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogRmlyZWZveCAxOSsgKi9cclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG5cclxuLyogTGluayAqL1xyXG5cclxuYSB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTM4LCAxMSwgMjU1LCAwLjMpO1xyXG59XHJcblxyXG4uYnRuQSB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDEzOCwgMTEsIDI1NSwgMC4zKTsgKi9cclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbiNyZW1lbWJlci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAtMTVweCAxNXB4O1xyXG59XHJcblxyXG4jaGF2ZS1hY2NvdW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIG1hcmdpbjogLTE1cHggMTVweDsgKi9cclxufVxyXG5cclxuLmNoZWNrYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMywgMywgMywgLjIpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5jaGVja2JveDpjaGVja2VkOmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY2hlY2tib3g6Y2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDMsIDMsIC40KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAwcHggLTE1cHggMTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAxNXB4IDEwcHggLTEycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jaGVja2JveDpjaGVja2VkOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICdcXDI3MTQnO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI3JlbWVtYmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGluZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XHJcbiAgICB0b3A6IDdweDtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAxJTsgKi9cclxuICAgIG1hcmdpbjogMnB4IDElIDBweCAyJTtcclxuICAgIC8qIGxlZnQ6IDIwcHg7ICovXHJcbn1cclxuXHJcbiNmb3Jnb3R0ZW4tcGFzcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogJ0hpbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIC8qIHRvcDogOHB4OyAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jZm9yZ290dGVuLXBhc3M6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xyXG59XHJcblxyXG4jaGF2ZUFjYyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogJ0hpbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIC8qIHRvcDogOHB4OyAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jaGF2ZUFjYzpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XHJcbn1cclxuXHJcbiNmb3Jnb3R0ZW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLyogdG9wOiAwOyAqL1xyXG4gICAgLyogbGVmdDogMDsgKi9cclxuICAgIC8qIHJpZ2h0OiAwOyAqL1xyXG4gICAgLyogYm90dG9tOiAwOyAqL1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMywgMywgMywgMC4yNSk7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDUwcHggIzAwMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5vcmFuZ2UtYnRuIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTM4LCAxMSwgMjU1LCAwLjMpO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap\");\n* {\n  padding: 0;\n}\nbody,\nhtml {\n  overflow: hidden;\n}\n.first {\n  background: #a47dc7;\n}\n.container {\n  width: 100%;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.container .box {\n  width: 290px;\n  height: 250px;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  top: -19%;\n}\n.container .box .title {\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px;\n}\n.container .box .title .block {\n  width: 0%;\n  height: inherit;\n  background: #c385f5;\n  position: absolute;\n  -webkit-animation: mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;\n          animation: mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;\n  display: -webkit-box;\n  display: flex;\n}\n.container .box .title h1 {\n  font-family: \"Poppins\";\n  color: #fff;\n  font-size: 50px;\n  -webkit-animation: mainFadeIn 2s forwards;\n  animation: mainFadeIn 2s forwards;\n  -webkit-animation-delay: 1.6s;\n          animation-delay: 1.6s;\n  opacity: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  position: relative;\n}\n.container .box .title h1 span {\n  width: 0px;\n  height: 0px;\n  border-radius: 50%;\n  background: #c385f5;\n  -webkit-animation: load 0.6s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;\n  animation: popIn 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  margin-left: 5px;\n  margin-top: -10px;\n  position: absolute;\n  bottom: 13px;\n  right: -12px;\n}\n.container .box .role {\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 60px;\n  margin-top: -10px;\n}\n.container .box .role .block {\n  width: 0%;\n  height: inherit;\n  background: #c385f5;\n  position: absolute;\n  -webkit-animation: secBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;\n          animation: secBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  display: -webkit-box;\n  display: flex;\n}\n.container .box .role p {\n  -webkit-animation: secFadeIn 2s forwards;\n          animation: secFadeIn 2s forwards;\n  -webkit-animation-delay: 3.2s;\n          animation-delay: 3.2s;\n  opacity: 0;\n  font-weight: 400;\n  font-family: \"Lato\";\n  color: #ffffff;\n  font-size: 25px;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n}\n@-webkit-keyframes mainBlock {\n  0% {\n    width: 0%;\n    left: 0;\n  }\n  50% {\n    width: 100%;\n    left: 0;\n  }\n  100% {\n    width: 0;\n    left: 100%;\n  }\n}\n@keyframes mainBlock {\n  0% {\n    width: 0%;\n    left: 0;\n  }\n  50% {\n    width: 100%;\n    left: 0;\n  }\n  100% {\n    width: 0;\n    left: 100%;\n  }\n}\n@-webkit-keyframes secBlock {\n  0% {\n    width: 0%;\n    left: 0;\n  }\n  50% {\n    width: 100%;\n    left: 0;\n  }\n  100% {\n    width: 0;\n    left: 100%;\n  }\n}\n@keyframes secBlock {\n  0% {\n    width: 0%;\n    left: 0;\n  }\n  50% {\n    width: 100%;\n    left: 0;\n  }\n  100% {\n    width: 0;\n    left: 100%;\n  }\n}\n@-webkit-keyframes mainFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes mainFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes popIn {\n  0% {\n    width: 0px;\n    height: 0px;\n    background: #c385f5;\n    border: 0px solid #ddd;\n    opacity: 0;\n  }\n  50% {\n    width: 10px;\n    height: 10px;\n    background: #e77ef5;\n    opacity: 1;\n    bottom: 45px;\n  }\n  65% {\n    width: 7px;\n    height: 7px;\n    bottom: 0px;\n    width: 15px;\n  }\n  80% {\n    width: 10px;\n    height: 10px;\n    bottom: 20px;\n  }\n  100% {\n    width: 7px;\n    height: 7px;\n    background: #c385f5;\n    border: 0px solid #222;\n    bottom: 13px;\n  }\n}\n@keyframes popIn {\n  0% {\n    width: 0px;\n    height: 0px;\n    background: #c385f5;\n    border: 0px solid #ddd;\n    opacity: 0;\n  }\n  50% {\n    width: 10px;\n    height: 10px;\n    background: #e77ef5;\n    opacity: 1;\n    bottom: 45px;\n  }\n  65% {\n    width: 7px;\n    height: 7px;\n    bottom: 0px;\n    width: 15px;\n  }\n  80% {\n    width: 10px;\n    height: 10px;\n    bottom: 20px;\n  }\n  100% {\n    width: 7px;\n    height: 7px;\n    background: #c385f5;\n    border: 0px solid #222;\n    bottom: 13px;\n  }\n}\n@-webkit-keyframes secFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0.5;\n  }\n}\n@keyframes secFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0.5;\n  }\n}\n@-webkit-keyframes top {\n  0% {\n    opacity: 0;\n    bottom: -80px;\n  }\n  100% {\n    opacity: 1;\n    bottom: 0px;\n  }\n}\n@keyframes top {\n  0% {\n    opacity: 0;\n    bottom: -80px;\n  }\n  100% {\n    opacity: 1;\n    bottom: 0px;\n  }\n}\n@-webkit-keyframes icon {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.3) rotate(-2deg);\n            transform: scale(1.3) rotate(-2deg);\n  }\n  100% {\n    opacity: 1;\n    bottom: 0px;\n  }\n}\n@keyframes icon {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.3) rotate(-2deg);\n            transform: scale(1.3) rotate(-2deg);\n  }\n  100% {\n    opacity: 1;\n    bottom: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHRhYmFyYWtcXERvd25sb2Fkc1xcU2hvcHBpbmdBcHAvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFRLG9HQUFBO0FBQ1I7RUFFSSxVQUFBO0FDUko7QURXQTs7RUFFSSxnQkFBQTtBQ1JKO0FEV0E7RUFDSSxtQkFBQTtBQ1JKO0FEV0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDVEo7QURVSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsU0FBQTtBQ1JSO0FEU1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtBQ1BaO0FEUVk7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RUFBQTtVQUFBLG9FQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDTmhCO0FEUVk7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7RUFFQSxpQ0FBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMkJBQUE7VUFBQSxxQkFBQTtFQUNBLGtCQUFBO0FDTmhCO0FET2dCO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFHQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUVBQUE7RUFDQSxrRUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0xwQjtBRFNRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1BaO0FEUVk7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ05oQjtBRFFZO0VBQ0ksd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ05oQjtBRFlBO0VBQ0k7SUFDSSxTQUFBO0lBQ0EsT0FBQTtFQ1ROO0VEV0U7SUFDSSxXQUFBO0lBQ0EsT0FBQTtFQ1ROO0VEV0U7SUFDSSxRQUFBO0lBQ0EsVUFBQTtFQ1ROO0FBQ0Y7QURIQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLE9BQUE7RUNUTjtFRFdFO0lBQ0ksV0FBQTtJQUNBLE9BQUE7RUNUTjtFRFdFO0lBQ0ksUUFBQTtJQUNBLFVBQUE7RUNUTjtBQUNGO0FEWUE7RUFDSTtJQUNJLFNBQUE7SUFDQSxPQUFBO0VDVk47RURZRTtJQUNJLFdBQUE7SUFDQSxPQUFBO0VDVk47RURZRTtJQUNJLFFBQUE7SUFDQSxVQUFBO0VDVk47QUFDRjtBREZBO0VBQ0k7SUFDSSxTQUFBO0lBQ0EsT0FBQTtFQ1ZOO0VEWUU7SUFDSSxXQUFBO0lBQ0EsT0FBQTtFQ1ZOO0VEWUU7SUFDSSxRQUFBO0lBQ0EsVUFBQTtFQ1ZOO0FBQ0Y7QURhQTtFQUNJO0lBQ0ksVUFBQTtFQ1hOO0VEYUU7SUFDSSxVQUFBO0VDWE47QUFDRjtBREtBO0VBQ0k7SUFDSSxVQUFBO0VDWE47RURhRTtJQUNJLFVBQUE7RUNYTjtBQUNGO0FEY0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLFVBQUE7RUNaTjtFRGNFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VDWk47RURjRTtJQUNJLFVBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7RUNaTjtFRGNFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VDWk47RURjRTtJQUNJLFVBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLFlBQUE7RUNaTjtBQUNGO0FEcEJBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxVQUFBO0VDWk47RURjRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQ1pOO0VEY0U7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0VDWk47RURjRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQ1pOO0VEY0U7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxZQUFBO0VDWk47QUFDRjtBRGVBO0VBQ0k7SUFDSSxVQUFBO0VDYk47RURlRTtJQUNJLFlBQUE7RUNiTjtBQUNGO0FET0E7RUFDSTtJQUNJLFVBQUE7RUNiTjtFRGVFO0lBQ0ksWUFBQTtFQ2JOO0FBQ0Y7QURnQkE7RUFDSTtJQUNJLFVBQUE7SUFDQSxhQUFBO0VDZE47RURnQkU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQ2ROO0FBQ0Y7QURNQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGFBQUE7RUNkTjtFRGdCRTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VDZE47QUFDRjtBRGlCQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO1lBQUEsbUJBQUE7RUNmTjtFRGlCRTtJQUNJLFVBQUE7SUFDQSwyQ0FBQTtZQUFBLG1DQUFBO0VDZk47RURpQkU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQ2ZOO0FBQ0Y7QURHQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO1lBQUEsbUJBQUE7RUNmTjtFRGlCRTtJQUNJLFVBQUE7SUFDQSwyQ0FBQTtZQUFBLG1DQUFBO0VDZk47RURpQkU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQ2ZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gI2NvbnRhaW5lciB7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAvLyBsZWZ0OiAwO1xuLy8gICAgIC8vIHJpZ2h0OiAwO1xuLy8gICAgIHRvcDogNjAlO1xuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbi8vIH1cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwLDQwMHxQb3BwaW5zOjMwMCw0MDAsODAwJmRpc3BsYXk9c3dhcFwiKTtcbioge1xuICAgIC8vIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5LFxuaHRtbCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZpcnN0IHtcbiAgICBiYWNrZ3JvdW5kOiAjYTQ3ZGM3O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIC8vIGJhY2tncm91bmQ6ICNhNDdkYzc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5ib3gge1xuICAgICAgICB3aWR0aDogMjkwcHg7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHRvcDogLTE5JTtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAuYmxvY2sge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2MzODVmNTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBtYWluQmxvY2sgMnMgY3ViaWMtYmV6aWVyKDAuNzQsIDAuMDYsIDAuNCwgMC45MikgZm9yd2FyZHM7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtYWluRmFkZUluIDJzIGZvcndhcmRzO1xuICAgICAgICAgICAgICAgIC1vLWFuaW1hdGlvbjogbWFpbkZhZGVJbiAycyBmb3J3YXJkcztcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IG1haW5GYWRlSW4gMnMgZm9yd2FyZHM7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjZzO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjMzg1ZjU7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkIDAuNnMgY3ViaWMtYmV6aWVyKDAuNzQsIDAuMDYsIDAuNCwgMC45MikgZm9yd2FyZHM7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogcG9wSW4gMC44cyBjdWJpYy1iZXppZXIoMC43NCwgMC4wNiwgMC40LCAwLjkyKSBmb3J3YXJkcztcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogLTEycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5yb2xlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgICAgIC5ibG9jayB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYzM4NWY1O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHNlY0Jsb2NrIDJzIGN1YmljLWJlemllcigwLjc0LCAwLjA2LCAwLjQsIDAuOTIpIGZvcndhcmRzO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2VjRmFkZUluIDJzIGZvcndhcmRzO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMy4ycztcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgbWFpbkJsb2NrIHtcbiAgICAwJSB7XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2VjQmxvY2sge1xuICAgIDAlIHtcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBtYWluRmFkZUluIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBwb3BJbiB7XG4gICAgMCUge1xuICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2MzODVmNTtcbiAgICAgICAgYm9yZGVyOiAwcHggc29saWQgI2RkZDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2U3N2VmNTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgYm90dG9tOiA0NXB4O1xuICAgIH1cbiAgICA2NSUge1xuICAgICAgICB3aWR0aDogN3B4O1xuICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgIH1cbiAgICA4MCUge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICBib3R0b206IDIwcHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB3aWR0aDogN3B4O1xuICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2MzODVmNTtcbiAgICAgICAgYm9yZGVyOiAwcHggc29saWQgIzIyMjtcbiAgICAgICAgYm90dG9tOiAxM3B4O1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzZWNGYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgdG9wIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGJvdHRvbTogLTgwcHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBib3R0b206IDBweDtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgaWNvbiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMykgcm90YXRlKC0wMmRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBib3R0b206IDBweDtcbiAgICB9XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwfFBvcHBpbnM6MzAwLDQwMCw4MDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHksXG5odG1sIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZpcnN0IHtcbiAgYmFja2dyb3VuZDogI2E0N2RjNztcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmJveCB7XG4gIHdpZHRoOiAyOTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdG9wOiAtMTklO1xufVxuLmNvbnRhaW5lciAuYm94IC50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbn1cbi5jb250YWluZXIgLmJveCAudGl0bGUgLmJsb2NrIHtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6ICNjMzg1ZjU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYW5pbWF0aW9uOiBtYWluQmxvY2sgMnMgY3ViaWMtYmV6aWVyKDAuNzQsIDAuMDYsIDAuNCwgMC45MikgZm9yd2FyZHM7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFpbmVyIC5ib3ggLnRpdGxlIGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiA1MHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogbWFpbkZhZGVJbiAycyBmb3J3YXJkcztcbiAgLW8tYW5pbWF0aW9uOiBtYWluRmFkZUluIDJzIGZvcndhcmRzO1xuICBhbmltYXRpb246IG1haW5GYWRlSW4gMnMgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMS42cztcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyIC5ib3ggLnRpdGxlIGgxIHNwYW4ge1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNjMzg1ZjU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkIDAuNnMgY3ViaWMtYmV6aWVyKDAuNzQsIDAuMDYsIDAuNCwgMC45MikgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbjogcG9wSW4gMC44cyBjdWJpYy1iZXppZXIoMC43NCwgMC4wNiwgMC40LCAwLjkyKSBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxM3B4O1xuICByaWdodDogLTEycHg7XG59XG4uY29udGFpbmVyIC5ib3ggLnJvbGUge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLmNvbnRhaW5lciAuYm94IC5yb2xlIC5ibG9jayB7XG4gIHdpZHRoOiAwJTtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiAjYzM4NWY1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFuaW1hdGlvbjogc2VjQmxvY2sgMnMgY3ViaWMtYmV6aWVyKDAuNzQsIDAuMDYsIDAuNCwgMC45MikgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFpbmVyIC5ib3ggLnJvbGUgcCB7XG4gIGFuaW1hdGlvbjogc2VjRmFkZUluIDJzIGZvcndhcmRzO1xuICBhbmltYXRpb24tZGVsYXk6IDMuMnM7XG4gIG9wYWNpdHk6IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cblxuQGtleWZyYW1lcyBtYWluQmxvY2sge1xuICAwJSB7XG4gICAgd2lkdGg6IDAlO1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAwO1xuICAgIGxlZnQ6IDEwMCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2VjQmxvY2sge1xuICAwJSB7XG4gICAgd2lkdGg6IDAlO1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAwO1xuICAgIGxlZnQ6IDEwMCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbWFpbkZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcG9wSW4ge1xuICAwJSB7XG4gICAgd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjYzM4NWY1O1xuICAgIGJvcmRlcjogMHB4IHNvbGlkICNkZGQ7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZTc3ZWY1O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm90dG9tOiA0NXB4O1xuICB9XG4gIDY1JSB7XG4gICAgd2lkdGg6IDdweDtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICBib3R0b206IDBweDtcbiAgICB3aWR0aDogMTVweDtcbiAgfVxuICA4MCUge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3R0b206IDIwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDdweDtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICBiYWNrZ3JvdW5kOiAjYzM4NWY1O1xuICAgIGJvcmRlcjogMHB4IHNvbGlkICMyMjI7XG4gICAgYm90dG9tOiAxM3B4O1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNlY0ZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxufVxuQGtleWZyYW1lcyB0b3Age1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBib3R0b206IC04MHB4O1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm90dG9tOiAwcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaWNvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKSByb3RhdGUoLTJkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm90dG9tOiAwcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(route) {
        _classCallCheck(this, HomePage);

        this.route = route;
        this.validation_messages = {
          'username': [{
            type: 'required',
            message: 'Username is required.'
          }, {
            type: 'minlength',
            message: 'Username must be at least 5 characters long.'
          }, {
            type: 'maxlength',
            message: 'Username cannot be more than 25 characters long.'
          }, {
            type: 'pattern',
            message: 'Your username must contain only numbers and letters.'
          }, {
            type: 'validUsername',
            message: 'Your username has already been taken.'
          }],
          'name': [{
            type: 'required',
            message: 'Name is required.'
          }]
        };
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.signForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
          lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
          phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          // city: new FormControl('', Validators.required),
          // country: new FormControl('', Validators.required),
          // street: new FormControl('', Validators.required),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]) // this is for the letters (both uppercase and lowercase) and numbers validation)

        }); // let authInfo = localStorage.getItem('email');
        // if (authInfo != undefined) {
        //   this.route.navigate(['categories']);
        // }
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var login = document.getElementById('login');
          var forgotten = document.getElementById('forgotten');
          var signin = document.getElementById('signin');
          login.style.display = 'none';
          forgotten.style.display = 'none';
          signin.style.display = 'none';
        }
      }, {
        key: "signinModule",
        value: function signinModule() {
          var loginBtn = document.getElementById('login-button');
          var login = document.getElementById('login');
          var forgotten = document.getElementById('forgotten');
          var signin = document.getElementById('signin');
          setTimeout(function () {
            loginBtn.style.display = 'none';
            login.style.display = 'none';
            forgotten.style.display = 'none';
            signin.style.display = 'flex';
          }, 500);
        }
      }, {
        key: "loginModule",
        value: function loginModule() {
          var loginBtn = document.getElementById('login-button');
          var login = document.getElementById('login');
          var forgotten = document.getElementById('forgotten');
          var signin = document.getElementById('signin');
          setTimeout(function () {
            loginBtn.style.display = 'none';
            login.style.display = 'flex';
            forgotten.style.display = 'none';
            signin.style.display = 'none';
          }, 500);
        }
      }, {
        key: "forgottenModule",
        value: function forgottenModule() {
          var loginBtn = document.getElementById('login-button');
          var login = document.getElementById('login');
          var forgotten = document.getElementById('forgotten');
          var signin = document.getElementById('signin');
          setTimeout(function () {
            loginBtn.style.display = 'none';
            login.style.display = 'none';
            forgotten.style.display = 'flex';
            signin.style.display = 'none';
          }, 500);
        }
      }, {
        key: "signIn",
        value: function signIn() {
          // console.log(this.signForm);
          if (this.signForm.valid) {
            localStorage.setItem('firstName', "".concat(this.signForm.value.firstName));
            localStorage.setItem('lastName', "".concat(this.signForm.value.lastName));
            localStorage.setItem('email', "".concat(this.signForm.value.email));
            localStorage.setItem('phoneNumber', "".concat(this.signForm.value.phoneNumber));
            localStorage.setItem('city', "".concat(this.signForm.value.city));
            localStorage.setItem('country', "".concat(this.signForm.value.country));
            localStorage.setItem('street', "".concat(this.signForm.value.street));
            localStorage.setItem('password', "".concat(this.signForm.value.password));
            localStorage.setItem('cart', '0');
            this.route.navigateByUrl('/categories');
          }
        }
      }, {
        key: "login",
        value: function login() {
          // console.log(this.loginForm.value);
          if (this.loginForm.valid) {
            localStorage.setItem('email', "".concat(this.signForm.value.email));
            localStorage.setItem('password', "".concat(this.signForm.value.password));
            localStorage.setItem('cart', '0');
            this.route.navigateByUrl('/categories');
          }

          localStorage.setItem('cart', '0');
        }
      }, {
        key: "close",
        value: function close() {
          var loginBtn = document.getElementById('login-button');
          var login = document.getElementById('login');
          var forgotten = document.getElementById('forgotten');
          var signin = document.getElementById('signin');
          setTimeout(function () {
            loginBtn.style.display = 'flex';
            login.style.display = 'none';
            forgotten.style.display = 'none';
            signin.style.display = 'none';
          }, 500);
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.css */
      "./src/app/home/home.page.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map