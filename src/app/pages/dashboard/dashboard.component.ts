import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  septemberTotal: number = 0;
  octoberTotal: number = 0;
  novemberTotal: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.newChart1();
    this.newChart2();
  }

  newChart1() {
    let ctx = document.getElementById('myChart');
    let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['setembro', 'Outubro', 'Novembro'],
        datasets: [
          {
            label: 'Dados apenas ilustrativos',
            data: [202050, 231319, 194123],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  newChart2() {
    let ctx2 = document.getElementById('myChart2');
    var myLineChart = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['setembro', 'Outubro', 'Novembro'],
        datasets: [
          {
            label: 'Dados apenas ilustrativos',
            data: [159, 288, 243],
          },
        ],
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      },
    });
  }

}

