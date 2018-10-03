webpackJsonp([10],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourOrderPageModule", function() { return YourOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__your_order__ = __webpack_require__(414);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var YourOrderPageModule = /** @class */ (function () {
    function YourOrderPageModule() {
    }
    YourOrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__your_order__["a" /* YourOrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__your_order__["a" /* YourOrderPage */]),
            ],
        })
    ], YourOrderPageModule);
    return YourOrderPageModule;
}());

//# sourceMappingURL=your-order.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YourOrderPage; });
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
* Generated class for the YourOrderPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var YourOrderPage = /** @class */ (function () {
    function YourOrderPage(utility, navCtrl, navParams, _services) {
        this.utility = utility;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._services = _services;
        this.order = [];
        this.orderid = this.navParams.data.id;
    }
    YourOrderPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // this._services.
        this._services.getOrderDetails(this.orderid).subscribe(function (response) {
            var result = response.response.data;
            var cart = result[0].cart;
            _this.order = result[0].order;
            var cartItem = [];
            for (var index = 0; index < cart.length; index++) {
                var item = {};
                var element = cart[index];
                item['product_name'] = element.productid.title;
                item['product_price'] = element.productid.price;
                item['product_qty'] = element.quantity;
                cartItem.push(item);
            }
            _this.productList = cartItem;
            console.log(_this.order);
        }, function (error) {
        });
    };
    YourOrderPage.prototype.goToDashboard = function () {
        this.navCtrl.setRoot('HomePage');
    };
    YourOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-your-order',template:/*ion-inline-start:"/opt/workspace/project/shop/src/pages/your-order/your-order.html"*/'<!--\n\n  Generated template for the YourOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Your Order</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list >\n\n    <ion-item class="alignitmtop" >\n\n      <ion-thumbnail item-start>\n\n        <div [class.greenbtn]="order.shop_accept" [class.redbtn]="!order.shop_accept"></div>\n\n      </ion-thumbnail>\n\n      <h2>Shop confirmation</h2>\n\n      <p *ngIf="order.shop_accept">Done</p>\n\n      <p *ngIf="!order.shop_accept">wating for confirmation</p>\n\n    </ion-item>\n\n    <ion-item class="alignitmtop">\n\n      <ion-thumbnail item-start>\n\n        <div [class.greenbtn]="order.shop_accept"  [class.redbtn]="!order.shop_accept"></div>\n\n      </ion-thumbnail>\n\n      <h2>Your food is preparing</h2>\n\n      <p *ngIf="!order.shop_accept">wating for confirmation</p>\n\n      <p *ngIf="order.shop_accept">Done</p>\n\n    </ion-item>\n\n    <ion-item class="alignitmtop">\n\n      <ion-thumbnail item-start>\n\n        <div [class.greenbtn]="order.driver_picked"  [class.redbtn]="!order.driver_picked"></div>\n\n      </ion-thumbnail>\n\n      <h2>Driver picked your order</h2>\n\n      <p *ngIf="!order.driver_picked">wating for confirmation</p>\n\n      <p *ngIf="order.driver_picked">Done</p>\n\n    </ion-item>\n\n    <ion-item class="alignitmtop">\n\n      <ion-thumbnail item-start>\n\n        <div [class.greenbtn]="order.user_received" [class.redbtn]="!order.user_received"></div>\n\n      </ion-thumbnail>\n\n      <h2>Delivered</h2>\n\n      <p *ngIf="!order.user_received">wating for confirmation</p>\n\n      <p *ngIf="order.user_received">Done</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-item  padding>\n\n      <h2>Thanks for your order</h2>\n\n      <p class="txtcd">order code: <span>{{order.orderid}}</span></p>\n\n      <p class="txtcd">order date: <span>{{order.createdAt|date:\'EEEE, MMMM d, y, h:mm a\'}}</span></p>\n\n      <p class="txtcd">Mode of payment: <span>{{(payment_type==\'cashpayment\')?\'cod\':\'online payment\'}}</span></p>\n\n      <ion-row class="prcelst" *ngFor="let item of productList;let i =index">\n\n        <ion-col col-6 text-left>{{item.product_name}}</ion-col>\n\n        <ion-col col-3 text-center>x{{item.product_qty}}</ion-col>\n\n        <ion-col col-3 text-right>{{item.product_price*item.product_qty|currency:\'INR\'}}</ion-col>\n\n      </ion-row>\n\n      <ion-row class="prcelst subtotal">\n\n        <ion-col col-8 text-left>Subtotal</ion-col>\n\n        <ion-col col-4 text-right>{{order.totalprice|currency:\'INR\'}}</ion-col>\n\n      </ion-row>\n\n      <ion-row class="prcelst">\n\n        <ion-col col-8 text-left>Service fee</ion-col>\n\n        <ion-col col-4 text-right>₹0</ion-col>\n\n      </ion-row>\n\n      <ion-row class="prcelst">\n\n        <ion-col col-8 text-left>SGST</ion-col>\n\n        <ion-col col-4 text-right>₹0</ion-col>\n\n      </ion-row>\n\n      <ion-row class="prcelst">\n\n        <ion-col col-8 text-left>Container chargers</ion-col>\n\n        <ion-col col-4 text-right>₹0</ion-col>\n\n      </ion-row>\n\n      <ion-row class="prcelst">\n\n        <ion-col col-8 text-left>CGST</ion-col>\n\n        <ion-col col-4 text-right>₹0</ion-col>\n\n      </ion-row>\n\n      <ion-row class="prcelst">\n\n        <ion-col col-8 text-left>Delivery charges <ion-icon name="ios-alert-outline"></ion-icon></ion-col>\n\n        <ion-col col-4 text-right>₹0</ion-col>\n\n      </ion-row>\n\n      <ion-row class="prcelst totalprnt">\n\n        <ion-col col-8 text-left>Total</ion-col>\n\n        <ion-col col-4 text-right>{{order.totalprice|currency:\'INR\'}}</ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  <button class="btngtn" ion-button block (click)="goToDashboard()">Home</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"/opt/workspace/project/shop/src/pages/your-order/your-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
    ], YourOrderPage);
    return YourOrderPage;
}());

//# sourceMappingURL=your-order.js.map

/***/ })

});
//# sourceMappingURL=10.js.map