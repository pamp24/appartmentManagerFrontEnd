import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NzColDirective } from 'ng-zorro-antd/grid';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // Needed for [(ngModel)]
import { BrowserModule } from '@angular/platform-browser';
import { NzIconModule } from 'ng-zorro-antd/icon';

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
      { month: 'January', amount: 150.0, date: new Date(2024, 0, 30), status: 'Paid' },
      { month: 'February', amount: 200.0, date: new Date(2024, 1, 30), status: 'Paid' },
      { month: 'March', amount: 100.0, date: new Date(2024, 2, 30), status: 'Paid' },
      { month: 'April', amount: 100.0, date: new Date(2024, 3, 30), status: 'Paid' },
      { month: 'May', amount: 100.0, date: new Date(2024, 4, 30), status: 'Paid' },
      { month: 'June', amount: 100.0, date: new Date(2024, 5, 30), status: 'Pending' },
    ];
  
    // Get color based on payment status
    getStatusColor(status: string): string {
      switch (status) {
        case 'Paid':
          return 'green';
        case 'Pending':
          return 'orange';
        default:
          return 'default';
      }
    }
  
    // Payment action
    payNow(month: string) {
      console.log(`Initiating payment for ${month}`);
      // Payment logic here
    }
  
    // Print action
    print(month: string) {
      console.log(`Printing report for ${month}`);
      // Print logic here
    }
}
  
