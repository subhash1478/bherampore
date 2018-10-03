webpackJsonp([18],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoterCategoryPageModule", function() { return PromoterCategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promoter_category__ = __webpack_require__(541);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PromoterCategoryPageModule = /** @class */ (function () {
    function PromoterCategoryPageModule() {
    }
    PromoterCategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__promoter_category__["a" /* PromoterCategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__promoter_category__["a" /* PromoterCategoryPage */]),
            ],
        })
    ], PromoterCategoryPageModule);
    return PromoterCategoryPageModule;
}());

//# sourceMappingURL=promoter-category.module.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromoterCategoryPage; });
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
* Generated class for the PromoterCategoryPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var PromoterCategoryPage = /** @class */ (function () {
    function PromoterCategoryPage(navCtrl, _services, toast, navParams) {
        this.navCtrl = navCtrl;
        this._services = _services;
        this.toast = toast;
        this.navParams = navParams;
        this.categoryPromoterList = [];
    }
    PromoterCategoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._services.getPromoterCategory().subscribe(function (response) {
            var result = response.response.data;
            result.sort(function (a, b) { return a.location.location.localeCompare(b.location.location); });
            _this.categoryPromoterList = result;
            console.log(_this.categoryPromoterList);
        }, function (error) {
        });
    };
    PromoterCategoryPage.prototype.itemSelected = function (item) {
        this.navCtrl.push('PromoterDetailsPage', { id: item.location.id, type: 'promoter' });
    };
    PromoterCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-promoter-category',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\promoter-category\promoter-category.html"*/'<!--\n\n  Generated template for the PromoterCategoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>promoter Category</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n \n\n<ion-content class="card-background-page animated fadeIn">\n\n  <ion-card *ngFor="let item of categoryPromoterList" (click)="itemSelected(item)">\n\n    <img [src]="item.image"/>\n\n     <div class="card-title">{{ item.location.location }}</div>\n\n   </ion-card>\n\n \n\n\n\n</ion-content>'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\promoter-category\promoter-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], PromoterCategoryPage);
    return PromoterCategoryPage;
}());

//# sourceMappingURL=promoter-category.js.map

/***/ })

});
//# sourceMappingURL=18.js.map