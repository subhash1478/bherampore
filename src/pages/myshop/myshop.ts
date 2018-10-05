import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services'
import { UtilityProvider } from '../../providers/utility/utility'
import {  ModalController, ViewController } from 'ionic-angular';
import { Events } from 'ionic-angular'; 
import { Config } from '../../config';
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
  categoryid: any;
  qty: number;
  searchTerm: string = '';

  sort:string
  productCount: any;
  prodcuctListData: any[];
  constructor(public utility: UtilityProvider, 
    public modalCtrl:ModalController,
    public _services: ServicesProvider, public navCtrl: NavController, public navParams: NavParams) {
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
        this.prodcuctListData=result
      })
    }
    ionViewDidEnter(){
      this.countCartItem()
    }
    addToCart(item) {
      let modal = this.modalCtrl.create('QtyModalPage',{id:item});
      modal.present();
      modal.onDidDismiss(data => {
        console.log(data);
        this.countCartItem()
      });
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
          console.log(this.qty)
        });
      }, (error) => {
        this.qty=0
      })
    }
    goToCart(){
      this.navCtrl.push('CartPage');
    }
    sortListing(event){
console.log(event)
if(event==1){
  this.prodcuctList.sort((a, b) => b.price - a.price)
}
if(event==2){
  this.prodcuctList.sort((a, b) => a.price - b.price)
}
if(event==3){

  this.prodcuctList.sort((a,b):any =>{
    let date1=new Date(a.createdAt);
    let date2=new Date(b.createdAt);
    return date2.getTime() -  date1.getTime()
  
  });
}
  if(event==3){

    this.prodcuctList.sort((a,b):any =>{
      let date1=new Date(a.createdAt);
      let date2=new Date(b.createdAt);
      return date1.getTime() -  date2.getTime()
    
    });

}
 


    }


    filterTechnologies(param : any) : void
   {
    this.prodcuctListData= this.prodcuctList

      let val : string 	= param;

      // DON'T filter the technologies IF the supplied input is an empty string
      if (val && val.trim() != '') {
        this.prodcuctListData = this.prodcuctListData.filter((item) =>
         {
          return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
 
         })
        

        }

   }
  }
