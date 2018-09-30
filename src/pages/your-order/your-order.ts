import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { UtilityProvider } from '../../providers/utility/utility';
/**
* Generated class for the YourOrderPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
@IonicPage({
  segment:'page-your-order/id/:id'
})
@Component({
  selector: 'page-your-order',
  templateUrl: 'your-order.html',
})
export class YourOrderPage {
  orderid: any ;
  productList: any[];
  order: any=[];
  constructor(public utility: UtilityProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _services: ServicesProvider) {
      this.orderid=this.navParams.data.id
    }
    ionViewDidLoad() {
      // this._services.
      this._services.getOrderDetails(this.orderid).subscribe((response)=>{
        let result=response.response.data;
        let cart=result[0].cart
        this.order=result[0].order
        let cartItem=[]
     
        

        cart.forEach(element => {
          let item={}

          item['product_name']=element.productid.title;
          item['product_price']=element.productid.price;
          item['product_qty']=element.quantity;
          cartItem.push(item);
});



        this.productList=cartItem
console.log(this.order);



      },(error)=>{
      })
    }
    goToDashboard(){
      this.navCtrl.setRoot('HomePage')
    }
  }
