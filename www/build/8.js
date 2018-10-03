webpackJsonp([8],{

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostdetailsPageModule", function() { return PostdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postdetails__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(514);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PostdetailsPageModule = /** @class */ (function () {
    function PostdetailsPageModule() {
    }
    PostdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__postdetails__["a" /* PostdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__postdetails__["a" /* PostdetailsPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */]]
        })
    ], PostdetailsPageModule);
    return PostdetailsPageModule;
}());

//# sourceMappingURL=postdetails.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchNavigator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(35);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name Launch Navigator
 * @description
 * Requires Cordova plugin: uk.co.workingedge.phonegap.plugin.launchnavigator. For more info, please see the [LaunchNavigator plugin docs](https://github.com/dpa99c/phonegap-launch-navigator).
 *
 * @usage
 * Please refer to the plugin's repo for detailed usage. This docs page only explains the Native wrapper.
 *
 * ```typescript
 * import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
 *
 * constructor(private launchNavigator: LaunchNavigator) { }
 *
 * ...
 *
 * let options: LaunchNavigatorOptions = {
 *   start: 'London, ON',
 *   app: LaunchNavigator.APPS.UBER
 * };
 *
 * this.launchNavigator.navigate('Toronto, ON', options)
 *   .then(
 *     success => console.log('Launched navigator'),
 *     error => console.log('Error launching navigator', error)
 *   );
 * ```
 * @interfaces
 * LaunchNavigatorOptions
 * PromptsOptions
 * RememberChoiceOptions
 * AppSelectionOptions
 * UserChoice
 * UserPrompted
 * AppSelection
 */
var LaunchNavigator = (function (_super) {
    __extends(LaunchNavigator, _super);
    function LaunchNavigator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.APP = {
            USER_SELECT: 'user_select',
            APPLE_MAPS: 'apple_maps',
            GOOGLE_MAPS: 'google_maps',
            WAZE: 'waze',
            CITYMAPPER: 'citymapper',
            NAVIGON: 'navigon',
            TRANSIT_APP: 'transit_app',
            YANDEX: 'yandex',
            UBER: 'uber',
            TOMTOM: 'tomtom',
            BING_MAPS: 'bing_maps',
            SYGIC: 'sygic',
            HERE_MAPS: 'here_maps',
            MOOVIT: 'moovit'
        };
        _this.TRANSPORT_MODE = {
            DRIVING: 'driving',
            WALKING: 'walking',
            BICYCLING: 'bicycling',
            TRANSIT: 'transit'
        };
        return _this;
    }
    /**
     * Launches navigator app
     * @param destination {string|number[]} Location name or coordinates (as string or array)
     * @param options {LaunchNavigatorOptions}
     * @returns {Promise<any>}
     */
    /**
       * Launches navigator app
       * @param destination {string|number[]} Location name or coordinates (as string or array)
       * @param options {LaunchNavigatorOptions}
       * @returns {Promise<any>}
       */
    LaunchNavigator.prototype.navigate = /**
       * Launches navigator app
       * @param destination {string|number[]} Location name or coordinates (as string or array)
       * @param options {LaunchNavigatorOptions}
       * @returns {Promise<any>}
       */
    function (destination, options) { return; };
    /**
     * Determines if the given app is installed and available on the current device.
     * @param app {string}
     * @returns {Promise<any>}
     */
    /**
       * Determines if the given app is installed and available on the current device.
       * @param app {string}
       * @returns {Promise<any>}
       */
    LaunchNavigator.prototype.isAppAvailable = /**
       * Determines if the given app is installed and available on the current device.
       * @param app {string}
       * @returns {Promise<any>}
       */
    function (app) { return; };
    /**
     * Returns a list indicating which apps are installed and available on the current device.
     * @returns {Promise<string[]>}
     */
    /**
       * Returns a list indicating which apps are installed and available on the current device.
       * @returns {Promise<string[]>}
       */
    LaunchNavigator.prototype.availableApps = /**
       * Returns a list indicating which apps are installed and available on the current device.
       * @returns {Promise<string[]>}
       */
    function () { return; };
    /**
     * Returns the display name of the specified app.
     * @param app {string}
     * @returns {string}
     */
    /**
       * Returns the display name of the specified app.
       * @param app {string}
       * @returns {string}
       */
    LaunchNavigator.prototype.getAppDisplayName = /**
       * Returns the display name of the specified app.
       * @param app {string}
       * @returns {string}
       */
    function (app) { return; };
    /**
     * Returns list of supported apps on a given platform.
     * @param platform {string}
     * @returns {string[]}
     */
    /**
       * Returns list of supported apps on a given platform.
       * @param platform {string}
       * @returns {string[]}
       */
    LaunchNavigator.prototype.getAppsForPlatform = /**
       * Returns list of supported apps on a given platform.
       * @param platform {string}
       * @returns {string[]}
       */
    function (platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of transport mode.
     * @param app {string} specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * Indicates if an app on a given platform supports specification of transport mode.
       * @param app {string} specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsTransportMode = /**
       * Indicates if an app on a given platform supports specification of transport mode.
       * @param app {string} specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * Returns the list of transport modes supported by an app on a given platform.
     * @param app {string}
     * @param platform {string}
     * @returns {string[]}
     */
    /**
       * Returns the list of transport modes supported by an app on a given platform.
       * @param app {string}
       * @param platform {string}
       * @returns {string[]}
       */
    LaunchNavigator.prototype.getTransportModes = /**
       * Returns the list of transport modes supported by an app on a given platform.
       * @param app {string}
       * @param platform {string}
       * @returns {string[]}
       */
    function (app, platform) { return; };
    /**
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsDestName = /**
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of start location.
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * Indicates if an app on a given platform supports specification of start location.
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsStart = /**
       * Indicates if an app on a given platform supports specification of start location.
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsStartName = /**
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of launch mode.
     * Note that currently only Google Maps on Android does.
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * Indicates if an app on a given platform supports specification of launch mode.
       * Note that currently only Google Maps on Android does.
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsLaunchMode = /**
       * Indicates if an app on a given platform supports specification of launch mode.
       * Note that currently only Google Maps on Android does.
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * @param destination {string | number[]}
     * @param options {LaunchNavigatorOptions}
     */
    /**
       * @param destination {string | number[]}
       * @param options {LaunchNavigatorOptions}
       */
    LaunchNavigator.prototype.userSelect = /**
       * @param destination {string | number[]}
       * @param options {LaunchNavigatorOptions}
       */
    function (destination, options) { };
    LaunchNavigator.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 2,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], LaunchNavigator.prototype, "navigate", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], LaunchNavigator.prototype, "isAppAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LaunchNavigator.prototype, "availableApps", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", String)
    ], LaunchNavigator.prototype, "getAppDisplayName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Array)
    ], LaunchNavigator.prototype, "getAppsForPlatform", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsTransportMode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Array)
    ], LaunchNavigator.prototype, "getTransportModes", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsDestName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsStart", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsStartName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsLaunchMode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LaunchNavigator.prototype, "userSelect", null);
    /**
     * @name Launch Navigator
     * @description
     * Requires Cordova plugin: uk.co.workingedge.phonegap.plugin.launchnavigator. For more info, please see the [LaunchNavigator plugin docs](https://github.com/dpa99c/phonegap-launch-navigator).
     *
     * @usage
     * Please refer to the plugin's repo for detailed usage. This docs page only explains the Native wrapper.
     *
     * ```typescript
     * import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
     *
     * constructor(private launchNavigator: LaunchNavigator) { }
     *
     * ...
     *
     * let options: LaunchNavigatorOptions = {
     *   start: 'London, ON',
     *   app: LaunchNavigator.APPS.UBER
     * };
     *
     * this.launchNavigator.navigate('Toronto, ON', options)
     *   .then(
     *     success => console.log('Launched navigator'),
     *     error => console.log('Error launching navigator', error)
     *   );
     * ```
     * @interfaces
     * LaunchNavigatorOptions
     * PromptsOptions
     * RememberChoiceOptions
     * AppSelectionOptions
     * UserChoice
     * UserPrompted
     * AppSelection
     */
    LaunchNavigator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'LaunchNavigator',
            plugin: 'uk.co.workingedge.phonegap.plugin.launchnavigator',
            pluginRef: 'launchnavigator',
            repo: 'https://github.com/dpa99c/phonegap-launch-navigator',
            platforms: ['Android', 'iOS', 'Windows', 'Windows Phone 8']
        })
    ], LaunchNavigator);
    return LaunchNavigator;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utility_utility__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__ = __webpack_require__(514);
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
* Generated class for the PostdetailsPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var PostdetailsPage = /** @class */ (function () {
    function PostdetailsPage(utility, navCtrl, navParams, _services, launchNavigator) {
        this.utility = utility;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._services = _services;
        this.launchNavigator = launchNavigator;
        this.postdetails = {};
        this.category = {};
        this.userdetails = {};
        this.imagedetails = [];
        this.productCategoryList = [];
        this.post = this.navParams.data.id;
        //console.log("crash", this.navParams.data.id);
    }
    PostdetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        //console.log('ionViewDidLoad PostdetailsPage');
        this._services.getPostDetails(this.post).subscribe(function (Response) {
            //console.log(Response.data);
            _this.postdetails = Response.data.post;
            _this.userdetails = Response.data.user;
            _this.category = Response.data.category;
            //console.log("userdetails", this.category);
            var image = Response.data.image;
            if (image.length < 1) {
                var res = {};
                res['image'] = 'assets/imgs/placeholder.png';
                _this.imagedetails.push(res);
                return false;
            }
            var imageval = [];
            image.forEach(function (element) {
                var res = {};
                res['image'] = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].SOCKET_ENDPOINT + "image/postimage/" + element.image;
                imageval.push(res);
            });
            _this.imagedetails = imageval;
        });
        this.getProductCategory();
    };
    PostdetailsPage.prototype.goTovendorDetails = function (item) {
        this.navCtrl.push("ProfilePage", { data: item });
    };
    PostdetailsPage.prototype.openChat = function (item) {
        console.log(item.userid);
        this.navCtrl.push('ChatPage', { id: '5b1c0d796728f530bbd321dd' });
    };
    PostdetailsPage.prototype.goToPage = function (page) {
        this.navCtrl.push(page, { id: this.post, type: 'post' });
    };
    PostdetailsPage.prototype.goToMap = function (item) {
        var mylocation = JSON.parse(localStorage.getItem('userdetails'));
        var options = {
            start: mylocation.address,
        };
        this.launchNavigator.navigate(item.address, options)
            .then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator', error); });
    };
    PostdetailsPage.prototype.getProductCategory = function () {
        var _this = this;
        var obj = {
            shopid: this.post
        };
        console.log(obj);
        this._services.getProductCategory(obj).subscribe(function (Response) {
            _this.productCategoryList = Response.response.data;
            //console.log(Response);
        }, function (Error) {
            //console.log(Error);
        });
    };
    PostdetailsPage.prototype.showProduct = function (item) {
        console.log(item);
        this.navCtrl.push('ProductPage', { id: item.id });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], PostdetailsPage.prototype, "slides", void 0);
    PostdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-postdetails',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\postdetails\postdetails.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{category.title}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content fullscreen elestic-header>\n\n  <section class="housing-image animated fadeIn">\n\n          <ion-slides  *ngIf="imagedetails && imagedetails.length" loop="true" autoplay="1000" pager  effect="fade">\n\n            <ion-slide *ngFor="let item of imagedetails" [ngStyle]="{\'background\' : \'url(\' + item.image + \')no-repeat\',\'background-size\':\'cover\'}">\n\n              <section class="housing-banner">\n\n                 <span class="price"> {{postdetails.title}}</span>\n\n              </section>\n\n            </ion-slide>\n\n          </ion-slides>\n\n  </section>\n\n  <section class="main-content animated fadeIn">\n\n    <ion-grid class="main-features">\n\n      <ion-row>\n\n        <ion-col text-center col-3>\n\n            <a  href="tel:{{postdetails.phone}}" color="secondary"  >    \n\n              <ion-icon name="call"></ion-icon>\n\n              <span class="e-name">call</span>\n\n        </a>\n\n        </ion-col>\n\n        <ion-col text-center  col-3 (click)="goToMap(postdetails)">\n\n          <ion-icon name="pin"></ion-icon>\n\n          <span class="e-name">location</span>\n\n        </ion-col>\n\n        <ion-col text-center col-3 (click)="goToPage(\'ReviewPage\')">\n\n          <ion-icon name="star"></ion-icon>\n\n          <span class="e-name">rating</span>\n\n        </ion-col>\n\n        <ion-col text-center  col-3 (click)="openChat(postdetails)">\n\n          <ion-icon name="mail"></ion-icon>\n\n          <span class="e-name">chat</span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-grid class="listing-details" no-padding>\n\n      <ion-row *ngIf="postdetails.description">\n\n        <section padding class="dtls-bx">\n\n           <h4 class="heading">Description :</h4>\n\n           <p class="details" [innerHtml]="postdetails.description"> </p>\n\n      </section>\n\n     </ion-row>\n\n<!-- product category -->\n\n     <ion-list  class="prdtTitle">\n\n        <ion-item *ngFor="let item of productCategoryList" (click)="showProduct(item)">\n\n            <ion-label>{{item.title}}</ion-label>\n\n         </ion-item>\n\n    </ion-list> \n\n  <!-- product category -->\n\n      <ion-row *ngIf="postdetails.address">\n\n         <section padding class="dtls-bx">\n\n            <h4 class="heading">Address :</h4>\n\n            <p class="details"> {{postdetails.address}}</p>\n\n       </section>\n\n      </ion-row>\n\n      <ion-row *ngIf="postdetails.timing>0">\n\n          <section padding class="dtls-bx">\n\n              <h4 class="heading">Timing :</h4>\n\n              <p class="details" *ngFor="let item of postdetails.timing"> {{item}}</p>\n\n         </section>\n\n        </ion-row>\n\n        <ion-row *ngIf="postdetails.phone">\n\n        <section padding class="dtls-bx">\n\n            <h4 class="heading">Phone :</h4>\n\n            <p class="details"> {{postdetails.phone}}</p>\n\n       </section>\n\n      </ion-row>\n\n      <ion-row *ngIf="postdetails.rating">\n\n        <section padding class="dtls-bx">\n\n            <h4 class="heading">Rating :</h4>\n\n            <p class="details"> {{postdetails.rating}}</p>\n\n       </section>\n\n      </ion-row>\n\n      <ion-row *ngIf="postdetails.website">\n\n          <section padding class="dtls-bx">\n\n              <h4 class="heading">Website :</h4>\n\n              <p class="details"> {{postdetails.website}}</p>\n\n         </section>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <div class="padd50"></div>\n\n  </section>\n\n</ion-content>\n\n<ion-footer>\n\n  <a class="btngtn" href="tel:{{postdetails.phone}}"  ion-button large full no-margin >\n\n    Get in touch now\n\n  </a>\n\n</ion-footer>\n\n'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\postdetails\postdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], PostdetailsPage);
    return PostdetailsPage;
}());

//# sourceMappingURL=postdetails.js.map

/***/ })

});
//# sourceMappingURL=8.js.map