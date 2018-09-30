import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromotionModalPage } from './promotion-modal';

@NgModule({
  declarations: [
    PromotionModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PromotionModalPage),
  ],
})
export class PromotionModalPageModule {}
