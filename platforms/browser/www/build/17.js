webpackJsonp([17],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product__ = __webpack_require__(400);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductPageModule = /** @class */ (function () {
    function ProductPageModule() {
    }
    ProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product__["a" /* ProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product__["a" /* ProductPage */]),
            ],
        })
    ], ProductPageModule);
    return ProductPageModule;
}());

//# sourceMappingURL=product.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
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
* Generated class for the ProductPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ProductPage = /** @class */ (function () {
    function ProductPage(utility, events, navCtrl, navParams, _services, viewCtrl, modalCtrl) {
        var _this = this;
        this.utility = utility;
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._services = _services;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.prodcuctList = [];
        this.categoryid = this.navParams.data.id;
        console.log("crash", this.navParams.data.id);
        events.subscribe('cartupdated', function () {
            // user and time are the same arguments passed in `events.publish(user, time)`
            console.log('cartupdated');
            _this.countCartItem();
        });
    }
    ProductPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit');
        //console.log('ionViewDidLoad PostdetailsPage');
        this._services.getProduct(this.categoryid).subscribe(function (Response) {
            //console.log(Response.data);
            _this.prodcuctList = Response.response.data;
        });
        this.countCartItem();
    };
    ProductPage.prototype.ionViewDidLeave = function () {
        console.log('leave');
        this.events.unsubscribe('cartupdated');
    };
    ProductPage.prototype.ionViewDidEnter = function () {
        console.log('ngOnInit');
        this.countCartItem();
        console.log('ionViewDidLoad ProductPage');
    };
    ProductPage.prototype.addToCart = function (item) {
        console.log(item);
        var modal = this.modalCtrl.create('QtyModalPage', { id: item });
        modal.present();
    };
    ProductPage.prototype.countCartItem = function () {
        var _this = this;
        var obj = {
            id: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER._id
        };
        this._services.getCart(obj).subscribe(function (Response) {
            _this.qty = 0;
            console.log(Response);
            var result = Response.response.data;
            var pro = [];
            for (var index = 0; index < result.length; index++) {
                var element = result[index];
                _this.qty += element.quantity;
            }
            console.log(_this.qty);
        }, function (error) {
            _this.qty = 0;
        });
    };
    ProductPage.prototype.goToCart = function () {
        if (this.qty < 1) {
            var msg = {
                msg: "Please add some item to your product",
                duration: 3000
            };
            this.utility.showToast(msg);
            return false;
        }
        this.navCtrl.push('CartPage');
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-product',template:/*ion-inline-start:"/opt/workspace/project/shop/src/pages/product/product.html"*/'<!--\n\n  Generated template for the ProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>product</ion-title>\n\n    <ion-buttons end>\n\n      <button (click)="goToCart()" ion-button icon-only >\n\n           <ion-icon name="cart"></ion-icon><span class="countcrt">{{qty}}</span>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n  \n\n</ion-header>\n\n<ion-content>\n\n  <ion-list  >\n\n    <ion-item *ngFor="let item of prodcuctList" (click)="addToCart(item)">\n\n      <h2>{{item.title}}</h2>\n\n      <p>Price :  {{item.price| currency:\'INR\':true }}</p>\n\n      <button class="btnVD" ion-button clear item-right><ion-icon name="ios-cart"></ion-icon> Add</button>\n\n    </ion-item>\n\n  </ion-list> \n\n</ion-content><ion-footer>\n\n  <button ion-button block class="btngtn" (click)="goToCart()"><ion-icon name="cart"></ion-icon> Cart</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"/opt/workspace/project/shop/src/pages/product/product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ })

});
//# sourceMappingURL=17.js.map