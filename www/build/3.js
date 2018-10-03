webpackJsonp([3],{

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_lazyload_image__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_lazyload_image__);
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
            imports: [__WEBPACK_IMPORTED_MODULE_6_ng_lazyload_image__["LazyLoadImageModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]]
        })
    ], ContactPageModule);
    return ContactPageModule;
}());

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 465:
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
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(489);
__webpack_require__(491);
__webpack_require__(493);
var ReplaySubject_1 = __webpack_require__(135);
var core_1 = __webpack_require__(0);
var scroll_listener_1 = __webpack_require__(495);
var lazyload_image_1 = __webpack_require__(503);
var windowTarget = typeof window !== 'undefined' ? window : undefined;
var LazyLoadImageDirective = (function () {
    function LazyLoadImageDirective(el, ngZone) {
        this.onLoad = new core_1.EventEmitter();
        this.elementRef = el;
        this.ngZone = ngZone;
        this.propertyChanges$ = new ReplaySubject_1.ReplaySubject();
    }
    LazyLoadImageDirective.prototype.ngOnChanges = function (changes) {
        this.propertyChanges$.next({
            lazyImage: this.lazyImage,
            defaultImage: this.defaultImage,
            errorImage: this.errorImage,
            scrollTarget: this.scrollTarget,
            scrollObservable: this.scrollObservable,
            offset: this.offset | 0,
            useSrcset: this.useSrcset
        });
    };
    LazyLoadImageDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (typeof window === 'undefined') {
            return null;
        }
        this.ngZone.runOutsideAngular(function () {
            var scrollObservable;
            if (_this.scrollObservable) {
                scrollObservable = _this.scrollObservable.startWith('');
            }
            else {
                scrollObservable = scroll_listener_1.getScrollListener(_this.scrollTarget || windowTarget);
            }
            _this.scrollSubscription = _this.propertyChanges$
                .debounceTime(10)
                .switchMap(function (props) { return scrollObservable.let(lazyload_image_1.lazyLoadImage(_this.elementRef.nativeElement, props.lazyImage, props.defaultImage, props.errorImage, props.offset, props.useSrcset, props.scrollTarget)); })
                .subscribe(function (success) { return _this.onLoad.emit(success); });
        });
    };
    LazyLoadImageDirective.prototype.ngOnDestroy = function () {
        [this.scrollSubscription]
            .filter(function (subscription) { return subscription && !subscription.isUnsubscribed; })
            .forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    __decorate([
        core_1.Input('lazyLoad'),
        __metadata("design:type", Object)
    ], LazyLoadImageDirective.prototype, "lazyImage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LazyLoadImageDirective.prototype, "defaultImage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LazyLoadImageDirective.prototype, "errorImage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LazyLoadImageDirective.prototype, "scrollTarget", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LazyLoadImageDirective.prototype, "scrollObservable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], LazyLoadImageDirective.prototype, "offset", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], LazyLoadImageDirective.prototype, "useSrcset", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], LazyLoadImageDirective.prototype, "onLoad", void 0);
    LazyLoadImageDirective = __decorate([
        core_1.Directive({
            selector: '[lazyLoad]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.NgZone])
    ], LazyLoadImageDirective);
    return LazyLoadImageDirective;
}());
exports.LazyLoadImageDirective = LazyLoadImageDirective;
//# sourceMappingURL=lazyload-image.directive.js.map

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lazyload_image_directive_1 = __webpack_require__(465);
exports.LazyLoadImageDirective = lazyload_image_directive_1.LazyLoadImageDirective;
var lazyload_image_module_1 = __webpack_require__(511);
exports.LazyLoadImageModule = lazyload_image_module_1.LazyLoadImageModule;
exports.default = lazyload_image_module_1.LazyLoadImageModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(8);
var let_1 = __webpack_require__(490);
Observable_1.Observable.prototype.let = let_1.letProto;
Observable_1.Observable.prototype.letBind = let_1.letProto;
//# sourceMappingURL=let.js.map

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @param func
 * @return {Observable<R>}
 * @method let
 * @owner Observable
 */
function letProto(func) {
    return func(this);
}
exports.letProto = letProto;
//# sourceMappingURL=let.js.map

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(8);
var switchMap_1 = __webpack_require__(492);
Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var switchMap_1 = __webpack_require__(136);
/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project, resultSelector) {
    return switchMap_1.switchMap(project, resultSelector)(this);
}
exports.switchMap = switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(8);
var debounceTime_1 = __webpack_require__(494);
Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__(18);
var debounceTime_1 = __webpack_require__(256);
/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return debounceTime_1.debounceTime(dueTime, scheduler)(this);
}
exports.debounceTime = debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(496);
__webpack_require__(498);
__webpack_require__(500);
__webpack_require__(501);
var Observable_1 = __webpack_require__(8);
var scrollListeners = new WeakMap();
function sampleObservable(obs, scheduler) {
    return obs
        .sampleTime(100, scheduler)
        .share()
        .startWith('');
}
exports.sampleObservable = sampleObservable;
exports.getScrollListener = function (scrollTarget) {
    if (!scrollTarget || typeof scrollTarget.addEventListener !== 'function') {
        if (typeof window !== 'undefined') {
            console.warn('`addEventListener` on ' + scrollTarget + ' (scrollTarget) is not a function. Skipping this target');
        }
        return Observable_1.Observable.empty();
    }
    if (scrollListeners.has(scrollTarget)) {
        return scrollListeners.get(scrollTarget);
    }
    var srollEvent = Observable_1.Observable.create(function (observer) {
        var eventName = 'scroll';
        var handler = function (event) { return observer.next(event); };
        var options = { passive: true, capture: false };
        scrollTarget.addEventListener(eventName, handler, options);
        return function () { return scrollTarget.removeEventListener(eventName, handler, options); };
    });
    var listener = sampleObservable(srollEvent);
    scrollListeners.set(scrollTarget, listener);
    return listener;
};
//# sourceMappingURL=scroll-listener.js.map

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(8);
var startWith_1 = __webpack_require__(497);
Observable_1.Observable.prototype.startWith = startWith_1.startWith;
//# sourceMappingURL=startWith.js.map

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var startWith_1 = __webpack_require__(258);
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits the items you specify as arguments before it begins to emit
 * items emitted by the source Observable.
 *
 * <img src="./img/startWith.png" width="100%">
 *
 * @param {...T} values - Items you want the modified Observable to emit first.
 * @param {Scheduler} [scheduler] - A {@link IScheduler} to use for scheduling
 * the emissions of the `next` notifications.
 * @return {Observable} An Observable that emits the items in the specified Iterable and then emits the items
 * emitted by the source Observable.
 * @method startWith
 * @owner Observable
 */
function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i - 0] = arguments[_i];
    }
    return startWith_1.startWith.apply(void 0, array)(this);
}
exports.startWith = startWith;
//# sourceMappingURL=startWith.js.map

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(8);
var sampleTime_1 = __webpack_require__(499);
Observable_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;
//# sourceMappingURL=sampleTime.js.map

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__(18);
var sampleTime_1 = __webpack_require__(257);
/**
 * Emits the most recently emitted value from the source Observable within
 * periodic time intervals.
 *
 * <span class="informal">Samples the source Observable at periodic time
 * intervals, emitting what it samples.</span>
 *
 * <img src="./img/sampleTime.png" width="100%">
 *
 * `sampleTime` periodically looks at the source Observable and emits whichever
 * value it has most recently emitted since the previous sampling, unless the
 * source has not emitted anything since the previous sampling. The sampling
 * happens periodically in time every `period` milliseconds (or the time unit
 * defined by the optional `scheduler` argument). The sampling starts as soon as
 * the output Observable is subscribed.
 *
 * @example <caption>Every second, emit the most recent click at most once</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.sampleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {number} period The sampling period expressed in milliseconds or the
 * time unit determined internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the sampling.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable at the specified time interval.
 * @method sampleTime
 * @owner Observable
 */
function sampleTime(period, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return sampleTime_1.sampleTime(period, scheduler)(this);
}
exports.sampleTime = sampleTime;
//# sourceMappingURL=sampleTime.js.map

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(8);
var share_1 = __webpack_require__(252);
Observable_1.Observable.prototype.share = share_1.share;
//# sourceMappingURL=share.js.map

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(8);
var empty_1 = __webpack_require__(502);
Observable_1.Observable.empty = empty_1.empty;
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var EmptyObservable_1 = __webpack_require__(36);
exports.empty = EmptyObservable_1.EmptyObservable.create;
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(504);
__webpack_require__(134);
__webpack_require__(505);
__webpack_require__(255);
__webpack_require__(507);
__webpack_require__(254);
__webpack_require__(509);
var Observable_1 = __webpack_require__(8);
var rect_1 = __webpack_require__(510);
function isVisible(element, threshold, _window, scrollContainer) {
    if (threshold === void 0) { threshold = 0; }
    var elementBounds = rect_1.Rect.fromElement(element);
    var windowBounds = rect_1.Rect.fromWindow(_window);
    elementBounds.inflate(threshold);
    if (scrollContainer) {
        var scrollContainerBounds = rect_1.Rect.fromElement(scrollContainer);
        var intersection = scrollContainerBounds.getIntersectionWith(windowBounds);
        return elementBounds.intersectsWith(intersection);
    }
    else {
        return elementBounds.intersectsWith(windowBounds);
    }
}
exports.isVisible = isVisible;
function isChildOfPicture(element) {
    return Boolean(element.parentElement && element.parentElement.nodeName.toLowerCase() === 'picture');
}
exports.isChildOfPicture = isChildOfPicture;
function isImageElement(element) {
    return element.nodeName.toLowerCase() === 'img';
}
exports.isImageElement = isImageElement;
function loadImage(element, imagePath, useSrcset) {
    var img;
    if (isImageElement(element) && isChildOfPicture(element)) {
        var parentClone = element.parentNode.cloneNode(true);
        img = parentClone.getElementsByTagName('img')[0];
        setSourcesToLazy(img);
        setImage(img, imagePath, useSrcset);
    }
    else {
        img = new Image();
        if (isImageElement(element) && element.sizes) {
            img.sizes = element.sizes;
        }
        if (useSrcset) {
            img.srcset = imagePath;
        }
        else {
            img.src = imagePath;
        }
    }
    return Observable_1.Observable
        .create(function (observer) {
        img.onload = function () {
            observer.next(imagePath);
            observer.complete();
        };
        img.onerror = function (err) {
            observer.error(null);
        };
    });
}
function setImage(element, imagePath, useSrcset) {
    if (isImageElement(element)) {
        if (useSrcset) {
            element.srcset = imagePath;
        }
        else {
            element.src = imagePath;
        }
    }
    else {
        element.style.backgroundImage = "url('" + imagePath + "')";
    }
    return element;
}
function setSources(attrName) {
    return function (image) {
        var sources = image.parentElement.getElementsByTagName('source');
        for (var i = 0; i < sources.length; i++) {
            var attrValue = sources[i].getAttribute(attrName);
            if (attrValue) {
                sources[i].srcset = attrValue;
            }
        }
    };
}
var setSourcesToDefault = setSources('defaultImage');
var setSourcesToLazy = setSources('lazyLoad');
var setSourcesToError = setSources('errorImage');
function setImageAndSources(setSourcesFn) {
    return function (element, imagePath, useSrcset) {
        if (isImageElement(element) && isChildOfPicture(element)) {
            setSourcesFn(element);
        }
        if (imagePath) {
            setImage(element, imagePath, useSrcset);
        }
    };
}
var setImageAndSourcesToDefault = setImageAndSources(setSourcesToDefault);
var setImageAndSourcesToLazy = setImageAndSources(setSourcesToLazy);
var setImageAndSourcesToError = setImageAndSources(setSourcesToError);
function setLoadedStyle(element) {
    var styles = element.className
        .split(' ')
        .filter(function (s) { return !!s; })
        .filter(function (s) { return s !== 'ng-lazyloading'; });
    styles.push('ng-lazyloaded');
    element.className = styles.join(' ');
    return element;
}
function lazyLoadImage(element, imagePath, defaultImagePath, errorImgPath, offset, useSrcset, scrollContainer) {
    if (useSrcset === void 0) { useSrcset = false; }
    setImageAndSourcesToDefault(element, defaultImagePath, useSrcset);
    if (element.className && element.className.includes('ng-lazyloaded')) {
        element.className = element.className.replace('ng-lazyloaded', '');
    }
    return function (scrollObservable) {
        return scrollObservable
            .filter(function () { return isVisible(element, offset, window, scrollContainer); })
            .take(1)
            .mergeMap(function () { return loadImage(element, imagePath, useSrcset); })
            .do(function () { return setImageAndSourcesToLazy(element, imagePath, useSrcset); })
            .map(function () { return true; })
            .catch(function () {
            setImageAndSourcesToError(element, errorImgPath, useSrcset);
            element.className += ' ng-failed-lazyloaded';
            return Observable_1.Observable.of(false);
        })
            .do(function () { return setLoadedStyle(element); });
    };
}
exports.lazyLoadImage = lazyLoadImage;
//# sourceMappingURL=lazyload-image.js.map

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(8);
var filter_1 = __webpack_require__(253);
Observable_1.Observable.prototype.filter = filter_1.filter;
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(8);
var take_1 = __webpack_require__(506);
Observable_1.Observable.prototype.take = take_1.take;
//# sourceMappingURL=take.js.map

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var take_1 = __webpack_require__(259);
/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    return take_1.take(count)(this);
}
exports.take = take;
//# sourceMappingURL=take.js.map

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(8);
var mergeMap_1 = __webpack_require__(508);
Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var mergeMap_1 = __webpack_require__(52);
/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link mergeAll}.</span>
 *
 * <img src="./img/mergeMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger.
 *
 * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
 * var letters = Rx.Observable.of('a', 'b', 'c');
 * var result = letters.mergeMap(x =>
 *   Rx.Observable.interval(1000).map(i => x+i)
 * );
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // a0
 * // b0
 * // c0
 * // a1
 * // b1
 * // c1
 * // continues to list a,b,c with respective ascending integers
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and merging the results of the Observables obtained
 * from this transformation.
 * @method mergeMap
 * @owner Observable
 */
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return mergeMap_1.mergeMap(project, resultSelector, concurrent)(this);
}
exports.mergeMap = mergeMap;
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(8);
var of_1 = __webpack_require__(132);
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Rect = (function () {
    function Rect(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    Rect.fromElement = function (element) {
        var _a = element.getBoundingClientRect(), left = _a.left, top = _a.top, right = _a.right, bottom = _a.bottom;
        return new Rect(left, top, right, bottom);
    };
    Rect.fromWindow = function (_window) {
        return new Rect(0, 0, _window.innerWidth, _window.innerHeight);
    };
    Rect.prototype.inflate = function (inflateBy) {
        this.left -= inflateBy;
        this.top -= inflateBy;
        this.right += inflateBy;
        this.bottom += inflateBy;
    };
    Rect.prototype.intersectsWith = function (rect) {
        return (rect.left < this.right) &&
            (this.left < rect.right) &&
            (rect.top < this.bottom) &&
            (this.top < rect.bottom);
    };
    Rect.prototype.getIntersectionWith = function (rect) {
        var left = Math.max(this.left, rect.left);
        var top = Math.max(this.top, rect.top);
        var right = Math.min(this.right, rect.right);
        var bottom = Math.min(this.bottom, rect.bottom);
        if (right >= left && bottom >= top) {
            return new Rect(left, top, right, bottom);
        }
        else {
            return Rect.empty;
        }
    };
    Rect.empty = new Rect(0, 0, 0, 0);
    return Rect;
}());
exports.Rect = Rect;
//# sourceMappingURL=rect.js.map

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var lazyload_image_directive_1 = __webpack_require__(465);
var LazyLoadImageModule = (function () {
    function LazyLoadImageModule() {
    }
    LazyLoadImageModule = __decorate([
        core_1.NgModule({
            declarations: [lazyload_image_directive_1.LazyLoadImageDirective],
            exports: [lazyload_image_directive_1.LazyLoadImageDirective]
        })
    ], LazyLoadImageModule);
    return LazyLoadImageModule;
}());
exports.LazyLoadImageModule = LazyLoadImageModule;
//# sourceMappingURL=lazyload-image.module.js.map

/***/ }),

/***/ 525:
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
        this.defaultImage = 'assets/imgs/avatar.png';
        this.offset = 1000;
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
            selector: 'page-contact',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-navbar >\n\n      <ion-title>User Settings</ion-title>\n\n \n\n    </ion-navbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content  class="animated fadeIn" >\n\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content></ion-refresher-content>\n\n      </ion-refresher>\n\n    \n\n  <div class="profile-imgouter" >\n\n      <div class="img-bgt"></div>\n\n      <div (click)="updateProfileImage()" class="p-img-outer">\n\n\n\n        \n\n        \n\n        <img [defaultImage]="defaultImage" [lazyLoad]="userdata.profile_image" [offset]="offset">\n\n\n\n      </div>\n\n      <p class="username">{{userdata.firstname}}  {{userdata.lastname}}</p>\n\n      <ion-icon name="star-outline"></ion-icon>\n\n      <ion-icon name="star-outline"></ion-icon>\n\n      <ion-icon name="star-outline"></ion-icon>\n\n      <ion-icon name="star-outline"></ion-icon>\n\n      <ion-icon name="star-outline"></ion-icon>\n\n      <p class="owner">Owner</p>\n\n<button   (click)="changePassword()" ion-button clear>    Change Password\n\n</button>\n\n</div>\n\n    <div padding>\n\n  <ion-list no-border>\n\n    \n\n    <h4 class="headingB">General</h4>\n\n    <ion-item>\n\n\n\n             <ion-label fixed>   <ion-icon name="call"></ion-icon> Phone</ion-label>\n\n            <ion-input type="text" value="" [(ngModel)]="userdata.phone"></ion-input>\n\n     </ion-item>\n\n    <ion-item>\n\n\n\n        <ion-label fixed>   <ion-icon name="mail"></ion-icon> Email</ion-label>\n\n       <ion-input type="text" value="" [(ngModel)]="userdata.email"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label fixed>   <ion-icon name="ios-stats-outline"></ion-icon> Zip</ion-label>\n\n     <ion-input type="text" value="" [(ngModel)]="userdata.zip"></ion-input>\n\n\n\n\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>   <ion-icon name="school"></ion-icon> About</ion-label>\n\n     <ion-textarea [(ngModel)]="userdata.about"></ion-textarea>\n\n\n\n\n\n\n\n    </ion-item>\n\n    <ion-item>\n\n      <p>\n\n          <ion-icon name="share"></ion-icon>\n\n\n\n        Joined</p><p   item-end>{{userdata.createdAt|date}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n \n\n\n\n  \n\n  \n\n\n\n  <button icon="people" ion-button full round  (click)="saveProfileEdit()" class="login-button mrt16">\n\n    Save\n\n  </button>\n\n\n\n \n\n\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=3.js.map