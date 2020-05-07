function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoriesCategoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"first\">\n    <div class=\"container\">\n        <div class=\"box box3\" (click)=\"childrenShoses()\">\n            <img src='../../assets/images/children.jpg' alt=''>\n        </div>\n        <div class=\"box box2\" (click)=\"girlsShoses()\">\n            <img src='../../assets/images/shoes.jpg' alt=''>\n        </div>\n        <div class=\"box box1\">\n            <img src='../../assets/images/center.jpg' alt=''>\n        </div>\n        <div class=\"box box4\" (click)=\"pants()\">\n            <img src='../../assets/images/pant.jpg' alt=''>\n        </div>\n        <div class=\"box box5\" (click)=\"t_shirt()\">\n            <img src='../../assets/images/plosa.png' alt=''>\n        </div>\n        <div class=\"box box6\" (click)=\"girls_dresses()\">\n            <img src='../../assets/images/dress.jpg' alt=''>\n        </div>\n        <div class=\"box box7\" (click)=\"childrenCloths()\">\n            <img src='../../assets/images/clothingchildren.jpg' alt=''>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/categories/categories.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/categories/categories.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoriesCategoriesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.first {\n  min-height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #a47dc7;\n}\n\n.container {\n  position: relative;\n  /* to get a regualr hexagon with clip-path use the same scale, width is sqrt(3) / 2 of the height  */\n  width: 30%;\n  height: 20%;\n}\n\n.box {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 100%;\n  background: lightblue;\n  -webkit-clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);\n          clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);\n}\n\n.box img {\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n  width: 100%;\n  height: 100%;\n}\n\n.box::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.45);\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n}\n\n.box:hover img {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n\n.box:hover::after {\n  background: rgba(0, 0, 0, 0);\n}\n\n.box2.box {\n  -webkit-transform: translate(calc(-50% - (10px / 2)), calc(-75% - (10px) / 2 * 1.732));\n          transform: translate(calc(-50% - (10px / 2)), calc(-75% - (10px) / 2 * 1.732));\n}\n\n.box3.box {\n  -webkit-transform: translate(calc(50% + (10px / 2)), calc(-75% - (10px) / 2 * 1.732));\n          transform: translate(calc(50% + (10px / 2)), calc(-75% - (10px) / 2 * 1.732));\n}\n\n.box4.box {\n  -webkit-transform: translate(calc(-100% - 10px), 0);\n          transform: translate(calc(-100% - 10px), 0);\n}\n\n.box5.box {\n  -webkit-transform: translate(calc(100% + 10px), 0);\n          transform: translate(calc(100% + 10px), 0);\n}\n\n.box6.box {\n  -webkit-transform: translate(calc(-50% - (10px / 2)), calc(75% + (10px) / 2 * 1.732));\n          transform: translate(calc(-50% - (10px / 2)), calc(75% + (10px) / 2 * 1.732));\n}\n\n.box7.box {\n  -webkit-transform: translate(calc(50% + (10px / 2)), calc(75% + (10px) / 2 * 1.732));\n          transform: translate(calc(50% + (10px / 2)), calc(75% + (10px) / 2 * 1.732));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9DOlxcVXNlcnNcXHRhYmFyYWtcXERvd25sb2Fkc1xcU2hvcHBpbmdBcHAvc3JjXFxhcHBcXGNhdGVnb3JpZXNcXGNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxvR0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSw2RUFBQTtVQUFBLHFFQUFBO0FDQUo7O0FEQ0k7RUFDSSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NSOztBRENJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtBQ0NSOztBREVRO0VBQ0ksNkJBQUE7VUFBQSxxQkFBQTtBQ0FaOztBREVRO0VBQ0ksNEJBQUE7QUNBWjs7QURLQTtFQUNJLHNGQUFBO1VBQUEsOEVBQUE7QUNGSjs7QURLQTtFQUNJLHFGQUFBO1VBQUEsNkVBQUE7QUNGSjs7QURLQTtFQUNJLG1EQUFBO1VBQUEsMkNBQUE7QUNGSjs7QURLQTtFQUNJLGtEQUFBO1VBQUEsMENBQUE7QUNGSjs7QURLQTtFQUNJLHFGQUFBO1VBQUEsNkVBQUE7QUNGSjs7QURLQTtFQUNJLG9GQUFBO1VBQUEsNEVBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRnYXA6IDEwcHg7XHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5maXJzdCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTQ3ZGM3O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIHRvIGdldCBhIHJlZ3VhbHIgaGV4YWdvbiB3aXRoIGNsaXAtcGF0aCB1c2UgdGhlIHNhbWUgc2NhbGUsIHdpZHRoIGlzIHNxcnQoMykgLyAyIG9mIHRoZSBoZWlnaHQgICovXHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAsIDEwMCUgMjUlLCAxMDAlIDc1JSwgNTAlIDEwMCUsIDAgNzUlLCAwIDI1JSk7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC40NSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJveDIuYm94IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoLTUwJSAtICgjeyRnYXB9IC8gMikpLCBjYWxjKC03NSUgLSAoI3skZ2FwfSkgLyAyICogMS43MzIpKTtcclxufVxyXG5cclxuLmJveDMuYm94IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoNTAlICsgKCN7JGdhcH0gLyAyKSksIGNhbGMoLTc1JSAtICgjeyRnYXB9KSAvIDIgKiAxLjczMikpO1xyXG59XHJcblxyXG4uYm94NC5ib3gge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYygtMTAwJSAtICN7JGdhcH0pLCAwKTtcclxufVxyXG5cclxuLmJveDUuYm94IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoMTAwJSArICN7JGdhcH0pLCAwKTtcclxufVxyXG5cclxuLmJveDYuYm94IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoLTUwJSAtICgjeyRnYXB9IC8gMikpLCBjYWxjKDc1JSArICgjeyRnYXB9KSAvIDIgKiAxLjczMikpO1xyXG59XHJcblxyXG4uYm94Ny5ib3gge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYyg1MCUgKyAoI3skZ2FwfSAvIDIpKSwgY2FsYyg3NSUgKyAoI3skZ2FwfSkgLyAyICogMS43MzIpKTtcclxufSIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5maXJzdCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2E0N2RjNztcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogdG8gZ2V0IGEgcmVndWFsciBoZXhhZ29uIHdpdGggY2xpcC1wYXRoIHVzZSB0aGUgc2FtZSBzY2FsZSwgd2lkdGggaXMgc3FydCgzKSAvIDIgb2YgdGhlIGhlaWdodCAgKi9cbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbi5ib3gge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwLCAxMDAlIDI1JSwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwIDc1JSwgMCAyNSUpO1xufVxuLmJveCBpbWcge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYm94OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcbn1cbi5ib3g6aG92ZXIgaW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuLmJveDpob3Zlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4uYm94Mi5ib3gge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKC01MCUgLSAoMTBweCAvIDIpKSwgY2FsYygtNzUlIC0gKDEwcHgpIC8gMiAqIDEuNzMyKSk7XG59XG5cbi5ib3gzLmJveCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoNTAlICsgKDEwcHggLyAyKSksIGNhbGMoLTc1JSAtICgxMHB4KSAvIDIgKiAxLjczMikpO1xufVxuXG4uYm94NC5ib3gge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKC0xMDAlIC0gMTBweCksIDApO1xufVxuXG4uYm94NS5ib3gge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKDEwMCUgKyAxMHB4KSwgMCk7XG59XG5cbi5ib3g2LmJveCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoLTUwJSAtICgxMHB4IC8gMikpLCBjYWxjKDc1JSArICgxMHB4KSAvIDIgKiAxLjczMikpO1xufVxuXG4uYm94Ny5ib3gge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKDUwJSArICgxMHB4IC8gMikpLCBjYWxjKDc1JSArICgxMHB4KSAvIDIgKiAxLjczMikpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/categories/categories.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/categories/categories.component.ts ***!
    \****************************************************/

  /*! exports provided: CategoriesComponent */

  /***/
  function srcAppCategoriesCategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function () {
      return CategoriesComponent;
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

    var CategoriesComponent =
    /*#__PURE__*/
    function () {
      function CategoriesComponent(route) {
        _classCallCheck(this, CategoriesComponent);

        this.route = route;
      }

      _createClass(CategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// localStorage.setItem('cart', '0');
        }
      }, {
        key: "childrenShoses",
        value: function childrenShoses() {
          var _this = this;

          setTimeout(function () {
            _this.route.navigateByUrl('/kids-shoes');
          }, 1000);
        }
      }, {
        key: "girlsShoses",
        value: function girlsShoses() {
          var _this2 = this;

          setTimeout(function () {
            _this2.route.navigateByUrl('/girls-shoes');
          }, 1000);
        }
      }, {
        key: "childrenCloths",
        value: function childrenCloths() {
          var _this3 = this;

          setTimeout(function () {
            _this3.route.navigateByUrl('/kids-dresses');
          }, 1000);
        }
      }, {
        key: "pants",
        value: function pants() {
          var _this4 = this;

          setTimeout(function () {
            _this4.route.navigateByUrl('/pants-and-pocket');
          }, 1000);
        }
      }, {
        key: "t_shirt",
        value: function t_shirt() {
          var _this5 = this;

          setTimeout(function () {
            _this5.route.navigateByUrl('/t-shirt');
          }, 1000);
        }
      }, {
        key: "girls_dresses",
        value: function girls_dresses() {
          var _this6 = this;

          setTimeout(function () {
            _this6.route.navigateByUrl('/girls-dresses');
          }, 1000);
        }
      }]);

      return CategoriesComponent;
    }();

    CategoriesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categories.component.scss */
      "./src/app/categories/categories.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], CategoriesComponent);
    /***/
  },

  /***/
  "./src/app/categories/categories.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/categories/categories.module.ts ***!
    \*************************************************/

  /*! exports provided: CategoriesModule */

  /***/
  function srcAppCategoriesCategoriesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesModule", function () {
      return CategoriesModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./categories.component */
    "./src/app/categories/categories.component.ts");

    var CategoriesModule = function CategoriesModule() {
      _classCallCheck(this, CategoriesModule);
    };

    CategoriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: '',
        component: _categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"]
      }])]
    })], CategoriesModule);
    /***/
  }
}]);
//# sourceMappingURL=categories-categories-module-es5.js.map