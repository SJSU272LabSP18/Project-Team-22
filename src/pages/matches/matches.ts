import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-matches',
  templateUrl: 'matches.html',
})

export class MatchesPage {
  samples: any;
constructor(private nav: NavController, public restProvider: RestProvider, public nacParams: NavParams) {

    this.samples =
    [
      {"Date" : "Thursday 16 Mar - ",
      "Data" : "Harshrajsinh Rathod",
      "Time" : "6:29 pm - "},

      {"Date" : "Thursday 17 Apr - ",
      "Data" : "Sunil Lalwani",
      "Time" : "7:30 pm - "},

      {"Date" : "Thursday 18 May - ",
      "Data" : "Emma Peatfield",
      "Time" : "8:31 pm - "},
    ]
   }

    /** JSOn View Code : https://stackoverflow.com/questions/47872913/reading-content-of-json-file-in-ionic-app?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

    constructor(public http: HttpClient) {
      this.load_entries();
  };

  load_entries(filePath: string) {  //filePath: 'assets/test.json'

      this.http
          .get(filePath)
          .subscribe((data) => {
             console.log(data);
          });
  }*/

public letsPlay()
{
  this.nav.setRoot('ChoosewinnerPage');
}

ionViewDidLoad() {
  console.log('ionViewDidLoad ChooseWinner');
  }
}
