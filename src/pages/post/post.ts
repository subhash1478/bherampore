import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services'
import { UtilityProvider } from '../../providers/utility/utility'
import { log } from 'util';
/**
* Generated class for the PostPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
@IonicPage({
  segment:'page-post/id/:id/title/:title'
})
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  postList: any = []
  post: any = {}
  title: any;
  image: any;
  constructor(public utility: UtilityProvider, public navCtrl: NavController, public navParams: NavParams, public _services: ServicesProvider) {
    this.post = this.navParams.data.id
    this.title=this.navParams.data.title
    this.image=this.navParams.data.image
  }
  ionViewDidLoad() {
    let obj = {
      type: 'category',
      catid: this.post
    }
    this._services.search(obj).subscribe((Response: any) => {
      let result= Response.data
      let list=[]
      result.forEach(data => {
        let element={}, img;        
        let resultdata=data.result
        element['images'] =(resultdata.images.length<1 || !resultdata.images) ?  this.image :resultdata.images;
        element['prodict_available'] = data.category
        element['title'] = resultdata.title;
        element['address'] = resultdata.address;
        element['_id'] = resultdata._id;
        element['rating'] = resultdata.rating;
        list.push(element);
      });
      list.sort(function(a,b){
        return b.prodict_available-a.prodict_available
      })

      console.log('====================================');
      console.log(list);
      console.log('====================================');
      this.postList=list
    }, (Error) => {
    })
  }
  PostdetailsPage(item) {
    this.navCtrl.push("PostdetailsPage", { id: item })
  }
}
