import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  map: GoogleMap;
  user: any = {}
  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }
  ngOnInit(): void {

  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.loadMap()
  }
  ionViewDidLoad() {


    console.log('ionViewDidLoad ProfileFivePage', this.navParams.data);
    let result = this.navParams.data.data
    this.user = {
      name: result.firstname + result.lastname,
      profileImage: result.profile_image,
      coverImage: '',
      occupation: result.shopname,
      location: result.city + result.state + result.country,
      description: '',
      address: result.address + ' ' + result.city + ' ' + result.state + ' ' + result.country,
      phone: result.phone,
      email: result.email,
      whatsapp: result.phone,
      shopname: result.shopname,
      userid: result._id
    };
    console.log(this.user)

  }
  loadMap() {

    var location = JSON.parse(localStorage.getItem('location'))

    console.log(typeof (location.latitude))

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: location.latitude,
          lng: location.longitude
        },
        zoom: 16,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
          title: this.user.shopname,
          icon: 'red',
          animation: 'BOUONCE',
          position: {
            lat: location.latitude,
            lng: location.longitude
          }
        })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert(this.user.shopname);
              });
          });

      });
  }
  goToReview() {


    this.navCtrl.push("ReviewPage", { id: this.user.userid })
  }
  openChat(item) {
    this.navCtrl.push('ChatPage', item);
  }
}
