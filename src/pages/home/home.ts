import {Component, ViewChild} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import { Chart } from 'chart.js';
import {socialModal} from "./socialModal/socialModal";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('lineCanvas') lineCanvas;
  lineChart:any;
  public ppls =  [{"name":"Miri Regev", "status":"Hi! Going to gym! who is joining me?", "picture":"http://img.mako.co.il/2015/01/05/giveret_x5.jpg", "shoe_pic":"https://previews.123rf.com/images/lightkeeper/lightkeeper1206/lightkeeper120600020/14258141-Child-successfully-ties-shoes-closeup-on-feet-and-hands-Stock-Photo.jpg"}, {"name":"Donald Rrump", "status":"covfefe", "picture":"http://static6.businessinsider.com/image/55918b77ecad04a3465a0a63/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners.jpg", "shoe_pic":"http://www.girlishh.com/wp-content/uploads/2010/08/Best-Running-Shoes.jpg"}, {"name":"Sarah Netanyahu", "status":"drink.SWALLA", "picture":"http://cdn.timesofisrael.com/uploads/2012/05/F100819KG04-e1411395307501.jpg", "shoe_pic":"https://feministfiguregirl.files.wordpress.com/2015/05/img_7817.jpg"}, {"name": "Tal Moseri", "status":"head on the shoulders", "picture":"http://www.behindthevoiceactors.com/_img/actors/tal-mosseri-36.5.jpg", "shoe_pic":"https://i.ytimg.com/vi/5cq6IM05N38/maxresdefault.jpg"}, {"name":"Benel Tavori", "status":"On the coastal road", "picture":"http://img.mako.co.il/2016/09/26/stat_x5.jpg", "shoe_pic":"https://newsneakernews-wpengine.netdna-ssl.com/wp-content/uploads/2014/09/sneaker-con-atlanta-on-feet-recap-september-2014-012.jpg"}, {"name":"pe'er tasi", "status":"On the shalom road", "picture":"http://img.mako.co.il/2013/12/06/peer_tassi_promoo_g.jpg", "shoe_pic":"http://farm8.staticflickr.com/7375/9451092409_b6b6661629.jpg"}]

  constructor(public navCtrl: NavController, public modalCtrl : ModalController) {

  }

  openModal(data) {
    console.log(data);
    let myModal = this.modalCtrl.create(socialModal, data);
    myModal.present();
  }

  ionViewDidLoad(){
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Activities",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            scaleEndValue: 11,
            borderDashOffset: 5.0,
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: true,
          }
        ],
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true,
                min:3,
                max:20
              }
            }]
          }
        }
      }

    });
  }

}
