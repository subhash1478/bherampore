import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [LazyLoadImageModule,
    IonicPageModule.forChild(ContactPage),
  ],
  providers:[Camera,FileTransfer,File]
 })
export class ContactPageModule {}
