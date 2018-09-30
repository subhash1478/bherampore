import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';

import { RatingModule } from 'ngx-rating';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [RatingModule,LazyLoadImageModule,
    IonicPageModule.forChild(SearchPage),
  ],
})
export class SearchPageModule { }
