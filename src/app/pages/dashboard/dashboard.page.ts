import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexStroke, ApexTitleSubtitle } from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  yaxis: ApexYAxis;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  imports: [IonicModule, CommonModule, NgApexchartsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardPage {
  chartOptions: Partial<ChartOptions> = {
    series: [{ name: 'Hours', data: [1, 2, 3, 5, 4, 1] }],
    chart: {
      type: 'bar',
      height: 250,
      toolbar: { show: false },
      foreColor: '#e5e5e5',
      background: 'transparent'
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            { from: -9999, to: -0.01, color: '#e74c3c' },
            { from: 0, to: 9999, color: '#363636ff' }
          ]
        }
      }
    },
    stroke: { show: false },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {style: { colors: '#bfbfbf' }},
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: { show: false },
    grid: {
      show: false,
    },
  };
}