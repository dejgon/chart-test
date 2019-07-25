import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chart.js'
import { Label } from 'ng2-charts';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  @Input() data: ChartDataSets[];
  @Input() labels: Label[];


  public barChartOptions: ChartOptions = {
    responsive: true,
    
    scales: {
      xAxes: [{}], yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: 'xy',
          rangeMin: {
            
            x: null,
            y: null
          },
          rangeMax: {
          
            x: null,
            y: null
          },

          onPan: function ({ chart }) { console.log(`I'm panning!!!`); },

          onPanComplete: function ({ chart }) { console.log(`I was panned!!!`); }
        },


        zoom: {

          enabled: true,

          drag: true,
          mode: 'xy',

          rangeMin: {

            x: null,
            y: null
          },
          rangeMax: {
            x: null,
            y: null
          },
          speed: 0.1,

          onZoom: function ({ chart }) { console.log(`I'm zooming!!!`); },
          onZoomComplete: function ({ chart }) {
            console.log(`I was zoomed!!!`);
          }
        }
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];


  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}