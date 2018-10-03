webpackJsonp([30],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
            ],
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(103);
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
* Generated class for the CartPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var CartPage = /** @class */ (function () {
    function CartPage(viewCtrl, modalCtrl, utility, navCtrl, navParams, _services) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.utility = utility;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._services = _services;
        this.address = [];
        this.shop = {};
        this.cartEmpty = true;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var obj = {
            id: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER._id
        };
        this._services.getCart(obj).subscribe(function (Response) {
            console.log(Response);
            var result = Response.response.data;
            var pro = [];
            _this.sub_total = 0;
            for (var index = 0; index < result.length; index++) {
                var element = result[index];
                console.log(element);
                var newpro = {};
                newpro['price'] = element.price;
                newpro['product_name'] = element.productid.title;
                newpro['product_id'] = element.productid.id;
                newpro['quantity'] = element.quantity;
                newpro['shopid'] = element.shopid.title;
                newpro['id'] = element.id;
                _this.shop.name = element.shopid.title;
                _this.shop.id = element.shopid.id;
                _this.sub_total += element.quantity * element.price;
                pro.push(newpro);
            }
            _this.checkoutList = pro;
            _this.cartEmpty = false;
        }, function (error) {
            _this.cartEmpty = true;
        });
        var data = {
            userid: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER._id
        };
        this._services.getShippingAddress(data).subscribe(function (Response) {
            _this.address = Response.response.data;
        });
    };
    CartPage.prototype.increment = function (i) {
        this.checkoutList[i].quantity++;
        this.subtotalcal();
        this.addToCart(i);
    };
    CartPage.prototype.decrement = function (i) {
        console.log(i);
        if (this.checkoutList[i].quantity === 1) {
            this.removeCartItem(i);
            this.checkoutList[i].quantity--;
            this.subtotalcal();
            this.checkoutList.splice(i, 1);
            return false;
        }
        this.checkoutList[i].quantity--;
        this.subtotalcal();
        this.addToCart(i);
    };
    CartPage.prototype.Checkout = function () {
        this.navCtrl.setRoot('CheckoutPage');
    };
    CartPage.prototype.subtotalcal = function () {
        this.sub_total = 0;
        for (var index = 0; index < this.checkoutList.length; index++) {
            var element = this.checkoutList[index];
            var newpro = {};
            newpro['price'] = element.price;
            newpro['quantity'] = element.quantity;
            this.sub_total += element.quantity * element.price;
        }
    };
    CartPage.prototype.addToCart = function (i) {
        if (this.checkoutList[i].quantity == 0) {
            return false;
        }
        var obj = {
            quantity: this.checkoutList[i].quantity,
            productid: this.checkoutList[i].product_id,
            price: this.checkoutList[i].price,
            userid: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER._id,
            shopid: this.shop.id,
            status: 0
        };
        console.log(obj);
        this._services.addToCart(obj).subscribe(function (Response) {
            console.log(Response);
        });
    };
    CartPage.prototype.removeCartItem = function (i) {
        console.log('removeCartItem', this.checkoutList[i]);
        var obj = {
            id: this.checkoutList[i].id
        };
        this._services.removeItem(obj).subscribe(function (Response) {
            console.log(Response);
        });
    };
    CartPage.prototype.shopnow = function () {
        var item = {
            _id: '5b05aefe5c669d0676a6b1f6',
            title: 'Restaurant'
        };
        this.navCtrl.push("PostPage", { id: item._id, title: item.title });
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cart',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\cart\cart.html"*/'<!--\n\n  Generated template for the CheckoutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Cart</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n    <h3 text-center *ngIf="cartEmpty"> Your cart is empty </h3>\n\n\n\n  <ion-list *ngIf="!cartEmpty">\n\n    <ion-item class="alignitmtotal">\n\n      <ion-row class="prcelst header-tp">\n\n        <ion-col col-6 text-left>Edit cart</ion-col>\n\n       </ion-row>\n\n        <h2 class="h-one">{{shop.name}}</h2>\n\n      <ion-row class="prcelst" *ngFor="let item of checkoutList;let i=index">\n\n        <ion-col col-4 text-left>{{item.product_name}}</ion-col>\n\n         <ion-col col-4 text-center>\n\n\n\n          <div class="addbtn">\n\n            <ion-icon name="remove" (click)="decrement(i)"></ion-icon>\n\n            <span class="crntcount"> {{ item.quantity }}</span>\n\n            <ion-icon name="add" (click)="increment(i)"></ion-icon>\n\n          </div>\n\n        </ion-col>\n\n        \n\n        <ion-col col-4 text-right class="clrblac">{{item.quantity*item.price|currency:\'INR\'}}</ion-col>\n\n      </ion-row>\n\n \n\n      \n\n    \n\n      <ion-row class="prcelst totalprnt">\n\n          <ion-col col-8 text-left>Total</ion-col>\n\n          <ion-col col-4 text-right class="clrblac">{{sub_total|currency:\'INR\'}}</ion-col>\n\n      </ion-row>\n\n        \n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n  <ion-footer  >\n\n    <button *ngIf="!cartEmpty" class="btngtn" ion-button large full no-margin (click)="Checkout()" >\n\n      Checkout <ion-icon name="arrow-forward" class="arrht"></ion-icon>\n\n    </button>\n\n    <button ion-button   block *ngIf="cartEmpty" (click)="shopnow()">shop now</button>\n\n\n\n  </ion-footer>\n\n\n\n  <ion-footer *ngIf="cartEmpty">\n\n    \n\n      </ion-footer>'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=30.js.map