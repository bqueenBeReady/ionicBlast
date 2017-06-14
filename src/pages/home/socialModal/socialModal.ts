import { Component } from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'socialModal',
  templateUrl: 'socialModal.html'
})
export class socialModal {
  public pic: string = this.navParams.get('shoe_pic');
  constructor(public navParams: NavParams, public viewCtrl: ViewController) {}

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
