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
  payments = [
    { month: 'January', amount: 50.5, date: new Date(2024, 10, 15), status: 'Paid' },
    { month: 'February', amount: 30.0, date: new Date(2024, 9, 10), status: 'Paid' },
    { month: 'March', amount: 70.25, date: new Date(2024, 8, 5), status: 'Paid' },
    { month: 'April', amount: 45.75, date: new Date(2024, 7, 20), status: 'Paid' },
    {month: 'May', amount: 30.0, date: new Date(2024, 9, 10), status: 'Pending'}
  ];

  paymentsSummary = [
    {  totalPayments: 1500, pendingBills: 200 },
    {  totalPayments: 1800, pendingBills: 150 },
    {  totalPayments: 1700, pendingBills: 100 },
    {  totalPayments: 2000, pendingBills: 300 },
    {  totalPayments: 1600, pendingBills: 250 }
  ];
  payNow(utility: string) {
    alert(`Paying for ${utility}...`);
  }
}
