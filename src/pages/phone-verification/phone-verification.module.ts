import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneVerificationPage } from './phone-verification';
import { AndroidPermissions} from '@ionic-native/android-permissions';

@NgModule({
  declarations: [
    PhoneVerificationPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneVerificationPage),
  ],
  providers:[AndroidPermissions]
})
export class PhoneVerificationPageModule {}
