webpackJsonp([8],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]]
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());

//# sourceMappingURL=checkout.module.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InAppBrowserObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InAppBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
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
 * @hidden
 */
var InAppBrowserObject = (function () {
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param {string} url     The URL to load.
     * @param {string} [target="self"]  The target in which to load the URL, an optional parameter that defaults to _self.
     *                 _self: Opens in the WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
     *                 _blank: Opens in the InAppBrowser.
     *                 _system: Opens in the system's web browser.
     * @param {string | InAppBrowserOptions} [options] Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    function InAppBrowserObject(url, target, options) {
        try {
            if (options && typeof options !== 'string') {
                options = Object.keys(options).map(function (key) { return key + "=" + options[key]; }).join(',');
            }
            this._objectInstance = cordova.InAppBrowser.open(url, target, options);
        }
        catch (e) {
            window.open(url, target);
            console.warn('Native: InAppBrowser is not installed or you are running on a browser. Falling back to window.open.');
        }
    }
    /**
     * Displays an InAppBrowser window that was opened hidden. Calling this has no effect
     * if the InAppBrowser was already visible.
     */
    /**
       * Displays an InAppBrowser window that was opened hidden. Calling this has no effect
       * if the InAppBrowser was already visible.
       */
    InAppBrowserObject.prototype.show = /**
       * Displays an InAppBrowser window that was opened hidden. Calling this has no effect
       * if the InAppBrowser was already visible.
       */
    function () { };
    /**
     * Closes the InAppBrowser window.
     */
    /**
       * Closes the InAppBrowser window.
       */
    InAppBrowserObject.prototype.close = /**
       * Closes the InAppBrowser window.
       */
    function () { };
    /**
     * Hides an InAppBrowser window that is currently shown. Calling this has no effect
     * if the InAppBrowser was already hidden.
     */
    /**
       * Hides an InAppBrowser window that is currently shown. Calling this has no effect
       * if the InAppBrowser was already hidden.
       */
    InAppBrowserObject.prototype.hide = /**
       * Hides an InAppBrowser window that is currently shown. Calling this has no effect
       * if the InAppBrowser was already hidden.
       */
    function () { };
    /**
     * Injects JavaScript code into the InAppBrowser window.
     * @param script {Object} Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    /**
       * Injects JavaScript code into the InAppBrowser window.
       * @param script {Object} Details of the script to run, specifying either a file or code key.
       * @returns {Promise<any>}
       */
    InAppBrowserObject.prototype.executeScript = /**
       * Injects JavaScript code into the InAppBrowser window.
       * @param script {Object} Details of the script to run, specifying either a file or code key.
       * @returns {Promise<any>}
       */
    function (script) { return; };
    /**
     * Injects CSS into the InAppBrowser window.
     * @param css {Object} Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    /**
       * Injects CSS into the InAppBrowser window.
       * @param css {Object} Details of the script to run, specifying either a file or code key.
       * @returns {Promise<any>}
       */
    InAppBrowserObject.prototype.insertCSS = /**
       * Injects CSS into the InAppBrowser window.
       * @param css {Object} Details of the script to run, specifying either a file or code key.
       * @returns {Promise<any>}
       */
    function (css) { return; };
    /**
     * A method that allows you to listen to events happening in the browser.
     * @param event {string} Name of the event
     * @returns {Observable<InAppBrowserEvent>} Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
     */
    /**
       * A method that allows you to listen to events happening in the browser.
       * @param event {string} Name of the event
       * @returns {Observable<InAppBrowserEvent>} Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
       */
    InAppBrowserObject.prototype.on = /**
       * A method that allows you to listen to events happening in the browser.
       * @param event {string} Name of the event
       * @returns {Observable<InAppBrowserEvent>} Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
       */
    function (event) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.addEventListener(event, observer.next.bind(observer));
            return function () { return _this._objectInstance.removeEventListener(event, observer.next.bind(observer)); };
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InAppBrowserObject.prototype, "show", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InAppBrowserObject.prototype, "close", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InAppBrowserObject.prototype, "hide", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], InAppBrowserObject.prototype, "executeScript", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], InAppBrowserObject.prototype, "insertCSS", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], InAppBrowserObject.prototype, "on", null);
    return InAppBrowserObject;
}());

/**
 * @name In App Browser
 * @description Launches in app Browser
 * @usage
 * ```typescript
 * import { InAppBrowser } from '@ionic-native/in-app-browser';
 *
 * constructor(private iab: InAppBrowser) { }
 *
 *
 * ...
 *
 *
 * const browser = this.iab.create('https://ionicframework.com/');
 *
 * browser.executeScript(...);
 *
 * browser.insertCSS(...);
 * browser.on('loadstop').subscribe(event => {
 *    browser.insertCSS({ code: "body{color: red;" });
 * });
 *
 * browser.close();
 *
 * ```
 * @classes
 * InAppBrowserObject
 * @interfaces
 * InAppBrowserEvent
 * InAppBrowserOptions
 */
var InAppBrowser = (function (_super) {
    __extends(InAppBrowser, _super);
    function InAppBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param  url {string}     The URL to load.
     * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     * @returns {InAppBrowserObject}
     */
    /**
       * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
       * @param  url {string}     The URL to load.
       * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
       * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
       *                 The options string must not contain any blank space, and each feature's
       *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
       * @returns {InAppBrowserObject}
       */
    InAppBrowser.prototype.create = /**
       * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
       * @param  url {string}     The URL to load.
       * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
       * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
       *                 The options string must not contain any blank space, and each feature's
       *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
       * @returns {InAppBrowserObject}
       */
    function (url, target, options) {
        return new InAppBrowserObject(url, target, options);
    };
    InAppBrowser.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /**
     * @name In App Browser
     * @description Launches in app Browser
     * @usage
     * ```typescript
     * import { InAppBrowser } from '@ionic-native/in-app-browser';
     *
     * constructor(private iab: InAppBrowser) { }
     *
     *
     * ...
     *
     *
     * const browser = this.iab.create('https://ionicframework.com/');
     *
     * browser.executeScript(...);
     *
     * browser.insertCSS(...);
     * browser.on('loadstop').subscribe(event => {
     *    browser.insertCSS({ code: "body{color: red;" });
     * });
     *
     * browser.close();
     *
     * ```
     * @classes
     * InAppBrowserObject
     * @interfaces
     * InAppBrowserEvent
     * InAppBrowserOptions
     */
    InAppBrowser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'InAppBrowser',
            plugin: 'cordova-plugin-inappbrowser',
            pluginRef: 'cordova.InAppBrowser',
            repo: 'https://github.com/apache/cordova-plugin-inappbrowser',
            platforms: ['AmazonFire OS', 'Android', 'Browser', 'iOS', 'macOS', 'Windows']
        })
    ], InAppBrowser);
    return InAppBrowser;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(372);
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
* Generated class for the CheckoutPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(viewCtrl, platform, modalCtrl, utility, navCtrl, iab, navParams, _services) {
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.utility = utility;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.navParams = navParams;
        this._services = _services;
        this.address = [];
        this.shop = {};
        this.cartEmpty = true;
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
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
                var newpro = {};
                newpro['price'] = element.price;
                newpro['product_name'] = element.productid.title;
                newpro['quantity'] = element.quantity;
                newpro['shopid'] = element.shopid.title;
                newpro['id'] = element.id;
                _this.shop.name = element.shopid.title;
                _this.shop.id = element.shopid.id;
                _this.sub_total += element.quantity * element.price;
                pro.push(newpro);
            }
            console.log(pro);
            _this.checkoutList = pro;
            _this.cartEmpty = false;
        }, function (error) {
            _this.cartEmpty = true;
            console.log(error);
        });
        console.log(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER);
        var data = {
            userid: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER._id
        };
        this._services.getShippingAddress(data).subscribe(function (Response) {
            _this.address = Response.response.data;
            console.log(_this.address);
        });
    };
    CheckoutPage.prototype.changeAddres = function () {
        this.navCtrl.push('AddressPage');
    };
    CheckoutPage.prototype.payment = function () {
        console.log(this.address);
        if (this.paymenttype == undefined) {
            var msg = {
                msg: 'Please select payment type',
                duration: 3000
            };
            this.utility.showToast(msg);
            return false;
        }
        if (this.address.length < 1) {
            var msg = {
                msg: 'Please enter shipping address type',
                duration: 3000
            };
            this.utility.showToast(msg);
            this.navCtrl.push('AddressPage');
            return false;
        }
        if (this.paymenttype == 'razor') {
            //  this.instamojo();
            this.razorPay();
            return false;
        }
        if (this.paymenttype == 'cashpayment') {
            this.cashpayment('cashpayment', '');
            return false;
        }
    };
    CheckoutPage.prototype.instamojo = function () {
        var _this = this;
        console.log(this.checkoutList);
        var obj = {
            purpose: 'Nandan',
            amount: this.sub_total,
            buyer_name: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER.firstname + " " + __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER.lastname,
            phone: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER.phone,
            buyer_email: 'putumca@gmail.com'
        };
        this._services.makePaymenrtRequest(obj).subscribe(function (Response) {
            console.log(Response);
            var result = Response.response.data;
            _this.payNow(result.payment_request.longurl);
        });
    };
    CheckoutPage.prototype.payNow = function (longurl) {
        function onOpenHandler() {
            alert('Payments Modal is Opened');
        }
        function onCloseHandler() {
            alert('Payments Modal is Closed');
        }
        function onPaymentSuccessHandler(response) {
            alert('Payment Success');
            console.log('Payment Success Response', response);
        }
        function onPaymentFailureHandler(response) {
            alert('Payment Failure');
            console.log('Payment Failure Response', response);
        }
        /* End client-defined Callback Handler Functions */
        /* Configuring Handlers */
        Instamojo.configure({
            handlers: {
                onOpen: onOpenHandler,
                onClose: onCloseHandler,
                onSuccess: onPaymentSuccessHandler,
                onFailure: onPaymentFailureHandler
            }
        });
        Instamojo.open(longurl);
    };
    CheckoutPage.prototype.shopnow = function () {
        this.navCtrl.setRoot('HomePage');
    };
    CheckoutPage.prototype.editOrder = function () {
        this.navCtrl.push('CartPage');
    };
    CheckoutPage.prototype.razorPay = function () {
        var _this = this;
        var options = {
            description: 'Food',
            image: 'http://139.59.12.86:3001/icon.png',
            currency: 'INR',
            key: 'rzp_test_9ltHMLxYrLMacM',
            amount: this.sub_total * 100,
            name: 'Nandan',
            prefill: {
                email: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER.email,
                contact: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER.phone,
                name: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER.firstname + " " + __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER.lastname,
            },
            theme: {
                color: '#3096f2'
            },
            modal: {
                ondismiss: function () {
                    alert('dismissed');
                }
            }
        };
        console.log(options);
        var successCallback = function (payment_id) {
            _this.cashpayment('razorpay', payment_id);
        };
        var cancelCallback = function (error) {
            alert(error.description + ' (Error ' + error.code + ')');
        };
        this.platform.ready().then(function () {
            RazorpayCheckout.open(options, successCallback, cancelCallback);
        });
    };
    CheckoutPage.prototype.cashpayment = function (type, payment_id) {
        var _this = this;
        var orderitem = [];
        for (var index = 0; index < this.checkoutList.length; index++) {
            var element = this.checkoutList[index];
            console.log(element);
            orderitem.push(element.id);
        }
        console.log(orderitem);
        var obj = {
            userid: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER._id,
            totalprice: this.sub_total,
            status: 0,
            discount: 0,
            delivered: 0,
            deliveredfee: 0,
            sgst: 0,
            cgst: 0,
            containercharges: 0,
            orderitem: orderitem,
            shopid: this.shop.id,
            payment_recived: (type === 'razorpay') ? 1 : 0,
            payment_type: type,
            transactionid: (type === 'razorpay') ? payment_id : ''
        };
        console.log(obj);
        this._services.createOrder(obj).subscribe(function (Response) {
            var id = Response.response.data.id;
            console.log(id);
            _this.navCtrl.setRoot('YourOrderPage', { id: id });
        });
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-checkout',template:/*ion-inline-start:"/opt/workspace/project/shop/src/pages/checkout/checkout.html"*/'<!--\n\n  Generated template for the CheckoutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Checkout</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n   \n\n  <ion-list *ngIf="!cartEmpty">\n\n    <ion-item class="alignitmtotal">\n\n      <ion-row class="prcelst header-tp">\n\n        <ion-col col-6 text-left>Call Summary</ion-col>\n\n        <ion-col col-6 text-right (click)="editOrder()"><span class="eoclr">Edit Order</span></ion-col>\n\n      </ion-row>\n\n        <h2 class="h-one">{{shop.name}}</h2>\n\n      <ion-row class="prcelst" *ngFor="let item of checkoutList;">\n\n        <ion-col col-6 text-left>{{item.product_name}}</ion-col>\n\n        <ion-col col-3 text-center>x {{item.quantity}}</ion-col>\n\n        <ion-col col-3 text-right class="clrblac">{{item.quantity*item.price|currency:\'INR\'}}</ion-col>\n\n      </ion-row>\n\n \n\n      <ion-row class="prcelst subtotal">\n\n          <ion-col col-8 text-left>Subtotal</ion-col>\n\n          <ion-col col-4 text-right class="clrblac">{{sub_total|currency:\'INR\'}}</ion-col>\n\n      </ion-row>\n\n      <ion-row class="prcelst">\n\n          <ion-col col-8 text-left>Service fee</ion-col>\n\n          <ion-col col-4 text-right>₹0.00</ion-col>\n\n      </ion-row>\n\n      <!-- <ion-row class="prcelst">\n\n          <ion-col col-8 text-left>Taxes & Charges</ion-col>\n\n          <ion-col col-4 text-right>₹48.65</ion-col>\n\n      </ion-row> -->\n\n      <ion-row class="prcelst">\n\n          <ion-col col-8 text-left>Dalivery chargers</ion-col>\n\n          <ion-col col-4 text-right>₹0.00</ion-col>\n\n      </ion-row>\n\n      \n\n      <!-- <ion-item class="alignitmtop">\n\n          <h3>Apply Coupon</h3>\n\n          <h4>3 Available</h4>\n\n          <button ion-button clear item-end  class="btnarw"><ion-icon name="arrow-forward"></ion-icon></button>\n\n      </ion-item> -->\n\n    \n\n      <ion-row class="prcelst totalprnt">\n\n          <ion-col col-8 text-left>Total</ion-col>\n\n          <ion-col col-4 text-right class="clrblac">{{sub_total|currency:\'INR\'}}</ion-col>\n\n      </ion-row>\n\n        \n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list radio-group class="smp-bx" *ngIf="!cartEmpty">\n\n      <ion-row class="prcelst header-tp">\n\n          <ion-col col-12 text-left>Choose Delivery Type</ion-col>\n\n      </ion-row>\n\n      <!-- <ion-item>\n\n          <ion-label>Delivery (in 60min)</ion-label>\n\n          <ion-radio value="delivery"></ion-radio>\n\n      </ion-item> -->\n\n      <ion-item>\n\n          <h4 class="h4head">Delivery Address</h4> \n\n          <p class="adrsinfo" *ngFor="let item of address">\n\n            {{item.address}} {{item.locality}} {{item.city}}  {{item.landmark}} \n\n          </p>\n\n          <span class="changebtn" (click)="changeAddres()">Change</span>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label>Pickup</ion-label>\n\n          <ion-radio value="pickup"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-input class="inputbx" placeholder="Order related instruction, if any.."></ion-input>\n\n      </ion-item>\n\n  </ion-list> \n\n  <ion-list radio-group class="smp-bx"  [(ngModel)]="paymenttype" *ngIf="!cartEmpty">\n\n \n\n      <ion-row class="prcelst header-tp">\n\n          <ion-col col-12 text-left>Select Payment Mode</ion-col>\n\n      </ion-row>\n\n     \n\n      <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/razor.png">\n\n          </ion-thumbnail>\n\n          <ion-label>RazorPay</ion-label>\n\n          <ion-radio value="razor"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/cash-in-hand.png">\n\n          </ion-thumbnail>\n\n          <ion-label>Cash Payment</ion-label>\n\n          <ion-radio value="cashpayment"></ion-radio>\n\n      </ion-item>\n\n  </ion-list> \n\n\n\n</ion-content>\n\n  <ion-footer *ngIf="!cartEmpty">\n\n    <button class="btngtn" ion-button large full no-margin (click)="payment()" >\n\n      Proceed to Pay <ion-icon name="arrow-forward" class="arrht"></ion-icon>\n\n    </button>\n\n  </ion-footer>\n\n\n\n  <ion-footer *ngIf="cartEmpty">\n\n        <button class="btngtn" ion-button large full no-margin (click)="shopnow()" >\n\n        Shop now<ion-icon name="arrow-forward" class="arrht"></ion-icon>\n\n        </button>\n\n      </ion-footer>'/*ion-inline-end:"/opt/workspace/project/shop/src/pages/checkout/checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ })

});
//# sourceMappingURL=8.js.map