webpackJsonp([2],{

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_truncate__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_rating__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_rating___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_rating__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_4_ngx_rating__["RatingModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_truncate__["a" /* TruncateModule */],
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 329:
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
var forms_1 = __webpack_require__(15);
var common_1 = __webpack_require__(30);
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

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = /** @class */ (function () {
    function SearchPage(utility, navCtrl, navParams, _services) {
        this.utility = utility;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._services = _services;
        this.q = 'restaurants';
        this.spinner = true;
        this.textmessage = true;
        this.warmmessage = 'Search ...';
        this.postList = [];
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var obj = {
            type: 'tags',
            q: this.q
        };
        this._services.search(obj).subscribe(function (Response) {
            _this.spinner = true;
            // console.log("crash", Response);
            // this.postList = Response.data
            // if (this.postList.length < 1) {
            //   this.textmessage = true;
            //   this.warmmessage = 'No search result found on "<b>' + this.q + '</b>" you can try buy ,sell etc.'
            // }
            console.log("crash", Response);
            var result = Response.data;
            var list = [];
            for (var index = 0; index < result.length; index++) {
                var element = {};
                var resultdata = result[index].result;
                var Prodictavailable = result[index].category;
                if (resultdata.images.length < 1) {
                    element['images'] = '';
                }
                else {
                    element['images'] = resultdata.images;
                }
                element['prodict_available'] = Prodictavailable;
                element['title'] = resultdata.title;
                element['address'] = resultdata.address;
                element['_id'] = resultdata._id;
                element['rating'] = resultdata.rating;
                list.push(element);
            }
            _this.postList = list;
        }, function (Error) {
        });
    };
    SearchPage.prototype.search = function () {
        var _this = this;
        if (this.q.length == 0) {
            this.ionViewDidLoad();
        }
        console.log(this.q.length);
        if (this.q.length < 3) {
            this.textmessage = true;
            this.postList = [];
            this.warmmessage = 'Search ...';
            return false;
        }
        this.textmessage = false;
        this.spinner = false;
        this.warmmessage = '';
        var obj = {
            type: 'tags',
            q: this.q
        };
        console.log("crash", obj);
        this._services.search(obj).subscribe(function (Response) {
            _this.spinner = true;
            console.log("crash", Response);
            _this.postList = Response.data;
            if (_this.postList.length < 1) {
                _this.textmessage = true;
                _this.warmmessage = 'No search result found on "<b>' + _this.q + '</b>" you can try buy ,sell etc.';
            }
        }, function (Error) {
        });
    };
    SearchPage.prototype.PostdetailsPage = function (item) {
        this.navCtrl.push("PostdetailsPage", { id: item });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/opt/workspace/project/shop/src/pages/search/search.html"*/'<ion-header>\n\n  <ion-toolbar color="header">\n\n    <ion-navbar>\n\n      <ion-title>\n\n        Search\n\n      </ion-title>\n\n    </ion-navbar>\n\n\n\n  </ion-toolbar>\n\n  <ion-searchbar [(ngModel)]="q" [showCancelButton]="shouldShowCancel" (ionInput)="search($event)" (ionCancel)="onCancel($event)">\n\n  </ion-searchbar>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n\n\n  <div class="msgtxt" *ngIf="textmessage" [innerHTML]="warmmessage"></div>\n\n  <ion-spinner [hidden]="spinner" name="ios"></ion-spinner>\n\n\n\n  <ion-list>\n\n    <ion-item class="animated fadeIn"  *ngFor="let item of postList" (click)="PostdetailsPage(item._id)">\n\n       <ion-thumbnail item-start>\n\n        <img  *ngIf="item.images.length>0" [src]="item.images">\n\n        <img  *ngIf="item.images.length<1" src="assets/imgs/searchplaceholder.png">\n\n \n\n       </ion-thumbnail>\n\n       <h2>{{item.title}}{{item.prodict_available}}  </h2>\n\n       <p >{{item.address}} </p>\n\n       <p class="rating-txt">  \n\n       {{item.rating}}\n\n         <rating [readonly]="true"\n\n       [(ngModel)]="item.rating" [max]="1" iconClass="star-icon" fullIcon="★" emptyIcon="☆" [titles]="[\'one\', \'two\', \'three\', \'four\', \'five\']">\n\n     </rating>\n\n      reviews</p>\n\n     <ion-icon class="callIco" item-end  name="call"></ion-icon>\n\n     <ion-icon class="pinIco" item-end  name="pin"></ion-icon>\n\n  \n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"/opt/workspace/project/shop/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__truncate_module__ = __webpack_require__(408);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__truncate_module__["a"]; });
/* unused harmony reexport TRUNCATE_PIPES */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TRUNCATE_PIPES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__truncate_characters_pipe__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__truncate_words_pipe__ = __webpack_require__(410);



var TRUNCATE_PIPES = [__WEBPACK_IMPORTED_MODULE_1__truncate_characters_pipe__["a" /* TruncateCharactersPipe */], __WEBPACK_IMPORTED_MODULE_2__truncate_words_pipe__["a" /* TruncateWordsPipe */]];
var TruncateModule = (function () {
    function TruncateModule() {
    }
    TruncateModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [TRUNCATE_PIPES],
                    exports: [TRUNCATE_PIPES]
                },] },
    ];
    /** @nocollapse */
    TruncateModule.ctorParameters = function () { return []; };
    return TruncateModule;
}());

//# sourceMappingURL=truncate.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncateCharactersPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var TruncateCharactersPipe = (function () {
    function TruncateCharactersPipe() {
    }
    TruncateCharactersPipe.prototype.transform = function (value, limit, trail) {
        if (limit === void 0) { limit = 40; }
        if (trail === void 0) { trail = '…'; }
        if (!value) {
            value = '';
        }
        if (limit < 0) {
            limit *= -1;
            return value.length > limit ? trail + value.substring(value.length - limit, value.length) : value;
        }
        else {
            return value.length > limit ? value.substring(0, limit) + trail : value;
        }
    };
    TruncateCharactersPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                    name: 'truncate'
                },] },
    ];
    /** @nocollapse */
    TruncateCharactersPipe.ctorParameters = function () { return []; };
    return TruncateCharactersPipe;
}());

//# sourceMappingURL=truncate-characters.pipe.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncateWordsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var TruncateWordsPipe = (function () {
    function TruncateWordsPipe() {
    }
    TruncateWordsPipe.prototype.transform = function (value, limit, trail) {
        if (limit === void 0) { limit = 40; }
        if (trail === void 0) { trail = '…'; }
        var result = value || '';
        if (value) {
            var words = value.split(/\s+/);
            if (words.length > Math.abs(limit)) {
                if (limit < 0) {
                    limit *= -1;
                    result = trail + words.slice(words.length - limit, words.length).join(' ');
                }
                else {
                    result = words.slice(0, limit).join(' ') + trail;
                }
            }
        }
        return result;
    };
    TruncateWordsPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                    name: 'words'
                },] },
    ];
    /** @nocollapse */
    TruncateWordsPipe.ctorParameters = function () { return []; };
    return TruncateWordsPipe;
}());

//# sourceMappingURL=truncate-words.pipe.js.map

/***/ })

});
//# sourceMappingURL=2.js.map