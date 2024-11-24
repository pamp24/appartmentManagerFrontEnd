import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
  ],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.less'
})
export class PaymentsComponent {
  payments = [
    { utility: 'Electricity', amount: 50.5, date: new Date(2024, 10, 15), status: 'Paid' },
    { utility: 'Water', amount: 30.0, date: new Date(2024, 9, 10), status: 'Paid' },
    { utility: 'Internet', amount: 70.25, date: new Date(2024, 8, 5), status: 'Paid' },
    { utility: 'Gas', amount: 45.75, date: new Date(2024, 7, 20), status: 'Pending' }
  ];

  payNow(utility: string) {
    alert(`Paying for ${utility}...`);
  }
}
