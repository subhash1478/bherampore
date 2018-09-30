import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServicesProvider} from '../../providers/services/services'
/**
 * Generated class for the VendorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vendor',
  templateUrl: 'vendor.html',
})
export class VendorPage {

  vendorList: any;
  // public thumbnails: { title: string, image: string, ribbonText: string, class: string }[] = [
  //   { title: 'Awesome Shoes - $9', image: 'assets/img/ribbon/shoes.jpg', ribbonText: 'sale', class: 'sale' },
  //   { title: 'Awesome Team', image: 'assets/img/ribbon/cruzeiro.jpg', ribbonText: 'awesome', class: 'cruzeiro' },
  //   { title: 'Bad team', image: 'assets/img/ribbon/atletico.jpg', ribbonText: 'bad', class: 'atletico' }
  // ];

  constructor(public navCtrl: NavController, public navParams: NavParams,public _services:ServicesProvider) {
  }

  ionViewDidLoad() {
    this._services.getVendor().subscribe((Response)=>{
       this.vendorList =Response.data  

    },(Error)=>{

    })  }
  goToProfile(item){
    this.navCtrl.push("ProfilePage",{data:item})
  }
}
