webpackJsonp([27],{

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]]
        })
    ], ContactPageModule);
    return ContactPageModule;
}());

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var ContactPage = /** @class */ (function () {
    function ContactPage(services, alertCtrl, actionSheetCtrl, utility, navCtrl, camera, transfer, file) {
        this.services = services;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.utility = utility;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.enableNotifications = true;
        this.userdata = {};
    }
    ContactPage.prototype.ionViewDidEnter = function () {
        this.userdata = JSON.parse(localStorage.getItem('userdetails'));
    };
    ContactPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.userdata = JSON.parse(localStorage.getItem('userdetails'));
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ContactPage.prototype.join = function () {
        this.navCtrl.push("VendorjoinPage");
    };
    ContactPage.prototype.saveProfileEdit = function () {
        var _this = this;
        this.services.updateuser(this.userdata).subscribe(function (response) {
            var msg = { msg: 'saved ', duration: 3000, position: 'centre' };
            localStorage.setItem('userdetails', JSON.stringify(_this.userdata));
            _this.utility.messageToast(msg);
            _this.services.clearUser();
            _this.ionViewDidEnter();
        });
    };
    ContactPage.prototype.changePassword = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'change Password',
            message: "Enter Password",
            inputs: [
                {
                    name: 'password',
                    placeholder: 'password'
                },
                {
                    name: 'cpassword',
                    placeholder: 'Confirm password'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        if (!data.password || !data.cpassword) {
                            var msg = { msg: 'Please enter your password and confirm password', duration: 3000, position: 'centre' };
                            _this.utility.showToast(msg);
                            return false;
                        }
                        if (data.password.length < 5) {
                            var msg = { msg: 'Please enter at least 6 length password', duration: 3000, position: 'centre' };
                            _this.utility.showToast(msg);
                            return false;
                        }
                        __WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */];
                        if (data.password != data.cpassword) {
                            var msg = { msg: 'Password and confirm password not match', duration: 3000, position: 'centre' };
                            _this.utility.showToast(msg);
                            return false;
                        }
                        _this.services.changePassword(data).subscribe(function (response) {
                            if (response == null) {
                                var msg = { msg: 'Password Changed', duration: 3000, position: 'centre' };
                                _this.utility.showToast(msg);
                            }
                            else {
                                var msg = { msg: response.message, duration: 3000, position: 'centre' };
                                _this.utility.showToast(msg);
                            }
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    ContactPage.prototype.updateProfileImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var actionSheet;
            return __generator(this, function (_a) {
                actionSheet = this.actionSheetCtrl.create({
                    title: 'Choose',
                    buttons: [
                        {
                            text: 'Camera',
                            handler: function () {
                                _this.utility.opencamera('camera');
                            }
                        },
                        {
                            text: 'Gallery',
                            handler: function () {
                                _this.utility.opencamera('file');
                            }
                        },
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                            }
                        }
                    ]
                });
                actionSheet.present();
                return [2 /*return*/];
            });
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-navbar >\n\n      <ion-title>User Settings</ion-title>\n\n \n\n    </ion-navbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content  class="animated fadeIn" >\n\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content></ion-refresher-content>\n\n      </ion-refresher>\n\n    \n\n  <div class="profile-imgouter" >\n\n      <div class="img-bgt"></div>\n\n      <div (click)="updateProfileImage()" class="p-img-outer">\n\n        <img class="animated flip"  *ngIf="userdata.profile_image!=null" [src]="userdata.profile_image">\n\n        <img *ngIf="userdata.profile_image==null" src="assets/imgs/avatar.png">\n\n      </div>\n\n      <p class="username">{{userdata.firstname}}  {{userdata.lastname}}</p>\n\n      <ion-icon name="star-outline"></ion-icon>\n\n      <ion-icon name="star-outline"></ion-icon>\n\n      <ion-icon name="star-outline"></ion-icon>\n\n      <ion-icon name="star-outline"></ion-icon>\n\n      <ion-icon name="star-outline"></ion-icon>\n\n      <p class="owner">Owner</p>\n\n<button   (click)="changePassword()" ion-button clear>    Change Password\n\n</button>\n\n</div>\n\n    <div padding>\n\n  <ion-list no-border>\n\n    \n\n    <h4 class="headingB">General</h4>\n\n    <ion-item>\n\n\n\n             <ion-label fixed>   <ion-icon name="call"></ion-icon> Phone</ion-label>\n\n            <ion-input type="text" value="" [(ngModel)]="userdata.phone"></ion-input>\n\n     </ion-item>\n\n    <ion-item>\n\n\n\n        <ion-label fixed>   <ion-icon name="mail"></ion-icon> Email</ion-label>\n\n       <ion-input type="text" value="" [(ngModel)]="userdata.email"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label fixed>   <ion-icon name="ios-stats-outline"></ion-icon> Zip</ion-label>\n\n     <ion-input type="text" value="" [(ngModel)]="userdata.zip"></ion-input>\n\n\n\n\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>   <ion-icon name="school"></ion-icon> About</ion-label>\n\n     <ion-textarea [(ngModel)]="userdata.about"></ion-textarea>\n\n\n\n\n\n\n\n    </ion-item>\n\n    <ion-item>\n\n      <p>\n\n          <ion-icon name="share"></ion-icon>\n\n\n\n        Joined</p><p   item-end>{{userdata.createdAt|date}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n \n\n\n\n  \n\n  \n\n\n\n  <button icon="people" ion-button full round  (click)="saveProfileEdit()" class="login-button mrt16">\n\n    Save\n\n  </button>\n\n\n\n \n\n\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=27.js.map