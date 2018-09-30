 import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';

import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
 import { catchError } from 'rxjs/operators';
import {publishReplay, map, tap, refCount} from 'rxjs/operators';

import { Config } from '../../config';
import { Response } from "@angular/http";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
 
/*
Generated class for the ServicesProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class ServicesProvider {
  userdata: any;
  get_promoter_location: any;
  userDeatilsData: any;
  bannerData: any;
  category: any;
  constructor(private http: HttpClient, private geolocation: Geolocation) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message+
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };



  getCategory() {

if(!this.category){
  this.category= this.http.get(Config.API_ENDPOINT + '/get-category')
  .pipe(catchError(this.handleError), publishReplay(1),
  refCount());
}
return this.category
}




  getVendor() {
    return this.http.get(Config.API_ENDPOINT + '/get-vendor')
      .map((response: Response) => response)
      .catch(this.handleError)
  }

  getFacebookGraphApi(data) {

    return this.http.get('https://graph.facebook.com/me/?fields=picture.type(large),email,about,first_name,last_name,address,birthday,cover,age_range&access_token=' + data.authResponse.accessToken)
      .map((response: Response) => response)
      .catch(this.handleError)
  }


  //
  // ──────────────────────────────────────────────────────────────────── XIII ──────────
  //   :::::: F A C E B O O K   L O G I N : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────────────────
  //

  login(data) {
    return this.http.post(Config.API_ENDPOINT + '/fblogin', data)
      .map((response: Response) => response)
      .catch(this.handleError)

  }
  getaddress() {

    return this.http.get(Config.MAP + '&latlng=' + Config.LOCATION.latitude + ',' + Config.LOCATION.longitude)
      .map((response: Response) => response)
      .catch(this.handleError)
  }

  addreview(data) {
    return this.http.post(Config.API_ENDPOINT + '/add-review', data)
      .map((response: Response) => response)
      .catch(this.handleError)

  }

  getreview(data) {
    return this.http.get(`${Config.API_ENDPOINT}/get-review?id=${data.id}&type=${data.type}`)
      .map((response: Response) => response)
      .catch(this.handleError)

  }


  getGeolocation() {

    return this.geolocation.getCurrentPosition().then((resp) => {


      // resp.coords.latitude
      // resp.coords.longitude
      var obj = {
        latitude: resp.coords.latitude,
        longitude: resp.coords.longitude
      }

      localStorage.setItem('location', JSON.stringify(obj))


    }).catch((error) => {
    });

  }

  getChatHistory(obj) {

    return this.http.get(Config.API_ENDPOINT + '/chatHistory?remoteUserId=' + obj.remoteuserid + '&page=' + obj.page)
      .map((response: Response) => response)
      .catch(this.handleError)

  }

  //
  // ─── GET CHAT USER LIST ─────────────────────────────────────────────────────────
  //

  getChatUserLIst() {

    return this.http.get(Config.API_ENDPOINT + '/chat-user-list')

  }

  getpromoter() {
    return this.http.get(Config.API_ENDPOINT + '/get-promoter')
      .map((response: Response) => response)
      .catch(this.handleError)
  }

  search(data) {
    return this.http.post(Config.API_ENDPOINT + '/search', data)
      .map((response: Response) => response)
      .catch(this.handleError)
  }

  getPostDetails(data) {
    return this.http.get(Config.API_ENDPOINT + '/get-post-details?id=' + data)
      .map((response: Response) => response)
      .catch(this.handleError)
  }
  getPost() {
    return this.http.get(`${Config.API_ENDPOINT}/get-post`)
      .map((response: Response) => response)
      .catch(this.handleError)
  }

  doLogin(data) {
    return this.http.post(Config.API_ENDPOINT + '/login', data)
      .map((response: Response) => response)
      .catch(this.handleError)
  }
  register(data) {
    return this.http.post(Config.API_ENDPOINT + '/register', data)
      .map((response: Response) => response)
      .catch(this.handleError)
  }

  updateuser(data) {
    return this.http.post(Config.API_ENDPOINT + '/updateuser', data)
      .map((response: Response) => response)
      .catch(this.handleError)
  }

  getUserDetails() {

if(!this.userDeatilsData){
  this.userDeatilsData= this.http.get(Config.API_ENDPOINT + '/userdetails')
 .pipe(catchError(this.handleError), publishReplay(1),
    refCount());
}
return this.userDeatilsData

  }
  clearUser(){
    this.userDeatilsData=null
  }

  forgetPassword(data){
    return this.http.post(`${Config.API_ENDPOINT}/forget-password`,data)
    .map((response:Response)=>response)
    .catch(this.handleError)
  }
   
  changePassword(data){
    return this.http.post(`${Config.API_ENDPOINT}/change-password`,data)
    .map((response:Response)=>response)
    .catch(this.handleError)
  }
  feedback(data){
    return this.http.post(`${Config.API_ENDPOINT}/feedback`,data)
    .map((response:Response)=>response)
    .catch(this.handleError)
  }
  getCms(data){
    return this.http.get(`${Config.API_ENDPOINT}/get-cms?pagename=${data}`)
    .map((response:Response)=>response)
    .catch(this.handleError)
  }

  getTagsById(data){
       return this.http.get(`${Config.API_ENDPOINT}/get-tags-by-id?id=${data.id}`)
      .map((response:Response)=>response)
      .catch(this.handleError)
  }

  getProductCategory(data){
    return this.http.get(`${Config.SAIL_ENDPOINT}/get-product-category?shopid=${data.shopid}`)
    .map((response:Response)=>response)
    .catch(this.handleError)
  }

  
  
  getProduct(data){
    return this.http.get(`${Config.SAIL_ENDPOINT}/get-product?id=${data}`)
    .map((response:Response)=>response)
    .catch(this.handleError)
  }

  
  addToCart(data){
    return this.http.post(`${Config.SAIL_ENDPOINT}/add-to-cart`,data)
    .map((response:Response)=>response)
    .catch(this.handleError)
  }

  getCart(data){
  return this.http.get(`${Config.SAIL_ENDPOINT}/get-cart`)
  .map((response:Response)=>response)
  .catch(this.handleError)
}
shippingAddress(data){
  return this.http.post(`${Config.SAIL_ENDPOINT}/add-shipping-address`,data)
  .map((response:Response)=>response)
  .catch(this.handleError)
}


getShippingAddress(data){
  return this.http.get(`${Config.SAIL_ENDPOINT}/get-shipping-address?userid=${data.userid}`)
  .map((response:Response)=>response)
  .catch(this.handleError)
}

makePaymenrtRequest(data){
  return this.http.post(`${Config.SAIL_ENDPOINT}/payment-link`,data)
  .map((response:Response)=>response)
  .catch(this.handleError)
}
createOrder(data){
  return this.http.post(`${Config.SAIL_ENDPOINT}/create-order`,data)
  .map((response:Response)=>response)
  .catch(this.handleError)
}
getOrderDetails(id){
  return this.http.get(`${Config.SAIL_ENDPOINT}/get-order?id=${id}`)
  .map((response:Response)=>response)
  .catch(this.handleError)
} 

getOrderList(id){
  return this.http.get(`${Config.SAIL_ENDPOINT}/get-order-list?id=${id}`)
  .map((response:Response)=>response)
  .catch(this.handleError)
}


removeItem(data){
  return this.http.post(`${Config.SAIL_ENDPOINT}/remove-cart-item`,data)
  .map((response:Response)=>response)
  .catch(this.handleError)
}

saveDevicesToken(data){
  return this.http.post(`${Config.SAIL_ENDPOINT}/add-devices`,data)
  .map((response:Response)=>response)
  .catch(this.handleError)
}

getOrder(data){
  return this.http.get(`${Config.SAIL_ENDPOINT}/get-order?id=${data.id}`)
  .map((response:Response)=>response)
  .catch(this.handleError)
}

getNotification(data){
  return this.http.get(`${Config.SAIL_ENDPOINT}/get-notification?id=${data.id}`)
  .map((response:Response)=>response)
  .catch(this.handleError)
}
MarkSeenNotification(data){
  return this.http.post(`${Config.SAIL_ENDPOINT}/mark-read-notification`,data)
  .map((response:Response)=>response)
  .catch(this.handleError)
}


getPromoterCategory(){
  console.log('====================================');
  console.log(this.get_promoter_location);
  console.log('====================================');
  if(!this.get_promoter_location ){
    this.get_promoter_location= this.http.get(`${Config.SAIL_ENDPOINT}/get-promoter-location`)
    .pipe(catchError(this.handleError), publishReplay(1),
    refCount());



    
  }
return this.get_promoter_location

}

getPromoterDetails(data){
  return this.http.get(`${Config.SAIL_ENDPOINT}/get-promoter?id=${data.id}`)
  .map((response:Response)=>response)
  .catch(this.handleError)
}
getPromoterImage(data){
  return this.http.get(`${Config.SAIL_ENDPOINT}/get-promoter-image?id=${data.id}`)
  .map((response:Response)=>response)
  .catch(this.handleError)
}

getBanner(){
  if(!this.bannerData){
    this.bannerData= this.http.get(`${Config.SAIL_ENDPOINT}/get-banner`)
    .pipe(catchError(this.handleError), publishReplay(1),
    refCount());

  }
  return this.bannerData
  
}

getUserRating(data){
  return this.http.get(`${Config.SAIL_ENDPOINT}/get-user-review?id=${data.id}&type=${data.type}&userid=${data.userid}`)
  .map((response:Response)=>response)
  .catch(this.handleError)
 }
 updatereviewdata(data){
  return this.http.post(`${Config.SAIL_ENDPOINT}/update-review`,data)
  .map((response:Response)=>response)
  .catch(this.handleError)
 }
 
 sendOTP(data){
 
  return this.http.post(`${Config.SAIL_ENDPOINT}/shipping-phone-otp`,data)
  .map((response:Response)=>response)
  .catch(this.handleError)
 }
 verifyOTP(data){
    
  return this.http.post(`${Config.SAIL_ENDPOINT}/check-phone-otp`,data)
  .map((response:Response)=>response)
  .catch(this.handleError)
 }
}
