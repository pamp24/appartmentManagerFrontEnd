import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet, 
        RouterLink, 
        RouterLinkActive,
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.less'
})
export class DashboardComponent implements OnInit {
    
    userName: string = 'John Doe'; // Example user name
    outstandingAmount: number = 250.75; // Example outstanding amount
    nextDueDate: Date = new Date(2024, 11, 30); // Example due date

  recentPayments = [
    { utility: 'Electricity', amount: 50.5, date: new Date(2024, 10, 15), status: 'Paid' },
    { utility: 'Water', amount: 30.0, date: new Date(2024, 9, 10), status: 'Paid' },
    { utility: 'Internet', amount: 70.25, date: new Date(2024, 8, 5), status: 'Paid' }
  ];

  constructor() {}

  ngOnInit(): void {}

  payNow() {
    alert('Redirecting to payment page...');
  }
}

