import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCardModule,
    NzListModule,
    NzPageHeaderModule,
    NzGridModule,
    
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent extends AnalyticsComponent{
  // General overview data
  totalPaid = 129.56;
  nextDueDate = new Date(2024, 6, 15);
  buildingForm:any;
  showForm = false;


  constructor(private fb: FormBuilder) {
    super();
    this.buildingForm = this.fb.group({
      city: ['', Validators.required],
      state: ['', Validators.required],
      tk: ['', Validators.required],
      street: ['', Validators.required],
      streetNumber: ['', Validators.required],
      numApartments: ['', [Validators.required, Validators.min(1)]],
      numParkings: ['', [Validators.required, Validators.min(0)]],
      squareMeters: ['', [Validators.required, Validators.min(1)]],
      heating: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.buildingForm.valid) {
      console.log('Building Data:', this.buildingForm.value);
      // You can send this data to the backend
    } else {
      this.buildingForm.markAllAsTouched();
    }
  }
  //Announcements
  announcements = [
    { date: '15/07/2024', message: 'Μηνιαία Συνάντηση 17:00-18:00.' },
    { date: '10/07/2024', message: 'Καθαρισμός κοινόχρηστων χώρων.' },
    { date: 'Πρόσθετα',message:'ΕΠΙΒΑΡΥΝΣΗ ΑΠΟ ΚΛΕΙΣΤΑ ΔΙΑΜΕΡΙΣΜΑΤΑ K 100 % A 100 % Θ 50 %'},
  ];
  options = ['', 'Ατομική/Ώρες', 'Boiler', 'Κεντρική', 'Καθόλου'];
  selectedHeatingOptions: string[] = [];
}


