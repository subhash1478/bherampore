import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { UtilityProvider } from '../../providers/utility/utility'

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  feed:any={}
  constructor( 
    public utility: UtilityProvider, public navCtrl: NavController,
     public navParams: NavParams, public _services: ServicesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

  
submit(){
  if(!this.feed.subject){
    var msg = {msg: 'Subject is required',duration: 3000,position: 'centre'}
    this.utility.messageToast(msg);
    return false;
  }
  if(!this.feed.comment){
    let  msg = {msg: 'Comment is required',duration: 3000,position: 'centre'}
    this.utility.messageToast(msg);
    return false;
  }
  this._services.feedback(this.feed).subscribe((Response: any) => {
    if(Response.success==true){
      let msg = {msg: 'Successful sent',duration: 3000,position: 'centre'}
      this.utility.messageToast(msg);
 
    }else{
      let msg = {msg: Response.message,duration: 3000,position: 'centre'}
      this.utility.messageToast(msg);
    }
    console.log(Response)
  })
}
}
