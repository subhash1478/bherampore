webpackJsonp([4],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoterDetailsPageModule", function() { return PromoterDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promoter_details__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_rating__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_rating___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_rating__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PromoterDetailsPageModule = /** @class */ (function () {
    function PromoterDetailsPageModule() {
    }
    PromoterDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__promoter_details__["a" /* PromoterDetailsPage */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_4_ngx_rating__["RatingModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__promoter_details__["a" /* PromoterDetailsPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]]
        })
    ], PromoterDetailsPageModule);
    return PromoterDetailsPageModule;
}());

//# sourceMappingURL=promoter-details.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(15);
var common_1 = __webpack_require__(30);
var Rating = Rating_1 = (function () {
    function Rating() {
        // -------------------------------------------------------------------------
        // Inputs
        // -------------------------------------------------------------------------
        this.iconClass = "star-icon";
        this.fullIcon = "★";
        this.emptyIcon = "☆";
        this.titles = [];
        // -------------------------------------------------------------------------
        // Outputs
        // -------------------------------------------------------------------------
        this.onHover = new core_1.EventEmitter();
        this.onLeave = new core_1.EventEmitter();
        this.hovered = 0;
        this.hoveredPercent = undefined;
        // -------------------------------------------------------------------------
        // Private Properties
        // -------------------------------------------------------------------------
        this._max = 5;
    }
    Object.defineProperty(Rating.prototype, "max", {
        get: function () {
            return this._max;
        },
        // -------------------------------------------------------------------------
        // Input Accessors
        // -------------------------------------------------------------------------
        set: function (max) {
            this._max = max;
            this.buildRanges();
        },
        enumerable: true,
        configurable: true
    });
    // -------------------------------------------------------------------------
    // Implemented from ControlValueAccessor
    // -------------------------------------------------------------------------
    Rating.prototype.writeValue = function (value) {
        /*if (value % 1 !== value) {
         this.model = Math.round(value);
         return;
         }*/
        this.model = value;
    };
    Rating.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    Rating.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    // -------------------------------------------------------------------------
    // Implemented from Va..
    // -------------------------------------------------------------------------
    Rating.prototype.validate = function (c) {
        if (this.required && !c.value) {
            return {
                required: true
            };
        }
        return null;
    };
    // -------------------------------------------------------------------------
    // Lifecycle callbacks
    // -------------------------------------------------------------------------
    Rating.prototype.ngOnInit = function () {
        this.buildRanges();
    };
    // -------------------------------------------------------------------------
    // Host Bindings
    // -------------------------------------------------------------------------
    Rating.prototype.onKeydown = function (event) {
        if ([37, 38, 39, 40].indexOf(event.which) === -1 || this.hovered)
            return;
        event.preventDefault();
        event.stopPropagation();
        var increment = this.float ? 0.5 : 1;
        this.rate(this.model + (event.which === 38 || event.which === 39 ? increment : increment * -1));
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    Rating.prototype.calculateWidth = function (item) {
        if (this.hovered > 0) {
            if (this.hoveredPercent !== undefined && this.hovered === item)
                return this.hoveredPercent;
            return this.hovered >= item ? 100 : 0;
        }
        return this.model >= item ? 100 : 100 - Math.round((item - this.model) * 10) * 10;
    };
    Rating.prototype.setHovered = function (hovered) {
        if (!this.readonly && !this.disabled) {
            this.hovered = hovered;
            this.onHover.emit(hovered);
        }
    };
    Rating.prototype.changeHovered = function (event) {
        if (!this.float)
            return;
        var target = event.target;
        var relativeX = event.pageX - target.offsetLeft;
        var percent = Math.round((relativeX * 100 / target.offsetWidth) / 10) * 10;
        this.hoveredPercent = percent > 50 ? 100 : 50;
    };
    Rating.prototype.resetHovered = function () {
        this.hovered = 0;
        this.hoveredPercent = undefined;
        this.onLeave.emit(this.hovered);
    };
    Rating.prototype.rate = function (value) {
        if (!this.readonly && !this.disabled && value >= 0 && value <= this.ratingRange.length) {
            var newValue = this.hoveredPercent ? (value - 1) + this.hoveredPercent / 100 : value;
            this.onChange(newValue);
            this.model = newValue;
        }
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    Rating.prototype.buildRanges = function () {
        this.ratingRange = this.range(1, this.max);
    };
    Rating.prototype.range = function (start, end) {
        var foo = [];
        for (var i = start; i <= end; i++) {
            foo.push(i);
        }
        return foo;
    };
    return Rating;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Rating.prototype, "iconClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Rating.prototype, "fullIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Rating.prototype, "emptyIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Rating.prototype, "readonly", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Rating.prototype, "disabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Rating.prototype, "required", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Rating.prototype, "float", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], Rating.prototype, "titles", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Rating.prototype, "max", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Rating.prototype, "onHover", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Rating.prototype, "onLeave", void 0);
__decorate([
    core_1.HostListener("keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], Rating.prototype, "onKeydown", null);
Rating = Rating_1 = __decorate([
    core_1.Component({
        selector: "rating",
        template: "\n<span (mouseleave)=\"resetHovered()\"\n      class=\"rating\"\n      [class.disabled]=\"disabled\"\n      [class.readonly]=\"readonly\"\n      tabindex=\"0\"\n      role=\"slider\" \n      aria-valuemin=\"0\"\n      [attr.aria-valuemax]=\"ratingRange.length\" \n      [attr.aria-valuenow]=\"model\">\n    <span *ngFor=\"let item of ratingRange; let index = index\">\n        <i (mouseenter)=\"setHovered(item)\" \n           (mousemove)=\"changeHovered($event)\"\n           (click)=\"rate(item)\" \n           [attr.data-icon]=\"fullIcon\"\n           class=\"{{ iconClass }} half{{ calculateWidth(item) }}\"\n           [title]=\"titles[index] || item\">{{ emptyIcon }}</i>\n    </span>\n</span>\n",
        providers: [
            { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return Rating_1; }), multi: true },
            { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return Rating_1; }), multi: true },
        ],
        styles: ["\nspan.rating {\n    cursor: pointer;\n    outline: none;\n}\nspan.rating.readonly {\n    cursor: default;\n}\nspan.rating.disabled {\n    cursor: not-allowed;\n}\nspan.rating i{\n    font-style: normal; \n}\n.star-icon {\n    color: #ddd;\n    font-size: 2em;\n    position: relative;\n}\n.star-icon:before {\n    color: #FDE16D;\n    content: attr(data-icon) \" \";\n    position: absolute;\n    left: 0;\n    overflow: hidden;\n    width: 0;\n} \nspan.rating.disabled .star-icon:before {\n    color: #ECECEC;\n    text-shadow: none;\n}\n.star-icon.half10:before {\n    width: 10%;\n}\n.star-icon.half20:before {\n    width: 20%;\n}\n.star-icon.half30:before {\n    width: 30%;\n}\n.star-icon.half40:before {\n    width: 40%;\n}\n.star-icon.half50:before {\n    width: 50%;\n}\n.star-icon.half60:before {\n    width: 60%;\n}\n.star-icon.half70:before {\n    width: 70%;\n}\n.star-icon.half80:before {\n    width: 80%;\n}\n.star-icon.half90:before {\n    width: 90%;\n}\n.star-icon.half100:before {\n    width: 100%;\n}\n@-moz-document url-prefix() { /* Firefox Hack */\n  .star-icon {\n    font-size: 50px;\n    line-height: 34px;\n  }\n}\n"]
    })
], Rating);
exports.Rating = Rating;
var RatingModule = (function () {
    function RatingModule() {
    }
    return RatingModule;
}());
RatingModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            Rating,
        ],
        exports: [
            Rating,
        ],
    })
], RatingModule);
exports.RatingModule = RatingModule;
var Rating_1;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialSharing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(21);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Social Sharing
 * @description
 * Share text, files, images, and links via social networks, sms, and email.
 *
 * For Browser usage check out the Web Share API docs: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin#web-share-api
 *
 * @usage
 * ```typescript
 * import { SocialSharing } from '@ionic-native/social-sharing';
 *
 * constructor(private socialSharing: SocialSharing) { }
 *
 * ...
 *
 * // Check if sharing via email is supported
 * this.socialSharing.canShareViaEmail().then(() => {
 *   // Sharing via email is possible
 * }).catch(() => {
 *   // Sharing via email is not possible
 * });
 *
 * // Share via email
 * this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
 *   // Success!
 * }).catch(() => {
 *   // Error!
 * });
 * ```
 */
var SocialSharing = (function (_super) {
    __extends(SocialSharing, _super);
    function SocialSharing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shares using the share sheet
     * @param message {string} The message you would like to share.
     * @param subject {string} The subject
     * @param file {string|string[]} URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image. Only the first file/image will be used on Windows Phone.
     * @param url {string} A URL to share
     * @returns {Promise<any>}
     */
    /**
       * Shares using the share sheet
       * @param message {string} The message you would like to share.
       * @param subject {string} The subject
       * @param file {string|string[]} URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image. Only the first file/image will be used on Windows Phone.
       * @param url {string} A URL to share
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.share = /**
       * Shares using the share sheet
       * @param message {string} The message you would like to share.
       * @param subject {string} The subject
       * @param file {string|string[]} URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image. Only the first file/image will be used on Windows Phone.
       * @param url {string} A URL to share
       * @returns {Promise<any>}
       */
    function (message, subject, file, url) {
        return;
    };
    /**
     * Shares using the share sheet with additional options and returns a result object or an error message (requires plugin version 5.1.0+)
     * @param options {object} The options object with the message, subject, files, url and chooserTitle properties.
     * @returns {Promise<any>}
     */
    /**
       * Shares using the share sheet with additional options and returns a result object or an error message (requires plugin version 5.1.0+)
       * @param options {object} The options object with the message, subject, files, url and chooserTitle properties.
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareWithOptions = /**
       * Shares using the share sheet with additional options and returns a result object or an error message (requires plugin version 5.1.0+)
       * @param options {object} The options object with the message, subject, files, url and chooserTitle properties.
       * @returns {Promise<any>}
       */
    function (options) {
        return;
    };
    /**
     * Checks if you can share via a specific app.
     * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
     * @param message {string}
     * @param subject {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    /**
       * Checks if you can share via a specific app.
       * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
       * @param message {string}
       * @param subject {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.canShareVia = /**
       * Checks if you can share via a specific app.
       * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
       * @param message {string}
       * @param subject {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    function (appName, message, subject, image, url) {
        return;
    };
    /**
     * Shares directly to Twitter
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    /**
       * Shares directly to Twitter
       * @param message {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareViaTwitter = /**
       * Shares directly to Twitter
       * @param message {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    function (message, image, url) {
        return;
    };
    /**
     * Shares directly to Facebook
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    /**
       * Shares directly to Facebook
       * @param message {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareViaFacebook = /**
       * Shares directly to Facebook
       * @param message {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    function (message, image, url) {
        return;
    };
    /**
     * Shares directly to Facebook with a paste message hint
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @param pasteMessageHint {string}
     * @returns {Promise<any>}
     */
    /**
       * Shares directly to Facebook with a paste message hint
       * @param message {string}
       * @param image {string}
       * @param url {string}
       * @param pasteMessageHint {string}
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareViaFacebookWithPasteMessageHint = /**
       * Shares directly to Facebook with a paste message hint
       * @param message {string}
       * @param image {string}
       * @param url {string}
       * @param pasteMessageHint {string}
       * @returns {Promise<any>}
       */
    function (message, image, url, pasteMessageHint) {
        return;
    };
    /**
     * Shares directly to Instagram
     * @param message {string}
     * @param image {string}
     * @returns {Promise<any>}
     */
    /**
       * Shares directly to Instagram
       * @param message {string}
       * @param image {string}
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareViaInstagram = /**
       * Shares directly to Instagram
       * @param message {string}
       * @param image {string}
       * @returns {Promise<any>}
       */
    function (message, image) {
        return;
    };
    /**
     * Shares directly to WhatsApp
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    /**
       * Shares directly to WhatsApp
       * @param message {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareViaWhatsApp = /**
       * Shares directly to WhatsApp
       * @param message {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    function (message, image, url) {
        return;
    };
    /**
     * Shares directly to a WhatsApp Contact
     * @param receiver {string} Pass phone number on Android, and Addressbook ID (abid) on iOS
     * @param message {string} Message to send
     * @param image {string} Image to send (does not work on iOS
     * @param url {string} Link to send
     * @returns {Promise<any>}
     */
    /**
       * Shares directly to a WhatsApp Contact
       * @param receiver {string} Pass phone number on Android, and Addressbook ID (abid) on iOS
       * @param message {string} Message to send
       * @param image {string} Image to send (does not work on iOS
       * @param url {string} Link to send
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareViaWhatsAppToReceiver = /**
       * Shares directly to a WhatsApp Contact
       * @param receiver {string} Pass phone number on Android, and Addressbook ID (abid) on iOS
       * @param message {string} Message to send
       * @param image {string} Image to send (does not work on iOS
       * @param url {string} Link to send
       * @returns {Promise<any>}
       */
    function (receiver, message, image, url) {
        return;
    };
    /**
     * Share via SMS
     * @param messge {string} message to send
     * @param phoneNumber {string} Number or multiple numbers seperated by commas
     * @returns {Promise<any>}
     */
    /**
       * Share via SMS
       * @param messge {string} message to send
       * @param phoneNumber {string} Number or multiple numbers seperated by commas
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareViaSMS = /**
       * Share via SMS
       * @param messge {string} message to send
       * @param phoneNumber {string} Number or multiple numbers seperated by commas
       * @returns {Promise<any>}
       */
    function (messge, phoneNumber) {
        return;
    };
    /**
     * Checks if you can share via email
     * @returns {Promise<any>}
     */
    /**
       * Checks if you can share via email
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.canShareViaEmail = /**
       * Checks if you can share via email
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Share via Email
     * @param message {string}
     * @param subject {string}
     * @param to {string[]}
     * @param cc {string[]} Optional
     * @param bcc {string[]} Optional
     * @param files {string|string[]} Optional URL or local path to file(s) to attach
     * @returns {Promise<any>}
     */
    /**
       * Share via Email
       * @param message {string}
       * @param subject {string}
       * @param to {string[]}
       * @param cc {string[]} Optional
       * @param bcc {string[]} Optional
       * @param files {string|string[]} Optional URL or local path to file(s) to attach
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareViaEmail = /**
       * Share via Email
       * @param message {string}
       * @param subject {string}
       * @param to {string[]}
       * @param cc {string[]} Optional
       * @param bcc {string[]} Optional
       * @param files {string|string[]} Optional URL or local path to file(s) to attach
       * @returns {Promise<any>}
       */
    function (message, subject, to, cc, bcc, files) {
        return;
    };
    /**
     * Share via AppName
     * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
     * @param message {string}
     * @param subject {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    /**
       * Share via AppName
       * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
       * @param message {string}
       * @param subject {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareVia = /**
       * Share via AppName
       * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
       * @param message {string}
       * @param subject {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    function (appName, message, subject, image, url) {
        return;
    };
    /**
     * defines the popup position before call the share method.
     * @param targetBounds {string} left, top, width, height
     */
    /**
       * defines the popup position before call the share method.
       * @param targetBounds {string} left, top, width, height
       */
    SocialSharing.prototype.setIPadPopupCoordinates = /**
       * defines the popup position before call the share method.
       * @param targetBounds {string} left, top, width, height
       */
    function (targetBounds) { };
    /**
     * Save an array of images to the camera roll
     * @param  {string|string[]} fileOrFileArray Single or multiple files
     * @returns {Promise<any> }
     */
    /**
       * Save an array of images to the camera roll
       * @param  {string|string[]} fileOrFileArray Single or multiple files
       * @returns {Promise<any> }
       */
    SocialSharing.prototype.saveToPhotoAlbum = /**
       * Save an array of images to the camera roll
       * @param  {string|string[]} fileOrFileArray Single or multiple files
       * @returns {Promise<any> }
       */
    function (fileOrFileArray) {
        return;
    };
    SocialSharing.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 4,
            errorIndex: 5
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "share", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareWithOptions", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 5,
            errorIndex: 6,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "canShareVia", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 3,
            errorIndex: 4,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaTwitter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 3,
            errorIndex: 4,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaFacebook", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 4,
            errorIndex: 5,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaFacebookWithPasteMessageHint", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaInstagram", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 3,
            errorIndex: 4,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaWhatsApp", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 4,
            errorIndex: 5,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaWhatsAppToReceiver", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaSMS", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "canShareViaEmail", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS', 'Android'],
            successIndex: 6,
            errorIndex: 7
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Array, Array, Array, Object]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaEmail", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 5,
            errorIndex: 6,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareVia", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            sync: true,
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], SocialSharing.prototype, "setIPadPopupCoordinates", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "saveToPhotoAlbum", null);
    /**
     * @name Social Sharing
     * @description
     * Share text, files, images, and links via social networks, sms, and email.
     *
     * For Browser usage check out the Web Share API docs: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin#web-share-api
     *
     * @usage
     * ```typescript
     * import { SocialSharing } from '@ionic-native/social-sharing';
     *
     * constructor(private socialSharing: SocialSharing) { }
     *
     * ...
     *
     * // Check if sharing via email is supported
     * this.socialSharing.canShareViaEmail().then(() => {
     *   // Sharing via email is possible
     * }).catch(() => {
     *   // Sharing via email is not possible
     * });
     *
     * // Share via email
     * this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
     *   // Success!
     * }).catch(() => {
     *   // Error!
     * });
     * ```
     */
    SocialSharing = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'SocialSharing',
            plugin: 'cordova-plugin-x-socialsharing',
            pluginRef: 'plugins.socialsharing',
            repo: 'https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin',
            platforms: ['Android', 'Browser', 'iOS', 'Windows', 'Windows Phone']
        })
    ], SocialSharing);
    return SocialSharing;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromoterDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(375);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
* Generated class for the PromoterDetailsPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var PromoterDetailsPage = /** @class */ (function () {
    function PromoterDetailsPage(navCtrl, socialSharing, _services, toast, navParams) {
        this.navCtrl = navCtrl;
        this.socialSharing = socialSharing;
        this._services = _services;
        this.toast = toast;
        this.navParams = navParams;
        this.promoterList = [];
    }
    PromoterDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var obj = {
            id: this.navParams.data.id
        };
        this._services.getPromoterDetails(obj).subscribe(function (Response) {
            var result = Response.response.data;
            console.log(result);
            var promoterData = [];
            for (var index = 0; index < result.length; index++) {
                var element = result[index];
                var reviewcount = result[index].promoter.review;
                var val = {};
                val['promoter'] = result[index].promoter.promoter;
                val['image'] = result[index].image;
                val['comment'] = reviewcount.length;
                console.log(reviewcount);
                if (reviewcount.length < 1) {
                    val['rating'] = 0;
                }
                else {
                    var s = 0;
                    for (var index_1 = 0; index_1 < reviewcount.length; index_1++) {
                        var element_1 = reviewcount[index_1].rating;
                        s += element_1;
                        var ratingcount = s / reviewcount.length;
                        val['rating'] = ratingcount.toFixed(1);
                    }
                }
                promoterData.push(val);
            }
            _this.promoterList = promoterData;
            console.log(promoterData);
        });
    };
    //
    // ────────────────────────────────────────────────────────── I ──────────
    //   :::::: A D D R E V I E W : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────
    //
    PromoterDetailsPage.prototype.addReview = function (item) {
        //
        console.log(item);
        this.navCtrl.push('ReviewPage', { id: item.promoter.id, type: 'promoter' });
    };
    //
    // ──────────────────────────────────────────────────────────── I ──────────
    //   :::::: O P E N G A L L E Y : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────
    //
    PromoterDetailsPage.prototype.openGalley = function (item) {
        console.log(item);
        this.navCtrl.push('GalleryPage', { id: item.id, type: 'promoter' });
    };
    //
    // ────────────────────────────────────────────────── I ──────────
    //   :::::: S H A R E : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────
    //
    PromoterDetailsPage.prototype.share = function (data) {
        console.log(data);
        var obj = {
            message: 'Check this out ',
            subject: data.promoter.title,
            file: "http://139.59.12.86:1337/images/Promoter/" + data.image[0].images,
            url: "http://139.59.12.86:1337/images/Promoter/" + data.image[0].images
        };
        this.socialSharing.share(obj.message, obj.subject, obj.file, obj.url).then(function () {
        }).catch(function () {
        });
    };
    PromoterDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-promoter-details',template:/*ion-inline-start:"/opt/workspace/project/shop/src/pages/promoter-details/promoter-details.html"*/' <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Promoter Details</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <section class="housing-image animated fadeIn" *ngFor="let item of promoterList" >\n\n    <ion-slides  *ngIf="item.image && item.image.length>0" loop="true" autoplay="1000" pager  effect="fade" (click)="openGalley(item.promoter)">\n\n      <ion-slide  *ngFor="let itemval of item.image"\n\n      [ngStyle]="{\'background\' : \'url( \'+ \'http://139.59.12.86:1337/images/Promoter/\'+itemval.images+\' )no-repeat\',\'background-size\':\'cover\'}" >\n\n      <section class="housing-banner">\n\n        <span  > {{item.promoter.title}}</span>\n\n      </section>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-row class="btm-ftrbar" >\n\n      \n\n          <ion-col (click)="addReview(item)">\n\n           Rating {{item.rating}}\n\n            <ion-icon name="star"></ion-icon>\n\n\n\n            </ion-col>\n\n          \n\n    <ion-col (click)="addReview(item)">\n\n      <button ion-button icon-start clear small>\n\n        <ion-icon name="text"></ion-icon>\n\n        <div>\n\n          {{item.comment}}  Comments</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col (click)="share(item)">\n\n          <button ion-button icon-start clear small>\n\n            <ion-icon name="share"></ion-icon>\n\n            <div>\n\n               Share</div>\n\n            </button>\n\n          </ion-col>\n\n    </ion-row>\n\n  </section> \n\n</ion-content>\n\n'/*ion-inline-end:"/opt/workspace/project/shop/src/pages/promoter-details/promoter-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], PromoterDetailsPage);
    return PromoterDetailsPage;
}());

//# sourceMappingURL=promoter-details.js.map

/***/ })

});
//# sourceMappingURL=4.js.map