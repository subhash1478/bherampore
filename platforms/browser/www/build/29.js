webpackJsonp([29],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmsPageModule", function() { return CmsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cms__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CmsPageModule = /** @class */ (function () {
    function CmsPageModule() {
    }
    CmsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cms__["a" /* CmsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cms__["a" /* CmsPage */]),
            ],
        })
    ], CmsPageModule);
    return CmsPageModule;
}());

//# sourceMappingURL=cms.module.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CmsPage; });
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
 * Generated class for the CmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CmsPage = /** @class */ (function () {
    function CmsPage(utility, navCtrl, navParams, _services) {
        this.utility = utility;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._services = _services;
        this.cmsList = [];
    }
    CmsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.page = this.navParams.data.pagename;
        this._services.getCms(this.page).subscribe(function (Response) {
            _this.cmsList = Response.data;
        }, function (Error) {
        });
    };
    CmsPage.prototype.goToPostPage = function (item) {
        console.log(item);
        this.navCtrl.push("PostPage", { data: item });
    };
    CmsPage.prototype.goToNotification = function () {
        this.navCtrl.push("NotificationPage");
    };
    CmsPage.prototype.openMenu = function () {
    };
    CmsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cms',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\cms\cms.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-navbar >\n\n      <ion-title>{{cmsList.pagename}}</ion-title>\n\n\n\n\n\n    </ion-navbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding class="cmsbx">\n\n    {{cmsList.content}}\n\n  <!-- <ion-card>\n\n    <ion-card-header>\n\n      {{cmsList.pagename}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n       \n\n      {{cmsList.content}}\n\n    \n\n    </ion-card-content>\n\n  </ion-card> -->\n\n</ion-content>\n\n'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\cms\cms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
    ], CmsPage);
    return CmsPage;
}());

//# sourceMappingURL=cms.js.map

/***/ })

});
//# sourceMappingURL=29.js.map