import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderRequestPage } from './order-request';

@NgModule({
  declarations: [
    OrderRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderRequestPage),
  ],
})
export class OrderRequestPageModule {}
