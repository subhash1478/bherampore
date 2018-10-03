webpackJsonp([18],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneVerificationPageModule", function() { return PhoneVerificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phone_verification__ = __webpack_require__(396);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PhoneVerificationPageModule = /** @class */ (function () {
    function PhoneVerificationPageModule() {
    }
    PhoneVerificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__phone_verification__["a" /* PhoneVerificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__phone_verification__["a" /* PhoneVerificationPage */]),
            ],
        })
    ], PhoneVerificationPageModule);
    return PhoneVerificationPageModule;
}());

//# sourceMappingURL=phone-verification.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneVerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(103);
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
 * Generated class for the PhoneVerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhoneVerificationPage = /** @class */ (function () {
    function PhoneVerificationPage(utility, navCtrl, navParams, _services) {
        this.utility = utility;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._services = _services;
    }
    PhoneVerificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PhoneVerificationPage');
    };
    PhoneVerificationPage.prototype.sendOTP = function () {
        var phoneno = /^\d{10}$/;
        if (phoneno.test(this.phone) === false) {
            var msg = { msg: 'Phone number is not valid', duration: 3000, position: 'centre' };
            this.utility.showToast(msg);
            return false;
        }
        var obj = {
            phone: this.phone,
            email: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER.email
        };
        console.log(obj);
        this._services.sendOTP(obj).subscribe(function (response) {
            var data = JSON.parse(response.response.data);
            console.log(data);
            if (data.type == 'success') {
            }
        });
    };
    PhoneVerificationPage.prototype.clear = function () {
        this.phone = '';
    };
    PhoneVerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-phone-verification',template:/*ion-inline-start:"/opt/workspace/project/shop/src/pages/phone-verification/phone-verification.html"*/'<ion-content>\n  <ion-header>\n    <ion-toolbar >\n      <ion-navbar>\n        <ion-title>\n          Enter phone\n        </ion-title>\n      </ion-navbar>\n      <ion-buttons end>\n        <button (click)="dismiss()" ion-button icon-only class="btnclse">\n          <ion-icon ios="ios-close" md="md-close"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header> \n  <ion-content padding>\n    <ion-list>\n      <ion-item class=" animated fadeIn" >\n        <ion-label floating>Phone</ion-label>\n        <ion-input type="number"  [(ngModel)]="phone" name="phone"></ion-input>\n        <button ion-button clear item-right (click)="clear()">\n          <ion-icon ios="ios-close" md="md-close-circle"></ion-icon>\n        </button>\n      </ion-item>\n      <button ion-button block clear  (click)="sendOTP()"> Send\n      </button>\n    </ion-list>\n\n    <ion-list>\n        <ion-item class=" animated fadeIn" >\n          <ion-label floating>OTP</ion-label>\n          <ion-input type="number"  [(ngModel)]="otp" name="otp"></ion-input>\n          <button ion-button clear item-right (click)="clear()">\n            <ion-icon ios="ios-close" md="md-close-circle"></ion-icon>\n          </button>\n        </ion-item>\n        <button ion-button block clear  (click)="verify()"> verify\n        </button>\n      </ion-list>\n  \n\n  </ion-content> '/*ion-inline-end:"/opt/workspace/project/shop/src/pages/phone-verification/phone-verification.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]) === "function" && _d || Object])
    ], PhoneVerificationPage);
    return PhoneVerificationPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=phone-verification.js.map

/***/ })

});
//# sourceMappingURL=18.js.map