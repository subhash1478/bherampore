webpackJsonp([29],{

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
            ],
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChatPage = /** @class */ (function () {
    function ChatPage() {
    }
    //   itemsSubscription: Subscription;
    //   chatHistoryListing: any;
    //   @ViewChild(Content) content: Content;
    //   @ViewChild('chat_input') messageInput: ElementRef;
    //   msgList: any= [];
    //   editorMsg = '';
    //   showEmojiPicker = false;
    //   socket: any;
    //   userList: any=[];
    //   User :any= {};
    //   remoteuser:any=[]
    //   constructor(public navParams: NavParams,
    //     private service: ServicesProvider,
    //     private events: Events) {
    //       // Get the navParams toUserId parameter
    //       this.User =JSON.parse(localStorage.getItem('userdetails'))
    //       this.remoteuser=this.navParams.data.id
    //       console.log('====================================');
    //       console.log( this.remoteuser);
    //       console.log('====================================');
    //       var param={
    //         query: 'userid=' +  this.User._id + '&sessionid=' + localStorage.getItem('token')  + '&chatToken=' + localStorage.getItem('token')
    //       }
    //       this.socket = io(Config.SOCKET_ENDPOINT,param);
    //       var obj = {
    //         remoteuserid: this.remoteuser,
    //         userid:this.User._id
    //       };
    //       this.socket.emit('peerConnectRequest', obj);
    //      this.itemsSubscription= this.getMessages().subscribe(message => {
    //         this.msgList.push(message);
    //         this.scrollToBottom()
    //       });
    //     }
    //     getMessages() {
    //       let observable = new Observable(observer => {
    //         this.socket.on('chatReciveRemoteuser', (data) => {
    //           observer.next(data);
    //         });
    //       })
    //       return observable;
    //     }
    ChatPage.prototype.ngOnInit = function () {
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"E:\workspace\bherampur project\brahmapur\src\pages\chat\chat.html"*/'<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Agent</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="message-wrap">\n\n\n\n    <div *ngFor="let msg of msgList"\n\n         class="message"\n\n         [class.left]=" msg.remoteuserid === User._id "\n\n         [class.right]=" msg.userid === User._id ">\n\n\n\n         <ion-spinner name="dots" *ngIf="msg.receiver_seen === \'yes\'"></ion-spinner>\n\n      <div class="msg-detail">\n\n        <div class="msg-info">\n\n          <p *ngIf="msg.remoteuserid === User._id ">\n\n            {{remoteuser.firstname}}</p>\n\n\n\n            <p *ngIf="msg.userid === User._id ">\n\n              {{User.firstname}}</p>\n\n        </div>\n\n        <div class="msg-content">\n\n          <span class="triangle"></span>\n\n          <p class="line-breaker ">{{msg.chat}}</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n\n  <div class="input-wrap">\n\n \n\n    <textarea #chat_input\n\n              placeholder="Type a message"\n\n              [(ngModel)]="editorMsg"\n\n              (keyup.enter)="sendMsg()"\n\n              (focusin)="onFocus()">\n\n    </textarea>\n\n    <button ion-button clear icon-only item-right (click)="sendMsg()">\n\n      <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n\n    </button>\n\n  </div> -->\n\n'/*ion-inline-end:"E:\workspace\bherampur project\brahmapur\src\pages\chat\chat.html"*/,
        })
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=29.js.map