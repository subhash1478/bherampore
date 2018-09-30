import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services'

import { UtilityProvider } from '../../providers/utility/utility'
/**
 * Generated class for the CmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment:'page-cms/pagename/:pagename'
})
@Component({
  selector: 'page-cms',
  templateUrl: 'cms.html',
})
export class CmsPage {
  page:string;
 cmsList = [];
 constructor( 
  public utility: UtilityProvider, public navCtrl: NavController,
   public navParams: NavParams, public _services: ServicesProvider) {
}
ngOnInit(): void {
  this.page=this.navParams.data.pagename
 
   this._services.getCms(this.page).subscribe((Response) => {
    this.cmsList = Response.data
  }, (Error) => {
  })
  



}


goToPostPage(item) {

  console.log(item);
  this.navCtrl.push("PostPage", { data: item })
}


goToNotification() {
  this.navCtrl.push("NotificationPage")
}
openMenu() {

  
}
}
