import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services'
import { UtilityProvider } from '../../providers/utility/utility'
import { Config } from '../../config';
import { Events } from 'ionic-angular'; 

/**
* Generated class for the QtyModalPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-qty-modal',
  templateUrl: 'qty-modal.html',
})
export class QtyModalPage {
  productid: any;
  constructor(
    public navParams: NavParams,public utility: UtilityProvider, public navCtrl: NavController,
    public _services: ServicesProvider,   
    public events: Events,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController) {
      this.productid = this.navParams.data.id
      console.log(this.navParams.data.id);
    }
    ionViewDidLoad() {
      console.log('ionViewDidLoad QtyModalPage');
    }
    dismiss() {
      this.viewCtrl.dismiss();
    }
    private qty = 1 ; 
    increment(i) {
      this.qty++;
    }
    decrement(i) {
      if(this.qty===0){
        return false
      }
      this.qty--;
    }
    addToCart(){
      if(this.qty==0){

        
        return false;
      }
      console.log(      this.productid );
      let obj={
        quantity:this.qty,
        productid:this.productid.id,
        price: this.productid.price,
        userid:Config.USER._id,
        shopid: this.productid.product_category.shopid,
        status:0
      }
      console.log(obj);
      this._services.addToCart(obj).subscribe((Response) => {
        let msg={
          msg:` ${this.productid.title} added ${this.qty}`,
          duration:3000
        }
        this.utility.showToast(msg)
        console.log(Response);
        this.events.publish('cartupdated');

      })


      this.viewCtrl.dismiss();
    }

  }
