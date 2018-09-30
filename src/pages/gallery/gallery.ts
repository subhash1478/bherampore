import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';
import { ServicesProvider } from '../../providers/services/services';
import { UtilityProvider } from '../../providers/utility/utility';
/**
* Generated class for the GalleryPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
@IonicPage({
  segment:'page-gallery/id/:id/type/:type'
})
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  galleryType = 'regular';
  promoterList: any=[];
  constructor(public navCtrl: NavController, public modalCtrl:ModalController,
    public _services:ServicesProvider,public toast:UtilityProvider,
    public navParams: NavParams) {
    }
    ionViewDidLoad() {
      let obj={
        id:this.navParams.data.id
      }
      this._services.getPromoterImage(obj).subscribe((Response)=>{
        console.log(Response);
        this.promoterList=Response.response.data
      })
      console.log(this.promoterList);
    }
    openZoom(image){
      let galleryimage=[]
      this.promoterList.forEach(element => {
        let val={}
        val['url']=  element.image
        galleryimage.push(val)
      });
      let modal = this.modalCtrl.create(GalleryModal, {
        photos:galleryimage,
        initialSlide: 0
      });
      modal.present();
    }
  }
