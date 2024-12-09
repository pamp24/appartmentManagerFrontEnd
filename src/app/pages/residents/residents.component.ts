import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AnalyticsComponent } from '../analytics/analytics.component';

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
export class ResidentsComponent extends AnalyticsComponent{
  
}
