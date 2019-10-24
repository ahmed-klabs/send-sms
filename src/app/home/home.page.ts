import { Component } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  phone;
  text;
  constructor(private sms: SMS) { }

  sendSMS() {
    if (this.phone && this.text.trim()) {
      this.sms.hasPermission().then(has => {
        console.log(has);
        if (has) {
          console.log('send');
          this.sms.send(this.phone, this.text)
            .then(() => {
              console.log("The Message is sent");
            }).catch((error) => {
              console.log("The Message is Failed", error);
            });
        }
      })
    }
  }
}
