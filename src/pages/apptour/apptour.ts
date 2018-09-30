import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the ApptourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apptour',
  templateUrl: 'apptour.html',
})
export class ApptourPage {

  @ViewChild('slider') slider: Slides;
  slideIndex = 0;
  slides = [
    {
      title: 'Best hotel and local places',
      imageUrl: 'assets/img/lists/wishlist-1.png',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'Find all center',
      imageUrl: 'assets/img/lists/wishlist-2.png',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'All shop near by me',
      imageUrl: 'assets/img/lists/wishlist-3.png',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'Call technician to your doorstep',
      imageUrl: 'assets/img/lists/wishlist-4.png',
      description: 'Take a look at our amazing options',
    }
  ];

  constructor(public navCtrl: NavController) { }

  onSlideChanged() {
    this.slideIndex = this.slider.getActiveIndex();
    console.log('Slide changed! Current index is', this.slideIndex);
  }

  goToApp() {
    console.log('Go to App clicked');
    localStorage.setItem('apptour', 'seen')

    let logincheck = localStorage.getItem('token')
    if (logincheck == null) {
      this.navCtrl.setRoot("LoginPage")

    } else {
      this.navCtrl.setRoot("HomePage")

    }


  }


}
