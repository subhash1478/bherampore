import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { UtilityProvider } from '../../providers/utility/utility';
import { Config } from '../../config';
import { AndroidPermissions } from '@ionic-native/android-permissions';

declare var SMS:any;
/**
* Generated class for the PhoneVerificationPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-phone-verification',
  templateUrl: 'phone-verification.html',
})
export class PhoneVerificationPage {
  phone:any
  showotp:Boolean=true
  otp:any
  constructor( public androidPermissions: AndroidPermissions,public platform:Platform,public viewCtrl: ViewController,
    public utility: UtilityProvider, public navCtrl: NavController,
    public navParams: NavParams, public _services: ServicesProvider) {
    }
    ionViewDidLoad() {
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(
        success => console.log('Permission granted'),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_SMS)
        );
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
        console.log('ionViewDidLoad PhoneVerificationPage');
      }
      sendOTP(){
        let phoneno = /^\d{10}$/;
        if(phoneno.test(this. phone)===false){
          let msg = {msg: 'Phone number is not valid',duration: 3000,position: 'centre'}
          this.utility.showToast(msg);
          return false;
        }
        let obj={
          phone:this.phone,
          email:Config.USER.email
        }
        console.log(obj);
        this._services.sendOTP(obj).subscribe((response)=>{
          let data=JSON.parse(response.response.data)
          console.log(data);
          if(data.type=='success'){
            this.showotp=false
            //this.watchOTP()
          }
        })
      }
      list(){
    
       
this.platform.ready().then((readySource) => {
    
  let filter = {
  box : 'inbox', // 'inbox' (default), 'sent', 'draft'
  indexFrom : 0, // start from index 0
  maxCount : 100, // count of SMS to return each time
  };
      
  if(SMS) SMS.listSMS(filter, (ListSms)=>{               
 
 console.log('====================================')
 console.log(ListSms)
 console.log('====================================')
  },
      
  Error=>{
  alert(JSON.stringify(Error))
  });
           
  });
      }


      clear(){
        this.phone=''
      }
      watchOTP(){

        
           let smsarrive= new Promise(function(resolve,reject){
            if(SMS) SMS.startWatch(()=>{
              console.log('watching started');
            }, Error=>{
              console.log('failed to start watching');
            });
            document.addEventListener('onSMSArrive', (e:any)=>{
              var sms = e.data;
              console.log(sms);
              resolve(sms)
            });
          })
       

        console.log(smsarrive);
        
      }
      


    
      verifyotp(){


        let obj={
          phone:this.phone,
          otp:this.otp
        }
        this._services.verifyOTP(obj).subscribe((response)=>{
          let data=JSON.parse(response.response.data)
          console.log(data);
          if(data.type=='success'){
            let msg={
              msg:"Verified",
              duration:3000
            }
            this.utility.showToast(msg)
            this.viewCtrl.dismiss(this.phone);

          }
          else{
            let msg={
              msg:"Wrong OTP",
              duration:3000
            }
            this.utility.showToast(msg)
            this.viewCtrl.dismiss(this.phone);

          }
        })

      }

      dismiss(){
            this.viewCtrl.dismiss(    );

      }






    }
    