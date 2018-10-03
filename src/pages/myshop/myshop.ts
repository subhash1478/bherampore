import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services'
import { UtilityProvider } from '../../providers/utility/utility'
/**
 * Generated class for the MyshopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myshop',
  templateUrl: 'myshop.html',
})
export class MyshopPage {
  prodcuctList: any[];

  constructor(public utility: UtilityProvider, public _services: ServicesProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let result=[]
    this._services.getShopProduct().subscribe((Response) => {
      result= Response.response.data;
      console.log('====================================')
      console.log(result)
      console.log('====================================')
    
      result.sort((a, b) => a.title.localeCompare(b.title))

      this.prodcuctList=result
      
    })

    
  }

}
