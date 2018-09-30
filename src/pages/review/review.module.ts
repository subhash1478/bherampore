import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewPage } from './review';
import {RatingModule} from "ngx-rating";
 
@NgModule({
  declarations: [
    ReviewPage, 
  ],
  imports: [RatingModule,
    IonicPageModule.forChild(ReviewPage),
  ],
})
export class ReviewPageModule {}
