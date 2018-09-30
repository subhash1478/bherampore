import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { UtilityProvider } from '../../providers/utility/utility';
import { AlertController ,MenuController} from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Events } from 'ionic-angular';
/**
* Generated class for the LoginPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: any = {}
  login_page: boolean = true
  userdata: any;
  constructor(public utility: UtilityProvider,
    private fb: Facebook,public events: Events,
    public alertCtrl: AlertController,
    public navCtrl: NavController, private platform:Platform,
    public navParams: NavParams,
    public menu:MenuController,
    public _services: ServicesProvider) {
    }
    ionViewDidLoad() {
      this.menu.enable(false);
      console.log('ionViewDidLoad LoginPage');
      this.getaddress();
    }
    gotoregister() {
      this.login_page = false
    }
    gotologin() {
      this.login_page = true
    }
    login() {
      this._services.doLogin(this.user).subscribe((Response: any) => {
        console.log("crash", Response);
        if (Response.success == true) {
          this.verifyPhoneNumber()
          localStorage.setItem('token', Response.data.token)
          localStorage.setItem('userdetails', JSON.stringify(Response.data.userDetails))

        } else {
          var msg = {
            msg: Response.message,
            duration: 3000,
            position: 'centre',
          }
          this.utility.messageToast(msg)
        }
      })
    }
    register() {
      let address = JSON.parse(localStorage.getItem('address'));
      let stringExp =/^[a-zA-Z]+$/;
      let emailExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(this.user.firstname==undefined || this.user.firstname==""){
        var msg = {msg: 'First name is required',duration: 3000,position: 'centre'}
        this.utility.messageToast(msg);
        return false;
      }
      if(stringExp.test(this.user.firstname)==false){
        var msg = {msg: 'First name should be character only',duration: 3000,position: 'centre'}
        this.utility.messageToast(msg);
        return false;
      }
      if(this.user.lastname==undefined || this.user.lastname==""){
        var msg = {msg: 'Last name is required',duration: 3000,position: 'centre'}
        this.utility.messageToast(msg);
        return false;
      }
      if(stringExp.test(this.user.lastname)==false){
        let msg = {msg: 'Last name should be character only',duration: 3000,position: 'centre'}
        this.utility.messageToast(msg);
        return false;
      }
      if(this.user.email==undefined || this.user.email==""){
        let msg = {msg: 'Email is required',duration: 3000,position: 'centre'}
        this.utility.messageToast(msg);
        return false;
      }
      if(emailExp.test(this.user.email)==false){
        let msg = {msg: 'Enter valid email ',duration: 3000,position: 'centre'}
        this.utility.messageToast(msg);
        return false;
      }
      if(this.user.password==undefined || this.user.password==""){
        let msg = {msg: 'Password is required',duration: 3000,position: 'centre'}
        this.utility.messageToast(msg);
        return false;
      }
      if(this.user.password.length<5){
        let msg = {msg: 'Password atleast 6 character required',duration: 3000,position: 'centre'}
        this.utility.messageToast(msg);
        return false;
      }
      var obj = {
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        email: this.user.email,
        password: this.user.password,
        type: 'customer',
        location: JSON.parse(localStorage.getItem('location')),
        address: address.street,
        state: address.state,
        city: address.city,
        country: address.country,
      }
      this._services.register(obj).subscribe((Response: any) => {
        if(Response.success==true){
          let msg = {msg: 'Successful register login now',duration: 3000,position: 'centre'}
          this.utility.messageToast(msg);
          this.gotologin()
        }else{
          let msg = {msg: Response.message,duration: 3000,position: 'centre'}
          this.utility.messageToast(msg);
        }
        console.log(Response)
      })
    }
    getaddress() {
      this._services.getaddress().subscribe((Response) => {
        if (Response.status === 'OK') {
          var results = Response.results
          console.log(results)
          if (results[0]) {
            console.log(results[0].formatted_address)
            var street = "";
            var city = "";
            var state = "";
            var country = "";
            var zipcode = "";
            for (var i = 0; i < results.length; i++) {
              if (results[i].types[0] === "locality") {
                city = results[i].address_components[0].long_name;
                state = results[i].address_components[2].long_name;
                console.log(city, state)
              }
              if (results[i].types[0] === "postal_code" && zipcode == "") {
                zipcode = results[i].address_components[0].long_name;
              }
              if (results[i].types[0] === "country") {
                country = results[i].address_components[0].long_name;
              }
              if (results[i].types[0] === "route" && street == "") {
                for (var j = 0; j < 4; j++) {
                  if (j == 0) {
                    street = results[i].address_components[j].long_name;
                  } else {
                    street += ", " + results[i].address_components[j].long_name;
                  }
                }
              }
              if (results[i].types[0] === "street_address") {
                for (var j = 0; j < 4; j++) {
                  if (j == 0) {
                    street = results[i].address_components[j].long_name;
                  } else {
                    street += ", " + results[i].address_components[j].long_name;
                  }
                }
              }
            }
            if (zipcode == "") {
              if (typeof results[0].address_components[8] !== 'undefined') {
                zipcode = results[0].address_components[8].long_name;
              }
            }
            if (country == "") {
              if (typeof results[0].address_components[7] !== 'undefined') {
                country = results[0].address_components[7].long_name;
              }
            }
            if (state == "") {
              if (typeof results[0].address_components[6] !== 'undefined') {
                state = results[0].address_components[6].long_name;
              }
            }
            if (city == "") {
              if (typeof results[0].address_components[5] !== 'undefined') {
                city = results[0].address_components[5].long_name;
              }
            }
            var address = {
              "street": results[0].formatted_address,
              "city": city,
              "state": state,
              "country": country,
              "zipcode": zipcode,
            };
            localStorage.setItem('address', JSON.stringify(address))
            console.log(address);
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      })
    }
    fbook() {
      this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        this._services.getFacebookGraphApi(res).subscribe((Response) => {
          console.log('graph api', Response)
          var obj = {
            firstname: Response.first_name,
            lastname: Response.last_name,
            email: Response.email,
            about: Response.about,
            profile_image: Response.picture.data.url,
            birthday: Response.birthday,
            facebook_id: Response.id,
            type: 'customer',
            location: JSON.parse(localStorage.getItem('location')),
            address: JSON.parse(localStorage.getItem('address')),
          }
          this.user = {
            imageUrl: obj.profile_image,
            name: obj.firstname + ' ' + obj.lastname,
          }
          this.fbLogin(obj)
        })
      })
      .catch(e => console.log('Error logging into Facebook', e));
    }
    fbLogin(data) {
      this._services.login(data).subscribe((Response) => {
        console.log(Response)
        if (Response.success) {
          localStorage.setItem('token', Response.data.token)
          localStorage.setItem('userdetails', JSON.stringify(Response.data.userDetails));
         this.verifyPhoneNumber()
        }
      })
    }
    forgetPassword(){
      const prompt = this.alertCtrl.create({
        title: 'Forget Password',
        message: "Enter Email",
        inputs: [
          {
            name: 'email',
            placeholder: 'Email'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Send',
            handler: data => {
              if(!data.email){
                let msg = {msg: 'Please enter your register email',duration: 3000,position: 'centre'}
                this.utility.showToast(msg);
                return false;
              }
               this._services.forgetPassword(data).subscribe((response)=>{
               if(response==null){
                let msg = {msg: 'Please check you email and follow the instruction',duration: 3000,position: 'centre'}
                this.utility.showToast(msg)

               }else{
                let msg = {msg: response.message,duration: 3000,position: 'centre'}
                this.utility.showToast(msg)

               }
             
              })
              
            }
          }
        ]
      });
      prompt.present();
    }

    verifyPhoneNumber(){
      if (this.platform.is('cordova')) {

      (<any>window).AccountKitPlugin.loginWithPhoneNumber({
        useAccessToken: true,
        defaultCountryCode: "IN",
        facebookNotificationsEnabled: true,
      }, data => {
      (<any>window).AccountKitPlugin.getAccount((info)=>{
  
        console.log(info);

        this.userdata = JSON.parse(localStorage.getItem('userdetails'));

       
        this.userdata.phone=info.phoneNumber
        this._services.updateuser(this.userdata).subscribe((response)=>{
          let msg = {msg: 'saved ',duration: 3000,position: 'centre'}
          localStorage.setItem('userdetails',JSON.stringify(this.userdata))
          this.navCtrl.setRoot("HomePage")
          this.events.publish('userdetails');
         })
  
      },(err)=>{
  
  
        console.log(err);
  
      })
    })
  }else{
    

    

    
    localStorage.setItem('userdetails',JSON.stringify(this.userdata))
    this.navCtrl.setRoot("HomePage")
    this.events.publish('userdetails');
  }


    }
  }
  