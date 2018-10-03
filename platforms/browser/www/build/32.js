webpackJsonp([32],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageModule", function() { return AddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddressPageModule = /** @class */ (function () {
    function AddressPageModule() {
    }
    AddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__address__["a" /* AddressPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__address__["a" /* AddressPage */]),
            ],
        })
    ], AddressPageModule);
    return AddressPageModule;
}());

//# sourceMappingURL=address.module.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utility_utility__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_services__ = __webpack_require__(101);
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
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddressPage = /** @class */ (function () {
    function AddressPage(utility, navCtrl, navParams, _services) {
        this.utility = utility;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._services = _services;
        this.add = {};
    }
    AddressPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AddressPage');
        var data = {
            userid: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER._id
        };
        this._services.getShippingAddress(data).subscribe(function (Response) {
            console.log(Response);
            var result = Response.response.data;
            if (result.length > 0) {
                _this.add = Response.response.data[0];
            }
        });
    };
    AddressPage.prototype.saveAddress = function () {
        var _this = this;
        if (!this.add.city) {
            var msg = { msg: 'city is required', duration: 3000, position: 'centre' };
            this.utility.showToast(msg);
            return false;
        }
        if (!this.add.locality) {
            var msg_1 = { msg: 'locality is required', duration: 3000, position: 'centre' };
            this.utility.showToast(msg_1);
            return false;
        }
        if (!this.add.address) {
            var msg_2 = { msg: 'address is required', duration: 3000, position: 'centre' };
            this.utility.showToast(msg_2);
            return false;
        }
        if (!this.add.landmark) {
            var msg_3 = { msg: 'landmark is required', duration: 3000, position: 'centre' };
            this.utility.showToast(msg_3);
            return false;
        }
        this._services.shippingAddress(this.add).subscribe(function (Response) {
            var msg = { msg: 'Successful save', duration: 3000, position: 'centre' };
            _this.utility.showToast(msg);
            _this.navCtrl.push('CheckoutPage');
            console.log(Response);
        });
    };
    AddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-address',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\address\address.html"*/'<!--\n\n  Generated template for the AddressPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>address</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n\n    <ion-item class="mrt16 animated fadeIn" >\n\n      <ion-label fixed>City</ion-label>\n\n      <ion-input type="text"  [(ngModel)]="add.city" name="city"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item class="mrt16 animated fadeIn"  >\n\n      <ion-label fixed>locality</ion-label>\n\n      <ion-input type="text"  [(ngModel)]="add.locality" name="locality"></ion-input>\n\n    </ion-item>\n\n    <ion-item  class="mrt16 animated fadeIn" >\n\n      <ion-label fixed>Address</ion-label>\n\n      <ion-textarea    [(ngModel)]="add.address" name="address"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item  class="mrt16 animated fadeIn" >\n\n      <ion-label fixed>landmark</ion-label>\n\n      <ion-textarea    [(ngModel)]="add.landmark" name="landmark"></ion-textarea>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  \n\n<button ion-button block class="btngtn animated fadeIn" (click)="saveAddress()">save</button>\n\n\n\n</ion-footer>'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\address\address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_services_services__["a" /* ServicesProvider */]])
    ], AddressPage);
    return AddressPage;
}());

//# sourceMappingURL=address.js.map

/***/ })

});
//# sourceMappingURL=32.js.map