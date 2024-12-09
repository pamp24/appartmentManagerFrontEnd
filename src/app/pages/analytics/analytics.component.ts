import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.less'
})
export class AnalyticsComponent implements OnInit{

  // Expenses
  expenses = [
    { category: 'Συνεργείο Καθαρισμού', amount: 150.0 },
    { category: 'Ρεύμα', amount: 200.0 },
    { category: 'Αμοιβή Γραφείου', amount: 100.0 },
    { category: 'Απεντόμωση', amount: 150.0 }
  ];
  summarizeExpsenses() {
    return this.expenses.reduce((total, expenses) => total + expenses.amount, 0);
  }

  //Heating
  heatingExpenses = [
    { category: 'Πετρέλαιο', amount: 200.00 },
  ];
  summarizeHeatingExpsenses() {
    return this.heatingExpenses.reduce((total, heatingExpenses) => total + heatingExpenses.amount, 0);
  }
  //Elevator
  elevatorExpenses = [
    { category: 'Συντήρηση', amount: 200 },
  ];
  summarizeEleExpsenses() {
    return this.elevatorExpenses.reduce((total, elevatorExpenses) => total + elevatorExpenses.amount, 0);
  }
  //Autonomy
  autonomyExpenses = [
    { category: 'Αυτονομία', amount: 200 },
  ];
  summarizeAutonomyExpsenses() {
    return this.autonomyExpenses.reduce((total, autonomyExpenses) => total + autonomyExpenses.amount, 0);
  }
  //Boiler
  boilerExpenses = [
    { category: 'Boiler', amount: 100 },
  ];
  summarizeBoilerExpsenses() {
    return this.boilerExpenses.reduce((total, boilerExpenses) => total + boilerExpenses.amount, 0);
  }
  //Special Expenses
  specialExpenses = [
    { category: 'ΔΕΗ Υπηρεσίας', amount: 30 },
  ];
  summarizeSpecialExpsenses() {
  return this.specialExpenses.reduce((total, specialExpenses) => total + specialExpenses.amount, 0);
  }
  //Owner Expenses
  ownersExpenses = [
    { category: 'Συναγερμός', amount: 15 },
  ];
  summarizeOwnersExpsenses() {
   return this.ownersExpenses.reduce((total, ownersExpenses) => total + ownersExpenses.amount, 0);
  }
  //Equal Expenses
  equalExpenses = [
    { category: 'Σκύλος', amount: 30 },
  ];
  summarizeEqualExpsenses() {
   return this.equalExpenses.reduce((total, equalExpenses) => total + equalExpenses.amount, 0);
  }
   //Data
   residents: any[] = [
    {
      id: '001',
      name: 'ΛΑΙΜΟΣ',
      email: 'laimos@gmail.com',
      phone: '6982293212',
      appartment: 'Υ1',
      isManager: false,
      appartmentInstance: 20,
      elevatorInstance: 0,
      heatingInstance: 60,
      individual: 0,
      boiler: 100,
      common: 0,
      elevatorExpense: 0,
      heatingExpense: 0,
      individualExpense: 0,
      boilerExpense: 0,
      closed: 0,
      special:0,
      owners: 0,
      equalParts: 0,
      issuance: 0,
      autonomous: 0,
      rounded: 0,
      total: 0
    },
    {
      id: '002',
      name: 'ΠΑΠΑΝΔΡΕΟΥ',
      email: 'papadreou@gmail.com',
      phone: '6942445508',
      appartment: 'Ι1',
      isManager: false,
      appartmentInstance: 50,
      elevatorInstance: 50,
      heatingInstance: 10,
      individual: 0,
      boiler: 0,
      common: 0,
      elevatorExpense: 0,
      heatingExpense: 0,
      individualExpense: 0,
      boilerExpense: 0,
      closed: 0.00,
      special:0,
      owners: 0,
      equalParts: 0,
      issuance: 0,
      autonomous: 0,
      rounded: 0,
      total: 0
    },
    {
      id: '003',
      name: 'ΝΙΚΟΛΑΟΥ',
      email: 'nikolaou@yahoo.gr',
      phone: '699876543',
      floor: 2,
      appartment: 'O2',
      isManager: true,
      squareMeters: 100,
      appartmentInstance: 30,
      elevatorInstance: 50,
      heatingInstance: 30,
      individual: 100,
      boiler: 0,
      common: 0,
      elevatorExpense: 0,
      heatingExpense: 0,
      individualExpense: 0,
      boilerExpense: 0,
      closed: 0,
      special: 0,
      owners: 0,
      equalParts: 0,
      issuance: 0,
      autonomous: 0,
      rounded: 0,
      total: 0
    }
  ];
  
   building = {
    id: '1',
    name: 'Κωνσταστίνου Λούρου',
    address: 'Κωνσταντίνου Λούρου',
    addressNumber: '1',
    numberOfFloors: 5,
    numberOfAppartments: 20,
    buldingSquareMeters: 15000,
    yearBuilt: 2010,
    type: 'Κατοικίες - Γραφεία',
    owner: 'Τεστ',
    isUnderConstruction: false,
    amenities: ['Πάρκινγκ', 'Γυμαστήριο', 'Πισίνα', 'Παιδική Χαρά'],
    buildingManager: 'Βενιζέλος',

  };
  
  totalSumOfExpenses(){
    return this.summarizeExpsenses() + 
    this.summarizeEleExpsenses() +
    this.summarizeHeatingExpsenses() +
    this.summarizeSpecialExpsenses() +
    this.summarizeEqualExpsenses();
  }

  totalsPerResident(residents: number[]){
    const length = residents.length;
    for (let i=0;i<residents.length;i++){
      if (!residents[i]) continue;
      const totalExpeSumPerCustomer = this.summarizeExpsenses()/100 * this.residents[i].appartmentInstance;
      const totalElevSumPerCustomer = (this.summarizeEleExpsenses()/100) * this.residents[i].elevatorInstance;
      const totalHeatSumPerCustomer = (this.summarizeHeatingExpsenses()/100) * this.residents[i].heatingInstance;
      const totalAutonomySumPerCustomer = (this.residents[i].individual/this.summarizeAutonomyExpsenses())* this.residents[i].individual;
      const totalBoilerSumPerCustomer = (this.residents[i].boiler/this.summarizeBoilerExpsenses())* this.residents[i].boiler;
      const totalSpecialSumPerCustomer = this.summarizeSpecialExpsenses()/length;
      const totalOwnersSumPerCustomer = this.summarizeOwnersExpsenses()/length;
      const totalEqualSumPerCustomer = this.summarizeEqualExpsenses()/length;

      this.residents[i].common = totalExpeSumPerCustomer; 
      this.residents[i].elevatorExpense = totalElevSumPerCustomer;
      this.residents[i].heatingExpense = totalHeatSumPerCustomer;
      this.residents[i].individualExpense = totalAutonomySumPerCustomer;
      this.residents[i].boilerExpense = totalBoilerSumPerCustomer;
      this.residents[i].special = totalSpecialSumPerCustomer;
      this.residents[i].owner = totalOwnersSumPerCustomer;
      this.residents[i].equalParts = totalEqualSumPerCustomer;
      
      this.residents[i].total = this.residents[i].common + 
      this.residents[i].elevatorExpense + 
      this.residents[i].heatingExpense +
      this.residents[i].individualExpense +
      this.residents[i].boilerExpense +
      this.residents[i].special +
      this.residents[i].equalParts;
    };
    return this.residents;
  }

  //Standart Values
  totalMilimitersMilimiters(residents: any[]): number{
    let totalMilimitersSum = 0;
    for(let i= 0; i<this.residents.length; i++){
      if (!residents[i]) continue;
      totalMilimitersSum += this.residents[i]?.appartmentInstance;
    }
    return totalMilimitersSum;
  }
  totalElevatorMilimiters(residents: any[]): number{
    let totalElevatorSum = 0;
    for(let i= 0; i<this.residents.length; i++){
      if (!residents[i]) continue;
      totalElevatorSum += this.residents[i]?.elevatorInstance;
    }
    return totalElevatorSum;
  }
  totalHeatMilimiters(residents: any[]): number{
    let totalHeatSum = 0;
    for(let i= 0; i<this.residents.length; i++){
      if (!residents[i]) continue;
      totalHeatSum += this.residents[i]?.heatingInstance;
    }
    return totalHeatSum;
  }
  //koinoxrista se lefta
  //koinoxrista
  totalSumExpenses(residents: any[]){
    let totalExpensesSum = 0;
    for(let i= 0; i<this.residents.length; i++){
      if (!residents[i]) continue;
      totalExpensesSum += this.residents[i]?.common;
    }
    return totalExpensesSum;
  }
  //asanser
  totalElevExpenses(residents: any[]){
    let totalElevatorSum = 0;
    for(let i= 0; i<this.residents.length; i++){
      if (!residents[i]) continue;
      totalElevatorSum += this.residents[i]?.elevatorExpense;
    }
    return totalElevatorSum;
  }
  //thermansi
  totalHeatExpenses(residents: any[]){
    let totalHeatSum = 0;
    for(let i= 0; i<this.residents.length; i++){
      if (!residents[i]) continue;
      totalHeatSum += this.residents[i]?.heatingExpense;
    }
    return totalHeatSum;
  }
  //atomiki
  totalAutonomyExpenses(residents: any[]){
    let totalAutonomySum = 0;
       for(let i= 0; i<this.residents.length; i++){
       if (!residents[i]) continue;
        totalAutonomySum += this.residents[i]?.individualExpense;
    }
    return totalAutonomySum;
  }
  //Boiler
  totalBoilerExpenses(residents: any[]){
    let totalBoilerSum = 0;
       for(let i= 0; i<this.residents.length; i++){
       if (!residents[i]) continue;
        totalBoilerSum += this.residents[i]?.boilerExpense;
    }
    return totalBoilerSum;
  }
  //isa meri
  totalEqualExpenses(residents: any[]){
    let totalEqualSum = 0;
      for(let i= 0; i<this.residents.length; i++){
        if (!residents[i]) continue;
        totalEqualSum += this.residents[i]?.equalParts;
      }
      return totalEqualSum;
  }
  //Idioktites
  totalOwnersExpenses(residents: any[]){
    let totalOwnersSum = 0;
      for(let i= 0; i<this.residents.length; i++){
        if (!residents[i]) continue;
        totalOwnersSum += this.residents[i]?.owner;
      }
      return totalOwnersSum;
  } 
    //Special
    totalScecialExpenses(residents: any[]){
      let totalSpecialSum = 0;
        for(let i= 0; i<this.residents.length; i++){
          if (!residents[i]) continue;
          totalSpecialSum += this.residents[i]?.special;
        }
        return totalSpecialSum;
    } 
  //Full Sum Per Customer
  fullSumPerCustomer(): number{
    let fullSum = 0;
    for(let i = 0; i<this.residents.length; i++){
      fullSum = this.totalSumExpenses(this.residents[i])+
        this.totalElevExpenses([i])+
        this.totalHeatExpenses([i])+
        this.totalAutonomyExpenses([i])+
        this.totalBoilerExpenses([i])+
        this.totalEqualExpenses([i]);
    }
    return fullSum;
  }
  //Rest of Functions
  payNow() {
    alert('Redirecting to payment page...');
  }

  ngOnInit(): void {
    this.totalsPerResident(this.residents); 
  }
}
