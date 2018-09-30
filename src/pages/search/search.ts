import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services'
import { UtilityProvider } from '../../providers/utility/utility'

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  defaultImage = 'assets/imgs/searchplaceholder.png';
   offset = 1000;
  q: string='restaurants';
  spinner: boolean = true
  textmessage: boolean = true;
  warmmessage: string = 'Search ...';
  postList: any = []
  constructor(public utility: UtilityProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public _services: ServicesProvider) {

  }
  ionViewDidLoad(){
    var obj = {
      type: 'tags',
      q: this.q
    }
    this._services.search(obj).subscribe((Response: any) => {
      this.spinner = true

      // console.log("crash", Response);
      // this.postList = Response.data

      // if (this.postList.length < 1) {
      //   this.textmessage = true;
      //   this.warmmessage = 'No search result found on "<b>' + this.q + '</b>" you can try buy ,sell etc.'

      // }
      console.log("crash", Response);
      let result= Response.data
 var list=[]

 

       result.forEach(data => {
        var element={}
 
         let resultdata=data.result
         console.log('====================================')
         console.log(resultdata)
         console.log('====================================')
         let Prodictavailable=data.category
         if(resultdata.images){
 
           element['images'] = resultdata.images;
 
         }else{
           element['images'] = 'assets/imgs/searchplaceholder.png'
 
         }
         element['prodict_available'] = Prodictavailable
         element['title'] = resultdata.title;
         element['address'] = resultdata.address;
         element['_id'] = resultdata._id;
         element['rating'] = resultdata.rating;
         
         list.push(element);
});


list.sort((a, b) => a.title.localeCompare(b.title))



 
       this.postList=list
    }, (Error) => {

    })
  }
  search() {
    if(this.q.length==0){
      this.ionViewDidLoad()
    }
    console.log(this.q.length);

    if (this.q.length < 3) {
      this.textmessage = true;
      this.postList = []
      this.warmmessage = 'Search ...';
      return false;
    }

    this.textmessage = false;
    this.spinner = false
    this.warmmessage = ''
    var obj = {
      type: 'tags',
      q: this.q
    }
    console.log("crash", obj);

    this._services.search(obj).subscribe((Response: any) => {
      this.spinner = true
      let result= Response.data
      var list=[]
     
      
     
            result.forEach(data => {
             var element={}
      
              let resultdata=data.result
              let Prodictavailable=data.category
              if(resultdata.images){
      
                element['images'] = resultdata.images;
      
              }else{
                element['images'] = 'assets/imgs/searchplaceholder.png'
      
              }
              element['prodict_available'] = Prodictavailable
              element['title'] = resultdata.title;
              element['address'] = resultdata.address;
              element['_id'] = resultdata._id;
              element['rating'] = resultdata.rating;
              
              list.push(element);
     });
     
     
     list.sort((a, b) => a.title.localeCompare(b.title))
     
     
     
      
            this.postList=list
      if (this.postList.length < 1) {
        this.textmessage = true;
        this.warmmessage = 'No search result found on "<b>' + this.q + '</b>" you can try buy ,sell etc.'

      }
    }, (Error) => {

    })
  }

  PostdetailsPage(item) {
    this.navCtrl.push("PostdetailsPage", { id: item })
  }


}
