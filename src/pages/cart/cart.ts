import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services'
import { UtilityProvider } from '../../providers/utility/utility'
import { Config } from '../../config';
/**
* Generated class for the CartPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  sub_total: number;
  checkoutList: any[];
  address: any=[];
  paymenttype:string
  shop:any={}
  cartEmpty: boolean=true;
  constructor(
    public viewCtrl: ViewController, 
    public modalCtrl: ModalController,
    public utility: UtilityProvider, public navCtrl: NavController, 
    public navParams: NavParams, public _services: ServicesProvider) 
    {
    }
    ionViewDidLoad() {
      let obj={
        id:Config.USER._id
      } 
      this._services.getCart(obj).subscribe((Response) => {
        let result=Response.response.data
        let pro=[]
        this.sub_total=0
        
        
        result.forEach(element => {
          let newpro={}
          newpro['price']=element.price
          newpro['product_name']=element.productid.title
          newpro['product_id']=element.productid.id
          newpro['quantity']=element.quantity
          newpro['shopid']=element.shopid.title
          newpro['id']=element.id
          this.shop.name=element.shopid.title
          this.shop.id=element.shopid.id
          this.sub_total+=element.quantity*element.price
          pro.push(newpro)
        });
        
        
        
        
        pro.sort((a,b) => a.product_name.localeCompare(b.product_name));
        
        
        
        
        
        this.checkoutList=pro
        this.cartEmpty=false
      }, (error) => {
        this.cartEmpty=true
      } )
      let data={
        userid:Config.USER._id
      }
      this._services.getShippingAddress(data).subscribe((Response) => {
        this.address=Response.response.data 
      });
    }
    increment(i) {
      this.checkoutList[i].quantity++
      this.subtotalcal()
      this.addToCart(i)
    }
    decrement(i) {
      console.log(i);
      
      if(this.checkoutList[i].quantity===1){
        this.removeCartItem(i)
        this.checkoutList[i].quantity--
        this.subtotalcal()
        this.checkoutList.splice(i,1)
        return false
      }
      this.checkoutList[i].quantity--
      this.subtotalcal()
      this.addToCart(i)
    }
    Checkout(){
      this.navCtrl.setRoot('CheckoutPage')
    }
    subtotalcal(){
      this.sub_total=0
      
      this.checkoutList.forEach(element=>{
        
        let newpro={}
        newpro['price']=element.price
        newpro['quantity']=element.quantity
        this.sub_total+=element.quantity*element.price
      })
      
      
      
      
      
      
      
      
    }
    addToCart(i){
      if(this.checkoutList[i].quantity==0){
        return false
      }
      let obj={
        quantity:this.checkoutList[i].quantity,
        productid:this.checkoutList[i].product_id,
        price: this.checkoutList[i].price,
        userid:Config.USER._id,
        shopid:  this.shop.id,
        status:0
      }
      console.log(obj);
      this._services.addToCart(obj).subscribe((Response) => {
        console.log(Response);
      })
    }
    
    removeCartItem(i){
      console.log('removeCartItem',this.checkoutList[i]);
      
      let obj={
        id:this.checkoutList[i].id
      }
      this._services.removeItem(obj).subscribe((Response) => {
        console.log(Response);
      })
    }
    
    shopnow(){
      let item={
        _id:'5b05aefe5c669d0676a6b1f6',
        title:'Restaurant'
      }
      this.navCtrl.push("PostPage", { id: item._id ,title:item.title})
      
    }
  }
  