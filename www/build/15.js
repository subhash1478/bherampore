webpackJsonp([15],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPageModule", function() { return TagsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tags__ = __webpack_require__(547);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TagsPageModule = /** @class */ (function () {
    function TagsPageModule() {
    }
    TagsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tags__["a" /* TagsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tags__["a" /* TagsPage */]),
            ],
        })
    ], TagsPageModule);
    return TagsPageModule;
}());

//# sourceMappingURL=tags.module.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsPage; });
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
 * Generated class for the TagsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TagsPage = /** @class */ (function () {
    function TagsPage(utility, navCtrl, navParams, _services) {
        this.utility = utility;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._services = _services;
        this.postid = this.navParams.data.id;
    }
    TagsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TagsPage');
        var obj = {
            id: this.postid
        };
        this._services.getTagsById(obj).subscribe(function (response) {
            console.log(response);
        }, function (error) {
        });
    };
    TagsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tags',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\tags\tags.html"*/'<ion-header >\n\n  <ion-toolbar color="header">\n\n\n\n<ion-navbar>\n\n  <ion-title>Category</ion-title>\n\n</ion-navbar>\n\n\n\n\n\n</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n      <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="assets/imgs/avatar.png">\n\n          </ion-avatar>\n\n          <h2>Lorem Ipsum</h2>\n\n          <p>It is a long established fact that a reader will be distracted</p>\n\n          <ion-note item-end class="note note-ios">3:43 pm</ion-note>\n\n        </ion-item>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="assets/imgs/avatar.png">\n\n        </ion-avatar>\n\n        <h2>Lorem Ipsum is simply</h2>\n\n        <p>It is a long established</p>\n\n        <ion-note item-end class="note note-ios">3:43 pm</ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="assets/imgs/avatar.png">\n\n          </ion-avatar>\n\n          <h2>Lorem Ipsum</h2>\n\n          <p>It is a long established fact that a reader will be distracted</p>\n\n          <ion-note item-end class="note note-ios">3:43 pm</ion-note>\n\n        </ion-item>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="assets/imgs/avatar.png">\n\n        </ion-avatar>\n\n        <h2>Lorem Ipsum is simply</h2>\n\n        <p>It is a long established</p>\n\n        <ion-note item-end class="note note-ios">3:43 pm</ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="assets/imgs/avatar.png">\n\n          </ion-avatar>\n\n          <h2>Lorem Ipsum</h2>\n\n          <p>It is a long established fact that a reader will be distracted</p>\n\n          <ion-note item-end class="note note-ios">3:43 pm</ion-note>\n\n        </ion-item>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="assets/imgs/avatar.png">\n\n        </ion-avatar>\n\n        <h2>Lorem Ipsum is simply</h2>\n\n        <p>It is a long established</p>\n\n        <ion-note item-end class="note note-ios">3:43 pm</ion-note>\n\n      </ion-item>\n\n      \n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\tags\tags.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
    ], TagsPage);
    return TagsPage;
}());

//# sourceMappingURL=tags.js.map

/***/ })

});
//# sourceMappingURL=15.js.map