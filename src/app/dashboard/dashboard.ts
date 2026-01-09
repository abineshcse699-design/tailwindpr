import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
})
export class Dashboard implements AfterViewInit, OnDestroy {

  @ViewChild('revenueCanvas') revenueCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('userCanvas') userCanvas!: ElementRef<HTMLCanvasElement>;

  revenueChart!: Chart;
  userChart!: Chart;

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.createRevenueChart();
      this.createUserChart();
    });
  }

  createRevenueChart() {
    if (this.revenueChart) {
      this.revenueChart.destroy();
    }

    this.revenueChart = new Chart(this.revenueCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          data: [12000, 19000, 15000, 25000, 22000, 30000],
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99,102,241,0.2)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } }
      }
    });
  }

  createUserChart() {
    if (this.userChart) {
      this.userChart.destroy();
    }

    this.userChart = new Chart(this.userCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Desktop', 'Mobile', 'Tablet'],
        datasets: [{
          data: [65, 25, 10],
          backgroundColor: ['#4f46e5', '#ec4899', '#f59e0b']
        }]
      },
      options: {
        responsive: true,
        cutout: '65%'
      }
    });
  }

  ngOnDestroy(): void {
    this.revenueChart?.destroy();
    this.userChart?.destroy();
  }
}
