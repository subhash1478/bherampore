
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, Events, Content, IonicPage } from 'ionic-angular';


import io from 'socket.io-client';
import { ServicesProvider } from '../../providers/services/services';
import { Config } from '../../config';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@IonicPage({
  segment:'page-chat/id/:id'
})
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage  implements OnInit {

  itemsSubscription: Subscription;
  chatHistoryListing: any;
  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: ElementRef;
  msgList: any= [];


  editorMsg = '';
  showEmojiPicker = false;
  socket: any;
  userList: any=[];
  User :any= {};
  remoteuser:any=[]


  constructor(public navParams: NavParams,
    private service: ServicesProvider,
    private events: Events) {
      // Get the navParams toUserId parameter



      this.User =JSON.parse(localStorage.getItem('userdetails'))
      this.remoteuser=this.navParams.data.id

      console.log('====================================');
      console.log( this.remoteuser);
      console.log('====================================');
      var param={
        query: 'userid=' +  this.User._id + '&sessionid=' + localStorage.getItem('token')  + '&chatToken=' + localStorage.getItem('token')
      }
      this.socket = io(Config.SOCKET_ENDPOINT,param);
      var obj = {
        remoteuserid: this.remoteuser,
        userid:this.User._id
      };
      this.socket.emit('peerConnectRequest', obj);



     this.itemsSubscription= this.getMessages().subscribe(message => {
        this.msgList.push(message);
        this.scrollToBottom()
      });
    
 
    }

    getMessages() {
      let observable = new Observable(observer => {
        this.socket.on('chatReciveRemoteuser', (data) => {
          observer.next(data);
        });
      })
      return observable;
    }
    ngOnInit() {
    }

    ionViewWillLeave() {
      // unsubscribe
    }

    ionViewDidEnter() {
      //get message list
      this.getMsg();

      // Subscribe to received  new message events
    }

    onFocus() {
      this.showEmojiPicker = false;
      this.content.resize();
      this.scrollToBottom();
    }

    switchEmojiPicker() {
      this.showEmojiPicker = !this.showEmojiPicker;
      if (!this.showEmojiPicker) {
        this.focus();
      } else {
        this.setTextareaScroll();
      }
      this.content.resize();
      this.scrollToBottom();
    }

    /**
    * @name getMsg
    * @returns {Promise<ChatMessage[]>}
    */
    getMsg() {
      var obj={
        page:1,
        remoteuserid:this.remoteuser
      }




      this.service.getChatHistory(obj).subscribe((response)=>{
        var chatHistory=[],senderImage
        if (response.success) {
          // load chat
          for (var i = 0; i < response.Chats.length; i++) {


            var data = {
              chatid: response.Chats[i]._id,
              remoteuserid: response.Chats[i].remoteUserId,
              userid: response.Chats[i].userId,
              chat: response.Chats[i].chatText,
              attachment: response.Chats[i].attachment,
              size: response.Chats[i].size,
              filename: response.Chats[i].chatFileName,
              type: 'text',
              progressshow: 0,
              time:response.Chats[i].chatDate,
              randomid: response.Chats[i].randomid,
              receiver_seen: response.Chats[i].receiver_seen,
              senderImage:senderImage


            };

console.log('====================================')
console.log(data)
console.log('====================================')
            this.msgList.push(data);

          }
        }

         this.scrollToBottom();
      },(Error)=>{
      })



    }

    /**
    * @name sendMsg
    */
    sendMsg() {
      if (!this.editorMsg.trim()) return;
      if (!this.showEmojiPicker) {
        this.focus();
      }


      var data = {
        remoteuserid:this.remoteuser._id,
        username: 'chatuser_name',
        userid:this.User._id,
        chat:this.editorMsg,
        type: "text",
        attachment: "",
        progress: 0,
        socketid: '',
        time: Date(),
        jsonWebToken:localStorage.getItem('token'),
        sender_seen: 'yes',
        receiver_seen: 'no',
        randomid: Math.random(),
        senderImage:this.User.profile_image
      };
      this.socket.emit('sendchat', data);
this.editorMsg=''
this.msgList.push(data)
this.scrollToBottom()
    }

  
    // pushNewMsg(msg:any) {
    //   const userId = this.user.id,
    //   toUserId = this.toUser.id;
    //   // Verify user relationships
    //   if (msg.userId === userId && msg.toUserId === toUserId) {
    //     this.msgList.push(msg);
    //   } else if (msg.toUserId === userId && msg.userId === toUserId) {
    //     this.msgList.push(msg);
    //   }
    //   this.scrollToBottom();
    // }

    getMsgIndexById(id: string) {
      return this.msgList.findIndex(e => e.messageId === id)
    }

    scrollToBottom() {
      setTimeout(() => {
        if (this.content.scrollToBottom) {
          this.content.scrollToBottom();
        }
      }, 400)
    }

    private focus() {
      if (this.messageInput && this.messageInput.nativeElement) {
        this.messageInput.nativeElement.focus();
      }
    }

    private setTextareaScroll() {
      const textarea = this.messageInput.nativeElement;
      textarea.scrollTop = textarea.scrollHeight;
    }
  }
