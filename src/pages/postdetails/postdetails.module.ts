import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostdetailsPage } from './postdetails';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

@NgModule({
  declarations: [
    PostdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PostdetailsPage),
  ],
  providers:[LaunchNavigator]
})
export class PostdetailsPageModule {}
