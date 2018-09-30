import { ServicesProvider } from '../../providers/services/services';
import { Component, ViewChild } from '@angular/core';
import { AlertController, App, LoadingController, NavController, Slides, IonicPage, ViewController, NavParams } from 'ionic-angular';
import { UtilityProvider } from '../../providers/utility/utility'
import { Config } from '../../config';
@IonicPage({
})
@Component({
  selector: 'page-addreview',
  templateUrl: 'addreview.html',
})
export class AddreviewPage {
  public loginForm: any;
  rating: Number
  reviewdata: any = {}
  public backgroundImage = 'assets/img/background/background-6.jpg';
  vendorid: String
  update: boolean;
  constructor(public navCtrl:NavController,
    public loadingCtrl: LoadingController, public navParams: NavParams,
    public alertCtrl: AlertController, public viewCtrl: ViewController,
    public app: App, public _services: ServicesProvider, public utility: UtilityProvider
    ) { }
    // Slider methods
    @ViewChild('slider') slider: Slides;
    @ViewChild('innerSlider') innerSlider: Slides;
    ngOnInit(): void {
      this.vendorid = this.navParams.data.id
      console.log(this.navParams.data)
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.reviewdata.rating = 0
      let obj={
        type:this.navParams.data.type,
        id:this.navParams.data.id,
        userid:Config.USER._id
      }
      this._services.getUserRating(obj).subscribe((response)=>{
        console.log(response);
        if(response.response.message==true){
          this.update=false
          this.reviewdata=response.response.data

        }else{
          this.update=true
        }
      },(error)=>{
        console.log(error);
      })
    }
    goToLogin() {
      this.slider.slideTo(1);
    }
    goToSignup() {
      this.slider.slideTo(2);
    }
    slideNext() {
      this.innerSlider.slideNext();
    }
    slidePrevious() {
      this.innerSlider.slidePrev();
    }
    presentLoading(message) {
      const loading = this.loadingCtrl.create({
        duration: 500
      });
      loading.onDidDismiss(() => {
        const alert = this.alertCtrl.create({
          title: 'Success',
          subTitle: message,
          buttons: ['Dismiss']
        });
        alert.present();
      });
      loading.present();
    }
    dismiss() {
      this.viewCtrl.dismiss();
    }
    submit() {
      let user = JSON.parse(localStorage.getItem('userdetails'));
      let obj = {
        comment: this.reviewdata.comment,
        rating: this.reviewdata.rating,
        userid: user._id,
        type: this.navParams.data.type,
        id: this.navParams.data.id,
        status: 1
      }
      this._services.addreview(obj).subscribe((Response) => {
        console.log(Response)
        if (Response.success == true) {
          let msg = {
            msg: Response.message,
            duration: 3000,
            position: 'centre',
          }
          this.utility.messageToast(msg)
        } else {
          let msg = {
            msg: Response.message,
            duration: 3000,
            position: 'centre',
          }
          this.utility.messageToast(msg)
        }
        this.viewCtrl.dismiss();
      })
    }
    updateReview() {
      let user = JSON.parse(localStorage.getItem('userdetails'));
      let obj = {
        comment: this.reviewdata.comment,
        rating: this.reviewdata.rating,
        userid: user._id,
        type: this.navParams.data.type,
        id: this.navParams.data.id,
        reviewid:this.reviewdata.id,
        status: 1
      }
      this._services.updatereviewdata(obj).subscribe((Response) => {
        console.log(Response)
        if (Response.success == true) {
          let msg = {
            msg: Response.message,
            duration: 3000,
            position: 'centre',
          }
          this.utility.messageToast(msg)
        } else {
          let msg = {
            msg: Response.message,
            duration: 3000,
            position: 'centre',
          }
          this.utility.messageToast(msg)
        }
        this.viewCtrl.dismiss();
      })
    }
  }
  