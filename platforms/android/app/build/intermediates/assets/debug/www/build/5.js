webpackJsonp([5],{

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddreviewPageModule", function() { return AddreviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addreview__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_rating__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_rating___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_rating__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddreviewPageModule = /** @class */ (function () {
    function AddreviewPageModule() {
    }
    AddreviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addreview__["a" /* AddreviewPage */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_3_ngx_rating__["RatingModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addreview__["a" /* AddreviewPage */]),
            ],
        })
    ], AddreviewPageModule);
    return AddreviewPageModule;
}());

//# sourceMappingURL=addreview.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var common_1 = __webpack_require__(42);
var Rating = Rating_1 = (function () {
    function Rating() {
        // -------------------------------------------------------------------------
        // Inputs
        // -------------------------------------------------------------------------
        this.iconClass = "star-icon";
        this.fullIcon = "★";
        this.emptyIcon = "☆";
        this.titles = [];
        // -------------------------------------------------------------------------
        // Outputs
        // -------------------------------------------------------------------------
        this.onHover = new core_1.EventEmitter();
        this.onLeave = new core_1.EventEmitter();
        this.hovered = 0;
        this.hoveredPercent = undefined;
        // -------------------------------------------------------------------------
        // Private Properties
        // -------------------------------------------------------------------------
        this._max = 5;
    }
    Object.defineProperty(Rating.prototype, "max", {
        get: function () {
            return this._max;
        },
        // -------------------------------------------------------------------------
        // Input Accessors
        // -------------------------------------------------------------------------
        set: function (max) {
            this._max = max;
            this.buildRanges();
        },
        enumerable: true,
        configurable: true
    });
    // -------------------------------------------------------------------------
    // Implemented from ControlValueAccessor
    // -------------------------------------------------------------------------
    Rating.prototype.writeValue = function (value) {
        /*if (value % 1 !== value) {
         this.model = Math.round(value);
         return;
         }*/
        this.model = value;
    };
    Rating.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    Rating.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    // -------------------------------------------------------------------------
    // Implemented from Va..
    // -------------------------------------------------------------------------
    Rating.prototype.validate = function (c) {
        if (this.required && !c.value) {
            return {
                required: true
            };
        }
        return null;
    };
    // -------------------------------------------------------------------------
    // Lifecycle callbacks
    // -------------------------------------------------------------------------
    Rating.prototype.ngOnInit = function () {
        this.buildRanges();
    };
    // -------------------------------------------------------------------------
    // Host Bindings
    // -------------------------------------------------------------------------
    Rating.prototype.onKeydown = function (event) {
        if ([37, 38, 39, 40].indexOf(event.which) === -1 || this.hovered)
            return;
        event.preventDefault();
        event.stopPropagation();
        var increment = this.float ? 0.5 : 1;
        this.rate(this.model + (event.which === 38 || event.which === 39 ? increment : increment * -1));
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    Rating.prototype.calculateWidth = function (item) {
        if (this.hovered > 0) {
            if (this.hoveredPercent !== undefined && this.hovered === item)
                return this.hoveredPercent;
            return this.hovered >= item ? 100 : 0;
        }
        return this.model >= item ? 100 : 100 - Math.round((item - this.model) * 10) * 10;
    };
    Rating.prototype.setHovered = function (hovered) {
        if (!this.readonly && !this.disabled) {
            this.hovered = hovered;
            this.onHover.emit(hovered);
        }
    };
    Rating.prototype.changeHovered = function (event) {
        if (!this.float)
            return;
        var target = event.target;
        var relativeX = event.pageX - target.offsetLeft;
        var percent = Math.round((relativeX * 100 / target.offsetWidth) / 10) * 10;
        this.hoveredPercent = percent > 50 ? 100 : 50;
    };
    Rating.prototype.resetHovered = function () {
        this.hovered = 0;
        this.hoveredPercent = undefined;
        this.onLeave.emit(this.hovered);
    };
    Rating.prototype.rate = function (value) {
        if (!this.readonly && !this.disabled && value >= 0 && value <= this.ratingRange.length) {
            var newValue = this.hoveredPercent ? (value - 1) + this.hoveredPercent / 100 : value;
            this.onChange(newValue);
            this.model = newValue;
        }
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    Rating.prototype.buildRanges = function () {
        this.ratingRange = this.range(1, this.max);
    };
    Rating.prototype.range = function (start, end) {
        var foo = [];
        for (var i = start; i <= end; i++) {
            foo.push(i);
        }
        return foo;
    };
    return Rating;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Rating.prototype, "iconClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Rating.prototype, "fullIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Rating.prototype, "emptyIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Rating.prototype, "readonly", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Rating.prototype, "disabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Rating.prototype, "required", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Rating.prototype, "float", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], Rating.prototype, "titles", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Rating.prototype, "max", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Rating.prototype, "onHover", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Rating.prototype, "onLeave", void 0);
__decorate([
    core_1.HostListener("keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], Rating.prototype, "onKeydown", null);
Rating = Rating_1 = __decorate([
    core_1.Component({
        selector: "rating",
        template: "\n<span (mouseleave)=\"resetHovered()\"\n      class=\"rating\"\n      [class.disabled]=\"disabled\"\n      [class.readonly]=\"readonly\"\n      tabindex=\"0\"\n      role=\"slider\" \n      aria-valuemin=\"0\"\n      [attr.aria-valuemax]=\"ratingRange.length\" \n      [attr.aria-valuenow]=\"model\">\n    <span *ngFor=\"let item of ratingRange; let index = index\">\n        <i (mouseenter)=\"setHovered(item)\" \n           (mousemove)=\"changeHovered($event)\"\n           (click)=\"rate(item)\" \n           [attr.data-icon]=\"fullIcon\"\n           class=\"{{ iconClass }} half{{ calculateWidth(item) }}\"\n           [title]=\"titles[index] || item\">{{ emptyIcon }}</i>\n    </span>\n</span>\n",
        providers: [
            { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return Rating_1; }), multi: true },
            { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return Rating_1; }), multi: true },
        ],
        styles: ["\nspan.rating {\n    cursor: pointer;\n    outline: none;\n}\nspan.rating.readonly {\n    cursor: default;\n}\nspan.rating.disabled {\n    cursor: not-allowed;\n}\nspan.rating i{\n    font-style: normal; \n}\n.star-icon {\n    color: #ddd;\n    font-size: 2em;\n    position: relative;\n}\n.star-icon:before {\n    color: #FDE16D;\n    content: attr(data-icon) \" \";\n    position: absolute;\n    left: 0;\n    overflow: hidden;\n    width: 0;\n} \nspan.rating.disabled .star-icon:before {\n    color: #ECECEC;\n    text-shadow: none;\n}\n.star-icon.half10:before {\n    width: 10%;\n}\n.star-icon.half20:before {\n    width: 20%;\n}\n.star-icon.half30:before {\n    width: 30%;\n}\n.star-icon.half40:before {\n    width: 40%;\n}\n.star-icon.half50:before {\n    width: 50%;\n}\n.star-icon.half60:before {\n    width: 60%;\n}\n.star-icon.half70:before {\n    width: 70%;\n}\n.star-icon.half80:before {\n    width: 80%;\n}\n.star-icon.half90:before {\n    width: 90%;\n}\n.star-icon.half100:before {\n    width: 100%;\n}\n@-moz-document url-prefix() { /* Firefox Hack */\n  .star-icon {\n    font-size: 50px;\n    line-height: 34px;\n  }\n}\n"]
    })
], Rating);
exports.Rating = Rating;
var RatingModule = (function () {
    function RatingModule() {
    }
    return RatingModule;
}());
RatingModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            Rating,
        ],
        exports: [
            Rating,
        ],
    })
], RatingModule);
exports.RatingModule = RatingModule;
var Rating_1;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_services_services__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
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





var AddreviewPage = /** @class */ (function () {
    function AddreviewPage(navCtrl, loadingCtrl, navParams, alertCtrl, viewCtrl, app, _services, utility) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this._services = _services;
        this.utility = utility;
        this.reviewdata = {};
        this.backgroundImage = 'assets/img/background/background-6.jpg';
    }
    AddreviewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.vendorid = this.navParams.data.id;
        console.log(this.navParams.data);
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.reviewdata.rating = 0;
        var obj = {
            type: this.navParams.data.type,
            id: this.navParams.data.id,
            userid: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].USER._id
        };
        this._services.getUserRating(obj).subscribe(function (response) {
            console.log(response);
            if (response.response.message == true) {
                _this.update = false;
                _this.reviewdata = response.response.data;
            }
            else {
                _this.update = true;
            }
        }, function (error) {
            console.log(error);
        });
    };
    AddreviewPage.prototype.goToLogin = function () {
        this.slider.slideTo(1);
    };
    AddreviewPage.prototype.goToSignup = function () {
        this.slider.slideTo(2);
    };
    AddreviewPage.prototype.slideNext = function () {
        this.innerSlider.slideNext();
    };
    AddreviewPage.prototype.slidePrevious = function () {
        this.innerSlider.slidePrev();
    };
    AddreviewPage.prototype.presentLoading = function (message) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            duration: 500
        });
        loading.onDidDismiss(function () {
            var alert = _this.alertCtrl.create({
                title: 'Success',
                subTitle: message,
                buttons: ['Dismiss']
            });
            alert.present();
        });
        loading.present();
    };
    AddreviewPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddreviewPage.prototype.submit = function () {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('userdetails'));
        var obj = {
            comment: this.reviewdata.comment,
            rating: this.reviewdata.rating,
            userid: user._id,
            type: this.navParams.data.type,
            id: this.navParams.data.id,
            status: 1
        };
        this._services.addreview(obj).subscribe(function (Response) {
            console.log(Response);
            if (Response.success == true) {
                var msg = {
                    msg: Response.message,
                    duration: 3000,
                    position: 'centre',
                };
                _this.utility.messageToast(msg);
            }
            else {
                var msg = {
                    msg: Response.message,
                    duration: 3000,
                    position: 'centre',
                };
                _this.utility.messageToast(msg);
            }
            _this.viewCtrl.dismiss();
        });
    };
    AddreviewPage.prototype.updateReview = function () {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('userdetails'));
        var obj = {
            comment: this.reviewdata.comment,
            rating: this.reviewdata.rating,
            userid: user._id,
            type: this.navParams.data.type,
            id: this.navParams.data.id,
            reviewid: this.reviewdata.id,
            status: 1
        };
        this._services.updatereviewdata(obj).subscribe(function (Response) {
            console.log(Response);
            if (Response.success == true) {
                var msg = {
                    msg: Response.message,
                    duration: 3000,
                    position: 'centre',
                };
                _this.utility.messageToast(msg);
            }
            else {
                var msg = {
                    msg: Response.message,
                    duration: 3000,
                    position: 'centre',
                };
                _this.utility.messageToast(msg);
            }
            _this.viewCtrl.dismiss();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Slides */])
    ], AddreviewPage.prototype, "slider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('innerSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Slides */])
    ], AddreviewPage.prototype, "innerSlider", void 0);
    AddreviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-addreview',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\addreview\addreview.html"*/'<ion-content>\n\n  <ion-header>\n\n    <ion-toolbar color="header">\n\n      <ion-navbar>\n\n        <ion-title>\n\n          Add review\n\n        </ion-title>\n\n\n\n      </ion-navbar>\n\n      <ion-buttons end>\n\n        <button (click)="dismiss()" ion-button icon-only class="btnclse">\n\n            <ion-icon ios="ios-close" md="md-close"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-slides #slider class="content-slider" direction="vertical" >\n\n    <ion-slide class="swiper-no-swiping" class="animated flip" >\n\n      <div padding >\n\n        <ion-row>\n\n          <ion-col >\n\n\n\n            <rating  [(ngModel)]="reviewdata.rating" [max]="5" iconClass="star-icon" fullIcon="★" emptyIcon="☆" [titles]="[\'one\', \'two\', \'three\', \'four\', \'five\']">\n\n            </rating>\n\n            <button ion-button round color="light" class="login-button" (click)="goToLogin()" class="login-button">Rate</button>\n\n          </ion-col>\n\n\n\n \n\n        </ion-row>\n\n      </div>\n\n    </ion-slide>\n\n    <ion-slide class="zoom swiper-no-swiping">\n\n      <ion-slides #innerSlider class="content-slider">\n\n        <ion-slide class="swiper-no-swiping">\n\n          <div style="padding: 20% 16px 16px 16px">\n\n            <ion-item>\n\n              <ion-label floating>Comment</ion-label>\n\n              <ion-textarea [(ngModel)]="reviewdata.comment"></ion-textarea>\n\n            </ion-item>\n\n             <button *ngIf="!update" ion-button block round (click)="updateReview()" color="light" class="login-button">Update</button>\n\n            <button  *ngIf="update" ion-button block round (click)="submit()" color="light" class="login-button">Submit</button>\n\n          </div>\n\n        </ion-slide>\n\n\n\n      </ion-slides>\n\n    </ion-slide>\n\n\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\addreview\addreview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_0__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */]])
    ], AddreviewPage);
    return AddreviewPage;
}());

//# sourceMappingURL=addreview.js.map

/***/ })

});
//# sourceMappingURL=5.js.map