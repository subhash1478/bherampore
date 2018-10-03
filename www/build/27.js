webpackJsonp([27],{

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function() { return GalleryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery__ = __webpack_require__(526);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GalleryPageModule = /** @class */ (function () {
    function GalleryPageModule() {
    }
    GalleryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gallery__["a" /* GalleryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gallery__["a" /* GalleryPage */]),
            ],
        })
    ], GalleryPageModule);
    return GalleryPageModule;
}());

//# sourceMappingURL=gallery.module.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_gallery_modal__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_services__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utility_utility__ = __webpack_require__(251);
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
* Generated class for the GalleryPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var GalleryPage = /** @class */ (function () {
    function GalleryPage(navCtrl, modalCtrl, _services, toast, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this._services = _services;
        this.toast = toast;
        this.navParams = navParams;
        this.galleryType = 'regular';
        this.promoterList = [];
    }
    GalleryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var obj = {
            id: this.navParams.data.id
        };
        this._services.getPromoterImage(obj).subscribe(function (Response) {
            console.log(Response);
            _this.promoterList = Response.response.data;
        });
        console.log(this.promoterList);
    };
    GalleryPage.prototype.openZoom = function (image) {
        var galleryimage = [];
        this.promoterList.forEach(function (element) {
            var val = {};
            val['url'] = element.image;
            galleryimage.push(val);
        });
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2_ionic_gallery_modal__["a" /* GalleryModal */], {
            photos: galleryimage,
            initialSlide: 0
        });
        modal.present();
    };
    GalleryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gallery',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\gallery\gallery.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Image Gallery\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content>\n\n  \n\n    <ion-grid  >\n\n      <ion-row>\n\n        <ion-col col-6 col-md-4 col-xl-3 *ngFor="let item of promoterList" class="animated fadeIn">\n\n          <div (click)="openZoom(image)" class="image-container" [style.background-image]="\'url(\'+item.image+\')\'"></div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n \n\n  \n\n</ion-content>'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\gallery\gallery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_utility_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], GalleryPage);
    return GalleryPage;
}());

//# sourceMappingURL=gallery.js.map

/***/ })

});
//# sourceMappingURL=27.js.map