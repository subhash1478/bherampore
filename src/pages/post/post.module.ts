import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostPage } from './post';
import { RatingModule } from "ngx-rating";
 
@NgModule({
  declarations: [
    PostPage,
  ],
  imports: [RatingModule,
    IonicPageModule.forChild(PostPage),
  ],
})
export class PostPageModule {}
