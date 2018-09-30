import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UtilityProvider } from '../../providers/utility/utility';
import { ServicesProvider } from '../../providers/services/services';
import { Config } from '../../config';

/**
* Generated class for the AddressPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {
  add:any={}
  constructor( 
    public utility: UtilityProvider, public navCtrl: NavController,   public modalCtrl: ModalController,
    public navParams: NavParams, public _services: ServicesProvider) {
    }
    
    ionViewDidLoad() {
      console.log('ionViewDidLoad AddressPage');
      let data={
        userid:Config.USER._id
      }
      this._services.getShippingAddress(data).subscribe((Response) => {
        console.log(Response);
        let result=Response.response.data
        
        if(result.length>0){
          this.add=Response.response.data[0] 
          
        }else{
          this.add.phone=Config.USER.phone
        }
      });
    }
    saveAddress(){
      if(!this.add.phone){
        var msg = {msg: 'phone is required',duration: 3000,position: 'centre'}
        this.utility.showToast(msg);
        return false;
      }
      if(!this.add.city){
        var msg = {msg: 'city is required',duration: 3000,position: 'centre'}
        this.utility.showToast(msg);
        return false;
      }
      if(!this.add.locality){
        let msg = {msg: 'locality is required',duration: 3000,position: 'centre'}
        this.utility.showToast(msg);
        return false;
      }
      if(!this.add.address){
        let msg = {msg: 'address is required',duration: 3000,position: 'centre'}
        this.utility.showToast(msg);
        return false;
      }
      if(!this.add.landmark){
        let msg = {msg: 'landmark is required',duration: 3000,position: 'centre'}
        this.utility.showToast(msg);
        return false;
      }
      this._services.shippingAddress(this.add).subscribe((Response: any) => {
        let msg = {msg: 'Successful save',duration: 3000,position: 'centre'}
        this.utility.showToast(msg);
        
        this.navCtrl.push('CheckoutPage')
        console.log(Response)
      })
    }


    changePhoneNumber(){
 
     let modal = this.modalCtrl.create('PhoneVerificationPage');
     modal.present();
     modal.onDidDismiss(data => {
       this.add.phone=data
      console.log(data);
    });
    }
    
  }
  