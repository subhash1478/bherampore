import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services'
import { Config } from '../../config';
import { UtilityProvider } from '../../providers/utility/utility'
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
/**
* Generated class for the PostdetailsPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
@IonicPage({
  segment:'page-postdetails/:id'
})
@Component({
  selector: 'page-postdetails',
  templateUrl: 'postdetails.html',
})
export class PostdetailsPage {
  @ViewChild(Slides) slides: Slides;
  post: any;
  postdetails: any = {};
  category: any = {};
  userdetails: any = {}
  imagedetails: any = []
  productCategoryList: any=[];
  constructor(public utility: UtilityProvider, public navCtrl: NavController, public navParams: NavParams, public _services: ServicesProvider,private launchNavigator: LaunchNavigator) {
    this.post = this.navParams.data.id
    //console.log("crash", this.navParams.data.id);
  }
  ngOnInit() {
    //console.log('ionViewDidLoad PostdetailsPage');
    this._services.getPostDetails(this.post).subscribe((Response) => {
      //console.log(Response.data);
      this.postdetails = Response.data.post
      this.userdetails = Response.data.user
      this.category = Response.data.category
      //console.log("userdetails", this.category);
      let image = Response.data.image;
      if(image.length<1){
        var res = {}
        res['image'] = 'assets/imgs/placeholder.png'
        this.imagedetails.push(res) 
        return false
      }
      let imageval = []
 
      image.forEach(element => {
        var res = {}
        res['image'] = `${Config.SOCKET_ENDPOINT}image/postimage/${element.image}`
        imageval.push(res)
});


      this.imagedetails = imageval
    })
    this.getProductCategory()
  }
  goTovendorDetails(item) {
    this.navCtrl.push("ProfilePage", { data: item })
  }
  openChat(item) {
    console.log(item.userid);
    this.navCtrl.push('ChatPage', {id:'5b1c0d796728f530bbd321dd'});
  }
  goToPage(page){
    this.navCtrl.push(page,{id:this.post,type:'post' })
  }
  goToMap(item){
    let mylocation=JSON.parse(localStorage.getItem('userdetails'))
    let options: LaunchNavigatorOptions = {
      start: mylocation.address,
    };
    this.launchNavigator.navigate( item.address, options)
    .then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
    );
  }
  getProductCategory(){ 
    let obj={
      shopid:this.post
    }
    console.log(obj );
    this._services.getProductCategory(obj).subscribe((Response) => {
      this.productCategoryList=Response.response.data
      //console.log(Response);
    }, (Error) => {
      //console.log(Error);
    });
  }
  showProduct(item){
    console.log(item);
    this.navCtrl.push('ProductPage',{id:item.id})
  }
}
