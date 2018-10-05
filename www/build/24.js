webpackJsonp([24],{

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(527);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(262);
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
* Generated class for the LoginPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var LoginPage = /** @class */ (function () {
    function LoginPage(utility, fb, events, alertCtrl, navCtrl, platform, navParams, menu, _services) {
        this.utility = utility;
        this.fb = fb;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.menu = menu;
        this._services = _services;
        this.user = {};
        this.login_page = true;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.menu.enable(false);
        console.log('ionViewDidLoad LoginPage');
        this.getaddress();
    };
    LoginPage.prototype.gotoregister = function () {
        this.login_page = false;
    };
    LoginPage.prototype.gotologin = function () {
        this.login_page = true;
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this._services.doLogin(this.user).subscribe(function (Response) {
            console.log("crash", Response);
            if (Response.success == true) {
                _this.verifyPhoneNumber();
                localStorage.setItem('token', Response.data.token);
                localStorage.setItem('userdetails', JSON.stringify(Response.data.userDetails));
            }
            else {
                var msg = {
                    msg: Response.message,
                    duration: 3000,
                    position: 'centre',
                };
                _this.utility.messageToast(msg);
            }
        });
    };
    LoginPage.prototype.register = function () {
        var _this = this;
        var address = JSON.parse(localStorage.getItem('address'));
        var stringExp = /^[a-zA-Z]+$/;
        var emailExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.user.firstname == undefined || this.user.firstname == "") {
            var msg = { msg: 'First name is required', duration: 3000, position: 'centre' };
            this.utility.messageToast(msg);
            return false;
        }
        if (stringExp.test(this.user.firstname) == false) {
            var msg = { msg: 'First name should be character only', duration: 3000, position: 'centre' };
            this.utility.messageToast(msg);
            return false;
        }
        if (this.user.lastname == undefined || this.user.lastname == "") {
            var msg = { msg: 'Last name is required', duration: 3000, position: 'centre' };
            this.utility.messageToast(msg);
            return false;
        }
        if (stringExp.test(this.user.lastname) == false) {
            var msg_1 = { msg: 'Last name should be character only', duration: 3000, position: 'centre' };
            this.utility.messageToast(msg_1);
            return false;
        }
        if (this.user.email == undefined || this.user.email == "") {
            var msg_2 = { msg: 'Email is required', duration: 3000, position: 'centre' };
            this.utility.messageToast(msg_2);
            return false;
        }
        if (emailExp.test(this.user.email) == false) {
            var msg_3 = { msg: 'Enter valid email ', duration: 3000, position: 'centre' };
            this.utility.messageToast(msg_3);
            return false;
        }
        if (this.user.password == undefined || this.user.password == "") {
            var msg_4 = { msg: 'Password is required', duration: 3000, position: 'centre' };
            this.utility.messageToast(msg_4);
            return false;
        }
        if (this.user.password.length < 5) {
            var msg_5 = { msg: 'Password atleast 6 character required', duration: 3000, position: 'centre' };
            this.utility.messageToast(msg_5);
            return false;
        }
        var obj = {
            firstname: this.user.firstname,
            lastname: this.user.lastname,
            email: this.user.email,
            password: this.user.password,
            type: 'customer',
            location: JSON.parse(localStorage.getItem('location')),
            address: address.street,
            state: address.state,
            city: address.city,
            country: address.country,
        };
        this._services.register(obj).subscribe(function (Response) {
            if (Response.success == true) {
                var msg_6 = { msg: 'Successful register login now', duration: 3000, position: 'centre' };
                _this.utility.messageToast(msg_6);
                _this.gotologin();
            }
            else {
                var msg_7 = { msg: Response.message, duration: 3000, position: 'centre' };
                _this.utility.messageToast(msg_7);
            }
            console.log(Response);
        });
    };
    LoginPage.prototype.getaddress = function () {
        this._services.getaddress().subscribe(function (Response) {
            if (Response.status === 'OK') {
                var results = Response.results;
                console.log(results);
                if (results[0]) {
                    console.log(results[0].formatted_address);
                    var street = "";
                    var city = "";
                    var state = "";
                    var country = "";
                    var zipcode = "";
                    for (var i = 0; i < results.length; i++) {
                        if (results[i].types[0] === "locality") {
                            city = results[i].address_components[0].long_name;
                            state = results[i].address_components[2].long_name;
                            console.log(city, state);
                        }
                        if (results[i].types[0] === "postal_code" && zipcode == "") {
                            zipcode = results[i].address_components[0].long_name;
                        }
                        if (results[i].types[0] === "country") {
                            country = results[i].address_components[0].long_name;
                        }
                        if (results[i].types[0] === "route" && street == "") {
                            for (var j = 0; j < 4; j++) {
                                if (j == 0) {
                                    street = results[i].address_components[j].long_name;
                                }
                                else {
                                    street += ", " + results[i].address_components[j].long_name;
                                }
                            }
                        }
                        if (results[i].types[0] === "street_address") {
                            for (var j = 0; j < 4; j++) {
                                if (j == 0) {
                                    street = results[i].address_components[j].long_name;
                                }
                                else {
                                    street += ", " + results[i].address_components[j].long_name;
                                }
                            }
                        }
                    }
                    if (zipcode == "") {
                        if (typeof results[0].address_components[8] !== 'undefined') {
                            zipcode = results[0].address_components[8].long_name;
                        }
                    }
                    if (country == "") {
                        if (typeof results[0].address_components[7] !== 'undefined') {
                            country = results[0].address_components[7].long_name;
                        }
                    }
                    if (state == "") {
                        if (typeof results[0].address_components[6] !== 'undefined') {
                            state = results[0].address_components[6].long_name;
                        }
                    }
                    if (city == "") {
                        if (typeof results[0].address_components[5] !== 'undefined') {
                            city = results[0].address_components[5].long_name;
                        }
                    }
                    var address = {
                        "street": results[0].formatted_address,
                        "city": city,
                        "state": state,
                        "country": country,
                        "zipcode": zipcode,
                    };
                    localStorage.setItem('address', JSON.stringify(address));
                    console.log(address);
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    LoginPage.prototype.fbook = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            _this._services.getFacebookGraphApi(res).subscribe(function (Response) {
                console.log('graph api', Response);
                var obj = {
                    firstname: Response.first_name,
                    lastname: Response.last_name,
                    email: Response.email,
                    about: Response.about,
                    profile_image: Response.picture.data.url,
                    birthday: Response.birthday,
                    facebook_id: Response.id,
                    type: 'customer',
                    location: JSON.parse(localStorage.getItem('location')),
                    address: JSON.parse(localStorage.getItem('address')),
                };
                _this.user = {
                    imageUrl: obj.profile_image,
                    name: obj.firstname + ' ' + obj.lastname,
                };
                _this.fbLogin(obj);
            });
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.fbLogin = function (data) {
        var _this = this;
        this._services.login(data).subscribe(function (Response) {
            console.log(Response);
            if (Response.success) {
                localStorage.setItem('token', Response.data.token);
                localStorage.setItem('userdetails', JSON.stringify(Response.data.userDetails));
                _this.verifyPhoneNumber();
            }
        });
    };
    LoginPage.prototype.forgetPassword = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Forget Password',
            message: "Enter Email",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        if (!data.email) {
                            var msg = { msg: 'Please enter your register email', duration: 3000, position: 'centre' };
                            _this.utility.showToast(msg);
                            return false;
                        }
                        _this._services.forgetPassword(data).subscribe(function (response) {
                            if (response == null) {
                                var msg = { msg: 'Please check you email and follow the instruction', duration: 3000, position: 'centre' };
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
    LoginPage.prototype.verifyPhoneNumber = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            window.AccountKitPlugin.loginWithPhoneNumber({
                useAccessToken: true,
                defaultCountryCode: "IN",
                facebookNotificationsEnabled: true,
            }, function (data) {
                window.AccountKitPlugin.getAccount(function (info) {
                    console.log(info);
                    _this.userdata = JSON.parse(localStorage.getItem('userdetails'));
                    _this.userdata.phone = info.phoneNumber;
                    _this._services.updateuser(_this.userdata).subscribe(function (response) {
                        var msg = { msg: 'saved ', duration: 3000, position: 'centre' };
                        localStorage.setItem('userdetails', JSON.stringify(_this.userdata));
                        _this.navCtrl.setRoot("HomePage");
                        _this.events.publish('userdetails');
                    });
                }, function (err) {
                    console.log(err);
                });
            });
        }
        else {
            localStorage.setItem('userdetails', JSON.stringify(this.userdata));
            this.navCtrl.setRoot("HomePage");
            this.events.publish('userdetails');
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\login\login.html"*/'<ion-content padding>\n\n  <ion-header>\n\n    <ion-navbar hideBackButton *navbar>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <img class="logo"  src="assets/imgs/logo.png" />\n\n  <div padding>\n\n    <ion-item *ngIf="!login_page">\n\n        <ion-label floating>First name</ion-label>\n\n        <ion-input type="text" [(ngModel)]="user.firstname"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="!login_page">\n\n        <ion-label floating>Last name</ion-label>\n\n        <ion-input type="text" [(ngModel)]="user.lastname"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n    </ion-item>\n\n    <button *ngIf="login_page" ion-button block outline (click)="login()"\n\n     color="light" class="login-button mrt10">Login</button>\n\n\n\n    <button *ngIf="!login_page" ion-button block outline  (click)="register()" color="light" class="login-button mrt10">Register</button>\n\n    <div ion-button block outline clear  text-center (click)="forgetPassword()"><span class="frgt-txt" >Forget Password ?</span></div>\n\n  </div>\n\n  <div class="strike">\n\n    <span>OR</span>\n\n  </div>\n\n  <div padding>\n\n  <button ion-button block  (click)="fbook()" color="light" class="login-button"><ion-icon name="logo-facebook"></ion-icon> Login with Facebook</button>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar class="footer">\n\n    <div ion-button block outline clear *ngIf="login_page" (click)="gotoregister()">\n\n      <span>Don\'t have an account? <strong>Sign up here</strong>.</span>\n\n    </div>\n\n    <div ion-button block outline clear *ngIf="!login_page" (click)="gotologin()">\n\n      <span>Already have an account? <strong>Login here</strong>.</span>\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=24.js.map