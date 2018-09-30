import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromoterDetailsPage } from './promoter-details';
import { SocialSharing } from '@ionic-native/social-sharing';
import { RatingModule } from 'ngx-rating';

@NgModule({
  declarations: [
    PromoterDetailsPage,
  ],
  imports: [RatingModule,
    IonicPageModule.forChild(PromoterDetailsPage),
  ],
  providers:[SocialSharing]
})
export class PromoterDetailsPageModule {}
