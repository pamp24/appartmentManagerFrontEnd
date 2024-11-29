import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AnalyticsComponent } from '../analitics/analytics.component';

@Component({
  selector: 'app-residents',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
  ],
  templateUrl: './residents.component.html',
  styleUrl: './residents.component.less'
})
export class ResidentsComponent{
  
  residents = [
    { name: 'Alice Johnson', apartment: '101', contact: 'alice.j@example.com' },
    { name: 'Bob Smith', apartment: '102', contact: 'bob.s@example.com' },
    { name: 'Charlie Brown', apartment: '103', contact: 'charlie.b@example.com' },
    { name: 'Diana Prince', apartment: '104', contact: 'diana.p@example.com' },
    { name: 'Eve Torres', apartment: '105', contact: 'eve.t@example.com' }
  ];
}
