webpackJsonp([33],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_ErrorObservable__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_ErrorObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_ErrorObservable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
Generated class for the ServicesProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
var ServicesProvider = /** @class */ (function () {
    function ServicesProvider(http, geolocation) {
        this.http = http;
        this.geolocation = geolocation;
    }
    ServicesProvider.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an ErrorObservable with a user-facing error message+
        return new __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_ErrorObservable__["ErrorObservable"]('Something bad happened; please try again later.');
    };
    ;
    ServicesProvider.prototype.getCategory = function () {
        if (!this.category) {
            this.category = this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + '/get-category')
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(this.handleError), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["publishReplay"])(1), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["refCount"])());
        }
        return this.category;
    };
    ServicesProvider.prototype.getVendor = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + '/get-vendor')
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getFacebookGraphApi = function (data) {
        return this.http.get('https://graph.facebook.com/me/?fields=picture.type(large),email,about,first_name,last_name,address,birthday,cover,age_range&access_token=' + data.authResponse.accessToken)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    //
    // ──────────────────────────────────────────────────────────────────── XIII ──────────
    //   :::::: F A C E B O O K   L O G I N : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────
    //
    ServicesProvider.prototype.login = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + '/fblogin', data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getaddress = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].MAP + '&latlng=' + __WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].LOCATION.latitude + ',' + __WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].LOCATION.longitude)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.addreview = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + '/add-review', data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getreview = function (data) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + "/get-review?id=" + data.id + "&type=" + data.type)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getGeolocation = function () {
        return this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
            var obj = {
                latitude: resp.coords.latitude,
                longitude: resp.coords.longitude
            };
            localStorage.setItem('location', JSON.stringify(obj));
        }).catch(function (error) {
        });
    };
    ServicesProvider.prototype.getChatHistory = function (obj) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + '/chatHistory?remoteUserId=' + obj.remoteuserid + '&page=' + obj.page)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    //
    // ─── GET CHAT USER LIST ─────────────────────────────────────────────────────────
    //
    ServicesProvider.prototype.getChatUserLIst = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + '/chat-user-list');
    };
    ServicesProvider.prototype.getpromoter = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + '/get-promoter')
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.search = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + '/search', data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getPostDetails = function (data) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + '/get-post-details?id=' + data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getPost = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + "/get-post")
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.doLogin = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + '/login', data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.register = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + '/register', data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.updateuser = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + '/updateuser', data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getUserDetails = function () {
        if (!this.userDeatilsData) {
            this.userDeatilsData = this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + '/userdetails')
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(this.handleError), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["publishReplay"])(1), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["refCount"])());
        }
        return this.userDeatilsData;
    };
    ServicesProvider.prototype.clearUser = function () {
        this.userDeatilsData = null;
    };
    ServicesProvider.prototype.forgetPassword = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + "/forget-password", data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.changePassword = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + "/change-password", data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.feedback = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + "/feedback", data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getCms = function (data) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + "/get-cms?pagename=" + data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getTagsById = function (data) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].API_ENDPOINT + "/get-tags-by-id?id=" + data.id)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getProductCategory = function (data) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/get-product-category?shopid=" + data.shopid)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getProduct = function (data) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/get-product?id=" + data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.addToCart = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/add-to-cart", data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getCart = function (data) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/get-cart")
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.shippingAddress = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/add-shipping-address", data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getShippingAddress = function (data) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/get-shipping-address?userid=" + data.userid)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.makePaymenrtRequest = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/payment-link", data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.createOrder = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/create-order", data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getOrderDetails = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/get-order?id=" + id)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getOrderList = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/get-order-list?id=" + id)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.removeItem = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/remove-cart-item", data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.saveDevicesToken = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/add-devices", data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getOrder = function (data) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/get-order?id=" + data.id)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getNotification = function (data) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/get-notification?id=" + data.id)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.MarkSeenNotification = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/mark-read-notification", data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getPromoterCategory = function () {
        console.log('====================================');
        console.log(this.get_promoter_location);
        console.log('====================================');
        if (!this.get_promoter_location) {
            this.get_promoter_location = this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/get-promoter-location")
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(this.handleError), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["publishReplay"])(1), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["refCount"])());
        }
        return this.get_promoter_location;
    };
    ServicesProvider.prototype.getPromoterDetails = function (data) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/get-promoter?id=" + data.id)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getPromoterImage = function (data) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/get-promoter-image?id=" + data.id)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.getBanner = function () {
        if (!this.bannerData) {
            this.bannerData = this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/get-banner")
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(this.handleError), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["publishReplay"])(1), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["refCount"])());
        }
        return this.bannerData;
    };
    ServicesProvider.prototype.getUserRating = function (data) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/get-user-review?id=" + data.id + "&type=" + data.type + "&userid=" + data.userid)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.updatereviewdata = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/update-review", data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.sendOTP = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/shipping-phone-otp", data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider.prototype.verifyOTP = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* Config */].SAIL_ENDPOINT + "/check-phone-otp", data)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    ServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], ServicesProvider);
    return ServicesProvider;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = {
    API_ENDPOINT: 'http://139.59.12.86:3001/api',
    SAIL_ENDPOINT: 'http://139.59.12.86:1337/api',
    //API_ENDPOINT:'http://localhost:3001/api/',
    SOCKET_ENDPOINT: 'http://139.59.12.86:3001/',
    //SOCKET_ENDPOINT:'http://localhost:3001/',
    MAP: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBDt-n9oOzxwirbXz7u0sIZmd9Zhc1LSV8',
    LOCATION: JSON.parse(localStorage.getItem('location')),
    USER: JSON.parse(localStorage.getItem('userdetails'))
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/address/address.module": [
		411,
		32
	],
	"../pages/addreview/addreview.module": [
		412,
		5
	],
	"../pages/apptour/apptour.module": [
		413,
		31
	],
	"../pages/cart/cart.module": [
		414,
		30
	],
	"../pages/chat/chat.module": [
		415,
		29
	],
	"../pages/checkout/checkout.module": [
		416,
		7
	],
	"../pages/cms/cms.module": [
		417,
		28
	],
	"../pages/contact/contact.module": [
		418,
		27
	],
	"../pages/feedback/feedback.module": [
		419,
		26
	],
	"../pages/gallery/gallery.module": [
		420,
		25
	],
	"../pages/gallerymodal/gallerymodal.module": [
		421,
		24
	],
	"../pages/home/home.module": [
		423,
		23
	],
	"../pages/inbox/inbox.module": [
		422,
		0
	],
	"../pages/login/login.module": [
		425,
		22
	],
	"../pages/my-order/my-order.module": [
		424,
		21
	],
	"../pages/myshop/myshop.module": [
		427,
		20
	],
	"../pages/notification/notification.module": [
		426,
		19
	],
	"../pages/order-request/order-request.module": [
		430,
		18
	],
	"../pages/phone-verification/phone-verification.module": [
		432,
		9
	],
	"../pages/post/post.module": [
		428,
		4
	],
	"../pages/postdetails/postdetails.module": [
		429,
		6
	],
	"../pages/product/product.module": [
		431,
		17
	],
	"../pages/profile/profile.module": [
		433,
		8
	],
	"../pages/promoter-category/promoter-category.module": [
		434,
		16
	],
	"../pages/promoter-details/promoter-details.module": [
		435,
		1
	],
	"../pages/promotion-modal/promotion-modal.module": [
		436,
		15
	],
	"../pages/qty-modal/qty-modal.module": [
		439,
		14
	],
	"../pages/review/review.module": [
		437,
		3
	],
	"../pages/search/search.module": [
		438,
		2
	],
	"../pages/tags/tags.module": [
		440,
		13
	],
	"../pages/vendor/vendor.module": [
		441,
		12
	],
	"../pages/vendorjoin/vendorjoin.module": [
		442,
		11
	],
	"../pages/your-order/your-order.module": [
		443,
		10
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 185;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UtilityProvider = /** @class */ (function () {
    function UtilityProvider(toastCtrl, platform, loadingCtrl, toast, transfer, file, events, camera, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.transfer = transfer;
        this.file = file;
        this.events = events;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this._zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]({ enableLongStackTrace: false });
    }
    UtilityProvider.prototype.showAlert = function (data) {
        var alert = this.alertCtrl.create({
            title: data.title,
            subTitle: data.subtitle,
            buttons: ['OK']
        });
        alert.present();
    };
    UtilityProvider.prototype.showToast = function (data) {
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            var toast = this.toastCtrl.create({
                message: data.msg,
                duration: data.duration,
                position: data.position,
            });
            toast.present();
        }
        else {
            this.toast.show(data.msg, data.duration, 'center').subscribe(function (toast) {
            });
        }
    };
    UtilityProvider.prototype.messageToast = function (data) {
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            var toast = this.toastCtrl.create({
                message: data.msg,
                duration: data.duration,
                position: data.position,
            });
            toast.present();
        }
        else {
            this.toast.show(data.msg, data.duration, 'center').subscribe(function (toast) {
            });
        }
    };
    UtilityProvider.prototype.opencamera = function (type) {
        var _this = this;
        var des;
        if (type === 'camera') {
            des = 1;
        }
        else {
            des = 0;
        }
        var options = {
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: des,
            quality: 50,
            allowEdit: true,
            targetHeight: 200,
            targetWidth: 200,
            cameraDirection: 1
        };
        this.camera.getPicture(options).then(function (imageData) {
            var obj = {
                url: 'upload-profile-image',
                id: __WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].USER._id
            };
            _this.upload(imageData, obj);
        }, function (err) {
        });
    };
    //
    // ──────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: S H O W   P R O G R E S S B A R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────────
    //
    UtilityProvider.prototype.progressbar = function (type) {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: "\n    <div class=\"custom-spinner-container\">\n    <div class=\"custom-spinner-box\">" + type + "... </div>\n    </div>",
        });
        this.loading.present();
    };
    //
    // ──────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: U P L O A D   A L L   F I L E S : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────────
    //
    UtilityProvider.prototype.upload = function (imageURI, item) {
        var _this = this;
        var extension = imageURI.split('.').pop();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'profile_image',
            fileName: imageURI.substr(imageURI.lastIndexOf('/') + 1),
            headers: {
                'token': "" + localStorage.getItem('token')
            },
            params: {
                id: item.id
            }
        };
        this.progressbar('Uploading...');
        fileTransfer.upload(imageURI, __WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].API_ENDPOINT + "/" + item.url + "?token=" + localStorage.getItem('token'), options)
            .then(function (data) {
            _this.events.publish('userdetails');
            // success
        }, function (err) {
            var obj = {
                type: 'Uploading',
                progressbar: 'failed'
            };
            _this.updateProgress(obj);
            var msg = {
                msg: 'Error in uploading',
                duration: 3000
            };
            _this.showToast(msg); // error
        });
        fileTransfer.onProgress(function (progressEvent) {
            var progressbar = Math.round(((progressEvent.loaded / progressEvent.total) * 100));
            var obj = {
                type: 'Uploading',
                progressbar: progressbar
            };
            _this.updateProgress(obj);
        });
    };
    //
    // ──────────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: U P D A T E   P R O G R E S S B A R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────────────
    //
    UtilityProvider.prototype.updateProgress = function (data) {
        var _this = this;
        this._zone.run(function () {
            _this.loading.setContent(data.type + "... " + data.progressbar + " % ");
        });
        if (data.progressbar === 100) {
            this._zone.run(function () {
                _this.loading.setSpinner('hide');
                _this.loading.setContent(data.progressbar + " Completed... ");
            });
            var msg = {
                msg: data.type + " done ",
                duration: 3000
            };
            this.showToast(msg);
            setTimeout(function () {
                _this.loading.dismiss();
            }, 2000);
        }
        if (data.progressbar === 'failed') {
            this.loading.setSpinner('hide');
            this.loading.dismiss();
        }
    };
    UtilityProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], UtilityProvider);
    return UtilityProvider;
}());

//# sourceMappingURL=utility.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(263);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_services__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utility_utility__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__interceptor__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_onesignal__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_toast__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_gallery_modal__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_13_ionic_gallery_modal__["c" /* GalleryModalModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/address/address.module#AddressPageModule', name: 'AddressPage', segment: 'address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addreview/addreview.module#AddreviewPageModule', name: 'AddreviewPage', segment: 'addreview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/apptour/apptour.module#ApptourPageModule', name: 'ApptourPage', segment: 'apptour', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'page-chat/id/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cms/cms.module#CmsPageModule', name: 'CmsPage', segment: 'page-cms/pagename/:pagename', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gallery/gallery.module#GalleryPageModule', name: 'GalleryPage', segment: 'page-gallery/id/:id/type/:type', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gallerymodal/gallerymodal.module#GallerymodalPageModule', name: 'GallerymodalPage', segment: 'gallerymodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inbox/inbox.module#InboxPageModule', name: 'InboxPage', segment: 'inbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-order/my-order.module#MyOrderPageModule', name: 'MyOrderPage', segment: 'my-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myshop/myshop.module#MyshopPageModule', name: 'MyshopPage', segment: 'myshop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post/post.module#PostPageModule', name: 'PostPage', segment: 'page-post/id/:id/title/:title', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/postdetails/postdetails.module#PostdetailsPageModule', name: 'PostdetailsPage', segment: 'page-postdetails/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-request/order-request.module#OrderRequestPageModule', name: 'OrderRequestPage', segment: 'order-request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'page-product/id/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/phone-verification/phone-verification.module#PhoneVerificationPageModule', name: 'PhoneVerificationPage', segment: 'phone-verification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/promoter-category/promoter-category.module#PromoterCategoryPageModule', name: 'PromoterCategoryPage', segment: 'promoter-category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/promoter-details/promoter-details.module#PromoterDetailsPageModule', name: 'PromoterDetailsPage', segment: 'page-promoter-details/id/:id/type/:type', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/promotion-modal/promotion-modal.module#PromotionModalPageModule', name: 'PromotionModalPage', segment: 'promotion-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/review/review.module#ReviewPageModule', name: 'ReviewPage', segment: 'page-review/id/:id/type/:type', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qty-modal/qty-modal.module#QtyModalPageModule', name: 'QtyModalPage', segment: 'qty-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tags/tags.module#TagsPageModule', name: 'TagsPage', segment: 'page-tags/id/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vendor/vendor.module#VendorPageModule', name: 'VendorPage', segment: 'vendor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vendorjoin/vendorjoin.module#VendorjoinPageModule', name: 'VendorjoinPage', segment: 'vendorjoin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/your-order/your-order.module#YourOrderPageModule', name: 'YourOrderPage', segment: 'page-your-order/id/:id', priority: 'low', defaultHistory: [] }
                    ]
                })
                //   
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_toast__["a" /* Toast */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */], },
                __WEBPACK_IMPORTED_MODULE_4__providers_services_services__["a" /* ServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_7__providers_utility_utility__["a" /* UtilityProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_9__interceptor__["a" /* Interceptor */], multi: true },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* HAMMER_GESTURE_CONFIG */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13_ionic_gallery_modal__["b" /* GalleryModalHammerConfig */],
                },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
var MyApp = /** @class */ (function () {
    function MyApp(platform, events, oneSignal, _services) {
        var _this = this;
        this.events = events;
        this.oneSignal = oneSignal;
        this._services = _services;
        this.user = {};
        platform.ready().then(function () {
            if (platform.is('cordova')) {
                _this.oneSignal.startInit("a0d66b31-b2a2-4a76-a7b2-54abb0175216", "977511232376");
                _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.InAppAlert);
                _this.oneSignal.handleNotificationReceived().subscribe(function () {
                    // do something when notification is received
                });
                _this.oneSignal.handleNotificationOpened().subscribe(function () {
                    // do something when a notification is opened
                });
                _this.oneSignal.getIds().then(function (data) {
                    localStorage.setItem('devices_token', data.userId);
                });
                _this.oneSignal.endInit();
            }
            var logincheck = localStorage.getItem('token');
            _this._services.getGeolocation();
            var checkApptour = localStorage.getItem('apptour');
            if (checkApptour == 'seen' && logincheck != null) {
                _this.rootPage = "HomePage";
                _this.getUserDetails();
            }
            else {
                _this.rootPage = "ApptourPage";
            }
        });
        events.subscribe('userdetails', function () {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.getUserDetails();
        });
    }
    MyApp.prototype.getUserDetails = function () {
        var _this = this;
        this._services.getUserDetails().subscribe(function (response) {
            localStorage.setItem('userdetails', JSON.stringify(response.data));
            _this.user = response.data;
        });
    };
    // example of adding a transition when pushing a new page
    MyApp.prototype.goToPage = function (page) {
        this.nav.push(page);
    };
    MyApp.prototype.CmsPage = function (page) {
        this.nav.push("CmsPage", { pagename: page });
    };
    MyApp.prototype.logout = function () {
        localStorage.removeItem('userdetails');
        localStorage.removeItem('token');
        this.nav.setRoot("LoginPage");
    };
    MyApp.prototype.goToChat = function () {
        this.nav.push('ChatPage', { id: '5b1c0d796728f530bbd321dd' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\app\app.html"*/'<ion-menu type="overlay" [content]="mycontent">\n\n      <button ion-button menuToggle class="btn-closeM">\n\n            <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-content  class="side_menu_content">\n\n            \n\n            <div class="profile-imgB">\n\n                  <div class="profile_imgoutline">\n\n                        <div class="profile_img_side" [ngStyle]="{\'background\' : \'url(\' + user.profile_image + \')center no-repeat\'}" >\n\n                        </div>\n\n                  </div>\n\n                  <p class="nm-tilte" text-center>{{user.firstname}} {{user.lastname}}</p>\n\n                  <p class="nm-eml" text-center>{{user.email}}</p>\n\n            </div>\n\n            \n\n            <ion-list class="sidemenu_list">\n\n                  <button menuClose ion-item  (click)="goToPage(\'SearchPage\')" >\n\n                        <ion-icon name="search"></ion-icon>\n\n                        Search\n\n                  </button>\n\n                  <button menuClose ion-item   (click)="goToChat()" >\n\n                        <ion-icon name="mail"></ion-icon>\n\n                        \n\n                        Inbox\n\n                  </button>\n\n                  <button menuClose ion-item   (click)="goToPage(\'ContactPage\')" >\n\n                        <ion-icon name="settings"></ion-icon>\n\n                        \n\n                        My Account\n\n                  </button>\n\n                  <button menuClose ion-item   (click)="goToPage(\'MyOrderPage\')" >\n\n                        <ion-icon name="paper"></ion-icon> \n\n                        My Order\n\n                  </button>\n\n             \n\n                  <button menuClose ion-item (click)="goToPage(\'CartPage\')">\n\n                        <ion-icon name="cart"></ion-icon> \n\n                        Cart\n\n                  </button>\n\n                  <button menuClose ion-item   (click)="goToPage(\'VendorjoinPage\')" >\n\n                        <ion-icon name="people"></ion-icon>\n\n                        Became a member\n\n                  </button>\n\n                  \n\n                  <button menuClose ion-item   (click)="CmsPage(\'privacy\')" >\n\n                        <ion-icon name="paper"></ion-icon>\n\n                        \n\n                        Privacy Policy\n\n                  </button>\n\n                  <button menuClose ion-item    (click)="CmsPage(\'terms\')" >\n\n                        <ion-icon name="document"></ion-icon>\n\n                        \n\n                        Terms and Conditions\n\n                  </button>\n\n                  \n\n                  \n\n                  \n\n                  <button menuClose ion-item   (click)="goToPage(\'FeedbackPage\')" >\n\n                        <ion-icon name="at"></ion-icon>\n\n                        \n\n                        Feedback \n\n                  </button>\n\n                  <button menuClose ion-item (click)="logout()" >\n\n                        <ion-icon name="log-out"></ion-icon>\n\n                        \n\n                        Logout\n\n                  </button>\n\n            </ion-list>\n\n            \n\n      </ion-content>\n\n      \n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Interceptor = /** @class */ (function () {
    function Interceptor() {
    }
    Interceptor.prototype.intercept = function (req, next) {
        var hostname = (new URL(req.url)).hostname;
        if (hostname != 'maps.googleapis.com') {
            var headers = req.headers
                .set('Content-Type', 'application/json')
                .set('x-access-token', "" + localStorage.getItem('token'));
            var cloneReq = req.clone({ headers: headers });
        }
        else {
            var cloneReq = req.clone({});
        }
        return next.handle(cloneReq);
    };
    Interceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Interceptor);
    return Interceptor;
}());

//# sourceMappingURL=interceptor.js.map

/***/ })

},[255]);
//# sourceMappingURL=main.js.map