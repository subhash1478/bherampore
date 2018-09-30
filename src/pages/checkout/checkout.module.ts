import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckoutPage } from './checkout';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    CheckoutPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckoutPage),
  ],
  providers:[InAppBrowser]
})
export class CheckoutPageModule {}
