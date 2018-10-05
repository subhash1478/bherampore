import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services'
import { UtilityProvider } from '../../providers/utility/utility'
import {  ModalController, ViewController } from 'ionic-angular';
import { Events } from 'ionic-angular'; 
import { Config } from '../../config';
 /**
* Generated class for the ProductPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
@IonicPage({
  segment:'page-product/id/:id'
})
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  categoryid: any;
  prodcuctList: any=[];
  qty: number;
  constructor(public utility: UtilityProvider, 
    public events: Events,public navCtrl: NavController, public navParams: NavParams, public _services: ServicesProvider,   public viewCtrl: ViewController,
    public modalCtrl: ModalController) {
      this.categoryid = this.navParams.data.id
      events.subscribe('cartupdated', () => {
        // user and time are the same arguments passed in `events.publish(user, time)`
        this.countCartItem()
      });
    }
    ngOnInit() {
      let result=[]
      this._services.getProduct(this.categoryid).subscribe((Response) => {
        result= Response.response.data
      
        result.sort((a, b) => a.title.localeCompare(b.title))

        this.prodcuctList=result
        
      })
      this.countCartItem()
    }
    ionViewDidLeave(){
      this.events.unsubscribe('cartupdated')
    }
    ionViewDidEnter() {
      this.countCartItem()
    }
    addToCart(item) {
      let modal = this.modalCtrl.create('QtyModalPage',{id:item});
      modal.onDidDismiss(data => {
        console.log(data);
        this.countCartItem()
      });
      modal.present();
    }
    countCartItem(){
      let obj={
        id:Config.USER._id
      } 
      this._services.getCart(obj).subscribe((Response) => {
        this.qty=0
        let result=Response.response.data
        let pro=[]

     
        result.forEach(element => {
          this.qty+=element.quantity

});

      }, (error) => {
        this.qty=0
      })
    }
    goToCart(){
      if(this.qty<1){
        let msg={
          msg:`Please add some item to your product`,
          duration:3000
        }
        this.utility.showToast(msg)
        return false
      }
      this.navCtrl.push('CartPage');
    }
  }
  