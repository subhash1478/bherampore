webpackJsonp([11],{

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorjoinPageModule", function() { return VendorjoinPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendorjoin__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VendorjoinPageModule = /** @class */ (function () {
    function VendorjoinPageModule() {
    }
    VendorjoinPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vendorjoin__["a" /* VendorjoinPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vendorjoin__["a" /* VendorjoinPage */]),
            ],
        })
    ], VendorjoinPageModule);
    return VendorjoinPageModule;
}());

//# sourceMappingURL=vendorjoin.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorjoinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__ = __webpack_require__(205);
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
 * Generated class for the VendorjoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VendorjoinPage = /** @class */ (function () {
    function VendorjoinPage(utility, navCtrl, navParams, _services) {
        this.utility = utility;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._services = _services;
        this.user = {};
    }
    VendorjoinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VendorjoinPage');
    };
    VendorjoinPage.prototype.submit = function () {
        var stringExp = /^[a-zA-Z]+$/;
        var phoneExp = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
        if (this.user.shopname == undefined || this.user.shopname == "") {
            var msg = { msg: 'shopname is required', duration: 3000, position: 'centre' };
            this.utility.messageToast(msg);
            return false;
        }
        if (stringExp.test(this.user.shopname) == false) {
            var msg = { msg: 'shopname should be character only', duration: 3000, position: 'centre' };
            this.utility.messageToast(msg);
            return false;
        }
        if (this.user.phone == undefined || this.user.phone == "") {
            var msg = { msg: 'phone number is required', duration: 3000, position: 'centre' };
            this.utility.messageToast(msg);
            return false;
        }
        if (phoneExp.test(this.user.phone) == false) {
            var msg = { msg: 'Enter valid phone number', duration: 3000, position: 'centre' };
            this.utility.messageToast(msg);
            return false;
        }
        if (this.user.address == undefined || this.user.address == "") {
            var msg = { msg: 'address is required', duration: 3000, position: 'centre' };
            this.utility.messageToast(msg);
            return false;
        }
        if (this.user.about == undefined || this.user.about == "") {
            var msg = { msg: 'about is required', duration: 3000, position: 'centre' };
            this.utility.messageToast(msg);
            return false;
        }
        this._services.updateuser(this.user).subscribe(function (Response) {
            console.log(Response);
        });
    };
    VendorjoinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vendorjoin',template:/*ion-inline-start:"/opt/workspace/project/shop/src/pages/vendorjoin/vendorjoin.html"*/'<!--\n\n  Generated template for the VendorjoinPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n<ion-toolbar color="header">\n\n    <ion-navbar>\n\n        <ion-title>Join</ion-title>\n\n\n\n      </ion-navbar>\n\n</ion-toolbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label floating>Shop name</ion-label>\n\n            <ion-input type="text" [(ngModel)]="user.shopname" ></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Phone number</ion-label>\n\n            <ion-input type="number" [(ngModel)]="user.phone" ></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n              <ion-label floating>Address</ion-label>\n\n              <ion-input type="text" [(ngModel)]="user.address" ></ion-input>\n\n            </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label floating>About yourself</ion-label>\n\n          <ion-input type="text" [(ngModel)]="user.about"></ion-input>\n\n        </ion-item>\n\n  </ion-list>\n\n  <button ion-button  full round  (click)="submit()" class="login-button mrt16">Apply</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/opt/workspace/project/shop/src/pages/vendorjoin/vendorjoin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
    ], VendorjoinPage);
    return VendorjoinPage;
}());

//# sourceMappingURL=vendorjoin.js.map

/***/ })

});
//# sourceMappingURL=11.js.map