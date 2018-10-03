webpackJsonp([16],{

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QtyModalPageModule", function() { return QtyModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qty_modal__ = __webpack_require__(543);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QtyModalPageModule = /** @class */ (function () {
    function QtyModalPageModule() {
    }
    QtyModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__qty_modal__["a" /* QtyModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__qty_modal__["a" /* QtyModalPage */]),
            ],
        })
    ], QtyModalPageModule);
    return QtyModalPageModule;
}());

//# sourceMappingURL=qty-modal.module.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QtyModalPage; });
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
* Generated class for the QtyModalPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var QtyModalPage = /** @class */ (function () {
    function QtyModalPage(navParams, utility, navCtrl, _services, events, viewCtrl, modalCtrl) {
        this.navParams = navParams;
        this.utility = utility;
        this.navCtrl = navCtrl;
        this._services = _services;
        this.events = events;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.qty = 1;
        this.productid = this.navParams.data.id;
        console.log(this.navParams.data.id);
    }
    QtyModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QtyModalPage');
    };
    QtyModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    QtyModalPage.prototype.increment = function (i) {
        this.qty++;
    };
    QtyModalPage.prototype.decrement = function (i) {
        if (this.qty === 0) {
            return false;
        }
        this.qty--;
    };
    QtyModalPage.prototype.addToCart = function () {
        var _this = this;
        if (this.qty == 0) {
            return false;
        }
        console.log(this.productid);
        var obj = {
            quantity: this.qty,
            productid: this.productid.id,
            price: this.productid.price,
            userid: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER._id,
            shopid: this.productid.product_category.shopid,
            status: 0
        };
        console.log(obj);
        this._services.addToCart(obj).subscribe(function (Response) {
            var msg = {
                msg: " " + _this.productid.title + " added " + _this.qty,
                duration: 3000
            };
            _this.utility.showToast(msg);
            console.log(Response);
            _this.events.publish('cartupdated');
        });
        this.viewCtrl.dismiss();
    };
    QtyModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-qty-modal',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\qty-modal\qty-modal.html"*/'<!--\n\n  Generated template for the QtyModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content>\n\n  <div class="mdl-box">\n\n      <div class="pop-hdr">\n\n        <span class="head-txt">\n\n          {{productid.title}}\n\n        </span> <button class="btn-close-pop" (click)="dismiss()"><ion-icon name="close-circle"></ion-icon></button>\n\n      </div>\n\n      <div class="pop-details-c">\n\n        <div class="select-bx">\n\n          <div class="label-slt">Select Quantity</div>\n\n            <div class="addbtn">\n\n              <ion-icon name="remove" (click)="decrement()"></ion-icon>\n\n              <span class="crntcount"> {{ qty }}</span>\n\n              <ion-icon name="add" (click)="increment()"></ion-icon>\n\n            </div>\n\n          </div>\n\n         <button ion-button class="btn-addtocrt" (click)="addToCart()">Add to cart</button>\n\n      </div>\n\n      \n\n </div>\n\n</ion-content>'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\qty-modal\qty-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */]])
    ], QtyModalPage);
    return QtyModalPage;
}());

//# sourceMappingURL=qty-modal.js.map

/***/ })

});
//# sourceMappingURL=16.js.map