import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services'
import { UtilityProvider } from '../../providers/utility/utility'
import { Config } from '../../config';
/**
* Generated class for the NotificationPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  notificationList: any;
  constructor(  
    public utility: UtilityProvider, public navCtrl: NavController, 
    public navParams: NavParams, public _services: ServicesProvider) {
    }
    ionViewDidLoad() {
      let obj={
        id:Config.USER._id
      }
      this._services.getNotification(obj).subscribe((response)=>{

  let result=response.response.data;
  result.sort((a,b):any =>{
    let date1=new Date(a.createdAt);
    let date2=new Date(b.createdAt);
    return date2.getTime() -  date1.getTime()

  });

  this.notificationList=result;
      },(error)=>{

      })
    }

    delete(i,item){
      let obj={
        id:item.id
      }
       this._services.MarkSeenNotification(obj).subscribe((response)=>{
        this.notificationList.splice(i,1);
      },(error)=>{
      })
    }

    goToMyOrder(i,item){
      this.delete(i,item);
    
      this.navCtrl.push('MyOrderPage')
    }
  }
