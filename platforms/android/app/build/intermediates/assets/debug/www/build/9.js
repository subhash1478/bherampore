webpackJsonp([9],{

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneVerificationPageModule", function() { return PhoneVerificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phone_verification__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_android_permissions__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PhoneVerificationPageModule = /** @class */ (function () {
    function PhoneVerificationPageModule() {
    }
    PhoneVerificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__phone_verification__["a" /* PhoneVerificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__phone_verification__["a" /* PhoneVerificationPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_android_permissions__["a" /* AndroidPermissions */]]
        })
    ], PhoneVerificationPageModule);
    return PhoneVerificationPageModule;
}());

//# sourceMappingURL=phone-verification.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AndroidPermissions; });
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
 * @name Android Permissions
 * @description
 * This plugin is designed to support Android new permissions checking mechanism.
 *
 * You can find all permissions here: https://developer.android.com/reference/android/Manifest.permission.html
 *
 * @usage
 * ```
 * import { AndroidPermissions } from '@ionic-native/android-permissions';
 *
 *
 * constructor(private androidPermissions: AndroidPermissions) { }
 *
 * ...
 *
 * this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
 *   result => console.log('Has permission?',result.hasPermission),
 *   err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
 * );
 *
 * this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
 *
 * ```
 *
 * Android 26 and above: due to Android 26's changes to permissions handling (permissions are requested at time of use rather than at runtime,) if your app does not include any functions (eg. other Ionic Native plugins) that utilize a particular permission, then `requestPermission()` and `requestPermissions()` will resolve immediately with no prompt shown to the user.  Thus, you must include a function utilizing the feature you would like to use before requesting permission for it.
 */
var AndroidPermissions = (function (_super) {
    __extends(AndroidPermissions, _super);
    function AndroidPermissions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PERMISSION = {
            ACCESS_CHECKIN_PROPERTIES: 'android.permission.ACCESS_CHECKIN_PROPERTIES',
            ACCESS_COARSE_LOCATION: 'android.permission.ACCESS_COARSE_LOCATION',
            ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION',
            ACCESS_LOCATION_EXTRA_COMMANDS: 'android.permission.ACCESS_LOCATION_EXTRA_COMMANDS',
            ACCESS_MOCK_LOCATION: 'android.permission.ACCESS_MOCK_LOCATION',
            ACCESS_NETWORK_STATE: 'android.permission.ACCESS_NETWORK_STATE',
            ACCESS_SURFACE_FLINGER: 'android.permission.ACCESS_SURFACE_FLINGER',
            ACCESS_WIFI_STATE: 'android.permission.ACCESS_WIFI_STATE',
            ACCOUNT_MANAGER: 'android.permission.ACCOUNT_MANAGER',
            ADD_VOICEMAIL: 'com.android.voicemail.permission.ADD_VOICEMAIL',
            AUTHENTICATE_ACCOUNTS: 'android.permission.AUTHENTICATE_ACCOUNTS',
            BATTERY_STATS: 'android.permission.BATTERY_STATS',
            BIND_ACCESSIBILITY_SERVICE: 'android.permission.BIND_ACCESSIBILITY_SERVICE',
            BIND_APPWIDGET: 'android.permission.BIND_APPWIDGET',
            BIND_CARRIER_MESSAGING_SERVICE: 'android.permission.BIND_CARRIER_MESSAGING_SERVICE',
            BIND_DEVICE_ADMIN: 'android.permission.BIND_DEVICE_ADMIN',
            BIND_DREAM_SERVICE: 'android.permission.BIND_DREAM_SERVICE',
            BIND_INPUT_METHOD: 'android.permission.BIND_INPUT_METHOD',
            BIND_NFC_SERVICE: 'android.permission.BIND_NFC_SERVICE',
            BIND_NOTIFICATION_LISTENER_SERVICE: 'android.permission.BIND_NOTIFICATION_LISTENER_SERVICE',
            BIND_PRINT_SERVICE: 'android.permission.BIND_PRINT_SERVICE',
            BIND_REMOTEVIEWS: 'android.permission.BIND_REMOTEVIEWS',
            BIND_TEXT_SERVICE: 'android.permission.BIND_TEXT_SERVICE',
            BIND_TV_INPUT: 'android.permission.BIND_TV_INPUT',
            BIND_VOICE_INTERACTION: 'android.permission.BIND_VOICE_INTERACTION',
            BIND_VPN_SERVICE: 'android.permission.BIND_VPN_SERVICE',
            BIND_WALLPAPER: 'android.permission.BIND_WALLPAPER',
            BLUETOOTH: 'android.permission.BLUETOOTH',
            BLUETOOTH_ADMIN: 'android.permission.BLUETOOTH_ADMIN',
            BLUETOOTH_PRIVILEGED: 'android.permission.BLUETOOTH_PRIVILEGED',
            BODY_SENSORS: 'android.permission.BODY_SENSORS',
            BRICK: 'android.permission.BRICK',
            BROADCAST_PACKAGE_REMOVED: 'android.permission.BROADCAST_PACKAGE_REMOVED',
            BROADCAST_SMS: 'android.permission.BROADCAST_SMS',
            BROADCAST_STICKY: 'android.permission.BROADCAST_STICKY',
            BROADCAST_WAP_PUSH: 'android.permission.BROADCAST_WAP_PUSH',
            CALL_PHONE: 'android.permission.CALL_PHONE',
            CALL_PRIVILEGED: 'android.permission.CALL_PRIVILEGED',
            CAMERA: 'android.permission.CAMERA',
            CAPTURE_AUDIO_OUTPUT: 'android.permission.CAPTURE_AUDIO_OUTPUT',
            CAPTURE_SECURE_VIDEO_OUTPUT: 'android.permission.CAPTURE_SECURE_VIDEO_OUTPUT',
            CAPTURE_VIDEO_OUTPUT: 'android.permission.CAPTURE_VIDEO_OUTPUT',
            CHANGE_COMPONENT_ENABLED_STATE: 'android.permission.CHANGE_COMPONENT_ENABLED_STATE',
            CHANGE_CONFIGURATION: 'android.permission.CHANGE_CONFIGURATION',
            CHANGE_NETWORK_STATE: 'android.permission.CHANGE_NETWORK_STATE',
            CHANGE_WIFI_MULTICAST_STATE: 'android.permission.CHANGE_WIFI_MULTICAST_STATE',
            CHANGE_WIFI_STATE: 'android.permission.CHANGE_WIFI_STATE',
            CLEAR_APP_CACHE: 'android.permission.CLEAR_APP_CACHE',
            CLEAR_APP_USER_DATA: 'android.permission.CLEAR_APP_USER_DATA',
            CONTROL_LOCATION_UPDATES: 'android.permission.CONTROL_LOCATION_UPDATES',
            DELETE_CACHE_FILES: 'android.permission.DELETE_CACHE_FILES',
            DELETE_PACKAGES: 'android.permission.DELETE_PACKAGES',
            DEVICE_POWER: 'android.permission.DEVICE_POWER',
            DIAGNOSTIC: 'android.permission.DIAGNOSTIC',
            DISABLE_KEYGUARD: 'android.permission.DISABLE_KEYGUARD',
            DUMP: 'android.permission.DUMP',
            EXPAND_STATUS_BAR: 'android.permission.EXPAND_STATUS_BAR',
            FACTORY_TEST: 'android.permission.FACTORY_TEST',
            FLASHLIGHT: 'android.permission.FLASHLIGHT',
            FORCE_BACK: 'android.permission.FORCE_BACK',
            GET_ACCOUNTS: 'android.permission.GET_ACCOUNTS',
            GET_PACKAGE_SIZE: 'android.permission.GET_PACKAGE_SIZE',
            GET_TASKS: 'android.permission.GET_TASKS',
            GET_TOP_ACTIVITY_INFO: 'android.permission.GET_TOP_ACTIVITY_INFO',
            GLOBAL_SEARCH: 'android.permission.GLOBAL_SEARCH',
            HARDWARE_TEST: 'android.permission.HARDWARE_TEST',
            INJECT_EVENTS: 'android.permission.INJECT_EVENTS',
            INSTALL_LOCATION_PROVIDER: 'android.permission.INSTALL_LOCATION_PROVIDER',
            INSTALL_PACKAGES: 'android.permission.INSTALL_PACKAGES',
            INSTALL_SHORTCUT: 'com.android.launcher.permission.INSTALL_SHORTCUT',
            INTERNAL_SYSTEM_WINDOW: 'android.permission.INTERNAL_SYSTEM_WINDOW',
            INTERNET: 'android.permission.INTERNET',
            KILL_BACKGROUND_PROCESSES: 'android.permission.KILL_BACKGROUND_PROCESSES',
            LOCATION_HARDWARE: 'android.permission.LOCATION_HARDWARE',
            MANAGE_ACCOUNTS: 'android.permission.MANAGE_ACCOUNTS',
            MANAGE_APP_TOKENS: 'android.permission.MANAGE_APP_TOKENS',
            MANAGE_DOCUMENTS: 'android.permission.MANAGE_DOCUMENTS',
            MASTER_CLEAR: 'android.permission.MASTER_CLEAR',
            MEDIA_CONTENT_CONTROL: 'android.permission.MEDIA_CONTENT_CONTROL',
            MODIFY_AUDIO_SETTINGS: 'android.permission.MODIFY_AUDIO_SETTINGS',
            MODIFY_PHONE_STATE: 'android.permission.MODIFY_PHONE_STATE',
            MOUNT_FORMAT_FILESYSTEMS: 'android.permission.MOUNT_FORMAT_FILESYSTEMS',
            MOUNT_UNMOUNT_FILESYSTEMS: 'android.permission.MOUNT_UNMOUNT_FILESYSTEMS',
            NFC: 'android.permission.NFC',
            PERSISTENT_ACTIVITY: 'android.permission.PERSISTENT_ACTIVITY',
            PROCESS_OUTGOING_CALLS: 'android.permission.PROCESS_OUTGOING_CALLS',
            READ_CALENDAR: 'android.permission.READ_CALENDAR',
            READ_CALL_LOG: 'android.permission.READ_CALL_LOG',
            READ_CONTACTS: 'android.permission.READ_CONTACTS',
            READ_EXTERNAL_STORAGE: 'android.permission.READ_EXTERNAL_STORAGE',
            READ_FRAME_BUFFER: 'android.permission.READ_FRAME_BUFFER',
            READ_HISTORY_BOOKMARKS: 'com.android.browser.permission.READ_HISTORY_BOOKMARKS',
            READ_INPUT_STATE: 'android.permission.READ_INPUT_STATE',
            READ_LOGS: 'android.permission.READ_LOGS',
            READ_PHONE_STATE: 'android.permission.READ_PHONE_STATE',
            READ_PROFILE: 'android.permission.READ_PROFILE',
            READ_SMS: 'android.permission.READ_SMS',
            READ_SOCIAL_STREAM: 'android.permission.READ_SOCIAL_STREAM',
            READ_SYNC_SETTINGS: 'android.permission.READ_SYNC_SETTINGS',
            READ_SYNC_STATS: 'android.permission.READ_SYNC_STATS',
            READ_USER_DICTIONARY: 'android.permission.READ_USER_DICTIONARY',
            READ_VOICEMAIL: 'com.android.voicemail.permission.READ_VOICEMAIL',
            REBOOT: 'android.permission.REBOOT',
            RECEIVE_BOOT_COMPLETED: 'android.permission.RECEIVE_BOOT_COMPLETED',
            RECEIVE_MMS: 'android.permission.RECEIVE_MMS',
            RECEIVE_SMS: 'android.permission.RECEIVE_SMS',
            RECEIVE_WAP_PUSH: 'android.permission.RECEIVE_WAP_PUSH',
            RECORD_AUDIO: 'android.permission.RECORD_AUDIO',
            REORDER_TASKS: 'android.permission.REORDER_TASKS',
            RESTART_PACKAGES: 'android.permission.RESTART_PACKAGES',
            SEND_RESPOND_VIA_MESSAGE: 'android.permission.SEND_RESPOND_VIA_MESSAGE',
            SEND_SMS: 'android.permission.SEND_SMS',
            SET_ACTIVITY_WATCHER: 'android.permission.SET_ACTIVITY_WATCHER',
            SET_ALARM: 'com.android.alarm.permission.SET_ALARM',
            SET_ALWAYS_FINISH: 'android.permission.SET_ALWAYS_FINISH',
            SET_ANIMATION_SCALE: 'android.permission.SET_ANIMATION_SCALE',
            SET_DEBUG_APP: 'android.permission.SET_DEBUG_APP',
            SET_ORIENTATION: 'android.permission.SET_ORIENTATION',
            SET_POINTER_SPEED: 'android.permission.SET_POINTER_SPEED',
            SET_PREFERRED_APPLICATIONS: 'android.permission.SET_PREFERRED_APPLICATIONS',
            SET_PROCESS_LIMIT: 'android.permission.SET_PROCESS_LIMIT',
            SET_TIME: 'android.permission.SET_TIME',
            SET_TIME_ZONE: 'android.permission.SET_TIME_ZONE',
            SET_WALLPAPER: 'android.permission.SET_WALLPAPER',
            SET_WALLPAPER_HINTS: 'android.permission.SET_WALLPAPER_HINTS',
            SIGNAL_PERSISTENT_PROCESSES: 'android.permission.SIGNAL_PERSISTENT_PROCESSES',
            STATUS_BAR: 'android.permission.STATUS_BAR',
            SUBSCRIBED_FEEDS_READ: 'android.permission.SUBSCRIBED_FEEDS_READ',
            SUBSCRIBED_FEEDS_WRITE: 'android.permission.SUBSCRIBED_FEEDS_WRITE',
            SYSTEM_ALERT_WINDOW: 'android.permission.SYSTEM_ALERT_WINDOW',
            TRANSMIT_IR: 'android.permission.TRANSMIT_IR',
            UNINSTALL_SHORTCUT: 'com.android.launcher.permission.UNINSTALL_SHORTCUT',
            UPDATE_DEVICE_STATS: 'android.permission.UPDATE_DEVICE_STATS',
            USE_CREDENTIALS: 'android.permission.USE_CREDENTIALS',
            USE_SIP: 'android.permission.USE_SIP',
            VIBRATE: 'android.permission.VIBRATE',
            WAKE_LOCK: 'android.permission.WAKE_LOCK',
            WRITE_APN_SETTINGS: 'android.permission.WRITE_APN_SETTINGS',
            WRITE_CALENDAR: 'android.permission.WRITE_CALENDAR',
            WRITE_CALL_LOG: 'android.permission.WRITE_CALL_LOG',
            WRITE_CONTACTS: 'android.permission.WRITE_CONTACTS',
            WRITE_EXTERNAL_STORAGE: 'android.permission.WRITE_EXTERNAL_STORAGE',
            WRITE_GSERVICES: 'android.permission.WRITE_GSERVICES',
            WRITE_HISTORY_BOOKMARKS: 'com.android.browser.permission.WRITE_HISTORY_BOOKMARKS',
            WRITE_PROFILE: 'android.permission.WRITE_PROFILE',
            WRITE_SECURE_SETTINGS: 'android.permission.WRITE_SECURE_SETTINGS',
            WRITE_SETTINGS: 'android.permission.WRITE_SETTINGS',
            WRITE_SMS: 'android.permission.WRITE_SMS',
            WRITE_SOCIAL_STREAM: 'android.permission.WRITE_SOCIAL_STREAM',
            WRITE_SYNC_SETTINGS: 'android.permission.WRITE_SYNC_SETTINGS',
            WRITE_USER_DICTIONARY: 'android.permission.WRITE_USER_DICTIONARY',
            WRITE_VOICEMAIL: 'com.android.voicemail.permission.WRITE_VOICEMAIL'
        };
        return _this;
    }
    /**
     * Check permission
     * @param {string} permission The name of the permission
     * @return {Promise<any>} Returns a promise
     */
    /**
       * Check permission
       * @param {string} permission The name of the permission
       * @return {Promise<any>} Returns a promise
       */
    AndroidPermissions.prototype.checkPermission = /**
       * Check permission
       * @param {string} permission The name of the permission
       * @return {Promise<any>} Returns a promise
       */
    function (permission) {
        return;
    };
    /**
     * Request permission
     * @param {string} permission The name of the permission to request
     * @return {Promise<any>}
     */
    /**
       * Request permission
       * @param {string} permission The name of the permission to request
       * @return {Promise<any>}
       */
    AndroidPermissions.prototype.requestPermission = /**
       * Request permission
       * @param {string} permission The name of the permission to request
       * @return {Promise<any>}
       */
    function (permission) {
        return;
    };
    /**
     * Request permissions
     * @param {Array<string>} permissions An array with permissions
     * @return {Promise<any>} Returns a promise
     */
    /**
       * Request permissions
       * @param {Array<string>} permissions An array with permissions
       * @return {Promise<any>} Returns a promise
       */
    AndroidPermissions.prototype.requestPermissions = /**
       * Request permissions
       * @param {Array<string>} permissions An array with permissions
       * @return {Promise<any>} Returns a promise
       */
    function (permissions) {
        return;
    };
    /**
     * This function still works now, will not support in the future.
     * @param {string} permission The name of the permission
     * @return {Promise<any>} Returns a promise
     */
    /**
       * This function still works now, will not support in the future.
       * @param {string} permission The name of the permission
       * @return {Promise<any>} Returns a promise
       */
    AndroidPermissions.prototype.hasPermission = /**
       * This function still works now, will not support in the future.
       * @param {string} permission The name of the permission
       * @return {Promise<any>} Returns a promise
       */
    function (permission) {
        return;
    };
    AndroidPermissions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], AndroidPermissions.prototype, "checkPermission", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], AndroidPermissions.prototype, "requestPermission", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", Promise)
    ], AndroidPermissions.prototype, "requestPermissions", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], AndroidPermissions.prototype, "hasPermission", null);
    /**
     * @name Android Permissions
     * @description
     * This plugin is designed to support Android new permissions checking mechanism.
     *
     * You can find all permissions here: https://developer.android.com/reference/android/Manifest.permission.html
     *
     * @usage
     * ```
     * import { AndroidPermissions } from '@ionic-native/android-permissions';
     *
     *
     * constructor(private androidPermissions: AndroidPermissions) { }
     *
     * ...
     *
     * this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
     *   result => console.log('Has permission?',result.hasPermission),
     *   err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
     * );
     *
     * this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
     *
     * ```
     *
     * Android 26 and above: due to Android 26's changes to permissions handling (permissions are requested at time of use rather than at runtime,) if your app does not include any functions (eg. other Ionic Native plugins) that utilize a particular permission, then `requestPermission()` and `requestPermissions()` will resolve immediately with no prompt shown to the user.  Thus, you must include a function utilizing the feature you would like to use before requesting permission for it.
     */
    AndroidPermissions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'AndroidPermissions',
            plugin: 'cordova-plugin-android-permissions',
            pluginRef: 'cordova.plugins.permissions',
            repo: 'https://github.com/NeoLSN/cordova-plugin-android-permissions',
            platforms: ['Android']
        })
    ], AndroidPermissions);
    return AndroidPermissions;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneVerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__ = __webpack_require__(467);
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
* Generated class for the PhoneVerificationPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var PhoneVerificationPage = /** @class */ (function () {
    function PhoneVerificationPage(androidPermissions, platform, viewCtrl, utility, navCtrl, navParams, _services) {
        this.androidPermissions = androidPermissions;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.utility = utility;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._services = _services;
        this.showotp = true;
    }
    PhoneVerificationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(function (success) { return console.log('Permission granted'); }, function (err) { return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.READ_SMS); });
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
        console.log('ionViewDidLoad PhoneVerificationPage');
    };
    PhoneVerificationPage.prototype.sendOTP = function () {
        var _this = this;
        var phoneno = /^\d{10}$/;
        if (phoneno.test(this.phone) === false) {
            var msg = { msg: 'Phone number is not valid', duration: 3000, position: 'centre' };
            this.utility.showToast(msg);
            return false;
        }
        var obj = {
            phone: this.phone,
            email: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER.email
        };
        console.log(obj);
        this._services.sendOTP(obj).subscribe(function (response) {
            var data = JSON.parse(response.response.data);
            console.log(data);
            if (data.type == 'success') {
                _this.showotp = false;
                //this.watchOTP()
            }
        });
    };
    PhoneVerificationPage.prototype.list = function () {
        this.platform.ready().then(function (readySource) {
            var filter = {
                box: 'inbox',
                indexFrom: 0,
                maxCount: 100,
            };
            if (SMS)
                SMS.listSMS(filter, function (ListSms) {
                    console.log('====================================');
                    console.log(ListSms);
                    console.log('====================================');
                }, function (Error) {
                    alert(JSON.stringify(Error));
                });
        });
    };
    PhoneVerificationPage.prototype.clear = function () {
        this.phone = '';
    };
    PhoneVerificationPage.prototype.watchOTP = function () {
        var smsarrive = new Promise(function (resolve, reject) {
            if (SMS)
                SMS.startWatch(function () {
                    console.log('watching started');
                }, function (Error) {
                    console.log('failed to start watching');
                });
            document.addEventListener('onSMSArrive', function (e) {
                var sms = e.data;
                console.log(sms);
                resolve(sms);
            });
        });
        console.log(smsarrive);
    };
    PhoneVerificationPage.prototype.verifyotp = function () {
        var _this = this;
        var obj = {
            phone: this.phone,
            otp: this.otp
        };
        this._services.verifyOTP(obj).subscribe(function (response) {
            var data = JSON.parse(response.response.data);
            console.log(data);
            if (data.type == 'success') {
                var msg = {
                    msg: "Verified",
                    duration: 3000
                };
                _this.utility.showToast(msg);
                _this.viewCtrl.dismiss(_this.phone);
            }
            else {
                var msg = {
                    msg: "Wrong OTP",
                    duration: 3000
                };
                _this.utility.showToast(msg);
                _this.viewCtrl.dismiss(_this.phone);
            }
        });
    };
    PhoneVerificationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PhoneVerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-phone-verification',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\phone-verification\phone-verification.html"*/'<ion-content>\n\n  <ion-header>\n\n    <ion-toolbar >\n\n      <ion-navbar>\n\n        <ion-title>\n\n          Enter phone\n\n        </ion-title>\n\n      </ion-navbar>\n\n      <ion-buttons end>\n\n        <button (click)="dismiss()" ion-button icon-only class="btnclse">\n\n          <ion-icon ios="ios-close" md="md-close"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-header> \n\n  <ion-content padding>\n\n    <ion-list *ngIf="showotp">\n\n      <ion-item class=" animated fadeIn" >\n\n        <ion-label floating>Phone</ion-label>\n\n        <ion-input type="number"  [(ngModel)]="phone" name="phone"></ion-input>\n\n        <button ion-button clear item-right (click)="clear()">\n\n          <ion-icon ios="ios-close" md="md-close-circle"></ion-icon>\n\n        </button>\n\n      </ion-item>\n\n      <button ion-button block clear  (click)="sendOTP()"> Send\n\n      </button>\n\n    </ion-list>\n\n\n\n    <ion-list *ngIf="!showotp">\n\n        <ion-item class=" animated fadeIn" >\n\n          <ion-label floating>OTP</ion-label>\n\n          <ion-input type="number"  [(ngModel)]="otp" name="otp"></ion-input>\n\n          <button ion-button clear item-right (click)="clear()">\n\n            <ion-icon ios="ios-close" md="md-close-circle"></ion-icon>\n\n          </button>\n\n        </ion-item>\n\n        <button ion-button block clear  (click)="verifyotp()"> verify\n\n        </button>\n\n      </ion-list>\n\n  \n\n\n\n  </ion-content> '/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\phone-verification\phone-verification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
    ], PhoneVerificationPage);
    return PhoneVerificationPage;
}());

//# sourceMappingURL=phone-verification.js.map

/***/ })

});
//# sourceMappingURL=9.js.map