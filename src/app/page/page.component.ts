import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chart.js';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  chart1: boolean = true;
  chart2: boolean = false;
  datasetChoosen: number = 0;

  public datasets: ChartDataSets[][] = [
    [
      { data: [65, 59, 80, 81, 56, 5, 45], label: 'Series D' },
      { data: [10, 12, 18, 20, 66, 77, 25], label: 'Series E' },
      { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series F', yAxisID: 'y-axis-1' }
    ],
    [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
      { data: [180, 480, 770, 90, 1000, 270, 40], label: 'Series C', yAxisID: 'y-axis-1' }
    ],
    [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 826, 27, 90], label: 'Series B' },
      { data: [150, 280, 470, 80, 225, 100, 100], label: 'Series C', yAxisID: 'y-axis-1' }
    ],
    [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 438, 40, 19, 836, 27, 90], label: 'Series B' },
      { data: [150, 280, 4730, 820, 2225, 100, 100], label: 'Series C', yAxisID: 'y-axis-1' }
    ] 
  ] 
  
  minSlider: number = 0;
  maxSlider: number = this.datasets.length - 1;
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  public labels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  constructor() { 
  }

  ngOnInit() {
  }
  
  public randomize(): void {
    for (let i = 0; i < this.datasets.length; i++) {
      for(let j = 0; j < this.datasets[i].length; j++){
        for (let z = 0; z < this.datasets[i][j].data.length; z++) {
           this.datasets[i][j].data[z] = this.generateNumber(i);
        }
      }
    }
    //this.chart.update();
  }

  public pushOne() {
    this.datasets.forEach((x, i) => {
      this.datasets[i].forEach((y,j) =>{
        const num = this.generateNumber(i);
        const data: number[] = x[j].data as number[];
        data.push(num);
      })     
    });
    this.labels.push(`Label ${this.labels.length}`);
  }

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  changeChart(){
    this.chart1 = !this.chart1;
    this.chart2 = !this.chart2;
  }

  setData(id: any){
    console.log(id);
    this.datasetChoosen = id;
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    } 
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }
}
