import { Response } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, IonicPage,ActionSheetController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services'
import { UtilityProvider } from '../../providers/utility/utility'
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Config } from '../../config';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  enableNotifications = true;
  defaultImage = 'assets/imgs/avatar.png';
  offset = 1000;
  userdata: any = {}
  constructor(  public services: ServicesProvider,    public alertCtrl: AlertController,public actionSheetCtrl:ActionSheetController,
    public utility: UtilityProvider, public navCtrl: NavController,private camera: Camera,private transfer: FileTransfer, private file: File
  ) { }
  ionViewDidEnter() {
    this.userdata = JSON.parse(localStorage.getItem('userdetails'));
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.userdata = JSON.parse(localStorage.getItem('userdetails'));
    setTimeout(() => {
      
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  join() {
    this.navCtrl.push("VendorjoinPage")
  }
  saveProfileEdit(){
    this.services.updateuser(this.userdata).subscribe((response)=>{
      let msg = {msg: 'saved ',duration: 3000,position: 'centre'}
      localStorage.setItem('userdetails',JSON.stringify(this.userdata))
      this.utility.messageToast(msg);
      this.services.clearUser()
      this.ionViewDidEnter()
    })
  }
  changePassword(){
    const prompt = this.alertCtrl.create({
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
          handler: data => {
          }
        },
        {
          text: 'Send',
          handler: data => {
            if(!data.password || !data.cpassword){
              let msg = {msg: 'Please enter your password and confirm password',duration: 3000,position: 'centre'}
              this.utility.showToast(msg);
              return false;
            }
            if(data.password.length<5){
              let msg = {msg: 'Please enter at least 6 length password',duration: 3000,position: 'centre'}
              this.utility.showToast(msg);
              return false;
            }Config

            if(data.password!=data.cpassword){
              let msg = {msg: 'Password and confirm password not match',duration: 3000,position: 'centre'}
              this.utility.showToast(msg);
              return false;
            }

             this.services.changePassword(data).subscribe((response)=>{
             if(response==null){
              let msg = {msg: 'Password Changed',duration: 3000,position: 'centre'}
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
 
  async updateProfileImage() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            this.utility.opencamera('camera');
          }
        },
        {
          text: 'Gallery',
          handler: () => {
            this.utility.opencamera('file');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }
}
