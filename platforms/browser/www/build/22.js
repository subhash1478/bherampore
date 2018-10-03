webpackJsonp([22],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrderPageModule", function() { return MyOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_order__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyOrderPageModule = /** @class */ (function () {
    function MyOrderPageModule() {
    }
    MyOrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_order__["a" /* MyOrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_order__["a" /* MyOrderPage */]),
            ],
        })
    ], MyOrderPageModule);
    return MyOrderPageModule;
}());

//# sourceMappingURL=my-order.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrderPage; });
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
* Generated class for the MyOrderPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var MyOrderPage = /** @class */ (function () {
    function MyOrderPage(utility, navCtrl, navParams, _services) {
        this.utility = utility;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._services = _services;
        var user = JSON.parse(localStorage.getItem('userdetails'));
        this.loggedInid = user._id;
    }
    MyOrderPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // this._services.
        this._services.getOrderList(this.loggedInid).subscribe(function (response) {
            _this.productList = response.response.data;
            console.log(_this.productList);
        }, function (error) {
        });
    };
    MyOrderPage.prototype.orderDetails = function (item) {
        console.log(item.id);
        this.navCtrl.push("YourOrderPage", { id: item.id });
    };
    MyOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-order',template:/*ion-inline-start:"/opt/workspace/project/shop/src/pages/my-order/my-order.html"*/'<!--\n\n  Generated template for the MyOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>My Order</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    \n\n\n\n    <div class="ordr-item animated fadeIn" *ngFor="let item of productList;let i =index" >\n\n     \n\n        <ion-item (click)="orderDetails(item)"> \n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/food-img-1.jpg">\n\n          </ion-thumbnail>\n\n          <h2> {{item.shopid.title}}</h2>\n\n          <p>Ordered at {{item.createdAt|date:\'MMMM d, y, h:mm a\'}}</p>\n\n          <button ion-button clear item-end  class="btnarw"><ion-icon name="arrow-forward"></ion-icon></button>\n\n        </ion-item>\n\n        <div class="total-dtls">\n\n            <p class="item-name">      Mode of payment:  {{(item.payment_type==\'cashpayment\')?\'cod\':\'online payment\'}} \n\n          </p>\n\n          <p class="ttprice">Total  {{item.totalprice|currency:\'INR\'}}</p>\n\n          <p class="txtpanding">Status  {{(item.user_received==0)?\'Pending\':\'Delivered\'}} </p>\n\n        </div>\n\n    </div>\n\n\n\n      \n\n    \n\n  </ion-list> \n\n</ion-content>'/*ion-inline-end:"/opt/workspace/project/shop/src/pages/my-order/my-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
    ], MyOrderPage);
    return MyOrderPage;
}());

//# sourceMappingURL=my-order.js.map

/***/ })

});
//# sourceMappingURL=22.js.map