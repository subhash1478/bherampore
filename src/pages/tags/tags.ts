import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services'
 import { UtilityProvider } from '../../providers/utility/utility'
/**
 * Generated class for the TagsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment:'page-tags/id/:id'
})
@Component({
  selector: 'page-tags',
  templateUrl: 'tags.html',
})
export class TagsPage {
  postid: Number;
  constructor(public utility: UtilityProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public _services: ServicesProvider) {
 this.postid=this.navParams.data.id
  }

   ionViewDidLoad() {
    console.log('ionViewDidLoad TagsPage');
let obj={
  id:this.postid
}
    this._services.getTagsById(obj).subscribe((response)=>{

console.log(response);


    },(error)=>{

    })
  }

}
