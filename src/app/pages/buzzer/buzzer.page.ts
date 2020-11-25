import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DweetService } from 'src/app/services/dweet.service';
import Dweet from 'src/models/Dweet';


@Component({
  selector: 'app-buzzer',
  templateUrl: './buzzer.page.html',
  styleUrls: ['./buzzer.page.scss'],
})
export class BuzzerPage implements OnInit {

  private dweet: Dweet
  private isLoading: boolean = true;
  private time: any;
  private dataPlot: Array<any>
  options: Object;


  constructor(private dweetService: DweetService, public router: Router) {
    this.time = setInterval(() => { this.getLastDweets() }, 3000)
  }


  private getLastDweets() {
    this.dataPlot = []
    this.dweetService.loadLastDweets().subscribe(
      data => {
        this.preencherDweet(data)
      },
      err => {
        console.log("Erro: ", err)
      },
      () => this.isLoading = false
    )
  }

  private preencherDweet(data: any) {
    this.dweet = this.dweetService.preencherDweet(data);
    this.loadDataForPlot(this.dweet)
    this.plotChart();
  }

  private loadDataForPlot(dweet: Dweet) {
    for (let _with of dweet.with) {
      let epoch = new Date(_with.created).getTime()
      let statusBuzzer;
      if (_with.content.$status_buzzer) {
        statusBuzzer = 1;
      } else {
        statusBuzzer = 0;
      }
      this.dataPlot.push([epoch, statusBuzzer])
    }
  }

  private plotChart() {
    this.options = {
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        labels: {
          formatter: function () {
            return this.value + "";
          }
        },
      },
      title: { text: 'Buzzer ' },
      series: [{
        name: 'Buzzer',
        data: this.dataPlot.reverse(),
        pointInterval: 60 * 60
      }]
    };
  }

  goBack() {
    this.router.navigate(['home'])
  }

  ngOnInit() {
    this.getLastDweets();
  }

  ngOnDestroy() {
    clearInterval(this.time)
  }

  ionViewDidLeave() {
    clearInterval(this.time);
  }

}
