import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { Geolocation } from '@ionic-native/geolocation';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
@NgModule({
  declarations: [
    ProfilePage,
  ],
  providers:[GoogleMaps,Geolocation],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
})
export class ProfilePageModule {}
