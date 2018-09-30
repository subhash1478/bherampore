import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Platform } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services'
import { UtilityProvider } from '../../providers/utility/utility'
import { Config } from '../../config';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { log } from 'util';
import { elementAt } from 'rxjs/operators';

declare var RazorpayCheckout: any;
/**
* Generated class for the CheckoutPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  sub_total: number;
  checkoutList: any[];
  address: any=[];
  paymenttype:string
  shop:any={}
  cartEmpty: boolean=true;
  constructor(
    public viewCtrl: ViewController, public platform:Platform,
    public modalCtrl: ModalController,
    public utility: UtilityProvider, public navCtrl: NavController,private iab: InAppBrowser,
    public navParams: NavParams, public _services: ServicesProvider) 
    {
    }
    ionViewDidLoad() {
      let obj={
        id:Config.USER._id
      } 
      this._services.getCart(obj).subscribe((Response) => {
        console.log(Response);
        let result=Response.response.data
        let pro=[]
        this.sub_total=0
      
        result.forEach(element => {

          let newpro={}
          newpro['price']=element.price
          newpro['product_name']=element.productid.title
          newpro['quantity']=element.quantity
          newpro['shopid']=element.shopid.title
          newpro['id']=element.id
          this.shop.name=element.shopid.title
          this.shop.id=element.shopid.id
          this.sub_total+=element.quantity*element.price
          pro.push(newpro)
        });

        pro.sort((a,b) => a.product_name.localeCompare(b.product_name));







        console.log(pro);
        this.checkoutList=pro
        this.cartEmpty=false
      }, (error) => {
        this.cartEmpty=true
        console.log(error);
      })
      console.log(Config.USER);
      let data={
        userid:Config.USER._id
      }
      this._services.getShippingAddress(data).subscribe((Response) => {
        this.address=Response.response.data 
        console.log(this.address);
      });
    }
    changeAddres(){
      this.navCtrl.push('AddressPage')
    }
    payment(){
      console.log(this.address);
      
      if(this.paymenttype==undefined){
        let msg={
          msg:'Please select payment type',
          duration:3000
        }
        this.utility.showToast(msg);
        return false;
      }
           
      if(this.address.length<1){
        let msg={
          msg:'Please enter shipping address type',
          duration:3000
        }
        this.utility.showToast(msg);
        this.navCtrl.push('AddressPage')


        return false;
      }
      


      if(this.paymenttype=='razor'){
        //  this.instamojo();
        this.razorPay();
        return false;
      }
      if(this.paymenttype=='cashpayment'){
        this.cashpayment('cashpayment','');
        return false;
      }
    }
    instamojo(){
      // console.log(this.checkoutList);
      // let obj={
      //   purpose:'Nandan',
      //   amount:this.sub_total,
      //   buyer_name:`${Config.USER.firstname} ${Config.USER.lastname}`,
      //   phone:Config.USER.phone,
      //   buyer_email:'putumca@gmail.com'
      // }
      // this._services.makePaymenrtRequest(obj).subscribe((Response)=>{
      //   console.log(Response);
      //   let result=Response.response.data
      //   this.payNow(result.payment_request.longurl)
      // })
    }
    payNow(longurl) {
      function onOpenHandler () {
        alert('Payments Modal is Opened');
      }
      function onCloseHandler () {
        alert('Payments Modal is Closed');
      }
      function onPaymentSuccessHandler (response) {
        alert('Payment Success');
        console.log('Payment Success Response', response);
      }
      function onPaymentFailureHandler (response) {
        alert('Payment Failure');
        console.log('Payment Failure Response', response);
      }
      /* End client-defined Callback Handler Functions */
      /* Configuring Handlers */
      // Instamojo.configure({
      //   handlers: {
      //     onOpen: onOpenHandler,
      //     onClose: onCloseHandler,
      //     onSuccess: onPaymentSuccessHandler,
      //     onFailure: onPaymentFailureHandler
      //   }
      // });
      // Instamojo.open(longurl);
    }
    shopnow(){
      this.navCtrl.setRoot('HomePage')
    }
    editOrder(){
      this.navCtrl.push('CartPage')
    }
    razorPay() {
      var options = {
        description: 'Food',
        image: 'http://139.59.12.86:3001/icon.png',
        currency: 'INR',
        key: 'rzp_test_9ltHMLxYrLMacM',
        amount: this.sub_total*100,
        name: 'Nandan',
        prefill: {
          email: Config.USER.email,          
          contact:Config.USER.phone,
          name: `${Config.USER.firstname} ${Config.USER.lastname}`,
        },
        theme: {
          color: '#3096f2'
        },
        modal: {
          ondismiss: function() {
            alert('dismissed')
          }
        }
      };
      console.log(options);
      var successCallback = (payment_id) => { // <- Here!
        this.cashpayment('razorpay',payment_id)
      };
      var cancelCallback = (error) => { // <- Here!
        alert(error.description + ' (Error ' + error.code + ')');
      };
      this.platform.ready().then(() => {
        RazorpayCheckout.open(options, successCallback, cancelCallback);
      })
    }
    cashpayment(type,payment_id){
      let orderitem=[]

      
      this.checkoutList.forEach(element=>{
        orderitem.push(element.id);

      })


      console.log(orderitem);
      let obj={
        userid:Config.USER._id ,
        totalprice: this.sub_total,
        status: 0 ,
        discount:0 ,
        delivered:0 ,
        deliveredfee:0 ,
        sgst:0 ,
        cgst:0 ,
        containercharges: 0 ,
        orderitem:orderitem,
        shopid:this.shop.id,
        payment_recived:(type==='razorpay')?1:0,
        payment_type:type,
     transactionid:(type==='razorpay')?payment_id:''

      }
 
       
      console.log(obj);
      this._services.createOrder(obj).subscribe((Response)=>{
        let id=Response.response.data.id
        console.log(id);
        this.navCtrl.setRoot('YourOrderPage',{id:id})
      })
    }
  }
  