import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
  ], 
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.less']
})
export class ReportsComponent {
  paymentsSummary = [
    { month: 'January', totalPayments: 1500, pendingBills: 200 },
    { month: 'February', totalPayments: 1800, pendingBills: 150 },
    { month: 'March', totalPayments: 1700, pendingBills: 100 },
    { month: 'April', totalPayments: 2000, pendingBills: 300 },
    { month: 'May', totalPayments: 1600, pendingBills: 250 }
  ];
}
