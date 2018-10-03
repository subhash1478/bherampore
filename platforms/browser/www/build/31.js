webpackJsonp([31],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApptourPageModule", function() { return ApptourPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apptour__ = __webpack_require__(373);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApptourPageModule = /** @class */ (function () {
    function ApptourPageModule() {
    }
    ApptourPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__apptour__["a" /* ApptourPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__apptour__["a" /* ApptourPage */]),
            ],
        })
    ], ApptourPageModule);
    return ApptourPageModule;
}());

//# sourceMappingURL=apptour.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApptourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
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
 * Generated class for the ApptourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApptourPage = /** @class */ (function () {
    function ApptourPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slideIndex = 0;
        this.slides = [
            {
                title: 'Best hotel and local places',
                imageUrl: 'assets/img/lists/wishlist-1.png',
                description: 'Take a look at our amazing options',
            },
            {
                title: 'Find all center',
                imageUrl: 'assets/img/lists/wishlist-2.png',
                description: 'Take a look at our amazing options',
            },
            {
                title: 'All shop near by me',
                imageUrl: 'assets/img/lists/wishlist-3.png',
                description: 'Take a look at our amazing options',
            },
            {
                title: 'Call technician to your doorstep',
                imageUrl: 'assets/img/lists/wishlist-4.png',
                description: 'Take a look at our amazing options',
            }
        ];
    }
    ApptourPage.prototype.onSlideChanged = function () {
        this.slideIndex = this.slider.getActiveIndex();
        console.log('Slide changed! Current index is', this.slideIndex);
    };
    ApptourPage.prototype.goToApp = function () {
        console.log('Go to App clicked');
        localStorage.setItem('apptour', 'seen');
        var logincheck = localStorage.getItem('token');
        if (logincheck == null) {
            this.navCtrl.setRoot("LoginPage");
        }
        else {
            this.navCtrl.setRoot("HomePage");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], ApptourPage.prototype, "slider", void 0);
    ApptourPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-apptour',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\apptour\apptour.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n\n    <ion-buttons right>\n\n      <button ion-button color="light" *ngIf="slideIndex < slides.length - 1" class="skip-button" (click)="goToApp()"></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content fullscreen="true" class="no-padding-top">\n\n  <ion-slides #slider pager="true" autoplay="3000" (ionSlideWillChange)="onSlideChanged()">\n\n    <ion-slide *ngFor="let slide of slides" class="slide-background" [ngStyle]="{\'background-image\': \'url(\' + slide.imageUrl +\')\'}">\n\n      <div class="text-wrapper">\n\n        <div class="slide-text">\n\n          <h2 class="slide-title" [innerHTML]="slide.title"></h2><br>\n\n          <p [innerHTML]="slide.description"></p>\n\n        </div>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <div class="floating-buttons pop-in" *ngIf="slideIndex >= slides.length - 1">\n\n    <button ion-button clear large full (click)="goToApp()">Let\'s go!</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\apptour\apptour.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */]])
    ], ApptourPage);
    return ApptourPage;
}());

//# sourceMappingURL=apptour.js.map

/***/ })

});
//# sourceMappingURL=31.js.map