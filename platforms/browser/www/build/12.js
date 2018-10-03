webpackJsonp([12],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorPageModule", function() { return VendorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendor__ = __webpack_require__(412);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VendorPageModule = /** @class */ (function () {
    function VendorPageModule() {
    }
    VendorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vendor__["a" /* VendorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vendor__["a" /* VendorPage */]),
            ],
        })
    ], VendorPageModule);
    return VendorPageModule;
}());

//# sourceMappingURL=vendor.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(101);
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
 * Generated class for the VendorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VendorPage = /** @class */ (function () {
    // public thumbnails: { title: string, image: string, ribbonText: string, class: string }[] = [
    //   { title: 'Awesome Shoes - $9', image: 'assets/img/ribbon/shoes.jpg', ribbonText: 'sale', class: 'sale' },
    //   { title: 'Awesome Team', image: 'assets/img/ribbon/cruzeiro.jpg', ribbonText: 'awesome', class: 'cruzeiro' },
    //   { title: 'Bad team', image: 'assets/img/ribbon/atletico.jpg', ribbonText: 'bad', class: 'atletico' }
    // ];
    function VendorPage(navCtrl, navParams, _services) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._services = _services;
    }
    VendorPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._services.getVendor().subscribe(function (Response) {
            _this.vendorList = Response.data;
        }, function (Error) {
        });
    };
    VendorPage.prototype.goToProfile = function (item) {
        this.navCtrl.push("ProfilePage", { data: item });
    };
    VendorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vendor',template:/*ion-inline-start:"/opt/workspace/project/shop/src/pages/vendor/vendor.html"*/'<ion-header >\n\n    <ion-toolbar color="header">\n\n\n\n  <ion-navbar>\n\n    <ion-title>Vendor</ion-title>\n\n</ion-navbar>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-item *ngFor="let item of vendorList" (click)="goToProfile(item)">\n\n        <ion-thumbnail item-left class="item-ribbon">\n\n          <span class="ribbon {{ item.class }}">\n\n            <span>Verifed</span>\n\n          </span>\n\n          <img src="https://cdn2.iconfinder.com/data/icons/office-icons/256/Office_Man_Office_Worker-128.png">\n\n        </ion-thumbnail>\n\n        <div>\n\n            <p >{{ item.firstname }} {{item.lastname}}</p>\n\n            <p >{{ item.shopname }} </p>\n\n            <p >{{ item.city }}</p>\n\n            <p >{{ item.address }}</p>\n\n            <div class="ico-all">\n\n              <ion-icon name="mail" color="primary" item-start></ion-icon>\n\n              <ion-icon name="call" color="danger" item-start></ion-icon>\n\n              <ion-icon name="logo-whatsapp" color="secondary" item-start></ion-icon>\n\n            </div>\n\n          </div>\n\n      </ion-item>\n\n\n\n\n\n    </ion-list>\n\n\n\n  </ion-content>\n\n'/*ion-inline-end:"/opt/workspace/project/shop/src/pages/vendor/vendor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
    ], VendorPage);
    return VendorPage;
}());

//# sourceMappingURL=vendor.js.map

/***/ })

});
//# sourceMappingURL=12.js.map