import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services'
import { UtilityProvider } from '../../providers/utility/utility'
 /**
* Generated class for the MyOrderPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-my-order',
  templateUrl: 'my-order.html',
})
export class MyOrderPage {
  loggedInid: any;
  order: any[];
  productList: any[];
  constructor(
    public utility: UtilityProvider, public navCtrl: NavController, 
    public navParams: NavParams, public _services: ServicesProvider) 
    {
      let user=JSON.parse(localStorage.getItem('userdetails'));
      this.loggedInid=user._id
    }
    ionViewDidLoad() {
      // this._services.
      this._services.getOrderList( this.loggedInid).subscribe((response)=>{
        this.productList=response.response.data;
console.log(this.productList);


      },(error)=>{
      })
    }

    orderDetails(item){
console.log(item.id);
      
     this.navCtrl.push("YourOrderPage",{id:item.id}) 
    }
  }
  