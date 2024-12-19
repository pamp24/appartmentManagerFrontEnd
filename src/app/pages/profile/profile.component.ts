import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { AnalyticsComponent } from '../analytics/analytics.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzAvatarModule,
    ReactiveFormsModule, 
    NzButtonModule, 
    NzFormModule, 
    NzInputModule,
    NzCardModule,
    NzAvatarModule,
    NzListModule,
    NzDescriptionsModule,
    NzCarouselModule,
    NzDividerModule,
    NzIconModule,
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent extends AnalyticsComponent {
  
    buildingInfo = {
      name: 'Κτίριο Αλεξάνδρου',
      address: 'Οδός Σταδίου 23, Αθήνα',
      totalApartments: 12,
    };
  
  
    submitSupportRequest() {
      // Form submission logic (optional)
    }
}

