import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { UtilityProvider } from '../../providers/utility/utility';
/**
* Generated class for the PromoterCategoryPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-promoter-category',
  templateUrl: 'promoter-category.html',
})
export class PromoterCategoryPage {
  categoryPromoterList: any=[];
  constructor(public navCtrl: NavController, 
    public _services:ServicesProvider,public toast:UtilityProvider,
    public navParams: NavParams) {
    }
    ionViewDidLoad() {
      this._services.getPromoterCategory().subscribe((response)=>{
        let result=response.response.data

        result.sort((a,b) => a.location.location.localeCompare(b.location.location));

        this.categoryPromoterList=result;
         console.log(this.categoryPromoterList);

      },(error)=>{
      })
    }


    itemSelected(item)
    {
      
      this.navCtrl.push('PromoterDetailsPage',{id:item.location.id,type:'promoter'})
    }
  }
  