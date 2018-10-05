webpackJsonp([22],{

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyshopPageModule", function() { return MyshopPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myshop__ = __webpack_require__(531);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyshopPageModule = /** @class */ (function () {
    function MyshopPageModule() {
    }
    MyshopPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myshop__["a" /* MyshopPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myshop__["a" /* MyshopPage */]),
            ],
        })
    ], MyshopPageModule);
    return MyshopPageModule;
}());

//# sourceMappingURL=myshop.module.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyshopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(128);
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
* Generated class for the MyshopPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var MyshopPage = /** @class */ (function () {
    function MyshopPage(utility, modalCtrl, _services, navCtrl, navParams) {
        this.utility = utility;
        this.modalCtrl = modalCtrl;
        this._services = _services;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchTerm = '';
    }
    MyshopPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var result = [];
        this._services.getShopProduct().subscribe(function (Response) {
            result = Response.response.data;
            console.log('====================================');
            console.log(result);
            console.log('====================================');
            result.sort(function (a, b) { return a.title.localeCompare(b.title); });
            _this.prodcuctList = result;
            _this.prodcuctListData = result;
        });
    };
    MyshopPage.prototype.ionViewDidEnter = function () {
        this.countCartItem();
    };
    MyshopPage.prototype.addToCart = function (item) {
        var _this = this;
        var modal = this.modalCtrl.create('QtyModalPage', { id: item });
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log(data);
            _this.countCartItem();
        });
    };
    MyshopPage.prototype.countCartItem = function () {
        var _this = this;
        var obj = {
            id: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER._id
        };
        this._services.getCart(obj).subscribe(function (Response) {
            _this.qty = 0;
            var result = Response.response.data;
            var pro = [];
            result.forEach(function (element) {
                _this.qty += element.quantity;
                console.log(_this.qty);
            });
        }, function (error) {
            _this.qty = 0;
        });
    };
    MyshopPage.prototype.goToCart = function () {
        this.navCtrl.push('CartPage');
    };
    MyshopPage.prototype.sortListing = function (event) {
        console.log(event);
        if (event == 1) {
            this.prodcuctList.sort(function (a, b) { return b.price - a.price; });
        }
        if (event == 2) {
            this.prodcuctList.sort(function (a, b) { return a.price - b.price; });
        }
        if (event == 3) {
            this.prodcuctList.sort(function (a, b) {
                var date1 = new Date(a.createdAt);
                var date2 = new Date(b.createdAt);
                return date2.getTime() - date1.getTime();
            });
        }
        if (event == 3) {
            this.prodcuctList.sort(function (a, b) {
                var date1 = new Date(a.createdAt);
                var date2 = new Date(b.createdAt);
                return date1.getTime() - date2.getTime();
            });
        }
    };
    MyshopPage.prototype.filterTechnologies = function (param) {
        this.prodcuctListData = this.prodcuctList;
        var val = param;
        // DON'T filter the technologies IF the supplied input is an empty string
        if (val && val.trim() != '') {
            this.prodcuctListData = this.prodcuctListData.filter(function (item) {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    MyshopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-myshop',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\myshop\myshop.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title>Restaurants</ion-title>\n\n\n\n    <ion-buttons end>\n\n    \n\n           <button (click)="goToCart()" ion-button icon-only >\n\n           <ion-icon name="cart"></ion-icon><span class="countcrt">{{qty}}</span>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content no-padding>\n\n  <ion-searchbar\n\n     (ionInput)="filterTechnologies($event.target.value)"></ion-searchbar>\n\n  <ion-list style="margin-bottom: 0;">\n\n    <ion-item>\n\n      <ion-label>Filter</ion-label>\n\n      <ion-select [(ngModel)]="sort " (ngModelChange)="sortListing($event)">\n\n        <ion-option value="1">Highest to Lowest</ion-option>\n\n        <ion-option value="2">Lowest to Highest</ion-option>\n\n        <ion-option value="3">Newest First</ion-option>\n\n        <ion-option value="4">Oldest First</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-grid no-padding>\n\n    <ion-row>\n\n      <ion-col col-6   *ngFor="let item of prodcuctListData" (click)="addToCart(item)" class="animated fadeIn">\n\n        <ion-card>\n\n          <ion-chip color="light" style="position: absolute; right: 20px; top: 20px;">\n\n            <ion-label>{{item.product_category.title}}</ion-label>\n\n          </ion-chip>\n\n          <img [src]="item.image" no-margin/>\n\n          <div padding>\n\n            <h2>{{item.title}}</h2>\n\n            <h4>  {{item.price|currency:\'INR\'}}</h4>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      \n\n      \n\n      \n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\myshop\myshop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], MyshopPage);
    return MyshopPage;
}());

//# sourceMappingURL=myshop.js.map

/***/ })

});
//# sourceMappingURL=22.js.map