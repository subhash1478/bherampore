import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddreviewPage } from './addreview';
import {RatingModule} from "ngx-rating";

@NgModule({
  declarations: [
    AddreviewPage,
  ],
  imports: [RatingModule,
    IonicPageModule.forChild(AddreviewPage),
  ],
})
export class AddreviewPageModule {}
