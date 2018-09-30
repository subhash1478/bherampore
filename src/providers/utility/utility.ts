import { Injectable,NgZone } from '@angular/core';
import { ToastController, LoadingController, Platform, Events ,AlertController} from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { Config } from '../../config';

import { Camera, CameraOptions } from '@ionic-native/camera';
@Injectable()
export class UtilityProvider {
 loading: any;
 _zone: any;
 constructor( public toastCtrl: ToastController, private platform: Platform,
   public loadingCtrl: LoadingController, private toast: Toast,
   private transfer: FileTransfer, private file: File, 
    public events: Events,private camera: Camera,public alertCtrl:AlertController,
 ) {
   this._zone = new NgZone({ enableLongStackTrace: false });

  }
  showAlert(data) {
    let alert = this.alertCtrl.create({
      title: data.title,
      subTitle: data.subtitle,
      buttons: ['OK']
    });
    alert.present();
  }

  showToast(data) {
    if (this.platform.is('core') || this.platform.is('mobileweb')) {
      const toast = this.toastCtrl.create({
        message: data.msg,
        duration: data.duration,
        position:  data.position,
      });
      toast.present();
    } else {
      this.toast.show(data.msg, data.duration, 'center').subscribe(
        toast => {

        }
      );
    }
     
  }

messageToast(data) {
  if (this.platform.is('core') || this.platform.is('mobileweb')) {
    const toast = this.toastCtrl.create({
      message: data.msg,
      duration: data.duration,
      position:  data.position,
    });
    toast.present();
  } else {
    this.toast.show(data.msg, data.duration, 'center').subscribe(
      toast => {

      }
    );
  }
}
opencamera(type){
  let des;
  if(type==='camera'){
    des=1
  }else{
    des=0
  }
  const options: CameraOptions = {
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType:des,
    quality:50,
    allowEdit:true,
    targetHeight:200,
    targetWidth:200,
    cameraDirection:1
  }
  this.camera.getPicture(options).then((imageData) => {

    let obj = {
      url: 'upload-profile-image',
      id:Config.USER._id
    };
    this.upload(imageData,obj);
  }, (err) => {

  });
}
 //
 // ──────────────────────────────────────────────────────────────────────── I ──────────
 //   :::::: S H O W   P R O G R E S S B A R : :  :   :    :     :        :          :
 // ──────────────────────────────────────────────────────────────────────────────────
 //
 progressbar(type) {
  this.loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: `
    <div class="custom-spinner-container">
    <div class="custom-spinner-box">${type}... </div>
    </div>`,    });
    this.loading.present();
  }
 //
   // ──────────────────────────────────────────────────────────────────────── I ──────────
   //   :::::: U P L O A D   A L L   F I L E S : :  :   :    :     :        :          :
   // ──────────────────────────────────────────────────────────────────────────────────
   //
   upload(imageURI, item) {
    let extension = imageURI.split('.').pop();
     const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'profile_image',
      fileName: imageURI.substr(imageURI.lastIndexOf('/') + 1),
      headers: {
        'token': `${localStorage.getItem('token')}`
      },
      params: {
        id: item.id
      }
      
    };
    this.progressbar('Uploading...');
    fileTransfer.upload(imageURI, `${Config.API_ENDPOINT}/${item.url}?token=${localStorage.getItem('token')}`, options)
    .then((data) => {

      this.events.publish('userdetails');
      // success
    }, (err) => {

      let obj = {
        type: 'Uploading',
        progressbar: 'failed'
      };
      this.updateProgress(obj);
      let msg = {
        msg: 'Error in uploading',
        duration: 3000
      };
      this.showToast(msg);      // error
    });
    fileTransfer.onProgress((progressEvent) => {
      let progressbar = Math.round(((progressEvent.loaded / progressEvent.total) * 100));

      let obj = {
        type: 'Uploading',
        progressbar: progressbar
      };
      this.updateProgress(obj);
    });
  }
   //
   // ──────────────────────────────────────────────────────────────────────────── I ──────────
   //   :::::: U P D A T E   P R O G R E S S B A R : :  :   :    :     :        :          :
   // ──────────────────────────────────────────────────────────────────────────────────────
   //
   updateProgress(data) {
    this._zone.run(() => {
      this.loading.setContent(`${data.type}... ${data.progressbar} % `);
    });
    if (data.progressbar === 100) {
      this._zone.run(() => {
        this.loading.setSpinner('hide');
        this.loading.setContent(`${data.progressbar} Completed... `);
      });
      let msg = {
        msg: `${data.type} done `,
        duration: 3000
      };
      this.showToast(msg);
      setTimeout(() => {
        this.loading.dismiss();
      }, 2000);
    }
    if (data.progressbar === 'failed') {
      this.loading.setSpinner('hide');
      this.loading.dismiss();
    }
  }
}
