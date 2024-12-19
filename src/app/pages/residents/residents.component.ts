import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'app-residents',
  standalone: true,
  imports: [
    CommonModule,
    NzSegmentedModule
  ],
  templateUrl: './residents.component.html',
  styleUrl: './residents.component.less'
})
export class ResidentsComponent extends AnalyticsComponent{

}
