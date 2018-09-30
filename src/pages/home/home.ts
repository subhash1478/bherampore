import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, NavParams, IonicPage, MenuController, ModalController, ViewController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services'
import { UtilityProvider } from '../../providers/utility/utility'
import { Events } from 'ionic-angular';
import { Config } from '../../config';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('slider') slider: Slides;
  categoryList = [];
  banner = []
 
  notificationList: any;
  bannerone: any=[];
  constructor(public menuCtrl:MenuController,public events: Events, 
    public utility: UtilityProvider, public navCtrl: NavController,
    public navParams: NavParams, public _services: ServicesProvider,
    public viewCtrl: ViewController, public modalCtrl: ModalController) {
      this.saveDevicesToken()
    }
    ngOnInit(): void {
      this.menuCtrl.enable(true);
      var location = this._services.getGeolocation();
      this._services.getCategory().subscribe((Response) => {
        this.categoryList = Response.data
      }, (Error) => {
      })
      this._services.getBanner().subscribe((Response: any) => {
        let result = Response.response.data
        let banner1=[]
        let banner2=[]
        let banner3=[]
        result.forEach(element => {
          let val={}
          if(element.bannerindex==1){
            val['image']=element.image
            val['bannerindex']=element.bannerindex
            val['linkto']=element.linkto
            banner1.push(val)
          }
          if(element.bannerindex==2){
            val['image']=element.image
            val['bannerindex']=element.bannerindex
            banner2.push(val)}
            if(element.bannerindex==3){
              val['image']=element.image
              val['bannerindex']=element.bannerindex
              banner3.push(val)}
            });
            this.bannerone=banner1
            this.banner.push(banner2)
            this.banner.push(banner3)
          })
        }
        ionViewDidEnter(){
          let objdata={
            id: Config.USER._id,
          }
          this._services.getNotification(objdata).subscribe((response)=>{
            let res=response.response.data;
            this.notificationList=res.length
          },(error)=>{
          })
          setTimeout(() => {
            if(localStorage.getItem('addshown')===null){
              this.PromotionModal()
              localStorage.setItem('addshown','1')
            }
          }, 5000);
        }
        goToPostPage(item) {
          this.navCtrl.push("PostPage", { id: item._id ,title:item.title,image:item.image})
          //this.navCtrl.push("TagsPage", { id: item._id })
        }
        goToNotification() {
          this.navCtrl.push("NotificationPage")
        }
        openMenu() {
          this.events.publish('userdetails');
          this.menuCtrl.open();
        }
        goToSearch(){
          this.navCtrl.push("SearchPage")
        }
        saveDevicesToken(){
        
          
          let obj = {
            devicesid: localStorage.getItem('devices_token'),
            userid: Config.USER._id,
            user_type:'customer',
          }
          this._services.saveDevicesToken(obj).subscribe((response)=>{
          })
        }
        showPromoterCategory(item){
          if(item[0].bannerindex==2){
            let item={
              _id:'5b05aefe5c669d0676a6b1f6',
              title:'Restaurant'
            }
            this.navCtrl.push("PostPage", { id: item._id ,title:item.title})
          }
          if(item[0].bannerindex==3){
            this.navCtrl.push('PromoterCategoryPage') 
          }
        }
        goToPost(item){
          if(item.linkto==null){
            return false
          }
          this.navCtrl.push("PostdetailsPage", { id: item.linkto.id })
        }
        ionViewWillLeave() {
        }
        //MODAL FUNCTION
        PromotionModal() {
          let modal = this.modalCtrl.create('PromotionModalPage');
          modal.present();
        }
        dismiss() {
          this.viewCtrl.dismiss();
        }
      }
      