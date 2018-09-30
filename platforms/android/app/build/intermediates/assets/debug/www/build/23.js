webpackJsonp([23],{

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(504);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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






var HomePage = /** @class */ (function () {
    function HomePage(menuCtrl, events, utility, navCtrl, navParams, _services, viewCtrl, modalCtrl) {
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.utility = utility;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._services = _services;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.categoryList = [];
        this.banner = [];
        this.bannerone = [];
        this.saveDevicesToken();
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.menuCtrl.enable(true);
        var location = this._services.getGeolocation();
        this._services.getCategory().subscribe(function (Response) {
            _this.categoryList = Response.data;
        }, function (Error) {
        });
        this._services.getBanner().subscribe(function (Response) {
            var result = Response.response.data;
            var banner1 = [];
            var banner2 = [];
            var banner3 = [];
            result.forEach(function (element) {
                var val = {};
                if (element.bannerindex == 1) {
                    val['image'] = element.image;
                    val['bannerindex'] = element.bannerindex;
                    val['linkto'] = element.linkto;
                    banner1.push(val);
                }
                if (element.bannerindex == 2) {
                    val['image'] = element.image;
                    val['bannerindex'] = element.bannerindex;
                    banner2.push(val);
                }
                if (element.bannerindex == 3) {
                    val['image'] = element.image;
                    val['bannerindex'] = element.bannerindex;
                    banner3.push(val);
                }
            });
            _this.bannerone = banner1;
            _this.banner.push(banner2);
            _this.banner.push(banner3);
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var objdata = {
            id: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER._id,
        };
        this._services.getNotification(objdata).subscribe(function (response) {
            var res = response.response.data;
            _this.notificationList = res.length;
        }, function (error) {
        });
        setTimeout(function () {
            if (localStorage.getItem('addshown') === null) {
                _this.PromotionModal();
                localStorage.setItem('addshown', '1');
            }
        }, 5000);
    };
    HomePage.prototype.goToPostPage = function (item) {
        this.navCtrl.push("PostPage", { id: item._id, title: item.title, image: item.image });
        //this.navCtrl.push("TagsPage", { id: item._id })
    };
    HomePage.prototype.goToNotification = function () {
        this.navCtrl.push("NotificationPage");
    };
    HomePage.prototype.openMenu = function () {
        this.events.publish('userdetails');
        this.menuCtrl.open();
    };
    HomePage.prototype.goToSearch = function () {
        this.navCtrl.push("SearchPage");
    };
    HomePage.prototype.saveDevicesToken = function () {
        var obj = {
            devicesid: localStorage.getItem('devices_token'),
            userid: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER._id,
            user_type: 'customer',
        };
        this._services.saveDevicesToken(obj).subscribe(function (response) {
        });
    };
    HomePage.prototype.showPromoterCategory = function (item) {
        if (item[0].bannerindex == 2) {
            var item_1 = {
                _id: '5b05aefe5c669d0676a6b1f6',
                title: 'Restaurant'
            };
            this.navCtrl.push("PostPage", { id: item_1._id, title: item_1.title });
        }
        if (item[0].bannerindex == 3) {
            this.navCtrl.push('PromoterCategoryPage');
        }
    };
    HomePage.prototype.goToPost = function (item) {
        if (item.linkto == null) {
            return false;
        }
        this.navCtrl.push("PostdetailsPage", { id: item.linkto.id });
    };
    HomePage.prototype.ionViewWillLeave = function () {
    };
    //MODAL FUNCTION
    HomePage.prototype.PromotionModal = function () {
        var modal = this.modalCtrl.create('PromotionModalPage');
        modal.present();
    };
    HomePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], HomePage.prototype, "slider", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\home\home.html"*/'<ion-header >\n\n    <ion-toolbar color="primary">\n\n      <button ion-button (click)="openMenu()" menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n</ion-navbar>\n\n<ion-buttons end>\n\n  <button (click)="PromotionModal()" ion-button icon-only>\n\n    <ion-icon name="add-circle"></ion-icon>\n\n  </button>\n\n<button (click)="goToSearch()" ion-button icon-only>\n\n    <ion-icon name="search"></ion-icon>\n\n  </button>\n\n</ion-buttons>\n\n\n\n<ion-buttons end>\n\n\n\n<!-- <button (click)="goToNotification()" ion-button icon-only>\n\n    <ion-icon ios="ios-notifications-outline" md="md-notifications-outline">\n\n{{notificationList}}\n\n\n\n    </ion-icon>\n\n  </button> -->\n\n  \n\n  <button ion-button icon-only (click)="goToNotification()">\n\n      <ion-badge *ngIf="notificationList" color="danger">{{ notificationList }}</ion-badge>\n\n      <ion-icon name="notifications"></ion-icon>\n\n    </button>\n\n</ion-buttons>\n\n\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n \n\n<ion-content>\n\n     <div   class="slder-height animated fadeIn"  >\n\n        <ion-slides *ngIf="bannerone.length"  loop="true" autoplay="3000" pager  effect="fade" class="animated fadeIn">\n\n            <ion-slide  *ngFor="let i of bannerone" (click)="goToPost(i)">\n\n                <img [src]="i.image" />\n\n            </ion-slide>\n\n            \n\n          </ion-slides>\n\n        </div> \n\n         \n\n\n\n\n\n<div  *ngFor="let item of banner" class="slder-height animated fadeIn" (click)="showPromoterCategory(item)">\n\n    <ion-slides loop="true" autoplay="1000" pager  effect="fade" class="animated fadeIn">\n\n        <ion-slide *ngFor="let i of item" >\n\n            <img [src]="i.image" />\n\n        </ion-slide>\n\n        \n\n      </ion-slides>\n\n    </div> \n\n\n\n\n\n\n\n\n\n  <ion-grid class="cate-lst">\n\n    <ion-row wrap>\n\n      <ion-col class="animated fadeIn" col-4 *ngFor="let item of categoryList" (click)="goToPostPage(item)">\n\n        <img [src]="item.image"  />\n\n        <p>{{ item.title }}</p>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=23.js.map