webpackJsonp([18],{

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRequestPageModule", function() { return OrderRequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_request__ = __webpack_require__(511);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderRequestPageModule = /** @class */ (function () {
    function OrderRequestPageModule() {
    }
    OrderRequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order_request__["a" /* OrderRequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_request__["a" /* OrderRequestPage */]),
            ],
        })
    ], OrderRequestPageModule);
    return OrderRequestPageModule;
}());

//# sourceMappingURL=order-request.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderRequestPage; });
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
 * Generated class for the OrderRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderRequestPage = /** @class */ (function () {
    function OrderRequestPage(utility, navCtrl, navParams, _services) {
        this.utility = utility;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._services = _services;
        var user = JSON.parse(localStorage.getItem('userdetails'));
        this.loggedInid = user._id;
        console.log(this.loggedInid);
    }
    OrderRequestPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // this._services.
        this._services.getOrderList(this.loggedInid).subscribe(function (response) {
            _this.productList = response.response.data;
        }, function (error) {
            console.log(error);
        });
    };
    OrderRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order-request',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\order-request\order-request.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>My Order</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list> \n\n    <div class="ordr-item" *ngFor="let item of productList;let i =index">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/food-img-1.jpg">\n\n        </ion-thumbnail>\n\n        <h2> {{item.shopid.title}}</h2>\n\n        <p>Ordered at{{item.createdAt|date }}</p>\n\n        <button ion-button clear item-end  class="btnarw"><ion-icon name="arrow-forward"></ion-icon></button>\n\n      </ion-item>\n\n      <div class="total-dtls">\n\n        <!-- <p class="item-name">1 masala Kulcha, 5 Butter Naan</p> -->\n\n        <p class="ttprice">Total {{item.totalprice|currency:\'INR\'}}</p>\n\n      </div>\n\n    </div>\n\n  </ion-list> \n\n</ion-content>'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\order-request\order-request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
    ], OrderRequestPage);
    return OrderRequestPage;
}());

//# sourceMappingURL=order-request.js.map

/***/ })

});
//# sourceMappingURL=18.js.map