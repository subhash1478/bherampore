webpackJsonp([28],{

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback__ = __webpack_require__(524);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeedbackPageModule = /** @class */ (function () {
    function FeedbackPageModule() {
    }
    FeedbackPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feedback__["a" /* FeedbackPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feedback__["a" /* FeedbackPage */]),
            ],
        })
    ], FeedbackPageModule);
    return FeedbackPageModule;
}());

//# sourceMappingURL=feedback.module.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
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
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(utility, navCtrl, navParams, _services) {
        this.utility = utility;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._services = _services;
        this.feed = {};
    }
    FeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbackPage');
    };
    FeedbackPage.prototype.submit = function () {
        var _this = this;
        if (!this.feed.subject) {
            var msg = { msg: 'Subject is required', duration: 3000, position: 'centre' };
            this.utility.messageToast(msg);
            return false;
        }
        if (!this.feed.comment) {
            var msg_1 = { msg: 'Comment is required', duration: 3000, position: 'centre' };
            this.utility.messageToast(msg_1);
            return false;
        }
        this._services.feedback(this.feed).subscribe(function (Response) {
            if (Response.success == true) {
                var msg_2 = { msg: 'Successful sent', duration: 3000, position: 'centre' };
                _this.utility.messageToast(msg_2);
            }
            else {
                var msg_3 = { msg: Response.message, duration: 3000, position: 'centre' };
                _this.utility.messageToast(msg_3);
            }
            console.log(Response);
        });
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feedback',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\feedback\feedback.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-navbar >\n\n      <ion-title>Feedback Form</ion-title>\n\n\n\n    </ion-navbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="animated fadeIn"> \n\n  <ion-grid class="listing-details" no-padding>\n\n    <ion-row>\n\n      \n\n        <h1 class="heading-top">Contact Us</h1>\n\n\n\n\n\n       <section class="dtls-bx" >\n\n          <p class="details"><ion-icon ios="ios-pin" md="md-pin"></ion-icon>  CB 195, Street Number 195, Action Area I, Newtown, Kolkata, West Bengal 700156</p>\n\n          <p class="details"><ion-icon ios="ios-mail" md="md-mail"></ion-icon> souviktripathy@gmail.com </p>\n\n          <p class="details"><ion-icon ios="ios-call" md="md-call"></ion-icon> +91 8420215558</p>\n\n          <p class="details"><ion-icon ios="ios-call" md="md-call"></ion-icon> +91 8348310036</p>\n\n      </section>\n\n    </ion-row>\n\n</ion-grid>\n\n<h1 class="heading-top">Feedback Form</h1>\n\n\n\n  <ion-item>\n\n       <ion-label floating>Subject</ion-label>\n\n       <ion-input type="text"  [(ngModel)]="feed.subject" name="title"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n      <ion-label floating>comment</ion-label>\n\n      <ion-textarea name="description" [(ngModel)]="feed.comment" ></ion-textarea>\n\n  </ion-item>\n\n  <button ion-button type="submit" block (click)="submit()" class="login-button mrt16">Send</button>\n\n\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\feedback\feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ })

});
//# sourceMappingURL=28.js.map