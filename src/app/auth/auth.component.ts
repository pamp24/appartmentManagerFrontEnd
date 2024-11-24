import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    NzIconModule, 
    NzLayoutModule, 
    NzMenuModule, 
    NzFormModule, 
    NzInputModule, 
    NzButtonModule,
    NzCheckboxModule,
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less'],
})

export class AuthComponent {
  checked = true;
  isLogInMode = true;
  
  constructor(private fb: NonNullableFormBuilder) {}

  onSwitchMode(){
      this.isLogInMode = !this.isLogInMode;
    }

  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  

  
}

