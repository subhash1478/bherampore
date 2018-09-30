import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QtyModalPage } from './qty-modal';

@NgModule({
  declarations: [
    QtyModalPage,
  ],
  imports: [
    IonicPageModule.forChild(QtyModalPage),
  ],
})
export class QtyModalPageModule {}
