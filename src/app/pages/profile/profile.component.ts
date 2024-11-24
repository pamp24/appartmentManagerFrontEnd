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

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
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
export class ProfileComponent {
  profile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890'
  };
  step = 0;
  date = null;
  
  apartment = {
    number: 'Ι1',
    size: '42',
    floor: '4'
  }

  house = {
    name: 'Sunny Villa',
    location: 'Miami, FL',
    price: 500000,
    owner: 'John Doe',
    description: 'A beautiful villa with modern amenities and a stunning view of the ocean.',
    images: [
      'assets/house1.jpg',
      'assets/house2.jpg',
      'assets/house3.jpg'
    ]
  };

  notifications = {
    email: true,
    sms: false
  };

  saveSettings() {
    alert('Settings saved successfully!');
  }
}

