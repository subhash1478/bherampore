import { Component } from '@angular/core';
import {ModalController, IonicPage,  NavController,  NavParams} from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the ReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
segment:'page-review/id/:id/type/:type'
})
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class ReviewPage {

  reviewlist: any=[];
  param: any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public _services:ServicesProvider) {

   this.param= this.navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPage');
var obj={id:this.param.id,type:this.param.type}
  this._services.getreview(obj).subscribe((Response)=>{
    console.log(Response)

    this.reviewlist=Response.data
      })
  }
  goToReviewpage(){

    let review= this.modalCtrl.create("AddreviewPage",{id:this.param.id,type:this.param.type});
    review.present();
    review.onDidDismiss(data => {
      console.log(data);
      this.ionViewDidLoad()
    });
  }
}
