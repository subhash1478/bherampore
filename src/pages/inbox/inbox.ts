import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import io from 'socket.io-client';
import { ServicesProvider } from '../../providers/services/services';
import { Config } from '../../config';
import { UtilityProvider } from '../../providers/utility/utility';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
})
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {
  socket: any;
  userList: any=[];
  User :any= {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public _services:ServicesProvider,public utility:UtilityProvider,public alertCtrl: AlertController
  ) {

if(localStorage.getItem('userdetails')!=null){

 
  this.User =JSON.parse(localStorage.getItem('userdetails'))

  var param={
    query: 'userid=' +  this.User._id + '&sessionid=' + localStorage.getItem('token')  + '&chatToken=' + localStorage.getItem('token')
  }
  this.socket = io(Config.SOCKET_ENDPOINT,param);
  console.log(this.socket,param)
  this.socket.on('chatReciveRemoteuser', (data) => {
    console.log(data)
   });
}



  }

  ionViewDidLoad() {
 
    this._services.getChatUserLIst().subscribe((Response:any)=>{
       this.userList =Response.data
 


      this.userList.forEach(element => {
        var obj = {
          remoteuserid: element._id,
          userid:this.User._id
        };
        console.log(obj)
        this.socket.emit('peerConnectRequest', obj);
      });

   },(Error)=>{

   })
    console.log('ionViewDidLoad InboxPage');
  }

  openChat(item) {
    this.navCtrl.push('ChatPage', item);
  }
}
