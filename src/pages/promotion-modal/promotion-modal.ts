import { Component,   } from '@angular/core';
import { NavController,   NavParams, IonicPage, MenuController, ModalController, ViewController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services'
import { UtilityProvider } from '../../providers/utility/utility'
 import { Events } from 'ionic-angular';
  
/**
 * Generated class for the PromotionModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promotion-modal',
  templateUrl: 'promotion-modal.html',
})
export class PromotionModalPage {
  banner: any=[];
  constructor(public menuCtrl:MenuController,public events: Events, 
    public utility: UtilityProvider, public navCtrl: NavController,
    public navParams: NavParams, public _services: ServicesProvider,
    public viewCtrl: ViewController, public modalCtrl: ModalController) {
      

    }

  ionViewDidLoad() {
    this._services.getBanner().subscribe((Response: any) => {
      let result = Response.response.data
      let banner1=[]
 
          result.forEach(element => {
            let val={}
            if(element.bannerindex==1){
              val['image']=element.image
              val['bannerindex']=element.bannerindex
              banner1.push(val)
            }
          });








          this.banner=banner1
console.log(this.banner);

 
        })  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  
}
