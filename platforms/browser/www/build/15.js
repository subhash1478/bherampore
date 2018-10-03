webpackJsonp([15],{

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionModalPageModule", function() { return PromotionModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promotion_modal__ = __webpack_require__(403);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__promotion_modal__["a" /* PromotionModalPage */]),
            ],
        })
    ], PromotionModalPageModule);
    return PromotionModalPageModule;
}());

//# sourceMappingURL=promotion-modal.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionModalPage; });
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
            for (var index = 0; index < result.length; index++) {
                var val = {};
                if (result[index].bannerindex == 1) {
                    val['image'] = result[index].image;
                    val['bannerindex'] = result[index].bannerindex;
                    banner1.push(val);
                }
            }
            _this.banner = banner1;
            console.log(_this.banner);
        });
    };
    PromotionModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PromotionModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-promotion-modal',template:/*ion-inline-start:"/opt/workspace/project/shop/src/pages/promotion-modal/promotion-modal.html"*/'<!--\n  Generated template for the PromotionModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n  \n      <button class="btn-close-Add" (click)="dismiss()"><ion-icon name="close-circle"></ion-icon></button>\n      <div class="bnr-add-center"  *ngFor="let item of banner"  >\n         <img [src]="item.image" />\n      </div>\n</ion-content>\n'/*ion-inline-end:"/opt/workspace/project/shop/src/pages/promotion-modal/promotion-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */]])
    ], PromotionModalPage);
    return PromotionModalPage;
}());

//# sourceMappingURL=promotion-modal.js.map

/***/ })

});
//# sourceMappingURL=15.js.map