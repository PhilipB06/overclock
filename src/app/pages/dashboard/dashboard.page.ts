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
    series: [{ name: 'Hours', data: [4, 5, 8, 7, 6, 4] }],
    chart: { type: 'bar', height: 250, toolbar: { show: false }, foreColor: '#e5e5e5' },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    title: { text: 'Monthly Overtime', align: 'center', style: { color: '#e5e5e5' } }
  };
}