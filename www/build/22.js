webpackJsonp([22],{

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyshopPageModule", function() { return MyshopPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myshop__ = __webpack_require__(532);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyshopPageModule = /** @class */ (function () {
    function MyshopPageModule() {
    }
    MyshopPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myshop__["a" /* MyshopPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myshop__["a" /* MyshopPage */]),
            ],
        })
    ], MyshopPageModule);
    return MyshopPageModule;
}());

//# sourceMappingURL=myshop.module.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyshopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
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
 * Generated class for the MyshopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyshopPage = /** @class */ (function () {
    function MyshopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyshopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyshopPage');
    };
    MyshopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-myshop',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\myshop\myshop.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title>Restaurants</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="cart"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n  <ion-searchbar style="margin: 0; padding: 0;"></ion-searchbar>\n\n\n\n  <ion-list style="margin-bottom: 0;">\n\n    <ion-item>\n\n      <ion-label>Sort Order</ion-label>\n\n      <ion-select>\n\n        <ion-option value="nes">Highest to Lowest</ion-option>\n\n        <ion-option value="n64">Lowest to Highest</ion-option>\n\n        <ion-option value="ps">Newest First</ion-option>\n\n        <ion-option value="genesis">Oldest First</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-grid no-padding>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-card>\n\n          <ion-chip color="primary" style="position: absolute; right: 20px; top: 20px;">\n\n            <ion-label>20% Off</ion-label>\n\n          </ion-chip>\n\n          <img src="assets/imgs/logo.png" no-margin/>\n\n          <div padding>\n\n            <h2>Acer Model 1234</h2>\n\n            <h4><span style="text-decoration: line-through;">£200</span> £100</h4>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-6>\n\n        <ion-card>\n\n          <img src="assets/imgs/logo.png" no-margin/>\n\n          <div padding>\n\n            <h2>Acer Model 1234</h2>\n\n            <h4><span style="text-decoration: line-through;">£200</span> £100</h4>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-6>\n\n        <ion-card>\n\n          <img src="assets/imgs/logo.png" no-margin/>\n\n          <div padding>\n\n            <h2>Acer Model 1234</h2>\n\n            <h4><span style="text-decoration: line-through;">£200</span> £100</h4>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-6>\n\n        <ion-card>\n\n          <ion-chip color="primary" style="position: absolute; right: 20px; top: 20px;">\n\n            <ion-label>20% Off</ion-label>\n\n          </ion-chip>\n\n          <img src="assets/imgs/logo.png" no-margin/>\n\n          <div padding>\n\n            <h2>Acer Model 1234</h2>\n\n            <h4><span style="text-decoration: line-through;">£200</span> £100</h4>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-6>\n\n        <ion-card>\n\n          <ion-chip color="primary" style="position: absolute; right: 20px; top: 20px;">\n\n            <ion-label>20% Off</ion-label>\n\n          </ion-chip>\n\n          <img src="assets/imgs/logo.png" no-margin/>\n\n          <div padding>\n\n            <h2>Acer Model 1234</h2>\n\n            <h4><span style="text-decoration: line-through;">£200</span> £100</h4>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-6>\n\n        <ion-card>\n\n          <ion-chip color="primary" style="position: absolute; right: 20px; top: 20px;">\n\n            <ion-label>20% Off</ion-label>\n\n          </ion-chip>\n\n          <img src="assets/imgs/logo.png" no-margin/>\n\n          <div padding>\n\n            <h2>Acer Model 1234</h2>\n\n            <h4><span style="text-decoration: line-through;">£200</span> £100</h4>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-6>\n\n        <ion-card>\n\n          <ion-chip color="primary" style="position: absolute; right: 20px; top: 20px;">\n\n            <ion-label>20% Off</ion-label>\n\n          </ion-chip>\n\n          <img src="assets/imgs/logo.png" no-margin/>\n\n          <div padding>\n\n            <h2>Acer Model 1234</h2>\n\n            <h4><span style="text-decoration: line-through;">£200</span> £100</h4>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-6>\n\n        <ion-card>\n\n          <ion-chip color="primary" style="position: absolute; right: 20px; top: 20px;">\n\n            <ion-label>20% Off</ion-label>\n\n          </ion-chip>\n\n          <img src="assets/imgs/logo.png" no-margin/>\n\n          <div padding>\n\n            <h2>Acer Model 1234</h2>\n\n            <h4><span style="text-decoration: line-through;">£200</span> £100</h4>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\myshop\myshop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], MyshopPage);
    return MyshopPage;
}());

//# sourceMappingURL=myshop.js.map

/***/ })

});
//# sourceMappingURL=22.js.map