import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { UtilityProvider } from '../../providers/utility/utility';
/**
 * Generated class for the VendorjoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vendorjoin',
  templateUrl: 'vendorjoin.html',
})
export class VendorjoinPage {
user:any={}
constructor(public utility: UtilityProvider, 
  public navCtrl: NavController, public navParams: NavParams, public _services: ServicesProvider) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VendorjoinPage');
  }

  submit(){
    let stringExp =/^[a-zA-Z]+$/;
    let phoneExp =/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    
    if(this.user.shopname==undefined || this.user.shopname==""){
      let msg = {msg: 'shopname is required',duration: 3000,position: 'centre'}
      this.utility.messageToast(msg);
      return false;
    }
    if(stringExp.test(this.user.shopname)==false){
      let msg = {msg: 'shopname should be character only',duration: 3000,position: 'centre'}
      this.utility.messageToast(msg);
      return false;
    }
  
    if(this.user.phone==undefined || this.user.phone==""){
      let msg = {msg: 'phone number is required',duration: 3000,position: 'centre'}
      this.utility.messageToast(msg);
      return false;
    }
    if(phoneExp.test(this.user.phone)==false){
      let msg = {msg: 'Enter valid phone number',duration: 3000,position: 'centre'}
      this.utility.messageToast(msg);
      return false;
    }


          
    if(this.user.address==undefined || this.user.address==""){
      let msg = {msg: 'address is required',duration: 3000,position: 'centre'}
      this.utility.messageToast(msg);
      return false;
    }
          
    if(this.user.about==undefined || this.user.about==""){
      let msg = {msg: 'about is required',duration: 3000,position: 'centre'}
      this.utility.messageToast(msg);
      return false;
    }


    this._services.updateuser(this.user).subscribe((Response)=>{
console.log(Response);

    })
 
  }

}
