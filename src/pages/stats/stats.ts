import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})

export class StatsPage {
  samples: any;

constructor(private nav: NavController, public restProvider: RestProvider, public nacParams: NavParams) {

    this.samples =
    [
      {"badmintonWon" : "10",
      "badmintonLost" : "7",
      "tennisWon" : "13",
      "tennisLost" : "14"},
    ]

   }

public Home() {
  this.nav.setRoot('HomePage')
}

ionViewDidLoad() {
  console.log('ionViewDidLoad StatsPage');
}
}
