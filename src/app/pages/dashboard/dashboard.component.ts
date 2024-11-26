import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {
  // General overview data
  totalPaid = 129.56;
  nextDueDate = new Date(2024, 6, 15);

  // Expenses
  expenses = [
    { category: 'Συνεργείο Καθαρισμού', amount: 150.0 },
    { category: 'Ρεύμα', amount: 240.0 },
    { category: 'Αμοιβή Γραφείου', amount: 120.0 },
    { category: 'Απεντόμωση', amount: 110.0 }
  ];
  summarizeExpsenses() {
    return this.expenses.reduce((total, expenses) => total + expenses.amount, 0);
  }
  //elevator
  elevatorExpenses = [
    { category: 'Συντήρηση', amount: 150.0 },
  ];
  summarizeEleExpsenses() {
    return this.elevatorExpenses.reduce((total, elevatorExpenses) => total + elevatorExpenses.amount, 0);
  }
  //heating
  heatingExpenses = [
    { category: 'Πετρέλαιο', amount: 200.00 },
  ];
  summarizeHeatingExpsenses() {
    return this.heatingExpenses.reduce((total, heatingExpenses) => total + heatingExpenses.amount, 0);
  }
  
  residents = [
    {
      id: '001',
      name: 'ΛΑΙΜΟΣ',
      apartment: 'Υ1',
      appartmentInstance: 10,
      elevator: 0,
      heating: 12.71,
      individual: 10.00,
      boiler: 12.71,
      common: 5.00,
      elevatorExpense: 4.00,
      heatingExpense: 2.50,
      individualExpense: 2.00,
      boilerExpense: 1.50,
      closed: 0.00,
      special:0,
      owners: 2.00,
      equalParts: 3.00,
      issuance: 1.00,
      autonomous: 1.50,
      rounded: 0.50,
      total: 20.50
    },
    {
      id: '002',
      name: 'ΠΑΠΑΝΔΡΕΟΥ',
      apartment: 'O1',
      appartmentInstance: 50,
      elevator: 16.91,
      heating: 12.59,
      individual: 9.50,
      boiler: 12.59,
      common: 4.50,
      elevatorExpense: 3.50,
      heatingExpense: 2.00,
      individualExpense: 1.80,
      boilerExpense: 1.20,
      closed: 0.00,
      special:0,
      owners: 1.50,
      equalParts: 2.50,
      issuance: 1.20,
      autonomous: 1.00,
      rounded: 0.40,
      total: 20.30
    },
    
  ];
  // Announcements
  announcements = [
    { date: '15/07/2024', message: 'Μηνιαία Συνάντηση 17:00-18:00.' },
    { date: '10/07/2024', message: 'Καθαρισμός κοινόχρηστων χώρων.' }
  ];
  totalSum(){
    return this.summarizeExpsenses() + 
    this.summarizeEleExpsenses() +
    this.summarizeHeatingExpsenses();
  }
  totalSumPerResident(){
    for (let i=0; i<=this.residents.length; i++){
      
    }
  }
  payNow() {
    alert('Redirecting to payment page...');
  }
}


