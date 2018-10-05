import { Component, ViewChild } from '@angular/core';
import { Platform,  Nav} from 'ionic-angular';
import { ServicesProvider } from '../providers/services/services';
import { Events } from 'ionic-angular'; 
import { OneSignal } from '@ionic-native/onesignal';
import { enableProdMode } from '@angular/core';

enableProdMode();
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  user:any={}
  rootPage: string;

 
  constructor(platform: Platform,  public events: Events,
    private oneSignal: OneSignal, 
    public _services: ServicesProvider) {
      platform.ready().then(() => {

        if (platform.is('cordova')) {
          this.oneSignal.startInit("a0d66b31-b2a2-4a76-a7b2-54abb0175216", "977511232376")
          this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
          this.oneSignal.handleNotificationReceived().subscribe(() => {
           // do something when notification is received
          });
          this.oneSignal.handleNotificationOpened().subscribe(() => {
            // do something when a notification is opened
          });
          this.oneSignal.getIds().then(function(data){
           localStorage.setItem('devices_token',data.userId)
          })
          this.oneSignal.endInit();
  
          
        } 
       
        let logincheck = localStorage.getItem('token')
        this._services.getGeolocation();
        var checkApptour = localStorage.getItem('apptour')
        if (checkApptour == 'seen' && logincheck != null) {
          this.rootPage = "HomePage";
          this.getUserDetails()
        }
        else {
          this.rootPage = "ApptourPage";
        }

      });
      events.subscribe('userdetails', () => {
        // user and time are the same arguments passed in `events.publish(user, time)`
        this.getUserDetails()
      });
    }
    getUserDetails(){
      this._services.getUserDetails().subscribe((response)=>{
        localStorage.setItem('userdetails',JSON.stringify(response.data))
        this.user=response.data
      })
    }
  
 
     
     // example of adding a transition when pushing a new page
     goToPage(page: any) {
     
      if(page==='HomePage')
{
  this.nav.setRoot(page);

}else{
  this.nav.push(page);

}
     
     }
    CmsPage(page){
      this.nav.push("CmsPage",{pagename:page})
    }
    logout() {
      localStorage.removeItem('userdetails')
      localStorage.removeItem('token')
      this.nav.setRoot("LoginPage");
    }

    goToChat(){
      this.nav.push('ChatPage', {id:'5b1c0d796728f530bbd321dd'});

    }
  }
