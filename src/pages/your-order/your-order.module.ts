import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourOrderPage } from './your-order';

@NgModule({
  declarations: [
    YourOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(YourOrderPage),
  ],
})
export class YourOrderPageModule {}
