function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
  /***/
  "./node_modules/@ionic-native/base64/ngx/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/@ionic-native/base64/ngx/index.js ***!
    \********************************************************/

  /*! exports provided: Base64 */

  /***/
  function node_modulesIonicNativeBase64NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Base64", function () {
      return Base64;
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


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/index.js");

    var Base64 =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Base64, _super);

      function Base64() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      Base64.prototype.encodeFile = function (filePath) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "encodeFile", {}, arguments);
      };

      Base64.pluginName = "Base64";
      Base64.plugin = "com-badrit-base64";
      Base64.pluginRef = "plugins.Base64";
      Base64.repo = "https://github.com/hazemhagrass/phonegap-base64";
      Base64.platforms = ["Android", "iOS"];
      Base64 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Base64);
      return Base64;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jhc2U2NC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpQzVDLDBCQUFpQjs7OztJQVEzQywyQkFBVSxhQUFDLFFBQWdCOzs7Ozs7SUFSaEIsTUFBTTtRQURsQixVQUFVLEVBQUU7T0FDQSxNQUFNO2lCQWxDbkI7RUFrQzRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQGJldGFcbiAqIEBuYW1lIEJhc2U2NFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIFBsdWdpbiBpcyB1c2VkIHRvIGVuY29kZSBiYXNlNjQgb2YgYW55IGZpbGUsIGl0IHVzZXMganMgY29kZSBmb3IgaU9TLCBidXQgaW4gY2FzZSBvZiBhbmRyb2lkIGl0IHVzZXMgbmF0aXZlIGNvZGUgdG8gaGFuZGxlIGFuZHJvaWQgdmVyc2lvbnMgbG93ZXIgdGhhbiB2LjNcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhc2U2NCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmFzZTY0L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYXNlNjQ6IEJhc2U2NCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogbGV0IGZpbGVQYXRoOiBzdHJpbmcgPSAnZmlsZTovLy8uLi4nO1xuICogdGhpcy5iYXNlNjQuZW5jb2RlRmlsZShmaWxlUGF0aCkudGhlbigoYmFzZTY0RmlsZTogc3RyaW5nKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGJhc2U2NEZpbGUpO1xuICogfSwgKGVycikgPT4ge1xuICogICBjb25zb2xlLmxvZyhlcnIpO1xuICogfSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmFzZTY0JyxcbiAgcGx1Z2luOiAnY29tLWJhZHJpdC1iYXNlNjQnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLkJhc2U2NCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaGF6ZW1oYWdyYXNzL3Bob25lZ2FwLWJhc2U2NCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhc2U2NCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBlbmNvZGVzIGJhc2U2NCBvZiBhbnkgZmlsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVBhdGggQWJzb2x1dGUgZmlsZSBwYXRoXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBmaWxlIGlzIHN1Y2Nlc3NmdWxseSBlbmNvZGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVuY29kZUZpbGUoZmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==

    /***/

  },

  /***/
  "./node_modules/@ionic-native/camera/ngx/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/@ionic-native/camera/ngx/index.js ***!
    \********************************************************/

  /*! exports provided: DestinationType, EncodingType, MediaType, PictureSourceType, PopoverArrowDirection, Direction, Camera */

  /***/
  function node_modulesIonicNativeCameraNgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DestinationType", function () {
      return DestinationType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EncodingType", function () {
      return EncodingType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaType", function () {
      return MediaType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PictureSourceType", function () {
      return PictureSourceType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverArrowDirection", function () {
      return PopoverArrowDirection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Direction", function () {
      return Direction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Camera", function () {
      return Camera;
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


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/index.js");

    var DestinationType;

    (function (DestinationType) {
      DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
      DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
      DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
    })(DestinationType || (DestinationType = {}));

    var EncodingType;

    (function (EncodingType) {
      EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
      EncodingType[EncodingType["PNG"] = 1] = "PNG";
    })(EncodingType || (EncodingType = {}));

    var MediaType;

    (function (MediaType) {
      MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
      MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
      MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
    })(MediaType || (MediaType = {}));

    var PictureSourceType;

    (function (PictureSourceType) {
      PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
      PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
      PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
    })(PictureSourceType || (PictureSourceType = {}));

    var PopoverArrowDirection;

    (function (PopoverArrowDirection) {
      PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
      PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
      PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
      PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
      PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
    })(PopoverArrowDirection || (PopoverArrowDirection = {}));

    var Direction;

    (function (Direction) {
      Direction[Direction["BACK"] = 0] = "BACK";
      Direction[Direction["FRONT"] = 1] = "FRONT";
    })(Direction || (Direction = {}));

    var Camera =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Camera, _super);

      function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */


        _this.DestinationType = {
          /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
          DATA_URL: 0,

          /** Return file uri (content://media/external/images/media/2 for Android) */
          FILE_URI: 1,

          /** Return native uri (eg. asset-library://... for iOS) */
          NATIVE_URI: 2
        };
        /**
         * Convenience constant
         */

        _this.EncodingType = {
          /** Return JPEG encoded image */
          JPEG: 0,

          /** Return PNG encoded image */
          PNG: 1
        };
        /**
         * Convenience constant
         */

        _this.MediaType = {
          /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
          PICTURE: 0,

          /** Allow selection of video only, ONLY RETURNS URL */
          VIDEO: 1,

          /** Allow selection from all media types */
          ALLMEDIA: 2
        };
        /**
         * Convenience constant
         */

        _this.PictureSourceType = {
          /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
          PHOTOLIBRARY: 0,

          /** Take picture from camera */
          CAMERA: 1,

          /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
          SAVEDPHOTOALBUM: 2
        };
        /**
         * Convenience constant
         */

        _this.PopoverArrowDirection = {
          ARROW_UP: 1,
          ARROW_DOWN: 2,
          ARROW_LEFT: 4,
          ARROW_RIGHT: 8,
          ARROW_ANY: 15
        };
        /**
         * Convenience constant
         */

        _this.Direction = {
          /** Use the back-facing camera */
          BACK: 0,

          /** Use the front-facing camera */
          FRONT: 1
        };
        return _this;
      }

      Camera.prototype.getPicture = function (options) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getPicture", {
          "callbackOrder": "reverse"
        }, arguments);
      };

      Camera.prototype.cleanup = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "cleanup", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Camera.pluginName = "Camera";
      Camera.plugin = "cordova-plugin-camera";
      Camera.pluginRef = "navigator.camera";
      Camera.repo = "https://github.com/apache/cordova-plugin-camera";
      Camera.platforms = ["Android", "Browser", "iOS", "Windows"];
      Camera = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Camera);
      return Camera;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbWVyYS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQXNGeEUsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6Qiw2REFBWSxDQUFBO0lBQ1osNkRBQVEsQ0FBQTtJQUNSLGlFQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLCtDQUFRLENBQUE7SUFDUiw2Q0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQiwrQ0FBVyxDQUFBO0lBQ1gsMkNBQUssQ0FBQTtJQUNMLGlEQUFRLENBQUE7QUFDVixDQUFDLEVBSlcsU0FBUyxLQUFULFNBQVMsUUFJcEI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQzNCLHlFQUFnQixDQUFBO0lBQ2hCLDZEQUFNLENBQUE7SUFDTiwrRUFBZSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSTVCO0FBRUQsTUFBTSxDQUFOLElBQVkscUJBTVg7QUFORCxXQUFZLHFCQUFxQjtJQUMvQix5RUFBWSxDQUFBO0lBQ1osNkVBQVUsQ0FBQTtJQUNWLDZFQUFVLENBQUE7SUFDViwrRUFBVyxDQUFBO0lBQ1gsMkVBQVMsQ0FBQTtBQUNYLENBQUMsRUFOVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBTWhDO0FBRUQsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBUSxDQUFBO0lBQ1IsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjs7SUFxRDJCLDBCQUFpQjs7O1FBQzNDOztXQUVHO1FBQ0gscUJBQWUsR0FBRztZQUNoQixnS0FBZ0s7WUFDaEssUUFBUSxFQUFFLENBQUM7WUFDWCw0RUFBNEU7WUFDNUUsUUFBUSxFQUFFLENBQUM7WUFDWCwwREFBMEQ7WUFDMUQsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxrQkFBWSxHQUFHO1lBQ2IsZ0NBQWdDO1lBQ2hDLElBQUksRUFBRSxDQUFDO1lBQ1AsK0JBQStCO1lBQy9CLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUVGOztXQUVHO1FBQ0gsZUFBUyxHQUFHO1lBQ1Ysd0dBQXdHO1lBQ3hHLE9BQU8sRUFBRSxDQUFDO1lBQ1Ysc0RBQXNEO1lBQ3RELEtBQUssRUFBRSxDQUFDO1lBQ1IsMkNBQTJDO1lBQzNDLFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUVGOztXQUVHO1FBQ0gsdUJBQWlCLEdBQUc7WUFDbEIsMkVBQTJFO1lBQzNFLFlBQVksRUFBRSxDQUFDO1lBQ2YsK0JBQStCO1lBQy9CLE1BQU0sRUFBRSxDQUFDO1lBQ1QsOEVBQThFO1lBQzlFLGVBQWUsRUFBRSxDQUFDO1NBQ25CLENBQUM7UUFFRjs7V0FFRztRQUNILDJCQUFxQixHQUFHO1lBQ3RCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUUsQ0FBQztZQUNiLFdBQVcsRUFBRSxDQUFDO1lBQ2QsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxlQUFTLEdBQUc7WUFDVixpQ0FBaUM7WUFDakMsSUFBSSxFQUFFLENBQUM7WUFDUCxrQ0FBa0M7WUFDbEMsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDOzs7SUFVRiwyQkFBVSxhQUFDLE9BQXVCO0lBWWxDLHdCQUFPOzs7Ozs7SUF4RkksTUFBTTtRQURsQixVQUFVLEVBQUU7T0FDQSxNQUFNO2lCQTlLbkI7RUE4SzRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhT3B0aW9ucyB7XG4gIC8qKiBQaWN0dXJlIHF1YWxpdHkgaW4gcmFuZ2UgMC0xMDAuIERlZmF1bHQgaXMgNTAgKi9cbiAgcXVhbGl0eT86IG51bWJlcjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUuXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkRlc3RpbmF0aW9uVHlwZS4gRGVmYXVsdCBpcyBGSUxFX1VSSS5cbiAgICogICAgICBEQVRBX1VSTCA6IDAsICAgUmV0dXJuIGltYWdlIGFzIGJhc2U2NC1lbmNvZGVkIHN0cmluZyAoREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlKSxcbiAgICogICAgICBGSUxFX1VSSSA6IDEsICAgUmV0dXJuIGltYWdlIGZpbGUgVVJJLFxuICAgKiAgICAgIE5BVElWRV9VUkkgOiAyICBSZXR1cm4gaW1hZ2UgbmF0aXZlIFVSSVxuICAgKiAgICAgICAgICAoZS5nLiwgYXNzZXRzLWxpYnJhcnk6Ly8gb24gaU9TIG9yIGNvbnRlbnQ6Ly8gb24gQW5kcm9pZClcbiAgICovXG4gIGRlc3RpbmF0aW9uVHlwZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFNldCB0aGUgc291cmNlIG9mIHRoZSBwaWN0dXJlLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5QaWN0dXJlU291cmNlVHlwZS4gRGVmYXVsdCBpcyBDQU1FUkEuXG4gICAqICAgICAgUEhPVE9MSUJSQVJZIDogMCxcbiAgICogICAgICBDQU1FUkEgOiAxLFxuICAgKiAgICAgIFNBVkVEUEhPVE9BTEJVTSA6IDJcbiAgICovXG4gIHNvdXJjZVR5cGU/OiBudW1iZXI7XG4gIC8qKiBBbGxvdyBzaW1wbGUgZWRpdGluZyBvZiBpbWFnZSBiZWZvcmUgc2VsZWN0aW9uLiAqL1xuICBhbGxvd0VkaXQ/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hvb3NlIHRoZSByZXR1cm5lZCBpbWFnZSBmaWxlJ3MgZW5jb2RpbmcuXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkVuY29kaW5nVHlwZS4gRGVmYXVsdCBpcyBKUEVHXG4gICAqICAgICAgSlBFRyA6IDAgICAgUmV0dXJuIEpQRUcgZW5jb2RlZCBpbWFnZVxuICAgKiAgICAgIFBORyA6IDEgICAgIFJldHVybiBQTkcgZW5jb2RlZCBpbWFnZVxuICAgKi9cbiAgZW5jb2RpbmdUeXBlPzogbnVtYmVyO1xuICAvKipcbiAgICogV2lkdGggaW4gcGl4ZWxzIHRvIHNjYWxlIGltYWdlLiBNdXN0IGJlIHVzZWQgd2l0aCB0YXJnZXRIZWlnaHQuXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxuICAgKi9cbiAgdGFyZ2V0V2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBIZWlnaHQgaW4gcGl4ZWxzIHRvIHNjYWxlIGltYWdlLiBNdXN0IGJlIHVzZWQgd2l0aCB0YXJnZXRXaWR0aC5cbiAgICogQXNwZWN0IHJhdGlvIHJlbWFpbnMgY29uc3RhbnQuXG4gICAqL1xuICB0YXJnZXRIZWlnaHQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHR5cGUgb2YgbWVkaWEgdG8gc2VsZWN0IGZyb20uIE9ubHkgd29ya3Mgd2hlbiBQaWN0dXJlU291cmNlVHlwZVxuICAgKiBpcyBQSE9UT0xJQlJBUlkgb3IgU0FWRURQSE9UT0FMQlVNLiBEZWZpbmVkIGluIENhbWVyYS5NZWRpYVR5cGVcbiAgICogICAgICBQSUNUVVJFOiAwICAgICAgYWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuXG4gICAqICAgICAgICAgIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZVxuICAgKiAgICAgIFZJREVPOiAxICAgICAgICBhbGxvdyBzZWxlY3Rpb24gb2YgdmlkZW8gb25seSwgV0lMTCBBTFdBWVMgUkVUVVJOIEZJTEVfVVJJXG4gICAqICAgICAgQUxMTUVESUEgOiAyICAgIGFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlc1xuICAgKi9cbiAgbWVkaWFUeXBlPzogbnVtYmVyO1xuICAvKiogUm90YXRlIHRoZSBpbWFnZSB0byBjb3JyZWN0IGZvciB0aGUgb3JpZW50YXRpb24gb2YgdGhlIGRldmljZSBkdXJpbmcgY2FwdHVyZS4gKi9cbiAgY29ycmVjdE9yaWVudGF0aW9uPzogYm9vbGVhbjtcbiAgLyoqIFNhdmUgdGhlIGltYWdlIHRvIHRoZSBwaG90byBhbGJ1bSBvbiB0aGUgZGV2aWNlIGFmdGVyIGNhcHR1cmUuICovXG4gIHNhdmVUb1Bob3RvQWxidW0/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hvb3NlIHRoZSBjYW1lcmEgdG8gdXNlIChmcm9udC0gb3IgYmFjay1mYWNpbmcpLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5EaXJlY3Rpb24uIERlZmF1bHQgaXMgQkFDSy5cbiAgICogICAgICBCQUNLOiAwXG4gICAqICAgICAgRlJPTlQ6IDFcbiAgICovXG4gIGNhbWVyYURpcmVjdGlvbj86IG51bWJlcjtcbiAgLyoqIGlPUy1vbmx5IG9wdGlvbnMgdGhhdCBzcGVjaWZ5IHBvcG92ZXIgbG9jYXRpb24gaW4gaVBhZC4gRGVmaW5lZCBpbiBDYW1lcmFQb3BvdmVyT3B0aW9ucy4gKi9cbiAgcG9wb3Zlck9wdGlvbnM/OiBDYW1lcmFQb3BvdmVyT3B0aW9ucztcbn1cblxuLyoqXG4gKiBpT1Mtb25seSBwYXJhbWV0ZXJzIHRoYXQgc3BlY2lmeSB0aGUgYW5jaG9yIGVsZW1lbnQgbG9jYXRpb24gYW5kIGFycm93IGRpcmVjdGlvblxuICogb2YgdGhlIHBvcG92ZXIgd2hlbiBzZWxlY3RpbmcgaW1hZ2VzIGZyb20gYW4gaVBhZCdzIGxpYnJhcnkgb3IgYWxidW0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhUG9wb3Zlck9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBEaXJlY3Rpb24gdGhlIGFycm93IG9uIHRoZSBwb3BvdmVyIHNob3VsZCBwb2ludC4gRGVmaW5lZCBpbiBDYW1lcmEuUG9wb3ZlckFycm93RGlyZWN0aW9uXG4gICAqIE1hdGNoZXMgaU9TIFVJUG9wb3ZlckFycm93RGlyZWN0aW9uIGNvbnN0YW50cy5cbiAgICogICAgICBBUlJPV19VUCA6IDEsXG4gICAqICAgICAgQVJST1dfRE9XTiA6IDIsXG4gICAqICAgICAgQVJST1dfTEVGVCA6IDQsXG4gICAqICAgICAgQVJST1dfUklHSFQgOiA4LFxuICAgKiAgICAgIEFSUk9XX0FOWSA6IDE1XG4gICAqL1xuICBhcnJvd0RpcjogbnVtYmVyO1xufVxuXG5leHBvcnQgZW51bSBEZXN0aW5hdGlvblR5cGUge1xuICBEQVRBX1VSTCA9IDAsXG4gIEZJTEVfVVJMLFxuICBOQVRJVkVfVVJJXG59XG5cbmV4cG9ydCBlbnVtIEVuY29kaW5nVHlwZSB7XG4gIEpQRUcgPSAwLFxuICBQTkdcbn1cblxuZXhwb3J0IGVudW0gTWVkaWFUeXBlIHtcbiAgUElDVFVSRSA9IDAsXG4gIFZJREVPLFxuICBBTExNRURJQVxufVxuXG5leHBvcnQgZW51bSBQaWN0dXJlU291cmNlVHlwZSB7XG4gIFBIT1RPTElCUkFSWSA9IDAsXG4gIENBTUVSQSxcbiAgU0FWRURQSE9UT0FMQlVNXG59XG5cbmV4cG9ydCBlbnVtIFBvcG92ZXJBcnJvd0RpcmVjdGlvbiB7XG4gIEFSUk9XX1VQID0gMSxcbiAgQVJST1dfRE9XTixcbiAgQVJST1dfTEVGVCxcbiAgQVJST1dfUklHSFQsXG4gIEFSUk9XX0FOWVxufVxuXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xuICBCQUNLID0gMCxcbiAgRlJPTlRcbn1cblxuLyoqXG4gKiBAbmFtZSBDYW1lcmFcbiAqIEBkZXNjcmlwdGlvblxuICogVGFrZSBhIHBob3RvIG9yIGNhcHR1cmUgdmlkZW8uXG4gKlxuICogUmVxdWlyZXMgdGhlIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tY2FtZXJhYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgQ2FtZXJhIFBsdWdpbiBEb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYSkuXG4gKlxuICogW1dhcm5pbmddIFNpbmNlIElPUyAxMCB0aGUgY2FtZXJhIHJlcXVpcmVzIHBlcm1pc3Npb25zIHRvIGJlIHBsYWNlZCBpbiB5b3VyIGNvbmZpZy54bWwgYWRkXG4gKiBgYGB4bWxcbiAqIDxjb25maWctZmlsZSBwYXJlbnQ9XCJOU0NhbWVyYVVzYWdlRGVzY3JpcHRpb25cIiBwbGF0Zm9ybT1cImlvc1wiIHRhcmdldD1cIiotSW5mby5wbGlzdFwiPlxuICogIDxzdHJpbmc+WW91IGNhbiB0YWtlIHBob3Rvczwvc3RyaW5nPlxuICogPC9jb25maWctZmlsZT5cbiAqIGBgYFxuICogaW5zaWRlIG9mIHRoZSA8cGxhdGZvcm0gbmFtZT0naW9zPiBzZWN0aW9uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYW1lcmEsIENhbWVyYU9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbWVyYS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FtZXJhOiBDYW1lcmEpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBjb25zdCBvcHRpb25zOiBDYW1lcmFPcHRpb25zID0ge1xuICogICBxdWFsaXR5OiAxMDAsXG4gKiAgIGRlc3RpbmF0aW9uVHlwZTogdGhpcy5jYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLFxuICogICBlbmNvZGluZ1R5cGU6IHRoaXMuY2FtZXJhLkVuY29kaW5nVHlwZS5KUEVHLFxuICogICBtZWRpYVR5cGU6IHRoaXMuY2FtZXJhLk1lZGlhVHlwZS5QSUNUVVJFXG4gKiB9XG4gKlxuICogdGhpcy5jYW1lcmEuZ2V0UGljdHVyZShvcHRpb25zKS50aGVuKChpbWFnZURhdGEpID0+IHtcbiAqICAvLyBpbWFnZURhdGEgaXMgZWl0aGVyIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIG9yIGEgZmlsZSBVUklcbiAqICAvLyBJZiBpdCdzIGJhc2U2NCAoREFUQV9VUkwpOlxuICogIGxldCBiYXNlNjRJbWFnZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCcgKyBpbWFnZURhdGE7XG4gKiB9LCAoZXJyKSA9PiB7XG4gKiAgLy8gSGFuZGxlIGVycm9yXG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENhbWVyYU9wdGlvbnNcbiAqIENhbWVyYVBvcG92ZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FtZXJhJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2FtZXJhJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmNhbWVyYScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgZGVzdGluYXRpb24gdHlwZXNcbiAgICovXG4gIERlc3RpbmF0aW9uVHlwZSA9IHtcbiAgICAvKiogUmV0dXJuIGJhc2U2NCBlbmNvZGVkIHN0cmluZy4gREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlICovXG4gICAgREFUQV9VUkw6IDAsXG4gICAgLyoqIFJldHVybiBmaWxlIHVyaSAoY29udGVudDovL21lZGlhL2V4dGVybmFsL2ltYWdlcy9tZWRpYS8yIGZvciBBbmRyb2lkKSAqL1xuICAgIEZJTEVfVVJJOiAxLFxuICAgIC8qKiBSZXR1cm4gbmF0aXZlIHVyaSAoZWcuIGFzc2V0LWxpYnJhcnk6Ly8uLi4gZm9yIGlPUykgKi9cbiAgICBOQVRJVkVfVVJJOiAyXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBFbmNvZGluZ1R5cGUgPSB7XG4gICAgLyoqIFJldHVybiBKUEVHIGVuY29kZWQgaW1hZ2UgKi9cbiAgICBKUEVHOiAwLFxuICAgIC8qKiBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2UgKi9cbiAgICBQTkc6IDFcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIE1lZGlhVHlwZSA9IHtcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZSAqL1xuICAgIFBJQ1RVUkU6IDAsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBvZiB2aWRlbyBvbmx5LCBPTkxZIFJFVFVSTlMgVVJMICovXG4gICAgVklERU86IDEsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlcyAqL1xuICAgIEFMTE1FRElBOiAyXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBQaWN0dXJlU291cmNlVHlwZSA9IHtcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFBIT1RPTElCUkFSWSBmb3IgQW5kcm9pZCkgKi9cbiAgICBQSE9UT0xJQlJBUlk6IDAsXG4gICAgLyoqIFRha2UgcGljdHVyZSBmcm9tIGNhbWVyYSAqL1xuICAgIENBTUVSQTogMSxcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFNBVkVEUEhPVE9BTEJVTSBmb3IgQW5kcm9pZCkgKi9cbiAgICBTQVZFRFBIT1RPQUxCVU06IDJcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIFBvcG92ZXJBcnJvd0RpcmVjdGlvbiA9IHtcbiAgICBBUlJPV19VUDogMSxcbiAgICBBUlJPV19ET1dOOiAyLFxuICAgIEFSUk9XX0xFRlQ6IDQsXG4gICAgQVJST1dfUklHSFQ6IDgsXG4gICAgQVJST1dfQU5ZOiAxNVxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgRGlyZWN0aW9uID0ge1xuICAgIC8qKiBVc2UgdGhlIGJhY2stZmFjaW5nIGNhbWVyYSAqL1xuICAgIEJBQ0s6IDAsXG4gICAgLyoqIFVzZSB0aGUgZnJvbnQtZmFjaW5nIGNhbWVyYSAqL1xuICAgIEZST05UOiAxXG4gIH07XG5cbiAgLyoqXG4gICAqIFRha2UgYSBwaWN0dXJlIG9yIHZpZGVvLCBvciBsb2FkIG9uZSBmcm9tIHRoZSBsaWJyYXJ5LlxuICAgKiBAcGFyYW0ge0NhbWVyYU9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIHRoYXQgeW91IHdhbnQgdG8gcGFzcyB0byB0aGUgY2FtZXJhLiBFbmNvZGluZyB0eXBlLCBxdWFsaXR5LCBldGMuIFBsYXRmb3JtLXNwZWNpZmljIHF1aXJrcyBhcmUgZGVzY3JpYmVkIGluIHRoZSBbQ29yZG92YSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEjY2FtZXJhb3B0aW9ucy1lcnJhdGEtKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIEJhc2U2NCBlbmNvZGluZyBvZiB0aGUgaW1hZ2UgZGF0YSwgb3IgdGhlIGltYWdlIGZpbGUgVVJJLCBkZXBlbmRpbmcgb24gY2FtZXJhT3B0aW9ucywgb3RoZXJ3aXNlIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgZ2V0UGljdHVyZShvcHRpb25zPzogQ2FtZXJhT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBpbnRlcm1lZGlhdGUgaW1hZ2UgZmlsZXMgdGhhdCBhcmUga2VwdCBpbiB0ZW1wb3Jhcnkgc3RvcmFnZSBhZnRlciBjYWxsaW5nIGNhbWVyYS5nZXRQaWN0dXJlLlxuICAgKiBBcHBsaWVzIG9ubHkgd2hlbiB0aGUgdmFsdWUgb2YgQ2FtZXJhLnNvdXJjZVR5cGUgZXF1YWxzIENhbWVyYS5QaWN0dXJlU291cmNlVHlwZS5DQU1FUkEgYW5kIHRoZSBDYW1lcmEuZGVzdGluYXRpb25UeXBlIGVxdWFscyBDYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICB9KVxuICBjbGVhbnVwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-share [pageName]=\"titel\"></app-share>\n\n<!-- <ion-content>\n    <div class=\"profileImg\">\n        <img src=\"../../assets/profile.png\">\n    </div>\n\n</ion-content> -->\n<ion-content>\n\n    <div class=\"content\">\n\n        <div class=\"head\">الصفحة الشخصية</div>\n\n        <div class=\"profilePic\">\n            <img [src]=\"xxx\">\n            <!-- <img *ngIf=\"isEdit && !userPhoto\" class=\"go\" [src]=\"_DomSanitizer.bypassSecurityTrustUrl(imgURL)\" height=\"100\" width=\"100\"> -->\n            <!-- <img id=\"mmm\" class=\"go\" src=\"http://192.168.1.233:1100/Trackira/users/{{userPhoto}}\" *ngIf=\"userPhoto\" (click)=\"detect($event)\"> -->\n\n            <ion-icon name=\"camera\" (click)=\"changePhoto()\"></ion-icon>\n\n        </div>\n\n        <form action=\"\" class=\"inputs\" [formGroup]=\"editForm\">\n            <ion-item>\n                <ion-input placeholder=\"first name\" formControlName=\"firstName\"></ion-input>\n                <ion-icon name=\"person\"></ion-icon>\n            </ion-item>\n            <ion-item>\n                <ion-input placeholder=\"last name\" type=\"text\" formControlName=\"lastName\"></ion-input>\n                <ion-icon name=\"person\"></ion-icon>\n            </ion-item>\n            <ion-item>\n                <ion-input placeholder=\"email\" formControlName=\"email\"></ion-input>\n                <ion-icon name=\"mail-outline\"></ion-icon>\n            </ion-item>\n            <ion-item>\n                <ion-input placeholder=\"phone number\" formControlName=\"phoneNumber\"></ion-input>\n                <ion-icon name=\"phone-portrait\"></ion-icon>\n            </ion-item>\n            <ion-item>\n                <button class=\"btn btn-link\" (click)=\"openModal(template)\">تعديل</button>\n                <ion-input placeholder=\"كلمة السـر\" type=\"password\" value=\"00000000000\"></ion-input>\n                <ion-icon name=\"lock-closed-outline\"></ion-icon>\n            </ion-item>\n            <ion-button color=\"success\" (click)=\"editMe()\">حفــظ</ion-button>\n        </form>\n\n        <ng-template #template>\n            <div class=\"modal-body\">\n\n                <form [formGroup]=\"passwordForm\">\n\n                    <ion-item>\n                        <ion-input placeholder=\"كلمة السر الجديدة\" type=\"password\" formControlName=\"password\">\n                        </ion-input>\n                        <ion-icon name=\"lock\"></ion-icon>\n                    </ion-item>\n\n                    <div class=\"validation_msg center_item\" *ngIf=\"passwordForm.controls.password.touched && passwordForm.controls.password.invalid\">\n                        من فضلك ادخل كلمة المرور\n                    </div>\n\n                    <ion-item>\n                        <ion-input placeholder=\"تأكيد كلمة السـر \" type=\"password\" formControlName=\"confirmPassword\">\n                        </ion-input>\n                        <ion-icon name=\"lock\"></ion-icon>\n                    </ion-item>\n\n                    <div class=\"validation_msg center_item\" *ngIf=\"passwordForm.controls.confirmPassword.touched && passwordForm.controls.confirmPassword.invalid\">\n                        <span *ngIf=\"passwordForm.controls.confirmPassword.errors.required\"> من فضلك اعد ادخال كلمة\n                            المرور</span>\n                        <span *ngIf=\"passwordForm.controls.confirmPassword.errors.mustMatch\"> كلمة المرور وتأكيدها غير\n                            متطابقين</span>\n\n                    </div>\n                    <ion-button color=\"success\" (click)=\"editPassword(template)\">حفــظ</ion-button>\n                </form>\n            </div>\n        </ng-template>\n    </div>\n</ion-content>\n<shared-footer></shared-footer>";
    /***/
  },

  /***/
  "./src/app/must-match.ts":
  /*!*******************************!*\
    !*** ./src/app/must-match.ts ***!
    \*******************************/

  /*! exports provided: MustMatch */

  /***/
  function srcAppMustMatchTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
      return MustMatch;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // custom validator to check that two fields match


    function MustMatch(controlName, matchingControlName) {
      return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
        } // set error on matchingControl if validation fails


        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            mustMatch: true
          });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/profile/profile-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/profile/profile-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/profile/profile.page.ts");
    /* harmony import */


    var _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../share-module/share-module.module */
    "./src/app/share-module/share-module.module.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/base64/ngx */
    "./node_modules/@ionic-native/base64/ngx/index.js");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"], _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_7__["ShareModuleModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]],
      providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_9__["Base64"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .content {\n  width: 80%;\n  height: 460px;\n  background-color: white;\n  margin: 10% auto;\n  border-radius: 12px;\n  box-shadow: 5px 5px 16px 6px darkgrey;\n  overflow: auto;\n}\nion-content .content .head {\n  font-family: \"El Messiri\", sans-serif;\n  color: aliceblue;\n  background-color: #5F429C;\n  width: 180px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  right: 50px;\n  top: 20px;\n  border-radius: 5px;\n  font-size: 20px;\n}\nion-content .content .profilePic {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 30%;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\nion-content .content .profilePic img {\n  width: 100px;\n  height: 100px;\n  border: 1px solid #5F429C;\n  border-radius: 50%;\n}\nion-content .content .profilePic ion-icon {\n  position: relative;\n  font-size: 25px;\n  bottom: 8%;\n  right: 4%;\n  color: blueviolet;\n}\nion-content .content .inputs {\n  padding: 15px 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 70%;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content .content .inputs ion-item {\n  width: 90%;\n  height: 45px;\n  border-radius: 4px;\n  border: 1px solid #5F429C;\n  text-align: right;\n}\nion-content .content .inputs ion-item ion-input {\n  font-family: \"El Messiri\", sans-serif;\n}\nion-content .content .inputs ion-item button {\n  font-family: \"El Messiri\", sans-serif;\n  position: relative;\n  right: 5%;\n  bottom: 10%;\n}\nion-content .content .inputs ion-button {\n  border-radius: 5px;\n  width: 100px;\n  height: 30px;\n  font-family: \"El Messiri\", sans-serif;\n}\n.modal-body form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  font-family: \"El Messiri\", sans-serif;\n}\n.modal-body form ion-item {\n  width: 90%;\n  height: 45px;\n  border-radius: 4px;\n  border: 1px solid #5F429C;\n  text-align: right;\n}\n.modal-body form ion-button {\n  font-family: \"El Messiri\", sans-serif;\n  width: 30%;\n  height: 15%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXHRhYmFyYWtcXERvd25sb2Fkc1xcU2hvcHBpbmdBcHAvc3JjXFxhcHBcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7QUNBUjtBRENRO0VBQ0kscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FaO0FERVE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7QUNBWjtBRENZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ2hCO0FEQ1k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDQ2hCO0FERVE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FaO0FER1k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0RoQjtBREdnQjtFQUNJLHFDQUFBO0FDRHBCO0FER2dCO0VBQ0kscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDRHBCO0FESVk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7QUNGaEI7QURTSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtFQUNBLHFDQUFBO0FDTlI7QURPUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDTFo7QURPUTtFQUNJLHFDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGhlaWdodDogNDYwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOiAxMCUgYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTZweCA2cHggZGFya2dyZXk7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgLmhlYWQge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0VsIE1lc3NpcmknLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUY0MjlDO1xyXG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogMzNweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9maWxlUGljIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzVGNDI5QztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDglO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmlucHV0cyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLy8gcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgICAgICAgICAgIC8vIGZvbnQtZmFtaWx5OiAnRWwgTWVzc2lyaScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNUY0MjlDO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAvLyBmb250LWZhbWlseTogJ0VsIE1lc3NpcmknLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJFbCBNZXNzaXJpXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkVsIE1lc3NpcmlcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdFbCBNZXNzaXJpJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRWwgTWVzc2lyaScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzVGNDI5QztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0VsIE1lc3NpcmknLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1JTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1jb250ZW50IC5jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA0NjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMTAlIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTZweCA2cHggZGFya2dyZXk7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgLmhlYWQge1xuICBmb250LWZhbWlseTogXCJFbCBNZXNzaXJpXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1RjQyOUM7XG4gIHdpZHRoOiAxODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDUwcHg7XG4gIHRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5pb24tY29udGVudCAuY29udGVudCAucHJvZmlsZVBpYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDMwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgLnByb2ZpbGVQaWMgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNUY0MjlDO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pb24tY29udGVudCAuY29udGVudCAucHJvZmlsZVBpYyBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBib3R0b206IDglO1xuICByaWdodDogNCU7XG4gIGNvbG9yOiBibHVldmlvbGV0O1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQgLmlucHV0cyB7XG4gIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDcwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IC5pbnB1dHMgaW9uLWl0ZW0ge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzVGNDI5QztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5pb24tY29udGVudCAuY29udGVudCAuaW5wdXRzIGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIkVsIE1lc3NpcmlcIiwgc2Fucy1zZXJpZjtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IC5pbnB1dHMgaW9uLWl0ZW0gYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiRWwgTWVzc2lyaVwiLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiA1JTtcbiAgYm90dG9tOiAxMCU7XG59XG5pb24tY29udGVudCAuY29udGVudCAuaW5wdXRzIGlvbi1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LWZhbWlseTogXCJFbCBNZXNzaXJpXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tb2RhbC1ib2R5IGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmb250LWZhbWlseTogXCJFbCBNZXNzaXJpXCIsIHNhbnMtc2VyaWY7XG59XG4ubW9kYWwtYm9keSBmb3JtIGlvbi1pdGVtIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1RjQyOUM7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm1vZGFsLWJvZHkgZm9ybSBpb24tYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiRWwgTWVzc2lyaVwiLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDE1JTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/profile.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/profile/profile.page.ts ***!
    \*****************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _must_match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../must-match */
    "./src/app/must-match.ts");
    /* harmony import */


    var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/base64/ngx */
    "./node_modules/@ionic-native/base64/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");

    var ProfilePage =
    /*#__PURE__*/
    function () {
      function ProfilePage(modalService, fb, camera, base64) {
        _classCallCheck(this, ProfilePage);

        this.modalService = modalService;
        this.fb = fb;
        this.camera = camera;
        this.base64 = base64;
        this.titel = 'Profile';
        this.xxx = '../../assets/profile.png';
        this.profilePhoto = null;
        this.imageURI = null;
        this.isEdit = false;
        this.image = null;
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
      }

      _createClass(ProfilePage, [{
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
          this.modalRef.setClass('editpasswordModal');
        }
      }, {
        key: "showModal",
        value: function showModal() {
          var _this2 = this;

          setTimeout(function () {
            _this2.openModal(_this2.temp);
          }, 3000);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.passwordForm = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }, {
            validator: Object(_must_match__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('password', 'confirmPassword')
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getMe();
        }
      }, {
        key: "getMe",
        value: function getMe() {
          // local storage
          // console.log(this.editForm);
          this.editForm.controls['email'].setValue(localStorage.getItem('email'));
          this.editForm.controls['firstName'].setValue(localStorage.getItem('firstName'));
          this.editForm.controls['lastName'].setValue(localStorage.getItem('lastName'));
          this.editForm.controls['phoneNumber'].setValue(localStorage.getItem('phoneNumber'));
        }
      }, {
        key: "editMe",
        value: function editMe() {
          var user = {};
          user['email'] = this.editForm.get('email').value;
          user['phoneNumber'] = this.editForm.get('phoneNumber').value;
          user['firstName'] = this.editForm.get('firstName').value;
          user['lastName'] = this.editForm.get('lastName').value;

          if (this.imgURL == null || this.imgURL == '') {
            user['photoUrl'] = this.profilePhoto;
          } else {
            user['photoUrl'] = this.imgURL;
          }
        }
      }, {
        key: "editPassword",
        value: function editPassword(template) {
          if (this.passwordForm.valid) {
            var newPassword = this.passwordForm.get('password').value;
            var user = {};
            user['phoneNumber'] = this.editForm.get('phoneNumber').value;
            user['email'] = this.editForm.get('email').value;
            user['password'] = newPassword;
            user['deviceId'] = localStorage.getItem('onesignal') ? localStorage.getItem('onesignal') : '';
            localStorage.setItem('userInfo', JSON.stringify(user));
            this.modalRef.hide();
          }
        }
      }, {
        key: "changePhoto",
        value: function changePhoto() {
          var _this3 = this;

          var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
          };
          this.camera.getPicture(options).then(function (imageData) {
            _this3.imageURI = imageData;

            _this3.base64.encodeFile(_this3.imageURI).then(function (base64File) {
              _this3.imgURL = base64File.replace("data:image/*;charset=utf-8;base64,", "data:image/png;base64,");
              _this3.userPhoto = "";
              _this3.isEdit = true;
            });
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]
      }, {
        type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_5__["Base64"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('template', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProfilePage.prototype, "temp", void 0);
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/profile/profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_5__["Base64"]])], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=profile-profile-module-es5.js.map