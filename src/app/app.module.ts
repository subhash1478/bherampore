import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
 import { ServicesProvider } from '../providers/services/services';
import { Facebook } from '@ionic-native/facebook';
import { Geolocation } from '@ionic-native/geolocation';
import { UtilityProvider } from '../providers/utility/utility';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './interceptor';
import { OneSignal } from '@ionic-native/onesignal';
import { Toast } from '@ionic-native/toast';
import { Camera } from '@ionic-native/camera';
 import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';



@NgModule({
  declarations: [
    MyApp
  ],
  imports: [  ionicGalleryModal.GalleryModalModule,

    BrowserModule, HttpClientModule,
    IonicModule.forRoot(MyApp)
    //   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [FileTransfer, File,Camera,
 
    Facebook, Geolocation,Toast,
    { provide: ErrorHandler,useClass: IonicErrorHandler ,},
    ServicesProvider,
    OneSignal,
    UtilityProvider,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },

    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: ionicGalleryModal.GalleryModalHammerConfig,
    },
    
  ]
})
export class AppModule { }
