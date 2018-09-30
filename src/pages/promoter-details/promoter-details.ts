import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { UtilityProvider } from '../../providers/utility/utility';
import { SocialSharing } from '@ionic-native/social-sharing';
import { log } from 'util';
import { Rating } from 'ngx-rating';
/**
* Generated class for the PromoterDetailsPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
@IonicPage({
  segment:'page-promoter-details/id/:id/type/:type'
})
@Component({
  selector: 'page-promoter-details',
  templateUrl: 'promoter-details.html',
})
export class PromoterDetailsPage {
  promoterList: any=[];
  constructor(public navCtrl: NavController,private socialSharing: SocialSharing,
    public _services:ServicesProvider,public toast:UtilityProvider,
    public navParams: NavParams) {
    }
    ionViewDidLoad() {
      let obj={
        id:this.navParams.data.id
      }
      this._services.getPromoterDetails(obj).subscribe((Response)=>{
        let result=Response.response.data
        let promoterData=[]
        result.forEach(element => {
          let reviewcount=element.promoter.review
          let val={}
          val['promoter']=element.promoter.promoter
          val['image']=element.image
          val['comment']=reviewcount.length
          if(reviewcount.length<1){
            val['rating']=0
          }else{
            let s=0
            
            reviewcount.forEach(element => {
              const sum = element.rating;
              s+=sum
              let ratingcount=s/reviewcount.length
              val['rating']=ratingcount.toFixed(1)
            });


          }
          promoterData.push(val);
        });
        this.promoterList=promoterData
      })
    }
    //
    // ────────────────────────────────────────────────────────── I ──────────
    //   :::::: A D D R E V I E W : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────
    //
    addReview(item){
      //
      this.navCtrl.push('ReviewPage',{id:item.promoter.id,type:'promoter'})
    }
    //
    // ──────────────────────────────────────────────────────────── I ──────────
    //   :::::: O P E N G A L L E Y : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────
    //
    openGalley(item){
      this.navCtrl.push('GalleryPage',{id:item.id,type:'promoter'})
    }
    //
    // ────────────────────────────────────────────────── I ──────────
    //   :::::: S H A R E : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────
    //
    share(data){
      let obj={
        message:'Check this out ',
        subject: data.promoter.title,
        file:`http://139.59.12.86:1337/images/Promoter/${data.image[0].images}`,
        url:`http://139.59.12.86:1337/images/Promoter/${data.image[0].images}`
      }
      this.socialSharing.share(obj.message, obj.subject, obj.file, obj.url).then(() => {
      }).catch(() => {
      });
    }
  }
