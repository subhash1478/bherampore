webpackJsonp([15],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionModalPageModule", function() { return PromotionModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promotion_modal__ = __webpack_require__(517);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PromotionModalPageModule = /** @class */ (function () {
    function PromotionModalPageModule() {
    }
    PromotionModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__promotion_modal__["a" /* PromotionModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__promotion_modal__["a" /* PromotionModalPage */]),
            ],
        })
    ], PromotionModalPageModule);
    return PromotionModalPageModule;
}());

//# sourceMappingURL=promotion-modal.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__ = __webpack_require__(251);
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
 * Generated class for the PromotionModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PromotionModalPage = /** @class */ (function () {
    function PromotionModalPage(menuCtrl, events, utility, navCtrl, navParams, _services, viewCtrl, modalCtrl) {
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.utility = utility;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._services = _services;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.banner = [];
    }
    PromotionModalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._services.getBanner().subscribe(function (Response) {
            var result = Response.response.data;
            var banner1 = [];
            result.forEach(function (element) {
                var val = {};
                if (element.bannerindex == 1) {
                    val['image'] = element.image;
                    val['bannerindex'] = element.bannerindex;
                    banner1.push(val);
                }
            });
            _this.banner = banner1;
            console.log(_this.banner);
        });
    };
    PromotionModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PromotionModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-promotion-modal',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\promotion-modal\promotion-modal.html"*/'<!--\n\n  Generated template for the PromotionModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content padding>\n\n  \n\n      <button class="btn-close-Add" (click)="dismiss()"><ion-icon name="close-circle"></ion-icon></button>\n\n      <div class="bnr-add-center"  *ngFor="let item of banner"  >\n\n         <img [src]="item.image" />\n\n      </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\promotion-modal\promotion-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], PromotionModalPage);
    return PromotionModalPage;
}());

//# sourceMappingURL=promotion-modal.js.map

/***/ })

});
//# sourceMappingURL=15.js.map